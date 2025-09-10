// Pruebas
let nums = [1, 2, 3];
console.log("Agregar al final:", agregarAlFinal(nums, 4, 5));

let letras = ['b', 'c'];
console.log("Agregar al inicio:", agregarAlInicio(letras, 'a'));

let frutas = ['manzana', 'banana', 'naranja'];
console.log("Eliminar último:", eliminarUltimo(frutas));

let colores = ['rojo', 'verde', 'azul'];
console.log("Eliminar primero:", eliminarPrimero(colores));

let numeros = [10, 20, 30, 40];
console.log("Buscar índice de 30:", buscarIndice(numeros, 30));

console.log("Cantidad de elementos:", cantidadElementos(numeros));

let desordenados = [4, 1, 3, 2];
console.log("Ordenar ascendente:", ordenarAscendente(desordenados));

let palabras = ['hola', 'mundo'];
console.log("Unir con separador:", unirConSeparador(palabras, ' '));

console.log("Combinar arreglos:", combinarArreglos([1, 2], [3, 4], 5));

console.log("Recorrer con forEach:");
recorrerConCallback(['a', 'b', 'c'], (x) => console.log(x));

console.log("Mapear:", mapearArreglo([1, 2, 3], x => x * 2));

console.log("Filtrar pares:", filtrarArreglo([1, 2, 3, 4], x => x % 2 === 0));

console.log("Reducir (suma):", reducirArreglo([1, 2, 3], (acc, val) => acc + val, 0));

