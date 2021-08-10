(() => {
    function createStudent(array) {
        const tab = document.querySelector('.table');
        for (let i of array) {
            let row = document.createElement('tr');
            row.classList.add('table__row')
            for (let j in i) {
                let col = document.createElement('td');
                col.classList.add('column__text');
                if (j === 'bornDate') {
                    col.textContent = `${i[j]} (${calcYear(i[j])} лет)`;
                    row.append(col);
                } else if (j === 'startDate') {
                    col.textContent = `${i[j]} (${calcCourse(i[j])})`;
                    row.append(col);
                } else {
                    col.textContent = i[j];
                    row.append(col);
                }
            };
            const delet = document.createElement('td');
            const deletBut = document.createElement('button');
            deletBut.textContent = 'Удалить студента';
            deletBut.classList.add('delete-btn');
            delet.append(deletBut);
            row.append(delet);
            delet.classList.add('column__text');
            tab.append(row);
        }
    };
    function genObject(name, faculty, bornDate, startDate) {
        const obj = {
            name: name,
            faculty: faculty,
            bornDate: bornDate,
            startDate: startDate
        };
        const arrayOfStudents = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
        arrayOfStudents.push(obj);
        localStorage.setItem('students', JSON.stringify(arrayOfStudents));
        return obj;
    };
    function genTable(dataArray) {
        const container = document.querySelector('.container')
        const table = document.createElement('table');
        const header = document.createElement('caption');
        const row = document.createElement('tr');
        const headerList = {
            name: 'ФИО студента',
            faculty: 'Факультет',
            bornDate: 'Дата рождения и возраст',
            startDate: 'Годы обучения и номер курса',
            delete: 'Возможность удаления'
        };
        table.classList.add('table');
        header.classList.add('table__header');
        header.textContent = 'Список студентов';
        row.classList.add('table__row');
        for (let i in headerList) {
            const headerColumn = document.createElement('th');
            if (headerList[i] === 'Возможность удаления') {
                headerColumn.classList.add('delete__header');
            } else {
                headerColumn.classList.add('column__header');
            }
            headerColumn.textContent = headerList[i];
            row.append(headerColumn);
        };
        const inputRow = document.createElement('tr');
        inputRow.classList.add('table__row');
        for (let i = 0; i < 5; i++) {
            if (i != 4) {
                const tableInput = document.createElement('td');
                const input = document.createElement('input');
                const startFiltering = document.createElement('button');
                const endFiltering = document.createElement('button');
                input.classList.add('inpt');
                if (i === 0) {
                    input.id = 'nameInput';
                };
                if (i === 1) {
                    input.id = 'facultyInput';
                };
                if (i === 2) {
                    input.id = 'bornDateInput';
                };
                if (i === 3) {
                    input.id = 'startDateInput';
                };
                tableInput.classList.add('column__text');
                tableInput.textContent = 'Фильтрация:'
                startFiltering.classList.add('filter__button');
                startFiltering.textContent = 'Поиск';
                endFiltering.classList.add('filter__button');
                endFiltering.textContent = 'Очистит фильтрацию';
                tableInput.append(input, startFiltering, endFiltering);
                inputRow.append(tableInput);
            } else {
                const tableInput = document.createElement('td');
                tableInput.classList.add('column__text');
                inputRow.append(tableInput);
            }
        }
        table.append(header);
        table.append(row);
        table.append(inputRow);
        container.append(table);
        createStudent(dataArray);
    };
    function calcYear(dateValue) {
        const now = new Date().toLocaleString();
        const newNow = now.substr(0, 10).split('.');
        const newBornDate = dateValue.split('.');
        const year = newNow[2] - newBornDate[2];
        if (newNow[1] < newBornDate[1]) {
            let fin = year - 1;
            return fin;
        } else if (newNow[1] === newBornDate[1]) {
            if (newNow[0] < newBornDate[0]) {
                let fin = year - 1;
                return fin;
            } else if (newNow[0] === newBornDate[0]) {
                return year;
            } else if (newNow[0] > newBornDate[0]) {
                return year;
            }
        } else if (newNow[1] > newBornDate[1]) {
            return year;
        }
    };
    function calcCourse(yearValue) {
        const now = new Date().toLocaleString().substring(6, 10);
        const final = now - yearValue;
        if (final > 4) {
            return 'Закончил';
        } else {
            return `${final} курс`;
        }
    };
    function createAllert (input, allertText) {
        const allert = document.createElement('div');
        allert.textContent = allertText;
        allert.classList.add('alert');
        input.parentElement.append(allert);
    };
    function checkName(input) {
        if (/\d/.test(input.value)) {
            if (input.parentElement.children.length === 2) {
                return
            } else {
                createAllert(input, 'В поле должны отсутствовать цифри');
            }
        } else {
            document.querySelector('.alert').remove()
        }
    };
    function checkBornDate(input, array) {
        if  (/\d{2}[.]\d{2}[.]\d{4}/.test(input.value) && input.value.length === 10) {
            return
        } else {
            createAllert(input, 'В поле должны находится цифры в формате ХХ.ХХ.ХХХХ')
            array.push('1');
        }
    };
    function clearBornAllert (input) {
        if  (/\d{2}[.]\d{2}[.]\d{4}/.test(input.value) && input.value.length === 10) {
            document.querySelector('.alert').remove()
        } else {
            if (input.parentElement.children.length === 2) {
                return
            } else {
                createAllert(input, 'В поле должны находится цифры в формате ХХ.ХХ.ХХХХ');
            }
        }
    };
    function checkStartDate(input, array) {
        if  (/\d{4}/.test(input.value) && input.value.length === 4) {
            return
        } else {
            createAllert(input, 'В поле должны находится цифры в формате ХХХХ')
            array.push('1');
        }
    };
    function clearStartDate(input) {
        if  (/\d{4}/.test(input.value) && input.value.length === 4) {
            document.querySelector('.alert').remove()
        } else {
            if (input.parentElement.children.length === 2) {
                return
            } else {
                createAllert(input, 'В поле должны находится цифры в формате ХХХХ');
            }
        }
    };
    document.addEventListener('DOMContentLoaded', () => {
        let arrayOfStudents = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
        const button = document.querySelector('.add-Student');
        if (localStorage.getItem('filter')) {
            genTable(JSON.parse(localStorage.getItem('filter')));
        } else {
            genTable(arrayOfStudents);
        }
        const delet = document.querySelectorAll('.delete-btn');
        const headers = document.querySelectorAll('.column__header');
        const inputs = document.querySelectorAll('.inpt');
        let timeOut;
        for (let i of inputs) {
            i.parentElement.children[1].addEventListener('click', () => {
                if (i.id === 'nameInput') {
                    let filteredArray = arrayOfStudents.filter( a => a.name.includes(i.value));
                    localStorage.setItem('filter', JSON.stringify(filteredArray));
                    window.location.reload();
                } else if (i.id === 'facultyInput') {
                    let filteredArray = arrayOfStudents.filter( a => a.faculty.includes(i.value));
                    localStorage.setItem('filter', JSON.stringify(filteredArray));
                    window.location.reload();
                } else if (i.id === 'bornDateInput') {
                    let filteredArray = arrayOfStudents.filter( a => a.bornDate.includes(i.value));
                    localStorage.setItem('filter', JSON.stringify(filteredArray));
                    window.location.reload();
                } else if (i.id === 'startDateInput') {
                    let filteredArray = arrayOfStudents.filter( a => a.startDate.includes(i.value));
                    localStorage.setItem('filter', JSON.stringify(filteredArray));
                    window.location.reload();
                }
            })
            i.parentElement.children[2].addEventListener('click', () => {
                const zero = [];
                localStorage.setItem('filter', JSON.stringify(zero));
                localStorage.removeItem('filter');
                window.location.reload();       
            })
        }
        for (let i of headers) {
            i.addEventListener('click', () => {
                let check = localStorage.getItem('check') ? JSON.parse(localStorage.getItem('check')) : [];
                if (i.textContent === 'ФИО студента') {
                    if (check.length === 0) {
                        arrayOfStudents.sort(function(a, b){
                            let nameA=a.name.toLowerCase().substring(0, 1), nameB=b.name.toLowerCase().substring(0, 1);
                            if (nameA < nameB){
                                return -1;
                            } 
                            if (nameA > nameB) {
                                return 1;
                            } 
                            return 0;
                        });
                        localStorage.setItem('students', JSON.stringify(arrayOfStudents));
                        check.push('1');
                        localStorage.setItem('check', JSON.stringify(check));
                        window.location.reload();
                    } else {
                        arrayOfStudents.sort(function(a, b){
                            let nameA=a.name.toLowerCase().substring(0, 1), nameB=b.name.toLowerCase().substring(0, 1);
                            if (nameA < nameB){
                                return 1;
                            } 
                            if (nameA > nameB) {
                                return -1;
                            } 
                            return 0;
                        });
                        localStorage.setItem('students', JSON.stringify(arrayOfStudents));
                        check.shift();
                        localStorage.setItem('check', JSON.stringify(check));
                        window.location.reload();
                    };
                };
                if (i.textContent === 'Факультет') {
                    if (check.length === 0) {
                        arrayOfStudents.sort(function(a, b){
                            let nameA=a.faculty.toLowerCase().substring(0, 1), nameB=b.faculty.toLowerCase().substring(0, 1);
                            if (nameA < nameB){
                                return -1;
                            } 
                            if (nameA > nameB) {
                                return 1;
                            } 
                            return 0;
                        });
                        localStorage.setItem('students', JSON.stringify(arrayOfStudents));
                        check.push('1');
                        localStorage.setItem('check', JSON.stringify(check));
                        window.location.reload();
                    } else {
                        arrayOfStudents.sort(function(a, b){
                            let nameA=a.faculty.toLowerCase().substring(0, 1), nameB=b.faculty.toLowerCase().substring(0, 1);
                            if (nameA < nameB){
                                return 1;
                            } 
                            if (nameA > nameB) {
                                return -1;
                            } 
                            return 0;
                        });
                        localStorage.setItem('students', JSON.stringify(arrayOfStudents));
                        check.shift();
                        localStorage.setItem('check', JSON.stringify(check));
                        window.location.reload();
                    };
                };
                if (i.textContent === 'Дата рождения и возраст') {
                    if (check.length === 0) {
                        arrayOfStudents.sort(function(a, b){
                            let nameA=a.bornDate.substring(0, 10), nameB=b.bornDate.substring(0, 10);
                            if (nameA.substring(6, 10) < nameB.substring(6, 10)){
                                return -1;
                            } 
                            if (nameA.substring(6, 10) > nameB.substring(6, 10)) {
                                return 1;
                            } 
                            if (nameA.substring(6, 10) === nameB.substring(6, 10)) {
                                if (nameA.substring(3, 6) < nameB.substring(3, 6)){
                                    return -1;
                                } 
                                if (nameA.substring(3, 6) > nameB.substring(3, 6)) {
                                    return 1;
                                }
                                if (nameA.substring(3, 6) === nameB.substring(3, 6)) {
                                    if (nameA.substring(0, 2) < nameB.substring(0, 2)){
                                        return -1;
                                    }
                                    if (nameA.substring(0, 2) > nameB.substring(0, 2)) {
                                        return 1;
                                    }
                                    return 0
                                }
                            }
                        });
                        localStorage.setItem('students', JSON.stringify(arrayOfStudents));
                        check.push('1');
                        localStorage.setItem('check', JSON.stringify(check));
                        window.location.reload();
                    } else {
                        arrayOfStudents.sort(function(a, b){
                            let nameA=a.bornDate.substring(0, 10), nameB=b.bornDate.substring(0, 10);
                            if (nameA.substring(6, 10) < nameB.substring(6, 10)){
                                return 1;
                            } 
                            if (nameA.substring(6, 10) > nameB.substring(6, 10)) {
                                return -1;
                            } 
                            if (nameA.substring(6, 10) === nameB.substring(6, 10)) {
                                if (nameA.substring(3, 6) < nameB.substring(3, 6)){
                                    return 1;
                                } 
                                if (nameA.substring(3, 6) > nameB.substring(3, 6)) {
                                    return -1;
                                }
                                if (nameA.substring(3, 6) === nameB.substring(3, 6)) {
                                    if (nameA.substring(0, 2) < nameB.substring(0, 2)){
                                        return 1;
                                    }
                                    if (nameA.substring(0, 2) > nameB.substring(0, 2)) {
                                        return -1;
                                    }
                                    return 0
                                }
                            }
                        });
                        localStorage.setItem('students', JSON.stringify(arrayOfStudents));
                        check.shift();
                        localStorage.setItem('check', JSON.stringify(check));
                        window.location.reload();
                    };
                };
                if (i.textContent === 'Годы обучения и номер курса') {
                    if (check.length === 0) {
                        arrayOfStudents.sort(function(a, b){
                            let first = a.startDate.substring(0, 4), second = nameB=b.startDate.substring(0, 4);
                            return first - second;
                        });
                        localStorage.setItem('students', JSON.stringify(arrayOfStudents));
                        check.push('1');
                        localStorage.setItem('check', JSON.stringify(check));
                        window.location.reload();
                    } else if (check.length === 1) {
                        arrayOfStudents.sort(function(a, b){
                            let first = a.startDate.substring(0, 4), second = nameB=b.startDate.substring(0, 4);
                            return second - first;
                        });
                        localStorage.setItem('students', JSON.stringify(arrayOfStudents));
                        check.shift();
                        localStorage.setItem('check', JSON.stringify(check));
                        window.location.reload();
                    };
                };
            });
        };
        button.addEventListener('click', () => {
            document.querySelector('.table').classList.add('hidden');
            document.querySelector('.buttons').classList.add('hidden');
            document.querySelector('.form').classList.remove('hidden');
            const formButton = document.querySelector('.form__btn');
            const backButton = document.querySelector('.form__btn-back');
            const nameInput = document.getElementById('name');
            const facultyInput = document.getElementById('faculty');
            const bornDate = document.getElementById('bornDate');
            const startDate = document.getElementById('startDate');
            let timeOutId;
            nameInput.addEventListener('focus', () => {
                nameInput.setAttribute('placeholder', 'Фамилия Имя Отчество')
                if (nameInput.parentElement.children.length === 2) {
                    nameInput.addEventListener('input', () => {
                        clearTimeout(timeOutId);
                        timeOutId = setTimeout(checkName, 500, nameInput);
                    })
                }
                nameInput.addEventListener('blur', () => {
                    nameInput.setAttribute('placeholder', 'Введите ФИО студента...')
                });
            });
            facultyInput.addEventListener('focus', () => {
                facultyInput.setAttribute('placeholder', 'Факультет')
                if (facultyInput.parentElement.children.length === 2) {
                    facultyInput.addEventListener('input', () => {
                        clearTimeout(timeOutId);
                        timeOutId = setTimeout(checkName, 500, facultyInput);
                    })
                }
                facultyInput.addEventListener('blur', () => {
                    facultyInput.setAttribute('placeholder', 'Факультет студента...')
                });
            });
            bornDate.addEventListener('focus', () => {
                bornDate.setAttribute('placeholder', 'XX.XX.XXXX')
                if (bornDate.parentElement.children.length === 2) {
                    bornDate.addEventListener('input', () => {
                        clearTimeout(timeOutId);
                        timeOutId = setTimeout(clearBornAllert, 500, bornDate);
                    })
                }
                bornDate.addEventListener('blur', () => {
                    bornDate.setAttribute('placeholder', 'Дата рождения...')
                });
            });
            startDate.addEventListener('focus', () => {
                startDate.setAttribute('placeholder', 'XXXX')
                if (startDate.parentElement.children.length === 2) {
                    startDate.addEventListener('input', () => {
                        clearTimeout(timeOutId);
                        timeOutId = setTimeout(clearStartDate, 500, startDate);
                    })
                }
                startDate.addEventListener('blur', () => {
                    startDate.setAttribute('placeholder', 'Год начала учобы...')
                })
            })
            backButton.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector('.table').classList.remove('hidden');
                document.querySelector('.buttons').classList.remove('hidden');
                document.querySelector('.form').classList.add('hidden');
                document.getElementById('name').value = '';
                document.getElementById('faculty').value = '';
                document.getElementById('bornDate').value = '';
                document.getElementById('startDate').value = '';
            });
            formButton.addEventListener('click', (e) => {
                if (!nameInput.value || !facultyInput.value || !bornDate.value || !startDate.value) {
                    return;
                };
                let arr = [];
                if (/\d/.test(nameInput.value)) {
                    createAllert(nameInput, 'В поле должны отсутствовать цифри');
                    arr.push('1');
                };
                if (/\d/.test(facultyInput.value)) {
                    createAllert(facultyInput, 'В поле должны отсутствовать цифри');
                    arr.push('1');
                }
                checkBornDate(bornDate, arr);
                checkStartDate(startDate, arr);
                if (arr.length > 0) {
                    e.preventDefault();
                    return
                } else {
                    genObject(nameInput.value, facultyInput.value, bornDate.value, startDate.value);
                };
            })
        });
        for (let i of delet) {
            i.addEventListener('click', () => {
                let data = JSON.parse(localStorage.getItem('students'));
                let obj = {
                    name: i.parentElement.parentElement.childNodes[0].textContent,
                    faculty: i.parentElement.parentElement.childNodes[1].textContent,
                    bornDate: i.parentElement.parentElement.childNodes[2].textContent,
                    startDate: i.parentElement.parentElement.childNodes[3].textContent,
                }
                let index = data.findIndex(array => array.name === obj.name && array.faculty === obj.faculty && `${array.bornDate} (${calcYear(array.bornDate)} лет)` === obj.bornDate && `${array.startDate} (${calcCourse(array.startDate)})` === obj.startDate);
                data.splice(index, 1);
                localStorage.setItem('students', JSON.stringify(data));
                i.parentElement.parentElement.remove()
                window.location.reload();
            })
        };
    });
})();