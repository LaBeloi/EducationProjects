(() => {
    function createList(array, listToAppentThis) {
        for (let i of array) {
            const item = document.createElement('li');
            const link = document.createElement('a')
            const itemHeader = document.createElement('h2');
            const timeLastUpdate = document.createElement('div');
            item.classList.add('item');
            link.href = `page.html?page=${i.id}`;
            itemHeader.textContent = i.title;
            link.append(itemHeader)
            item.append(link);
            listToAppentThis.append(item);
        }
    };
    async function genMainList() {
        const response = await fetch(`https://gorest.co.in/public-api/posts`);
        const data = await response.json();
        console.log(data);
        const container = document.querySelector('.container');
        const header = document.createElement('h1');
        const list = document.createElement('ul');
        const divchick = document.createElement('div');
        const input = document.createElement('input');
        const but = document.createElement('button');
        divchick.id = 'number'
        but.textContent = 'Полетели!';
        input.classList.add('input');
        input.placeholder = 'Укажите страницу для перехода';
        header.textContent = `Лучшие статьи (${data.meta.pagination.pages} страниц)`;
        divchick.textContent = `Страница №${data.meta.pagination.page}`;
        createList(data.data, list);
        container.append(header, divchick, input, but, list);
        but.addEventListener('click', async () => {
            if (input.value > 0 && input.value < (data.meta.pagination.pages + 1) && /\d/.test(input.value)) {
                let da = document.querySelectorAll('li');
                for (let i of da) {
                    i.remove();
                };
                const response = await fetch(`https://gorest.co.in/public-api/posts?page=${input.value}`);
                const base = await response.json();
                document.getElementById('number').textContent = `Страница №${base.meta.pagination.page}`;
                input.value = '';
                createList(base.data, list);
            } else if (input.value === '') {
                alert ('Укажите номер страницы, пожалуйста')
            } else {
                alert(`Страниц только ${data.meta.pagination.pages}!`);
                input.value = '';
            }
        });
    }
    async function genPage(id) {
        const response = await fetch(`https://gorest.co.in/public-api/posts/${id}`);
        const data = await response.json();
        const comments = await fetch(`https://gorest.co.in/public-api/comments?post_id=${id}`)
        const dataCom = await comments.json();
        const link = document.createElement('a');
        const container = document.querySelector('.container');
        const header = document.createElement('h1');
        const text = document.createElement('p');
        header.textContent = data.data.title;
        link.textContent = 'К статьям'
        link.href = 'index.html'
        text.textContent = data.data.body;
        const headerOfCom = document.createElement('h2');
        headerOfCom.textContent = 'Комментарии:';
        const listCom = document.createElement('ul');
        for (let i of dataCom.data) {
            const item = document.createElement('li');
            const header = document.createElement('h3');
            header.textContent = i.name;
            const text = document.createElement('div');
            text.textContent = i.body;
            item.append(header, text);
            listCom.append(item);
        }
        container.append(link, header, text, headerOfCom, listCom);
    }
    window.genMainList = genMainList;
    window.genPage = genPage;
})();
