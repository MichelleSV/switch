var numero = parseInt(prompt("escoja una opción: \n"+ 
	"1.Suma\n" +
	"2.Resta\n" +
    "3.Multiplicación\n" +
    "4.División\n" +
    "5.Potencia\n" +
    "6.Radicación"
    "7.Mayor\n" +
	"8.Menor"
    ));

switch(opción){
	case 1:
	var numero1 = parseInt(prompt("Ingresa tu número 1"));
	var numero2 = parseInt(prompt("Ingresa tu número 2"));
	var suma = numero1 + numero2
	document.write("La suma es:" + suma)
		break;
	case 2:
	var numero1 = parseInt(prompt("Ingresa tu número 1"));
	var numero2 = parseInt(prompt("Ingresa el # 2"));
	var resta = numero1 - numero2;
	document.write("La resta es:" + resta);
		break;
	defautlt:
	document.write("no es una opción valida");
		break;	
}