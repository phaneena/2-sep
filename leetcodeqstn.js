num=[1,2,3,2,3,4,5,6,6,7,8];
largest=0;
function mynumber(num){
    let arr=[];
    for(i=0;i<num.length;i++){
        if(!arr.includes(num[i])){
            arr.push(num[i]);
        }
    }
    for(i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i];
        }
    }
    return largest;
}
console.log(mynumber(num));