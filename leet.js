// var reverse = function(x) {
    
//     let rev=0;
//     while(x>0){
//         let rem=x%10;
//         console.log(rem)
//         rev=(rev*10)+rem;
//         x=Math.floor(x/10);
//     }
//     console.log(rev);
    
// };
// reverse(123);


// function lengths(s){
//     let str=s.split(' ');
//     console.log(str);
//     let str1=str[str.length-1];
//     console.log(str1);
    
// }
// lengths('hello world');



//callback Hell

// function mul(a,b,callback){
//     callback(a*b);
// }
// function sub(a,b,callback){
//     callback(a-b);
// }
// function add(a,b,callback){
//     callback(a+b);
// }
// function div(a,b,callback){
//     callback(a/b);
// }
// mul(8,3,(result1) => {
//     sub(15,5,(result2) =>{
//         add(result1,result2,(result3)=>{
//             div(result3,4,(result4) =>{
//                 div(9,3,(result5) =>{
//                     add(2,6,(result6)=>{
//                         mul(result5,result6,(result7)=>{
//                             sub(result4,result7,(result)=>{
//                                 console.log(result)
//                             });
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });



// function task1(){
//     setTimeout(()=>{
//         console.log('task1')
//     },2000)
// };
// function task2(){
//     setTimeout(()=>{
//         console.log('task2')
//     },1000)
// };
// task1(()=>{
//     task2(()=>{

//     })
// });



// let ob={a:1, 
//     b:2,
//     c:3 };

// for(let key in ob){
//     console.log(ob[key]);
// }


// function task1(callback){
//     setTimeout(()=>{
//         console.log('hi')
//         callback();
//     },3000);
// }
// function task2(callback){
//     setTimeout(()=>{
//         console.log('hloo')
//         callback();
//     },2000);
// }
// function task3(callback){
//     setTimeout(()=>{
//         console.log('how');
//         callback()
//     },500);
// }
// function task4(callback){
//     setTimeout(()=>{
//         console.log('how');
//         callback()
//     },500);
    
// }
// task1(()=>{
//     task2(()=>{
//         task3(()=>{
//             task4(()=>console.log('task finished'));
//         });
//     });
// });

// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLongestSubstring = function(s) {
//     let str=s.split('');
//     console.log(str);
//     arr=[];
//     for(let i=0;i<str.length;i++){
//        if(!arr.includes(str[i])){
//             arr.push(str[i]);
//        }
        
//     }
//     console.log(arr.length);

       
// };
// lengthOfLongestSubstring('hello world');
  

// //
// s = "A man, a plan, a canal: Panama";
// // s = "race a car";
// // s = " ";
// var isPalindrome = function(s) {
//     flag=0;
//     s=s.toLowerCase().replace(/[^a-z0-9]/g, '');
//     console.log(s);
//     for(i=0,j=s.length-1;i<s.length;i++,j--){
//         if(s[i]!=s[j]){
//             flag=1;
//             break;    
//         }
//     }
//     if(flag==0){
//         return true;
//     }
//     else{
//         return false;
//     }
    
// };

// console.log(isPalindrome(s));


function task1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const task1=true;
            if(task1){
                resolve('he is busy');
            }
            else{
                reject('not wworrkinng')
            }

        },2000);
    });
};
function task2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const task2=false;
            if(task2){
                resolve('he is late');
            }
            else{
                reject('not working')
            }

        },2000);
    });
};
function task3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const task3=task3;
            if(task3){
                resolve('he is working');
            }

        },2000);
    });
};
function task4(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('good morning');
        });
    });
};
task1().then(value=>{console.log(value);return task2()})
        .then(value=>{console.log(value);return task3()})
        .then(value=>{console.log(value);return task4()})
        .then(value=>{console.log(value);console.log('task completed')})
        .catch(error=>console.log(error));













function sort(num1,num2){
    let merge=[...num1,...num2];
    // console.log(merge);
    let sorted=merge.sort((a,b)=>a-b);
    // console.log(sorted);
    let median;
    let mid=Math.floor(sorted.length/2);
    if(sorted.length%2==0){
        median=(sorted[mid-1]+sorted[mid])/2;
    }
    else{
        median=(sorted[mid]);
    }
    return median.toFixed(5);

}
num1=[1,2];
num2=[3,4];
console.log(sort(num1,num2));