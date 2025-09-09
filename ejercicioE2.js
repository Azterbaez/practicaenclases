// 1. Declara una variable nombre y asígnale tu nombre. Muestra su valor en consola.
let nombre = "Juan";
console.log("Nombre:", nombre);

// 2. Declara dos variables edad y ciudad y muéstralas juntas en un solo console.log.
let edad = 25;
let ciudad = "Madrid";
console.log("Edad:", edad, "| Ciudad:", ciudad);

// 3. Declara una constante PI con el valor 3.1416 y muéstrala en consola.
const PI = 3.1416;
console.log("Valor de PI:", PI);

// 4. Declara tres variables con valores numéricos y calcula su promedio.
let num1 = 8;
let num2 = 6;
let num3 = 10;
let promedio = (num1 + num2 + num3) / 3;
console.log("Promedio:", promedio);

// 5. Declara una variable esMayorDeEdad con un valor booleano y muéstrala.
let esMayorDeEdad = true;
console.log("¿Es mayor de edad?", esMayorDeEdad);

// ...existing code...

// 6. Declara dos números y muestra su suma.
let a = 12;
let b = 7;
console.log("Suma:", a + b);

// 7. Declara dos números y muestra su resta, multiplicación y división.
let x = 20;
let y = 5;
console.log("Resta:", x - y);
console.log("Multiplicación:", x * y);
console.log("División:", x / y);

// 8. Declara dos números y muestra el resultado de elevar el primero al segundo.
let base = 3;
let exponente = 4;
console.log("Potencia:", base ** exponente);

// 9. Declara una variable precio y otra descuento (en %) y calcula el precio final.
let precio = 100;
let descuento = 15; // porcentaje
let precioFinal = precio - (precio * descuento / 100);
console.log("Precio final con descuento:", precioFinal);

// ...existing code...

// 10.Usando un for, muestra en consola los números del 1 al 10.
console.log("Números del 1 al 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 11.Usando un for, muestra en consola la tabla de multiplicar del 5.
console.log("Tabla de multiplicar del 5:");
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}


// 12.Usando un while, muestra en consola los números pares del 2 al 20.
console.log("Números pares del 2 al 20:");
let num = 2;
while (num <= 20) {
    console.log(num);
    num += 2;
}


// 13.Crea una función saludar que reciba un nombre y muestre un saludo.
function saludar(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}
saludar("Carlos"); // Prueba

// 14.Crea una función sumar que reciba dos números y retorne su suma.
function sumar(num1, num2) {
    return num1 + num2;
}
console.log("Suma:", sumar(5, 3)); // Prueba

// 15.Crea una función esPar que reciba un número y retorne true si es par, false si no lo es.
function esPar(numero) {
    return numero % 2 === 0;
}
console.log("¿Es par?", esPar(4)); // Prueba
console.log("¿Es par?", esPar(7)); // Prueba

// 16.Crea una función areaRectangulo que reciba base y altura y retorne su área.
// Funciones flecha
function areaRectangulo(base, altura) {
    return base * altura;
}
console.log("Área del rectángulo:", areaRectangulo(5, 10)); // Prueba

// 17.Crea una función flecha multiplicar que reciba dos números y retorne su
// producto.
const multiplicar = (a, b) => a * b;
console.log("Producto:", multiplicar(4, 6)); // Prueba

// 18.Crea una función flecha convertirCelsiusAFahrenheit que reciba grados
// Celsius y retorne su equivalente en Fahrenheit.
const convertirCelsiusAFahrenheit = celsius => (celsius * 9/5) + 32;
console.log("Fahrenheit:", convertirCelsiusAFahrenheit(25)); // Prueba

// 19.Crea una función flecha mayorDeDos que reciba dos números y retorne el mayor.
const mayorDeDos = (a, b) => (a > b ? a : b);
console.log("Mayor número:", mayorDeDos(10, 20)); // Prueba

// 20.Crea una función flecha calcularIVA que reciba un precio y retorne el precio más IVA (15%).
const calcularIVA = precio => precio * 1.15;
console.log("Precio con IVA:", calcularIVA(100)); // Prueba


// 21.Declara un arreglo con 5 nombres y recórrelo con un for mostrando cada nombre.
let nombres = ["Ana", "Luis", "María", "Carlos", "Lucía"];
console.log("Lista de nombres:");
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

// 22.Declara un arreglo con 5 números y usa un for para mostrar solo los números mayores que 10.
let numeros = [4, 15, 9, 22, 7];
console.log("Números mayores que 10:");
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 10) {
        console.log(numeros[i]);
    }
}

// 23.Declara un arreglo con 5 palabras y usa un for para mostrar su longitud (.length).
let palabras = ["perro", "sol", "computadora", "árbol", "cielo"];
console.log("Longitud de cada palabra:");
for (let i = 0; i < palabras.length; i++) {
    console.log(`${palabras[i]}: ${palabras[i].length} letras`);
}

// 24.Declara un objeto persona con propiedades nombre, edad y ciudad. Usa un
//for...in para mostrar cada clave y valor.
let persona = {
    nombre: "Laura",
    edad: 30,
    ciudad: "Barcelona"
};

console.log("Propiedades del objeto persona:");
for (let clave in persona) {
    console.log(`${clave}: ${persona[clave]}`);
}

// 25.Declara un arreglo de objetos con 3 productos (nombre y precio) y usa un for
//para mostrar solo los nombres de los productos.
let productos = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Teléfono", precio: 800 },
    { nombre: "Teclado", precio: 100 }
];

console.log("Nombres de los productos:");
for (let i = 0; i < productos.length; i++) {
    console.log(productos[i].nombre);
}
