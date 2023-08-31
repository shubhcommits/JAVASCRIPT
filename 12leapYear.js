var year = prompt("Enter the year");
if(year%4===0){
    if(year%100===0){
        if(year%400===0){
            alert("Leap year")
        }
        else{
            alert("Not a leap year");
        }
    }
    else{
        alert("Leap year")
    }
}