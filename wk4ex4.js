function cariModus(arr) {
  // you can only write your code here!
    let i = 0
    let j = 0
    let k = 0
    let arr1 = []
    let count =[]
    let x = false
    while (i<arr.length){
        //console.log('i ='+i)
        //console.log('count awal ='+count)
        if (i===0){
            arr1.push(arr[i])
            count.push(1)
        }        
        else {
            while (j<arr1.length){
                if (arr[i]===arr1[j]){
                    //console.log('j ='+j)
                    count[j]++
                    //console.log(count[j])
                    x = true
                    break
                }
                else {
                    j++
                }
            }
            if  (x !== true){
                arr1.push(arr[i])
                count.push(1)
            }  
        }

        //console.log(count )
        i++
        j=0
    }
    j = 1
    temp = 0
    while (j<count.length){
        if (count[j]<count[temp]){
            indexmod = temp
        }
        else {
            indexmod = j
            temp = j
        }
        j++
    }
    //console.log('index modus = '+temp)
    if (arr1.length===1){
        modus = -1
    }
    else if (count[temp]>1){
        modus = arr1[temp]
    }
    else {
        modus = -1
    }
    
    
    
return modus
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1