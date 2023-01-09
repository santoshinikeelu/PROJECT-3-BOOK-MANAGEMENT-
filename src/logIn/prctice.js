
//clouser=============
function outer(){
    var a=3
    function inner(){
       
        console.log(a)
    }
    inner()
}
outer()

//map========
let a=[1,2,5,7,3,6]
let res = a.map((x)=>x*2)
console.log(res)
console.log(a)

//filter============
let x=[1,2,5,7,3,6]
let result = x.filter((x)=>x%2==1)
console.log(result)

//reduce==========

let p=[1,2,5,7,3,6]
let arr = p.reduce((x,y)=>{
    return x*y
},1)
console.log(arr)

//setTimeout=============


for(let l = 0;l<8;l++)
setTimeout(
    function inner(){
    console.log(l)}
    ,l*1000
    
    )
   
console.log("santoshini")