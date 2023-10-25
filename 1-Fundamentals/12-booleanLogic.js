// and/or/not
const hasDrivingLicence=false;
const hasGoodVision=true;
if(hasDrivingLicence&&hasGoodVision){
    console.log("He can drive(AND OPERATOR)");
}
else{
    console.log("He can not drive(AND OPERATOR)");
}
if(hasDrivingLicence||hasGoodVision){
    console.log("He can drive(NOT OPERATOR)");
}
else{
    console.log("He can not drive(NOT OPERATOR)");
}
if(!hasDrivingLicence){
    console.log("He can not drive as he have not driving licence")
}