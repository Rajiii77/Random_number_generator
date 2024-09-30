let randomnum=document.getElementById("ranbtn")
let num1=document.getElementById("num1")
let num2=document.getElementById("num2")
let num3=document.getElementById("num3")
let min=1;
let max=6;
let random1;
let random2;
let random3;
randomnum.onclick=function(){
    random1=Math.floor(Math.random() * max) + min;
    random2=Math.floor(Math.random() * max) + min;
    random3=Math.floor(Math.random() * max) + min;
    num1.textContent=random1
    num2.textContent=random2
    num3.textContent=random3
}