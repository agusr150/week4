function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  var result =[]
  for (var i=0; i<arrPenumpang.length; i++){
      for (var j=0; j<rute.length; j++){
          if (arrPenumpang[i][1]===rute[j]){
              var indexNaik = j
          }
          if (arrPenumpang[i][2]===rute[j]){
              var indexTurun = j
          }
          if (indexTurun>indexNaik){
              bayar = (indexTurun - indexNaik)*2000
          }
          else if(indexNaik>indexTurun){
              bayar = (((rute.length-1)-indexNaik)+((rute.length-1)-indexTurun))*2000 //trayek angkot bolak balik
          }
          else{bayar = 0}
      }
      var obj={}
      obj["penumpang"]=arrPenumpang[i][0]
      obj["naikDari"]=arrPenumpang[i][1]
      obj["tujuan"]=arrPenumpang[i][2]
      obj["bayar"]=bayar
      result[i]=obj
  }
  return result
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
