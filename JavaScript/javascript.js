function My() {
	var d =new Date();
	var hou = d.getHours();
	var min = d.getMinutes();
	var sec = d.getSeconds();
 document.getElementById("demo").innerHTML = "<h1> La hora es:"+ hou + ":"+ min + ":"+ sec +  "</h1>"
}
setInterval(My, 1000);


var a, b, c; 
a=2;  b=2; c= a+b;
document.getElementById("do").innerHTML= c;

function Remover(){
	var texto = document.getElementById("oo1");
	var texto2 = document.getElementById("oo2");
	texto2.innerHTML = "";
	texto.innerHTML = "";
}

var personas = {
	texto_1:"Texto1",
 	texto_2:"Texto2"
 };

function Click() {
	document.getElementById("oo1").innerHTML = personas.texto_2;
	document.getElementById("oo2").innerHTML = personas.texto_1;
}

var num=1;
function adelante(){
	num++;
	if(num>3)
		num=1;
	var foto=document.getElementById("foto");
	foto.src="img/foto"+num+".jpg";
}
function atras(){
	num--;
	if(num<1)
		num=3;
	var foto=document.getElementById("foto");
	foto.src="img/foto"+num+".jpg";
}

function numm(numero){
	document.form.textview.value = document.form.textview.value+numero
}

function igual(){
	var suma= document.form.textview.value;
	if(suma){
	document.form.textview.value = eval(suma)}else
	document.form.textview.value = "Sintaxy Error"
}
function borrar(){
	document.form.textview.value = ""; 
}
function atras(){
	var suma =document.form.textview.value 
	document.form.textview.value = suma.substring(0,suma.length-1);
}

function remueve(){
	var str = document.getElementById("demooo").innerHTML;
	var txtx = str.replace("World", "Mundo");
	document.getElementById("demooo").innerHTML = txtx;
}

var numeros = [1, 2, 3, 5, 16, 50, 20, 10, 22, 21, 89, 1, 20, 60, 100];
document.getElementById("numeross").innerHTML = numeros;

function asc(){
numeros.sort(function(a, b){return a - b});
document.getElementById("numeross").innerHTML = numeros;
};