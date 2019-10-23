//遞迴不查表
var array = [0 , 1]
function factorial(n) {
    if (n < 0) return 0;
    if (array[n] != null) return array[n]

    array[n] =  3 * factorial(n - 1) + 2 *factorial(n - 2);
return array[n];
}
console.log("factorial(1)=",factorial(1))