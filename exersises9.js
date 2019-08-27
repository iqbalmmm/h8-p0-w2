function shoutout() {
    return "Halo Function!";
}
console.log(shoutout());

function calculateMultiply (num1, num2) {
    return num1 * num2;
}
var num1 = 5;
var num2 = 6;
var hasilperkalian = calculateMultiply(num1, num2);
console.log(hasilperkalian);


function processSentence(name, age, address, hooby) {
    return "Nama saya " + name + "umur saya " + age + " tahun alamat saya di " + address + "dan saya punya hobby yaitu " + hobby + "!" 
}

var name = "agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = football;
var fullsentence = processSentence(name , age, address, hobby);
console.log(fullsentence);