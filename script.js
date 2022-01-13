let s=0;

const d={
    1:"images/dice1.png",
    2:"images/dice2.png",
    3:"images/dice3.png",
    4:"images/dice4.png",
    5:"images/dice5.png",
    6:"images/dice6.png"
}
const up=(num)=>{
    console.log(num);
    let com=0;
    if(num==6)
    {
        com=Math.floor(Math.random()*2)+5;
    }
    else if(num==1)
    {
        com=Math.floor(Math.random()*2)+1;
    }
    else{
    com=Math.floor(Math.random()*5)+1;
    }
    console.log(com);
    let s1=document.querySelector(".h22");
    s1.style.display="none";
    let s2=document.querySelector(".sel");
    s2.style.display="none";
    let s3=document.querySelector(".res");
    s3.style.display="flex"
    document.getElementById("userimg").src=d[num];
    document.getElementById("comimg").src=d[com];
    if(num>com)
    {
        document.getElementById("toshow").innerText="You WIN.";
        s++;
        document.getElementById("score").innerText=s;
    }
    else if(num==com)
    {
        document.getElementById("toshow").innerText="It's a TIE";
        if(num==1)
        {
            s++;
            document.getElementById("score").innerText=s;
        }
    }
    else
    {
        document.getElementById("toshow").innerText="You LOSE";
    }
}
const restartGame = () => {
    let game=document.querySelector(".h22");
    game.style.display="flex";
    game=document.querySelector(".sel");
    game.style.display="flex";
    let result=document.querySelector(".res");
    result.style.display="none";
  }