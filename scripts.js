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
    let worker = {
        name: name,
        sname: surname,
        w: work
    }
    alert(`Інформація про розробника сторінки: \n Ім'я: ${worker.name} \n Прізвище: ${worker.sname} \n Посада: ${worker.w}`)
}
