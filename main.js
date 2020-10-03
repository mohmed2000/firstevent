"use strict"
// catch element
let btns = document.querySelectorAll("button");

let tab = document.querySelectorAll(".tab")
let content = document.querySelectorAll(".content")

let tab0 = document.getElementById("tab0")
let content0 = document.getElementById("content-0")

let tab1 = document.getElementById("tab1")
let content1 = document.getElementById("content-1")

let tab2 = document.getElementById("tab2")
let content2 = document.getElementById("content-2")

let tab3 = document.getElementById("tab3")
let content3 = document.getElementById("content-3")

let num = document.getElementById("num")
let sum=1;
//remove active style
function removeActive(){
    for(let i=0;i<content.length;i++){
        content[i].classList.remove("active")
    }
    for(let i=0;i<tab.length;i++){
        tab[i].classList.remove("active")
    }
}
function displayContent(){
    for(let i=0;i<btns.length;i++)
    {
        btns[0].addEventListener("click",one)
        btns[1].addEventListener("click",two)
        btns[2].addEventListener("click",three)
        btns[3].addEventListener("click",four)
    }
    keyOne()
    keyTwo()
    keyThree()
    keyFour()
}
displayContent();

function keyOne(){
    document.addEventListener("keydown",function(e){
        if(e.keyCode==97){
            one()
        }
    })
}
function keyTwo(){
    document.addEventListener("keydown",function(e){
        if(e.keyCode==98){
            two()
        }
    })
}
function keyThree(){
    document.addEventListener("keydown",function(e){
        if(e.keyCode==99){
            three()
        }
    })
}
function keyFour(){
    document.addEventListener("keydown",function(e){
        if(e.keyCode==100){
            four()
        }
    })
}
function one(){
    removeActive();
    tab0.classList.add("active")
    content0.classList.add("active")
}
function two(){
    num.textContent=`${sum++}`
    removeActive();
    tab1.classList.add("active")
    content1.classList.add("active")
}
function three(){
    removeActive();
    tab2.classList.add("active")
    content2.classList.add("active")
}
function four(){
    removeActive();
    tab3.classList.add("active")
    content3.classList.add("active")
}