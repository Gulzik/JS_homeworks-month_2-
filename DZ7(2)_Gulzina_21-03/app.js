//Домашнее Задание:
//     Напиши мини-проект калькулятор, математические действия пусть будут только +, -
//     и умножить, над стилями можете не заморачиваться, главное логика проекта.
//     Калькулятор будет складывать , отнимать или умножать только между двумя числами)

// const input1 =document.querySelector('span');
// console.log(input1)
// const input2 = document.getElementById('input2');
// console.log(input2)
// const input3 = document.getElementsByClassName('input3');
// console.log(input3)

const input1 = document.querySelector('#num_one');
const input2 = document.querySelector('#num_two');
const output = document.querySelector('span');
const button1 = document.querySelector('#button_calculator_1');
const button2 = document.querySelector('#button_calculator_2');
const button3 = document.querySelector('#button_calculator_3');
const button4 = document.querySelector('#button_calculator_4');
const button5 = document.querySelector('#restart');

button1.addEventListener('click', function (){
    let counter = Number(input1.value) + Number(input2.value)
    output.innerHTML = counter;

})
button2.addEventListener('click', function (){
    let counter2 = Number(input1.value) - Number(input2.value)
    output.innerHTML = counter2;

})

button3.addEventListener('click', function (){
    let counter3 = Number(input1.value) / Number(input2.value)
    output.innerHTML = counter3;
    if(Number(input2.value = 0)){
    }else {
        output.innerHTML = 'Деление нельзя';
    }


})
button4.addEventListener('click', function (){
    let counter4 = Number(input1.value) * Number(input2.value)
    output.innerHTML = counter4;

})
button5.addEventListener('click', function (){
    output.innerHTML = "";
    input1.value = "";
    input2.value = "";
})


