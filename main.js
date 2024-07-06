const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits)
alert('boshlanishta arayning uzunligi 4')
let con = confirm('Sizning arayingizni malumotlarni olib tashamogchimiz')
if (con == true) {
    alert('arayning uzunligi 3')
    fruits.pop()
    console.log(fruits)
}else{
    alert('arayning uzunligi 4')
}