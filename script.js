//program 1 finding longest string in an array

function findLongestString(arr){
    let maxString=""
    for (let i =0 ; i < arr.length; i++){
        if (arr[i].length > maxString.length) maxString=arr[i]
    }
    return maxString
}

// let result=findLongestString(["a","aba","b","ababa"])
// console.log("the largest in the array",["a","aba","b","ababa"])
// console.log(result)


//program 2 difference between two arrays
function differenceBetArr(arr1,arr2){
    let len=0
    diff=[]

    if(arr1.length >arr2.length){
        diff=[...arr1]
        len=arr2.length;
        for (let i =0 ; i < len; i++){
            diff[i]=diff[i]-arr2[i]
        }
    }

    else {
        diff=[...arr2]
        len=arr1.length
        for (let i =0 ; i < len; i++){
            diff[i]=diff[i]-arr1[i]
        }
    }

    return diff
}

// let result=differenceBetArr([1,2,3,45,19],[4,52,2,56,443,2])
// console.log("the difference between two arrays is",[1,2,3,45,19],[4,52,2,56,443,2])
// console.log(result)


//program 3  spreading or spread operator of array 
let arr1=[1,2,3,4,5]
let arr2=[...arr1,6]
// console.log(arr2)


//program 4 destructing of array
let arr=[1,2,3]
let [a,b]=arr
// console.log(a,b)


//program finding the index of first occurance of an element 

function findFirstOcc(arr,target){
    for (let i =0 ; i < arr.length; i++){
        if (arr[i]==target)return i
    }
    return -1
}

let result=findFirstOcc([1,3,4,2,3],3)
console.log("the first occurance of the element 3 in the array",[1,3,4,2,3])
console.log(result)



