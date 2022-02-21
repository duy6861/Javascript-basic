function myFunction(){
   var firtsN = document.getElementById('Fn').value
   var lastN   = document.getElementById('Ln').value
    
    var Fullname= document.querySelector('.FulName')
    Fullname.innerHTML= 'Hello '+firtsN + ' ' +lastN;
}
var H5Element= document.querySelectorAll('h5');
for(var i=0;i<H5Element.length;i++){
    H5Element[i].onclick = function(e){
        console.log(e.target)
    }
}
var InputText = document.querySelector('input[type="text"]')
var InputCheck = document.querySelector('input[type="checkbox"]')
var H1 = document.querySelector('h1')
var H2 = document.querySelector('h2')
InputText.oninput= function(e){
H1.innerHTML= e.target.value
}
InputCheck.onchange = function(e){
if(e.target.checked==true){
    H2.innerHTML= 'Checked'
}
else{
    H2.innerHTML='notCheck'
}
}
InputText.onkeydown =function(e){
    console.log(e.target.value)
}
var json='{"name":"duy","age":"28"}'
console.log(JSON.parse(json))
var object = JSON.parse(json);
console.log(object.name)
var arr =['duy','hai','han']
var jso = JSON.stringify(arr)
console.log(jso)
console.log(arr)