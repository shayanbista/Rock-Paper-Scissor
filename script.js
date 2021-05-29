let myChoice="";
let botChoice="";
let result;
let image={
    'rock':"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcmTi0_Qkk3aks73xCCQRBa53TiiI7QOrAvQ&usqp=CAU",
    'scissor':"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZvJ8jvculeYswWUSaFEbyuOhhjEwuhlwfaQ&usqp=CAU",
     'paper':"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBoiKcfY-34iOgPjRejIMP9oPoNSVWvKiKHg&usqp=CAU"
};
function calculateAnswer(item){
    let choices=['rock','paper','scissor'];
    let number=Math.floor(Math.random()*3);
    myChoice=item.id;
    botChoice=choices[number];
    let winner={
        'rock':{'rock':0.5 ,'paper':0 ,'scissor':1},
        'paper':{'paper':0.5,'scissor':0,'rock':1},
        'scissor':{'scissor':0.5,'rock':0,'paper':1}  
    };
    let mainDiv=document.getElementById("main-1");
    let answer=calculateResult(winner,myChoice,botChoice);
    let value=document.getElementById("answer-1"); 
    checkResutlt(answer,value);
    removeDiv(mainDiv);
    checkResutlt(answer,value);
   let myDiv=document.createElement("div");
   myDiv.style.backgroundImage=`url(${image[myChoice]})`;
   mainDiv.style.backgroundSize="cover";
   myDiv.style.boxShadow="3px 3px 3px 3px green";
   mainDiv.appendChild(myDiv);
   let botDiv=document.createElement("div");
   botDiv.style.backgroundImage=`url(${image[botChoice]})`;
   mainDiv.style.backgroundSize="cover";
   botDiv.style.boxShadow="3px 3px 3px 3px red";
   mainDiv.appendChild(botDiv);
} 
function calculateResult(choices,yourchoice,botchoice){
    return (choices[yourchoice][botchoice]);
}
function checkResutlt(answer1, value1){
    if(answer1===1){
        value1.innerText='you won';
    }
    else if(answer1===0){
        value1.innerText='you lost';
    }
    else{
        value1.innerText='draw';
    }
}
function removeDiv(parent){
    while(parent.firstChild!=null){
    parent.removeChild(parent.firstChild);
    }
}
function resetIt(){
   let a=document.getElementById("main-1");
   let b=document.getElementById("answer-1");
     myChoice="";
     botChoice="";
     result=0;
     removeDiv(a);
    b.innerText="";
    let rock=document.createElement("div");
    rock.setAttribute("id","rock");
    rock.style.backgroundImage=`url(${image["rock"]})`;
    rock.style.backgroundSize="cover";
    a.appendChild(rock);
    rock.onclick=function(){
    calculateAnswer(this);
    }
    let paper=document.createElement("div");
    paper.setAttribute("id","rock");
    paper.style.backgroundImage=`url(${image["paper"]})`;
    paper.style.backgroundSize="cover";
    a.appendChild(paper);
    paper.onclick=function(){
        calculateAnswer(this)
    };
    let scissor=document.createElement("div");
    scissor.setAttribute("id","scissor");
    scissor.style.backgroundImage=`url(${image["scissor"]})`;
    scissor.style.backgroundSize="cover";
    a.appendChild(scissor);
   scissor.onclick=function(){
       calculateAnswer(this);
   }
}