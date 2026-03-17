const dec=document.getElementById("dec");
const reset=document.getElementById("reset");
const ins=document.getElementById("ins");
const mylabel=document.getElementById("mylabel");
let count=0;
ins.onclick=function(){
    count++;
    mylabel.textContent=count;
}
dec.onclick=function(){
    count--;
    mylabel.textContent=count;
}
reset.onclick=function(){
    count=0;
    mylabel.textContent=count;
}