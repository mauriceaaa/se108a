//無遞迴
function factorial(n) 
{
  if (n==0)
     return 0 ;
  if (n==1)
     return 1;
  var k = 0;
  var j = 1;
 for (var i=2; i<=n; i++)
  {
   nC = 3*j + 2*k
   k = j
   j = nC
  } 
  return j;
}