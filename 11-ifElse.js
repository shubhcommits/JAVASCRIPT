// for equality (===) for unwquality(!==)
// greater and equal(>=) OR less than equal(<=)
// In javaScript (===) check also datatype but (==) does not check datatype
var loveScore;
prompt("Enter the name of the first person");
prompt("Enter the name of the second person");
loveScore=Math.floor((Math.random()*100)+1);
if(loveScore>80){
    alert("Your love percentage is "+loveScore+" %"+" You both love each other so much")
}
else{
     alert("Your love percentage is "+loveScore+" %")
}