// --------------------------------------
// 1. push(): Agrega elementos al final
let numeros = [1, 2, 3];
let longitudPush = numeros.push(4, 5);
console.log("push:", numeros); // [1, 2, 3, 4, 5]
console.log("Nueva longitud:", longitudPush); // 5

// --------------------------------------
// 2. unshift(): Agrega elementos al inicio
let letras = ['b', 'c'];
let longitudUnshift = letras.unshift('a');
console.log("unshift:", letras); // ['a', 'b', 'c']
console.log("Nueva longitud:", longitudUnshift); // 3

// --------------------------------------
// 3. pop(): Elimina el último elemento
let frutas = ['manzana', 'banana', 'naranja'];
let ultima = frutas.pop();
console.log("pop:", frutas); // ['manzana', 'banana']
console.log("Elemento eliminado:", ultima); // 'naranja'

// --------------------------------------
// 4. shift(): Elimina el primer elemento
let colores = ['rojo', 'verde', 'azul'];
let primero = colores.shift();
console.log("shift:", colores); // ['verde', 'azul']
console.log("Elemento eliminado:", primero); // 'rojo'

// --------------------------------------
// 5. indexOf(): Devuelve el índice del primer elemento encontrado
let nums = [10, 20, 30, 20, 40];
console.log("indexOf 20:", nums.indexOf(20)); // 1
console.log("indexOf 20 desde índice 2:", nums.indexOf(20, 2)); // 3

// --------------------------------------
// 6. length: Devuelve cantidad de elementos o modifica tamaño
let arr = [1, 2, 3];
console.log("length:", arr.length); // 3
arr.length = 1; // Trunca a [1]
console.log("Truncado:", arr); // [1]
arr.length = 5; // Rellena con undefined
console.log("Extendido:", arr); // [1, undefined, undefined, undefined, undefined]

// --------------------------------------
// 7. sort(): Ordena elementos (con comparador para números)
let desordenados = [3, 1, 4, 2];
desordenados.sort((a, b) => a - b);
console.log("sort:", desordenados); // [1, 2, 3, 4]

// --------------------------------------
// 8. join(): Convierte arreglo en cadena
let palabras = ['hola', 'mundo'];
let texto = palabras.join(' ');
console.log("join:", texto); // 'hola mundo'

// --------------------------------------
// 9. concat(): Une arreglos
let arr1 = [1, 2];
let arr2 = [3, 4];
let combinado = arr1.concat(arr2, [5]);
console.log("concat:", combinado); // [1, 2, 3, 4, 5]

// --------------------------------------
// 10. forEach(): Recorre sin devolver
let colores2 = ['rojo', 'verde', 'azul'];
console.log("forEach:");
colores2.forEach(color => console.log(color)); // rojo, verde, azul

// --------------------------------------
// 11. map(): Devuelve nuevo arreglo modificado
let nums2 = [1, 2, 3];
let dobles = nums2.map(x => x * 2);
console.log("map:", dobles); // [2, 4, 6]

// --------------------------------------
// 12. filter(): Devuelve nuevo arreglo con elementos que cumplen condición
let nums3 = [1, 2, 3, 4];
let pares = nums3.filter(x => x % 2 === 0);
console.log("filter:", pares); // [2, 4]

// --------------------------------------
// 13. reduce(): Reduce el arreglo a un solo valor
let nums4 = [1, 2, 3, 4];
let suma = nums4.reduce((acc, curr) => acc + curr, 0);
console.log("reduce:", suma); // 10

// --------------------------------------
// 14. some(): ¿Al menos uno cumple la condición?
let nums5 = [1, 2, 3, 4];
let hayPares = nums5.some(x => x % 2 === 0);
console.log("some:", hayPares); // true

// --------------------------------------
// 15. every(): ¿Todos cumplen la condición?
let nums6 = [2, 4, 6, 8];
let todosPares = nums6.every(x => x % 2 === 0);
console.log("every:", todosPares); // true

// --------------------------------------
// 16. find(): Devuelve el primer elemento que cumple la condición
let nums7 = [1, 2, 3, 4];
let encontrado = nums7.find(x => x > 2);
console.log("find:", encontrado); // 3

// --------------------------------------
// 17. findIndex(): Devuelve índice del primer elemento que cumple la condición
let nums8 = [1, 2, 3, 4];
let indiceEncontrado = nums8.findIndex(x => x > 2);
console.log("findIndex:", indiceEncontrado); // 2

// --------------------------------------
// 18. entries(): Devuelve iterador con pares [índice, valor]
let colores3 = ['rojo', 'verde', 'azul'];
let iteradorEntries = colores3.entries();
console.log("entries:", [...iteradorEntries]);
// [[0, 'rojo'], [1, 'verde'], [2, 'azul']]

// --------------------------------------
// 19. keys(): Iterador con índices
let iteradorKeys = colores3.keys();
console.log("keys:", [...iteradorKeys]); // [0, 1, 2]

// --------------------------------------
// 20. values(): Iterador con valores
let iteradorValues = colores3.values();
console.log("values:", [...iteradorValues]); // ['rojo', 'verde', 'azul']


