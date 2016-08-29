  var opciones = parseInt(prompt("escoja una opción: \n" + 
	"1. Suma\n" +
	"2. Resta\n" +
    "3. Multiplicación\n" +
    "4. División\n" +
    "5. Residuo o resto\n" +
    "6. ¿Cuál es menor?\n" +
    "7. ¿Cuál es mayor?"
    ));
if(opciones>0 && opciones<=7){
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
        document.write("La multiplicación es:" + multiplicacion);    
        break;
    case 4:
        var division = numero1 / numero2;
        document.write("La división es:" + division);    
        break;
    case 5:
        var residuo = numero1 % numero2;
        document.write("El residuo es:" + residuo);    
        break;
    case 6: 
        if(numero1 < numero2){
            document.write("El número menor es " + numero1);
        } else{
            document.write("El número menor es " + numero2);   
        }
        break;
    case 7:    
        if(numero1 > numero2){
            document.write("El número mayor es " + numero1);
        } else{
            document.write("El número mayor es " + numero2);   
        }
        break;   
  }  
} else {
   document.write("Eso no es válido joven");
}
