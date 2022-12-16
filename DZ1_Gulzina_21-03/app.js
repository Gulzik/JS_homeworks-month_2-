var fullName = prompt('введите свое ФИО');
var password = Number(prompt('введите пароль'));
if (password === 123456) {
    alert( 'Привет' + ' ' + fullName + ' ' + 'доступ разрешен');
} else{
    alert('ошибка')
}

var month = prompt('введите месяц');
var date = prompt('введите число');
if (month === 'март' && date >= 21 && date<= 31){
    console.log('Ваш знак зодиака-Овен');
} else if (month === 'апрель' && date <= 20 && date>= 0 || 1){
    console.log('Ваш знак зодиака-Овен');
}else if (month === 'апрель' && date >= 21 && date<= 30 || month === 'май' && date>= 0 || 1 && date <=21){
    console.log('Ваш знак зодиака-Телец');
}else if (month === 'май' && date >= 22 && date<= 31 || month === 'июнь' && date>= 0 || 1 && date <=21){
    console.log('Ваш знак зодиака-Близнецы');
}else if (month === 'июнь' && date >= 22 && date<= 30|| month === 'июль' && date>= 0 || 1 && date <=22){
    console.log('Ваш знак зодиака-Рак');
}else if (month === 'июль' && date >= 23 && date<= 31  || month === 'август' && date>= 0 || 1 && date <=23){
    console.log('Ваш знак зодиака-Лев');
} else if (month === 'август' && date >= 24 && date<= 31 || month === 'сентябрь' && date>= 0 || 1 && date <=22){
    console.log('Ваш знак зодиака-Дева');
}else if (month === 'сентябрь' && date >= 23 && date<= 30 || month === 'октябрь' && date>= 0 || 1 && date <=23){
    console.log('Ваш знак зодиака-Весы');
}else if (month === 'октябрь' && date >= 24 && date<= 31 || month === 'ноябрь' && date>= 0 || 1 && date <=22){
    console.log('Ваш знак зодиака-Скорпион');
}else if (month === 'ноябрь' && date >= 23 && date<= 30 || month === 'декабрь' && date>= 0 || 1 && date <=21){
    console.log('Ваш знак зодиака-Стрелец');
}else if (month === 'декабрь' && date >= 22 && date<= 31 || month === 'январь' && date>= 0 || 1 && date <=20){
    console.log('Ваш знак зодиака-Козерог');
}else if (month === 'январь' && date >= 21 && date<= 31 || month === 'февраль'  && date>= 0 || 1 && date <=18){
    console.log('Ваш знак зодиака-Водолей');
} else if (month === 'февраль' && date >= 19 && date<= 28 || month === 'март' && date>= 0 || 1 && date <=20){
    console.log('Ваш знак зодиака-Рыбы');
} else {
    console.log('ошибка')
}






