function angkaPrima(angka) {
    // you can only write your code here!
    var i=0
    var faktor = 0
    while (i <= angka){
        i++
        if (Number.isInteger(angka/i) === true){
            faktor ++
        }
        else {}
    }
    //console.log(faktor)
    if (faktor === 2){
        return true 
    }
    else{
        return false
    }
}

  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false