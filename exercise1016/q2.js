//遞迴要查表
function f (k)
{
    if(k==0)
     return 0;
    else if(k==1)
     return 1;
    else
     return 3*f(k-1) + 2*f(k-2);
}
var startTime = Date.now()
console.log("f(1)=",f(1))
console.log("f(2)=",f(2))
console.log("f(40)=",f(40))
var endTime = Date.now()
var milliSeconds = endTime - startTime
console.log('time:%dms', milliSeconds)