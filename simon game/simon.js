let gameSeq =[];
let userSeq =[];
let highScore=[];
let start = false;
let level =0;
let btns = ['red','yellow','green','blue'];
let h3 = document.querySelector("h3");
document.addEventListener("keypress", function(){
    if(start==false){
        levelUp();
    start = true;
    }
});
function btnflash(btn){
 btn.classList.add("flash");
 setTimeout(function(){
    btn.classList.remove("flash");
 },250);
}
function levelUp(){
    userSeq=[];
    level++;
    h3.innerText = `Level ${level}`;

    let randInd = Math.floor(Math.random()*4);
    let randColor = btns[randInd];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnflash(randbtn);
}
function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
           setTimeout(levelUp,1000);
        }
    }
    else{
        highScore.push(level);
        let highest =highScore.reduce((a,b)=>Math.max(a,b),-Infinity);
        h3.innerText = `game Over! Your score is ${level} & Your  highest score is ${highest}. 
         Press Any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
        },300);
       reset();
    }
}
function btnPress(){
    let btn = this;
    btnflash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    start = false;
    gameSeq=[];
    userSeq=[];
    level =0;

}
