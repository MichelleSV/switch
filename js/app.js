var opciones = parseInt(prompt("escoja una opción: \n" + 
	"1. Suma\n" +
	"2. Resta\n" +
    "3. Multiplicación\n" +
    "4. División\n" +
    "5. Potencia\n" +
    "6. Radicación\n" +
    "7. Mayor\n" +
	"8. Menor"
    ));

var numero1 = parseInt(prompt("Ingresa tu número 1"));
var numero2 = parseInt(prompt("Ingresa tu número 2"));

switch(opciones){
	case 1:
	var suma = numero1 + numero2;
	document.write("La suma es:" + suma);
	break;
        
	case 2:
	var resta = numero1 - numero2;
	document.write("La resta es:" + resta);
        break;
        
    case 3:
    var multiplicacion = numero1 * numero2;
    document.write("La resta es:" + multiplicacion);    
        break;
        
    case 4:
    var division = numero1 / numero2;
    document.write("La resta es:" + division);    
        break;
        
    case 5:
    var residuo = numero1 % numero2;
    document.write("La resta es:" + residuo);    
        break;
        
    case 6: 
        
    var potencia = Math.pow(numero1,numero2);
    document.write("La resta es:" + potencia);    
    break;
    
    case 6:    
    var  radicacion = Math.sqrt2(numero1);
         document.write("La raiz cuadrada es " + radicacion);
        break;
	default:
	document.write("no es una opción valida");
    break;	
}