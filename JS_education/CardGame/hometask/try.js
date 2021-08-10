(() => {
  const container = document.querySelector('.container');
  const form = document.querySelector('.form');
  const list = document.createElement('ul');
  const input = document.querySelector('#que');
  const button = document.createElement('button')
  const buttonsGroup = document.createElement('div');
  const INPUT_W8 = 600;
  const MIN = 60000;
  let cashArray = [];
  let timeout;
  let totalTimeout;
  let checkList = [];
  function checkItems(array) {
    let timeForAlert;
    function massage() {
      alert('Вы победили!')
    }
    checkList.splice(0);
    for (let i in array) {
      if (array[i].classList.contains('correct')) {
        checkList.push(array[i]);
        if (checkList.length === array.length) {
          setTimeout(massage, 300)
          buttonsGroup.classList.add('btn_div');
          button.classList.add('btn');
          button.textContent = 'Сыграть ещё раз';
          buttonsGroup.append(button);
          button.addEventListener('click', () => {
            cleaner()
          });
          container.append(buttonsGroup);
        }
      }
    }
  }
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  function cleaner() {
    document.querySelectorAll('li').forEach((ev) => {
      ev.remove();
    })
    list.remove();
    buttonsGroup.remove();
    form.classList.remove('hidden');
  };
  function addNumbers(index) {
    let hugeArray = [1, 1, 2, 2, 3, 3 , 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
    let smallArray = hugeArray.splice(Number(index))
    const finalArray = shuffleArray(hugeArray);
    const items = document.querySelectorAll('li');
    const finalItems = Array.prototype.slice.call(items);
    for (let i = 0; i < finalItems.length; i++) {
      finalItems[i].textContent = finalArray[i];
    }
    finalItems.forEach( (cards) => {
      cards.addEventListener('click', function(ev) {
        ev.currentTarget.classList.add('color');
        cashArray.push(ev.currentTarget);
        if (cashArray.length === 2) {
          if (cashArray[0].textContent === cashArray[1].textContent) {
            for (let i in cashArray) {
              cashArray[i].classList.add('correct');
            }
            cashArray.length = 0;
          } else {
            document.querySelectorAll('.color').forEach( (ev) => {
              function remove() {
                ev.classList.remove('color');
              }
              setTimeout(remove, 300);
            })
            cashArray.length = 0;
          }
        }
        checkItems(finalItems);
      })
    })
  }
  function genList(quantityOfItems) {
    clearTimeout(totalTimeout);
    list.classList.add('list');
    form.classList.add('hidden');
    for (let q = 1; q <= Number(quantityOfItems); q++) {
      const item = document.createElement('li');
      item.classList.add('card');
      list.append(item);
    }
    container.append(list);
    addNumbers(quantityOfItems)
    setTimeout(cleaner, MIN);
  };
  function genCards() {
    if (input.value % 2) {
      alert('Число должно быть цельным и парным');
    } else if (input.value <= 16 && input.value >= 2 ) {
      genList(input.value);
    } else {
      alert('Число карточек должно быть между 2 и 16, а также быть парным числом.');
    }
    input.value = '';
  };
  document.addEventListener('DOMContentLoaded', () => {
    input.addEventListener('input', () => {
      clearTimeout(timeout);
      timeout = setTimeout(genCards, INPUT_W8);
    });
  });
})();