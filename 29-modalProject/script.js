"use strict";
const modal=document.querySelector(".modal");
const overlay=document.querySelector(".overlay");
const btnCloseModel=document.querySelector(".close-modal");
// here we use queryselectorall so that we can select all the elements with this class name
const btnsOpenModel=document.querySelectorAll(".show-modal");

const openModel=function(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};
const closeModel=function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};
for(let i=0;i<btnsOpenModel.length;i++){
    btnsOpenModel[i].addEventListener("click",openModel);
}
// btnCloseModel.addEventListener("click",function(){
//     modal.classList.add("hidden");
//     overlay.classList.add("hidden");
// })
// overlay.addEventListener("click",function(){
//     modal.classList.add("hidden");
//     overlay.classList.add("hidden");
// })
btnCloseModel.addEventListener("click",closeModel);
// i want to funtion work on click so not pass closeModel() if pass this this it runs without clicking so pass closeModel
overlay.addEventListener("click",closeModel);

//add key press
document.addEventListener("keydown",function(e){
    if(e.key==="Escape"&& !modal.classList.contains("hidden")){
        closeModel();
    }
})