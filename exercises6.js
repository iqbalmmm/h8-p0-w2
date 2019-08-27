
var loopingPertama = 0;
while(loopingPertama < 20) {
    loopingPertama += 2;
    console.log(loopingPertama + " - I Love coding ");
}

var loopingKedua = 20;
while(loopingKedua > 0) {
    loopingKedua -= 2;
    console.log((loopingKedua + 2) + " - I will become fullstack developer");
}



for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log("GENAP");
    } else {
        console.log("GANJIL");
    }
}


for (var i = 1; i <= 100; i += 2) {
    if (i % 3 == 0) {
        console.log(i + " KELIPATAN 3");
    }
}


for (var i = 1; i <= 100; i += 5) {
    if (i % 6 == 0) {
        console.log(i + " KELIPATAN 6");
    }
}


for (var i = 1; i <= 100; i += 9) {
    if (i % 10 == 0) {
        console.log(i + " KELIPATAN 10");
    }
}
