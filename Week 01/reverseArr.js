function swap(arr,a, b) {
    let t=arr[i]
arr[i]=arr[j]
arr[j]=t;
} 

display(arr)
{
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
         
     }
}

let arr = [23, 54, 242, 42, 5477, 2311, 5745];
let i = 0,
    j = arr.length - 1;

while (i < j) {
swap(arr,i,j)


i++;
j--;
}

