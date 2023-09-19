let gameSeq=[];
let useseq=[];
let btns=["red","blue","green","yellow"];
let start=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(start==false){
   // console.log("game started");
    start=true;
    }
    levelup();
});
 function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout( function(){
        btn.classList.remove("gameflash");
    } ,500);

 }
 function userflash(btn){
    btn.classList.add("userflash");
    setTimeout( function(){
        btn.classList.remove("userflash");
    } ,500);
 }



function levelup(){
    useseq=[];
    level++;
    h2.innerText=`level ${level}`;

    // finding the random button
    let raidx=Math.floor(Math.random()*3);
    let raclr=btns[raidx];
    let radbtn=document.querySelector(`.${raclr}`);
    //  console.log(raidx);
    //  console.log(raclr);
    //  console.log(radbtn);
      gameflash(radbtn);
      gameSeq.push(raclr);
      console.log(gameSeq);

}

function checkAns(idx){
   // console.log("current level",level);
//    let idx=level-1;
   if(useseq[idx]==gameSeq[idx]){
   // console.log("same value");
    if(useseq.length==gameSeq.length){
        setTimeout(levelup,1000)
       
    }
   }
   else{
    h2.innerHTML=`Game Over! <br> Your Score ${level} <br> prees any key to restart `;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
        
    },400);

    reset();

   }
}

function btnps(){
    //console.log(this);
    let btn=this;
    userflash(btn);
    userclr=btn.getAttribute("id");
    //console.log(userclr);
    useseq.push(userclr);
     checkAns(useseq.length-1);
}
let allbtn=document.querySelectorAll(".btn");
for (bt of allbtn){
    bt.addEventListener("click",btnps);
}

// to reset the game 
function reset(){
    start= false;
    level=0;
    useseq=[];
    gameSeq=[];
}