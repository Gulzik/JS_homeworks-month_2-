//Домашнее Задание:
//-Написать функцию переворота строки (использовать reverse нельзя, нужно самим прописать логику).
// Например: "привет" -> "тевирп" и так далее.
//-написать функцию, которая принимает неограниченное кол-во чисел и возвращает их среднюю арифметическую

// (1)

function mainString (str){
    var newString = '';
    for (var i = str.length-1; i >= 0; i--){
        newString += str[i]
    }
    console.log(newString)
}
mainString('Greetings from Earth')


//(2)

function getNum (...numbers){
let countNum = 0
let sum = 0
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i]
        countNum = sum/numbers.length
    }
    console.log(sum)
    console.log(countNum)
}

getNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

function getNum2(...numbers){
    console.log(numbers)
    var sum = numbers.reduce((a, b) => a+=b)
    let countNum = sum/numbers.length
    console.log(countNum)
}
getNum2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
