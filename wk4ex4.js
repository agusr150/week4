function cariModus(arr) {

  // you can only write your code here!
    var angka=[]
    var qty =[]
    var report =[angka,qty]

    for (var i=0; i<arr.length; i++){
        if(i===0){
            angka.push(arr[i])
            count = 1
            qty.push(count)
        }
        else{
            for(var j=0; j<angka.length;j++){
                if(arr[i]!==angka[j]){
                    tambah = true
                }
                else{
                    qty[j] = qty[j]+1
                    tambah =false
                    break
                }
            }
            if (tambah===true){
                angka.push(arr[i])
                //console.log(angka+"<<<angka")
                count = 1
                qty.push(count)
            }
        }      
    }
    var freq = 0
    var modus = ''
    for(var k=0;k<angka.length;k++){
        if(qty[k]>freq){
            modus = angka[k]
            freq = qty[k]
        }
    }
    if(freq ===1){return -1}
    if(angka.length===1){return -1}
    return modus
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1