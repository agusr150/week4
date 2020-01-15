function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  
  faktor =[]
  for (var i=1; i<=angka; i++){
    if (Number.isInteger(angka/i)===true){
      str1 = String(i)
      digit1 = str1.length
      str2 = String(angka/i)
      digit2 = str2.length
      digit = digit1+digit2
      if (i===1){digitMin = digit}
      else{
        if(digit<digitMin){digitMin = digit}
        else {digitMin = digitMin}
      }
     // faktor.push(i)  
    }
  }
  
  return digitMin
}


// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2