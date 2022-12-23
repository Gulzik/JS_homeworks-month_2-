//Домашнее задание
// -написать счетчик используя функции и dom-элементы(на уроке был разбор, пересмотрите стрим😉)
const input = document.querySelector(".input")
const plus = document.querySelector(".decrement")
const minus = document.querySelector(".increment")
const restart = document.querySelector(".restart")

plus.onclick = () => {
    input.value++
}
minus.onclick = () => {
    input.value--
}
restart.onclick = () => {
    input.value = 0
}