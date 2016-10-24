	var acertar="no";
	var num=parseInt(Math.random() * 100) + 1;
	var contador=0;

	while (acertar == "no"){

		 eleccion=(prompt("Introduce un número(también puede introducir FIN para finalizar)"));

		 if (eleccion == num || eleccion == "FIN"){
		 	acertar=0;
		 }else{
		 	contador++;
		 	if ( eleccion > num){
		 		document.write("El numero es menor que " + eleccion + " Intentos=" + contador + "<br>");
		 	}else{
		 		document.write("El numero es mayor que " + eleccion + " Intentos=" + contador + "<br>");
		 	}
		 }
	}		

	 document.write("El número era " + num + "!");