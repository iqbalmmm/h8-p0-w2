
function xo(str) {
    var containerX = 0;
    var containerO = 0;
    for(var i = 0; i < str.length; i++){
        if(str[i] === 'x'){
            containerX++;
        }
        else if(str[i] === 'o'){
            containerO++;
        }
    }
    if(containerX === containerO){
        return true;
    }
    else{
        return false;
    }
}
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true  