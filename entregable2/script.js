		function añadirNum(nume) //En primer lugar guardaremos los números
		{
			var num = document.getElementById("valor");
				if(num["value"] == 0){ //si se trata de un 0 lo sustituiremos por el número que acabemos de introducir
					total=nume;
					num["value"]=total;
				}else{
					total=num["value"] + nume;//si no lo concatenamos
					num.value=total;
			}
		}

		function limpiar()
		{
				var num= document.getElementById("valor");//limpiaremos los números usados hasta el momento que llamamos a la función
				num["value"]=0;
				numDos='';
		}

		function operando(operando)//dependiendo del operando ejecutaremos una función u otra
		{
			if(operando == "="){
				switch(mioperando)
				{
					case '+':
						numDos=document.getElementById("valor");
						resOp=parseInt(numViejo) + parseInt(numDos["value"]);//los números los parsearemos con el fin de operar
						numDos["value"]=resOp;//una vez acabemos una operación asignamos el resultado al valor que aparece por pantalla
					break;

					case '-':
						numDos=document.getElementById("valor");
						resOp=parseInt(numViejo) - parseInt(numDos["value"]);
						numDos["value"]=resOp;
					break;

					case '*':
						numDos=document.getElementById("valor");
						resOp=parseInt(numViejo) * parseInt(numDos["value"]);
						numDos["value"]=resOp;
					break;

					case '/':
						numDos=document.getElementById("valor");
						resOp=parseInt(numViejo) / parseInt(numDos["value"]);
						numDos["value"]=resOp;
					break;

					case 'EXP':
						numDos=document.getElementById("valor");
						resOp=Math.pow(parseInt(numViejo),parseInt(numDos["value"]));
						numDos["value"]=resOp;
					break;
				}

			}else{ //si se trata de un operando distinto que el igual guardaremos el operando y el primer número
				var num=document.getElementById("valor");
				numViejo=num["value"];
				mioperando=operando;
				limpiar();
			}

		}

		function funcion(comando)
		{
			var num= document.getElementById("valor");//ejecutaremos funciones según el comando que pidamos
			switch(comando)
			{
				case 'SQRT':
				total=Math.sqrt(num["value"]);//se usan funciones predefinidas en javascript para obtener el resultado
				num["value"]=total;
				break;

				case 'SENO':
				total=Math.sin(num["value"]);
				num["value"]=total;
				break;

				case 'TAN':
				total=Math.tan(num["value"]);
				num["value"]=total;
				break;

				case 'MR':
				var num = document.getElementById("valor");
				num["value"]=guardado;
				break;

				case 'MS':
				var num = document.getElementById("valor");
				guardado=num["value"];
				break;

				case 'LOG':
				res=Math.log(num["value"]);
				num["value"]=res;
				break;

				case 'MC'://borraremos las variables que tengamos hasta la fecha
				limpiar();
				guardado='';
				total='';
				mioperando='';
				break;

				case 'COSENO':
				res=Math.cos(num["value"]);
				num["value"]=res;
				break;

				case 'SENO':
				res=Math.sin(num[value]);
				num["value"]=res;
				break;
			}
		}