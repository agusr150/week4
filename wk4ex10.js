function changeMe(arr) {
  // you can only write your code here!
  var obj={}
  if (arr.length <1){return console.log("")}
  for(var i=0; i<arr.length; i++){
    obj["firstname"]=arr[i][0];
    obj["lastname"]=arr[i][1];
    obj["gender"]=arr[i][2];
    a = new Date
    tahun = Number(a.getFullYear())-arr[i][3]
    if(arr[i].length<4){tahun = 'Invalid Birth Year'}
    if(tahun < 0){tahun = 'Invalid Birth Year'}
    obj["age"]=tahun
    title = (i+1)+". "+arr[i][0]+" "+arr[i][1]+" : "
    console.log(title)
    console.log(obj)
  }
  return 
}


// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""