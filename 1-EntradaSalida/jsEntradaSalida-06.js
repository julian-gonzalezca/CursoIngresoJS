/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let num1;
	let num2;
	let resultado;

	num1 = parseInt (document.getElementById("txtIdNumeroUno").value);

	num2 = parseInt (document.getElementById("txtIdNumeroDos").value);

    //se puede convertir el valor en numero de ambas maneras, en la cursada se hara de la forma anterior
	//num1 = document.getElementById("txtIdNumeroUno").value; 

	//num2 = document.getElementById("txtIdNumeroDos").value; 

	//num1 = parseInt (num1);

	//num2 = parseInt (num2);

	resultado = num1 + num2;


	alert("La suma es " + resultado);
}

