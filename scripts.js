function diag() {
    let x = prompt('Введіть два цілих числа через пробіл')
    let n1 = x.split(' ')[0]
    let n2 = x.split(' ')[1]
    let result = '';
    for (let i = n1; i <= n2; i++) {
        result += `${i} `
    }
    alert(result)
}

function devInfo(name, surname, work = 'студент') {
    let worker = { name: name, sname: surname, w: work }
    alert(`Інформація про розробника сторінки: \n Ім'я: ${worker.name} \n Прізвище: ${worker.sname} \n Посада: ${worker.w}`)
}

// Лабораторна робота №13

function changeBack() {
    let sec = prompt('Введіть кількість секунд')
    if (sec === '') {
        alert('Поле порожнє')
    } else if (sec < 0) {
        alert('Введіть додатне число')
    } else if (sec == null) {
        alert('Ви відмінили дію')
    } else {
        document.body.style.backgroundImage = "url('images/laba13.jpg')"
        setTimeout(() => document.body.style.backgroundImage = "", sec*1000)
    }
}

function relocate() {
    location.href = "https://www.google.com.ua/?hl=ua"
}

function paintBlockById(id, color = "black") {
    let block = document.getElementById(id)
    block.style.background = color
    setTimeout(() => block.style.background = "#146cf5", 1000)
}

function changePrice() {
    let rowToChange = document.querySelectorAll('.t_info > td')
    let tdCount = document.querySelectorAll('.t_info > td').length

    for (let i = 1; i < tdCount; i += 10) {
        rowToChange[i].onclick = function () {
            let newPrice = prompt('Введіть ціну для заміни')
            rowToChange[i].innerHTML = newPrice
        }
    }
}

function createBefore() {
    let newBlock = document.createElement('div')
    newBlock.innerHTML = "<br /><b>Створений блок</b><br /> "
    let textBefore = document.createTextNode('Текст для вставки у початок блоку')
    let textAfter = document.createTextNode('Текст для вставки у кінець блоку')
    newBlock.append(textAfter)
    newBlock.prepend(textBefore)
    newBlock.className = 'newBlock'
    document.querySelector(".dom").before(newBlock)
}

function remove() {
    document.querySelector('.newBlock').remove()
}

function replace() {
    let fInfoBox = document.querySelectorAll(".info_box")[0]
    let sInfoBox = document.querySelectorAll(".info_box")[1]
    fInfoBox.replaceWith(sInfoBox)
}

function showTextContent() {
    let block = document.querySelectorAll(".info_box")[0]
    alert(block.textContent)
}

// Лабораторна робота №14
function ibChangeBorder() {
    this.style.border = "3px solid blue";
}

function ibChangeBack() {
    this.style.background = "#c6c1c0";
}

function ibOut() {
    this.style.border = "3px solid grey";
    this.style.background = "white";
}

class Header {
    constructor() {
        this.h = document.querySelector('.header');
    }

    paintHeader() {
        this.h.style.background = "orange";
    }
    undo() {
        this.h.style.background = "cornflowerblue";
    }

    handleEvent(event) {
        switch (event.type) {
            case 'mousedown':
                this.paintHeader();
                break;
            case 'mouseup':
                this.undo();
                let text = 'Елемент, на якому спрацював обробник: ' + event.currentTarget +
                    '\n Координати вказівника миші: \n X: ' + event.clientX + '; Y: ' + event.clientY;
                alert(text);
                break
        }
    }
}

function headerHighlight() {
    let h = document.querySelector('.header');
    let head = new Header();
    h.addEventListener('mousedown', head);
    h.addEventListener('mouseup', head);
}

function removeEL() {
    let h = document.querySelector('.header');
    h.removeEventListener('mousedown', head);
    h.removeEventListener('mouseup', head);
}

function infoBoxHighlight() {
    let elems = document.querySelectorAll('.info_box');
    for (let ib of elems) {
        ib.addEventListener('mouseover', ibChangeBack);
        ib.addEventListener('mouseover', ibChangeBorder);
        ib.addEventListener('mouseout', ibOut);
    }
}

function infoBoxHighlightOff() {
    let elems = document.querySelectorAll('.info_box');
    for (let ib of elems) {
        ib.removeEventListener('mouseover', ibChangeBack);
        ib.removeEventListener('mouseover', ibChangeBorder);
        ib.removeEventListener('mouseout', ibOut);
    }
}

// Лабораторна робота №15
// 1. Підсвічування елементів списку
class List {
    constructor(elem) {
        this.l = elem;
    }

    handleEvent(event) {
        if (event.target.tagName !== 'LI') return;
        switch (event.type) {
            case 'mouseover':
                this.highlight(event);
                break;
            case 'mouseout':
                this.unHighlight(event);
                break;
        }
    }

    highlight(event) {
        event.target.className = "list_js";
    }

    unHighlight(event) {
        event.target.className = "";
    }
}
// 2. Меню
class Menu {
    constructor(elem) {
        this.m = elem;
        elem.onclick = this.handleEvent.bind(this);
    }

    handleEvent(event) {
        let action = event.target.dataset.action;
        if (action) {
            this[action]();
        }
    }

    highlightOn() {
        infoBoxHighlight();
    }

    highlightOff() {
        infoBoxHighlightOff();
    }

    tableEdit() {
        changePrice();
    }
}

// 3. Поведінка
function showHide(event) {
    let c = event.target.dataset.show;
    if (!c) return;
    let elem = document.querySelector(`.${c}`);
    elem.hidden = !elem.hidden;
}