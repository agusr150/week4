function fpb(angka1, angka2) {
  // you can only write your code here!
  var i = 0
  var j = 0
  faktor1 = []
  while (i<=angka1){
    i++
    if (Number.isInteger(angka1/i)===true){
        faktor1[j] = i
        j++
    }
  }
  //console.log('faktor1 = '+faktor1)

  var m = 0
  var n = 0
  faktor2 =[]
  while (m<=angka2){
      m++
      if (Number.isInteger(angka2/m)===true){
          faktor2[n] = m
          n++
      }
  }
  //console.log('faktor 2 = '+faktor2)

a = faktor1.length
b = faktor2.length
while(a>0){
    a--
    while (b>0){
        b--
        if (faktor1[a]===faktor2[b]){
            return faktor1[a]
        }
    }
    b = faktor2.length   
}
return "no fpb"
}



// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1