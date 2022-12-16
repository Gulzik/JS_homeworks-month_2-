for ( var i = 0; i<=20; i += 2){
    console.log(i);
}
// for (var i = 0; i <=20; i++) {
// if(i % 2 ===0) {
// console.log(i)
// }
// }

var number = 0
var sum = 0
do{
    number = Number(prompt('введите число'))
    if (number <=0) {
        console.log('ввели отрицательное число')
    }
    else{
        sum = sum + number
        console.log('сумма введенных чисел' + sum)
    }
}while (number >0)
