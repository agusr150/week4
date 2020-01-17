function highestScore (students) {
  // Code disini
  if(students.length<1){return {}}
  kelas =[]
  kelas.push(students[0].class)
  for (var i in students){
    add = true
    for (var j=0; j<kelas.length; j++){
      if (students[i].class===kelas[j]){
        add = false
        break
      }
    }
    if (add === true){
      kelas.push(students[i].class)
    }
  }
  var result={}
  for (var i=0; i<kelas.length; i++){
    var terbaik = 0
    var obj ={}
    for (var j=0; j<students.length; j++){
      if (students[j].class===kelas[i]){
          if(students[j].score>terbaik){
            terbaik = students[j].score
            obj["name"]=students[j].name
            obj["score"]=students[j].score
          }
        
      }
    }
    result[kelas[i]]=obj
  }
  return result
}
    

// TEST CASE
console.log(highestScore([
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
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
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
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}

