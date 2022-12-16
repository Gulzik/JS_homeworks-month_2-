//Домашнее Задание:
//Дан список тегов, например ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div’].
//С помощью цикла посчитать каких тегов сколько штук.
//В консоли результат должен вывестись как объект(на уроке объясняла, пересмотрите стрим:)).
//Далее отсортировать полученный объект от большего к меньшему,
//то есть на первом месте должен быть тег, который чаще всего встречается в массиве)

var tags = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div'];
var obj = {}
var array=[]
for(var tag of tags){
    if(obj[tag]){
        obj[tag]++
    }else{
        obj[tag]=1
    }
}
console.log(obj);
let sort=Object.keys(obj).sort((a,b)=>obj[b]-obj[a])
// for(var key in obj){
//     array.push(key)
// }
// let sort=array.sort((a,b)=>obj[b]-obj[a])
console.log(sort)
let s={...sort}
console.log(s)