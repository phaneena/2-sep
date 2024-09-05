// num=5;
// for(i=0;i<num;i++){
//     space='';
//     for(j=0;j<num-i-1;j++){
//         space+=' ';   
//     }
//     for(k=0;k<(2*i+1);k++){
//         space+='*';
//     }
//     console.log(space);
//     space=' ';
            
// }

// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     greet: function() {
//         console.log("Hello, " + this.firstName);
//     }
// };
// person.greet();

// arr=[22,12,45,32,56];
// arr.sort((a,b)=>(b-a));
// console.log(arr);

// arr=['helo','manfo','apple','sale']
// arr.sort();
// console.log(arr);


// let arr=[10,30,40,25];
// let arr1=arr.find((num)=>num>20);
// console.log(arr1);

//spread 

// let person={
//     name:'haneena',
//     age:21,
//     job:'designer'
// };
// let person1={...person};
// person1.job='developer';
// console.log(person1);

// arr1=['sing','song','hi'];
// arr2=['sad','happy'];
// let arr=[...arr1,...arr2];
// console.log(arr);


//palindrome


// x=121;
// var isPalindrome = function(x) {
//     let rev=0;
//     let temp=x;
//     while(temp>0){
//         let rem=temp%10;
//         rev=rev*10+rem;
//         temp=Math.floor(temp/10);
//     }
//     return x==rev;
    
// };
// console.log(isPalindrome(x));


//callback

setTimeout(function(){
    console.log('time');
},5000)
function x(y ){
    console.log('x');
    y();
}
x(function y(){
    console.log('y');
});




function hello(callback){
    console.log('helo');
    callback();
}
function hi(){
    console.log('hi');
}
hello(hi);


function sum(callback,x,y){
    let result=x+y;
    callback(result);
}
function display(result){
    console.log(result);
}
sum(display,5,4);



