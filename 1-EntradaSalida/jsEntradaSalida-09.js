/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	let sueldo;
	let nsueldo; 
	let aumento; 
              //sueldo es flotante al utilizar parseFloat
	sueldo = parseFloat (document.getElementById("txtIdSueldo").value);

	aumento = sueldo*10/100; 

	nsueldo= sueldo + aumento;

	document.getElementById("txtIdResultado").value =nsueldo.toFixed(2); 

	//la funsion toFixed es para redondear a determinada cantidad de decimales 



}
