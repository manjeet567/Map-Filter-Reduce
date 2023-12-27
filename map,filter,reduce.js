let arr=[
    {firstName:"manjeet",lastName:"choudhary",age:22},
    {firstName:"kaushal",lastName:"jaat",age:18},
    {firstName:"gourav",lastName:"khardiya",age:15},
    {firstName:"pankaj",lastName:"jangid",age:23},
    {firstName:"rahul",lastName:"tomer",age:21},
    {firstName:"manish",lastName:"saini",age:23},
    {firstName:"raj",lastName:"jangid",age:25},
    {firstName:"akash",lastName:"sharma",age:24}
]


//--------------list of fullName-------------//

const output=arr.map((x)=>{
    return x.firstName +" "+ x.lastName
})
console.log(output)


//-------------------------------------------------//


let ageoutput=arr.reduce(function(acc,curr){
if(acc[curr.age]){
acc[curr.age]= ++acc[curr.age]
}else{
    acc[curr.age]=1
}
return acc
},{})
console.log(ageoutput)


//-------------------------------------------------//

const filter=arr.filter((x)=>
    x.age<20
).map((x)=> x.firstName)
console.log(filter)


//--------------------//

const outPut=arr.filter((x)=>x.age<20).reduce(function(acc,curr){
acc.push(curr.firstName)
return acc;
},[])

console.log('ffff',outPut)

//-----------------------------------------test---------------------------------------------//
let aa=arr.filter((x)=>x.age>20).map((x)=>{
    return {
        "firstName":x.firstName,
        'age':x.age
    }
})
console.log('test:',aa)

//--------------------------------------//

let test1=arr.filter((x)=>x.age>20).reduce(function(acc,curr){
  acc++
  return acc
},0)
console.log('test1',test1)