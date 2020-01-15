function checkAB(num) {
  // you can only write your code here!
  str = num.toLowerCase()
  for (var i=0; i<(num.length-4); i++){
    console.log(str[i]+'.....'+str[i+4])
    if(str[i]==='a' && str[i+4]==='b'){
      return true
    }
    if(str[i]==='b' && str[i+4]==='a'){
      return true
    }
  }
  return false
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false