var demo = document.getElementsByClassName('demo')[0]
setInterval(() => {
    demo.classList.toggle('demo')
}, 2000);
function myFunction(){
    var demo2 = document.getElementsByClassName('demo2')
    for(var i=0;i<demo2.length;i++)
    {
        // demo2[i].innerHTML='789';
        
        demo2[i].style.color = "blue";
        
    }
    
}
function getback(){
    var demo2 = document.getElementsByClassName('demo2')
    for(var i=0;i<demo2.length;i++)
    {
        // demo2[i].innerHTML='789';
        
        demo2[i].style.color = "black";
        demo2[i].style.fontSize = "50px";
        
    }  
}
function Biger(){
    var biger = document.querySelector('.small')
    biger.textContent='Big'
    var bigBtn = document.querySelector('.bigbtn')
    bigBtn.style.display='none'
    biger.style.fontSize='50px'
    var smallBtn = document.querySelector('.smallbtn')
    smallBtn.style.display='inline'
}
function Smaller(){
    var biger = document.querySelector('.small')
    biger.textContent='Small'
    var smallBtn = document.querySelector('.smallbtn')
    smallBtn.style.display='none'
    var bigBtn = document.querySelector('.bigbtn')
    bigBtn.style.display='inline'
    biger.style.fontSize='16px'
    
}
var pp= document.getElementsByTagName('p');
pp[0].innerHTML='hahahahahahahahahahahahaha'


var node = document.querySelectorAll('.box1 li')







