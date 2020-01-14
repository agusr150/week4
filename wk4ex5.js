function ubahHuruf(kata) {
  // you can only write your code here!
  const abjad = 'abcdefghijklmnopqrstuvwxyz'
  let i = 0
  let j = 0
  let huruf = []
  let newkata = []
  while (i<kata.length){
    while (j<abjad.length){
        if (kata[i] === abjad[j]){
            huruf[i] = abjad[j+1]
            break
        }
        else{
            j++
        }
        
    }
    j = 0
    //print
    if(i===0){
        newkata = huruf[0]
    }
    else {
        newkata = newkata+huruf[i]
    }
    i++
  }
  return newkata
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu