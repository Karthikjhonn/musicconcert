
 //timer countdown
 let day=document.getElementById("day");
 let hrs=document.getElementById("hrs");  
 let min=document.getElementById("min");   
 let sec=document.getElementById("sec");
 function countDown(){
 let todayDate= new Date();
 let newYear= new Date("3 14 2023");        
 let difference=newYear-todayDate;
//  console.log(difference);
 let Day=Math.floor(difference/1000/60/60/24);
 let Hrs=Math.floor((difference/1000/60/60)%24);
 let Min=Math.floor((difference/1000/60)%60);
 let Sec=Math.floor((difference/1000)%60);
//  console.log(Day);
 if (Day<1){
    Day=2 
 }
 day.innerText=Day<10? "0"+Day:Day;
 hrs.innerText=Hrs<10? "0"+Hrs:Hrs;
 min.innerText=Min<10? "0"+Min:Min;     
 sec.innerHTML=Sec<10? "0"+Sec:Sec;
 }
 const myInterval = setInterval(countDown,1000);

 //menu bar
let menuBar=document.getElementById("menu-bar");
menuBar.addEventListener("click",()=>{
    document.querySelector(".nav-list").classList.toggle("nav-active");
});
document.querySelector(".nav-list").addEventListener("click",()=>{
    document.querySelector(".nav-list").classList.toggle("nav-active");
});

//sticky
let sticky=document.getElementById("sticky");
console.log(sticky);
window.addEventListener("scroll",()=>{
    sticky.classList.toggle("sticky",window.scrollY>1350)
})




//terms and condition
let termsBtn=document.querySelector(".terms-condition .fa-angle-down");
let termUl=document.querySelector(".terms-condition ul")
termsBtn.addEventListener("click",()=>{
    termsBtn.classList.toggle("fa-angle-up");
    termUl.classList.toggle("term-active");

});

//interested 
 let interestedBtn=document.getElementById("interested");
 let heartIcon= document.querySelector("#like + i");
 let likes=document.getElementById("like");
// console.log(typeof(Number(likes.innerHTML)+1));
 interestedBtn.addEventListener("click", favorite);
  function favorite(){
    interestedBtn.classList.toggle("background-active");
    heartIcon.classList.toggle("fa-solid");
    if(interestedBtn.className==="background-active"){
        likes.innerText=(12855+1)
    } 
  }