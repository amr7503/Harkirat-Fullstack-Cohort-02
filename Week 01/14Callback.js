function sum(a,b) {
	return a+b;
}
function product(a,b) {
	return a*b;
}
function divide(a,b) {
	return a/b;
}
function doSomething(a,b,ToDO){
	return ToDO(a,b);
}
//Anonymous function
let ans=doSomething(3,4,function(a,b){ return 3*a+3*b
													})
console.log(ans);