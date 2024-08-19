let userscore=0;
let compscore=0;

let imgs=document.querySelectorAll(".img");
let msg=document.querySelector("#msg");
let userscr=document.querySelector(".user-score");
let compscr=document.querySelector(".comp-score");
let body=document.querySelector("body");

const gencompchoie=()=>{
    const options=["rock","paper","scissors"];
    const randomidx=Math.floor(Math.random()*3);
    return options[randomidx];
}

const draw=()=>{
    msg.innerText="Draw match"
    msg.style.backgroundColor="green";
    msg.style.color="black";
}

const showwiner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscr.innerText=userscore;
        msg.innerText=`you win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="red";
        msg.style.color="black";
    }else{
        compscore++;
        compscr.innerText=compscore;
        msg.innerText=`you lost! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="pink";
        msg.style.color="black";
    }
    // if(userscore===i || compscore===i){
    //     if(userscore===i){
    //         body.innerText="congratulation you win."
    //         body.classList.remove("hide");

    //     }else{
    //         body.innerText=" you lost.Try again for win"
    //         body.classList.remove("hide");

    //     }
    // }
}

const playgame=(userchoice)=>{
    const compchoice=gencompchoie();
    console.log(compchoice);
    if(userchoice===compchoice){
        draw();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
           userwin = compchoice==="paper" ? false : true;
        }else if(userchoice==="paper"){
            userwin=compchoice==="scissors"?false:true;
        }else{
            userwin=compchoice==="rock"?false:true;
        }
        showwiner(userwin,userchoice,compchoice);
    }
}

imgs.forEach((img)=>{
    img.addEventListener("click",()=>{
        const userchoice=img.getAttribute("id");
        console.log("your choice is ",userchoice);
        playgame(userchoice);
    })
}
) 