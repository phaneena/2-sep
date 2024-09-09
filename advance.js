let pr=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('success')
    },5000)
})
async function create(){
    let p=await pr;
    console.log()
}

var ob={
    name:'haneena',
    age:21
}

var ob1={
    name:'hane',
    age:22
}
let ne={...ob,...ob1}
console.log(ne);