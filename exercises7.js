var rows1 = 5;
for( var i = 0; i < rows2; i++) {
    console.log("*")
}

var rows2 = 5;
for( var i = 0; i < rows2; i++){
    var star = "";
    for(var j = 0; j < rows2; j++){
        star += "*";
    }
    console.log(star)
}

var rows3 = 5;
for (var i = 1; i < rows3; i++) {
    var star = "";
    for(var j = 1; j <= i; j++) {
        star += "*"
    }
    console.log(star)
}


