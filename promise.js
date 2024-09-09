// const promise=new Promise((resolve,reject)=>{
//     return resolve('good');
// });
// promise.then(value=>console.log(value));


// function sum1(num){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(num);
//         },3000);
//     });
// };
// function sum2(num){
//     return new Promise((resolve,reject)=>{
//         resolve(num);
//         // setTimeout(()=>{
//         //     resolve(num);
//         // },2000)
//     })
// }
// sum1(5).then(value=>{
//     return sum2(value+5) 
//     .then(value=>{
//         console.log(value);
//     });
// });



//  console.log('start')
//  document.getElementById('btn').addEventListener('click',function cb(){
//     console.log('callback');
//  });
//  console.log('end');



//  const gittt=https://github.com/phaneenahttps://github.com/phaneena;



// arr=[1,2,3];
// result=0;
// arr.map((value)=>
//     result+=value);
// console.log(result);

// cart=['shoe','pant','top'];
// let pro=new Promise(function(resolve,reject)=>{
//     if(!validCart(cart)){
//         reject('error');
//     }
// })
// let promise=createorder(cart);

// promise.then(function (orderid){
//     console.log(orderid)
// })
// .catch(function(err){
//     console.log('error');
// })

// function craateorder(cart){
    
// }


// const pr=new Promise(function(resolve, reject){
//     name='haneena';
//     if(name){
//         resolve('ramees');
//     }
//     else{
//         reject('error');
//     }
// });
// pr.then((value)=>{
//     console.log(value)
// }).catch((error)=>{
//     console.log(error)
// })

// let pro=new Promise(function(resolve,reject){
//     arr=[2,1,3,5,6];
//     for(i=0;i<arr.length;i++){
//         if(arr[i]%2==0){
//             resolve('even')
//         }
//         else{
//             reject('error')
//         }
//     }
// });
// pro.then((value)=>{
//     console.log(value);
// })
// .catch((error)=>{
//     console.log(error);
// })







// cart=['shoe','top','pant'];
// const promise=createorder(cart);
// function createorder(cart){
//     return new Promise(function(resolve,reject){
//         if(!validcart(cart)){
//             const err=new Error("not valid");
//             reject(err);
//         }
//         orderid=12345;
//         if(orderid){
//             setTimeout(()=>{
//                 resolve(orderid);
//             },5000)
//         }
//     })
// }
// function validcart(cart){
//     return false;
// }
// promise.then(function(orderid){
//     console.log(orderid)

// }).catch(function(err){
//     console.log(err.message)
// })







// cart=['shoe','pant','heels','top'];
// const promise=createodrer(cart);
// function createodrer(cart){
//     const pr=new Promise(function(resolve,reject){
//         if(!validcart(cart)){
//             const err=new Error('not valid');
//             reject(err)
//         }
//         orderid='1234';
//         if(orderid){
//             resolve(orderid);
//         }
//     })
//     return pr;
// }
// function validcart(cart){
//     return true;
// }
// function proceedtopayment(orderid){
//     return new Promise(function (resolve,reject){
//         resolve('payment successfully')
//     })
// }
// promise.then((orderid)=>{
//     console.log(orderid);
//     return proceedtopayment(orderid);
    
// })
// .then((res)=>{
//     console.log(res)
    
// })
// .catch((error)=>{
//     console.log(error.message)
// })




// 



// let pr1=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve('successeed')
//     },5000)
// });
 

let pr=new Promise((resolve,reject)=>{
    resolve('successed')
});
let pr1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('succcessfully cmplt')
    },2000)
});
Promise.any([pr,pr1]).then((resolve)=>{
    console.log(resolve);
})
