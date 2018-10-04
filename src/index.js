module.exports = function getZerosCount(number, base) {
  /* Для решения   данной задачи используется формула */
/* variable block */
var i=2; 
var divisor;
var ArrIP=[];
var result=0;


var count=[1];

/*add de to array. If   base % i == 0 */

while (i<=base) {

  if (base%i==0) {
    
    ArrIP.push(i);
    base/=i;
     divisor=i;
  }   else {
    i++;
  }

}
/*add de to array. If  ArrIP[p]==ArrIP[p-1]*/
for (var  p=1,  k=0; p<ArrIP.length; p++ ) {
if (ArrIP[p]==ArrIP[p-1]) {
  count[k]++;
} else {
  count.push(1);
  k++;
}
}
/*  result block */
while (number>1){
  result+=Math.floor(number/divisor);
  number=Math.floor(number/divisor);
}


return Math.floor(result/count[count.length-1])


}
