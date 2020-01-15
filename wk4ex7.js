function urutkanAbjad(str) {
  // you can only write your code here!
  abjad = 'abcdefghijklmnopqrstuvwxyz'
  index = []
  for (var i=0; i<str.length; i++){
    for (var j=0; j<abjad.length; j++){
      if (str[i]===abjad[j]){
        index[i] = [str[i],j]
      }
    }
  }
  //sort
  for (var j=1; j>0; j++){
    sort = true
    for (var i = 1; i<str.length; i++){
      temp = index[i-1]
        if (index[i][1]<temp[1]){
          index[i-1]= index[i]
          index[i]=temp
          sort = false
        }
    }
    if(sort === true){
      break
    }
  }
  //print
  var sortStr = index[0][0]
  for (var i=1; i<index.length; i++){
    sortStr = sortStr+index[i][0]
  }
  return sortStr
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'