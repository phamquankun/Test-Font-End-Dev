printArr = function(arr, start =0) {
    if(start < arr.length){
        console.log(arr[start])
    }
    if(start >= arr.length){
        if(start %2 ==1) {
            return;
        }
        printArr(arr,1)
    } else {
        printArr(arr,start + 2)
    }
}
var arr = [1,3,7,2,8,10,47,84,12,30]
printArr(arr)