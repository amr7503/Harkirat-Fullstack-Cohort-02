const arr=[1,2,3,4,5]

const newArr1 = arr.map((n)=>{
    return n*5
})
console.log("Mapped array multiplied by 5 : ["+newArr1+"]") 

const newArr2 = arr.filter((n)=>{
    if(n%2==0){
        return true
    }
    else{
        return false
    }
})

console.log("Filtered even array : ["+newArr2+"]") 