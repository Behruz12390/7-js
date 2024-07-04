const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
    text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

console.log(fruits)
alert('boshlanishta arayning uzunligi 4')
let con = confirm('Sizning arayingizni malumotlarni olib tashamogchimiz')
if (con == true) {
    alert('arayning uzunligi 3')
    const as = ["Banana", "Orange", "Apple"];
    let fLen = fruits.length;

    let text = "<ul>";
    for (let i = 0; i < fLen; i++) {
        text += "<li>" + fruits[i] + "</li>";
    }
    text += "</ul>";
    console.log(as)
}else{
    alert('arayning uzunligi 4')
}