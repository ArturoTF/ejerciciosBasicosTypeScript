# ejerciciosBasicosTypeScript
Algunos ejercicios hechos en Typescript + un archivo para ejecutar tsc + node.

### Para ejecutar el archivo execute.py hay que tener:
-Python instalado correctamente
-Las variables comando1 y comando2 son los comandos que ejecuta el archivo en **Visual Studio Code**, el usuario tendra que cambiar los dos comandos con su ruta.
comando1 = "tsc .\turuta.ts"
comando2 = "node .\turuta.js" 
Al ejecutar el ts te genera el js.

## Enunciados de los ejercicios
### Ejercicio 1
Crear una interfaz producto con desc y precio. Crear dos productos, un teléfono y una Tablet. 
Creamos una función calcularIva, que reciba un array de productos y devuelva un number.
Recorrer los productos, sumar el total de precios y devolver el 15% del total. 
Creamos un array con la Tablet y el teléfono y mostramos por pantalla el resultado.

### Ejercicio 2
Crear una clase Cine con número de salas, dirección, precio 
Clase sala, nºAsientos, calidadTV, sonido, tamañoPantalla, película,
asientosVendidos.
Clase Película, autor, duración, género, año
Hacer unas funciones que puedas comprar entradas en el cine,
y lleve el control de las entradas vendidas en cada sala.  
Restricciones: no se pueden vender mas asientos en una sala
de asientos tenga la sala.

### Ejercicio 3
Crea un programa que compruebe que el trineo de Santa Claus hace una parábola al saltar entre ciudades . 
Recibes un array que representan la altura  en la que se encuentra el trineo en cada momento.
Para que la parabola sea correcta, el viaje del trineo debe ser ascendente al principio, 
llegar al punto más alto y descender hasta el final.  
No puede volver a subir una vez que ha bajado, ni puede iniciar el viaje bajando.

const heights = [1, 3, 8, 5, 2]
 
checkJump(heights) // true 

const heights = [1, 7, 3, 5]
checkJump(heights) // false

### Ejercicio 4
Santa Claus necesita hacer una revisión de sus cajas de regalos para asegurarse de que puede empaquetarlas 
todas en su trineo. Cuenta con una serie de cajas de diferentes tamaños, que se caracterizan por su longitud, 
anchura y altura.
Tu tarea es escribir una función que, dada una lista de cajas con sus tamaños, determine si es posible empaquetar 
todas las cajas en una sola de manera que cada caja contenga a otra (que a su vez contenga a otra, y así 
sucesivamente).
Cada caja representa sus medidas con un objeto. Por ejemplo: {l: 2, w: 3, h: 2}. Esto significa que la caja tiene 
una longitud de 2, una anchura de 3 y una altura de 2.
Una caja entra en otra caja si todos los lados de la primera son menores a los lados de la segunda. 
Los elfos nos han dicho que las cajas no se pueden rotar, así que no se puede poner una caja de 2x3x2 en una caja 
de 3x2x2. Veamos unos ejemplos:
fitsInOneBox([
{ l: 1, w: 1, h: 1 },
{ l: 2, w: 2, h: 2 }
]) // true
