function graduates (students) {
  // Code disini
  if (students.length < 1){return {}}
  kelas =[students[0].class]
  for (var i in students){
      add = true
      for (var j=0; j<kelas.length; j++){
          if (students[i].class===kelas[j]){
              add = false
              break
          }
      }
      if(add === true){
          kelas.push(students[i].class)
      }
  }
  //console.log(kelas)
  var result ={}
  
  for (var i=0; i<kelas.length; i++){
    var subresult =[]
    var k = 0
      for (var j=0; j<students.length; j++){
        var obj ={}
          if(students[j].class === kelas[i]){
              if(students[j].score>75){
                obj = {nama: students[j].name, score: students[j].score}
                //console.log(obj)
                //subresult.push(obj)
                subresult[k]=obj
                k++
                //console.log(subresult)
              }
          }
      }
      hasil = subresult.slice()
      result[kelas[i]]=hasil
  }
  return result
}

console.log("No.1")
console.log(graduates([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }
console.log ("no.2")
console.log(graduates([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }

console.log("No.3")
console.log(graduates([])); //{}