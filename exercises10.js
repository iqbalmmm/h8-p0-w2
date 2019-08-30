function bandingkanAngka(num1, num2){
    if(num1 < num2){
        return true;
    }
    else if(num1 == num2){
        return -1;
    }
    else{
        return false;
    }
}
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false


var height = 5;
for (var i = height; i >= 1; i--) {
    var angka = "";
    for (var j = 1; j <= i; j++) {
        angka += j;
    }
    console.log(angka);
}