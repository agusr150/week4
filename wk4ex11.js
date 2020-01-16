function shoppingTime(memberId, money) {
  // you can only write your code here!
  const sale =[
    ['Sepatu Stacattu', 1500000],
    ['Baju Zoro', 500000],
    ['Baju H&N', 250000],
    ['Sweater Uniklooh', 175000],
    ['Casing Handphone', 50000]
  ]
  
if(memberId ===undefined || memberId.length<1){return "Mohon maaf, toko X hanya berlaku untuk member saja"}
if(money<50000){return "Moohon maaf, uang tidak cukup"}

//sort dari yg mahal
for (var a=1; a>0; a++){
  sort = true
  for (var i=1; i<sale.length; i++){
    temp = sale[i-1]
    if(sale[i][1]>temp[1]){
      sale[i-1]=sale[i]
      sale[i]=temp
      sort = false
    }
  }
  if (sort = true){break}
}

var sisa = money
var beli =[]
var k = 0
  for (var j=0; j<sale.length; j++){
    if(sisa >= sale[j][1]){
      beli[k]= sale[j][0]
      k++
      sisa= sisa-sale[j][1]
    }
  }
 
obj ={}
obj["memeberId"] = memberId
obj["money"]=money
obj["listPurchased"]= beli
obj["changeMoney"]=sisa

return obj
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja