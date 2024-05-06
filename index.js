let num = 5

function factorial (num) {
if(num===0){
return 1
}else{
return num * factorial(num-1)
}
}
const result = factorial(num)
console.log(result)
