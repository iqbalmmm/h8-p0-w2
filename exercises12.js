function konversiMenit(menit) {
    var convertJam = Math.floor(menit / 60);
    var convertMenit = Math.floor(menit % 60);
    if(convertMenit < 10){
        return(`${convertJam}:0${convertMenit}`);
    }
    else{
        return(`${convertJam}:${convertMenit}`);
    }
}
  
//   TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00