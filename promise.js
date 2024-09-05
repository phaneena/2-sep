const promise=new Promise((resolve,reject)=>{
    return resolve('good');
});
promise.then(value=>console.log(value));


function sum1(num){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(num);
        },3000);
    });
};
function sum2(num){
    return new Promise((resolve,reject)=>{
        resolve(num);
        // setTimeout(()=>{
        //     resolve(num);
        // },2000)
    })
}
sum1(5).then(value=>{
    return sum2(value+5) 
    .then(value=>{
        console.log(value);
    });
});



 console.log('start')
 document.getElementById('btn').addEventListener('click',function cb(){
    console.log('callback');
 });
 console.log('end');



console.log('start');
