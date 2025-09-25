const mascotas = [
    { nombre: "Luna", edad: 3, tipo: "Perro", peso: 10.5 },
    { nombre: "Max", edad: 5, tipo: "Gato", peso: 4.2 },
    { nombre: "Coco", edad: 1, tipo: "Conejo", peso: 2.3 },
    { nombre: "Rocky", edad: 7, tipo: "Perro", peso: 15.8 },
    { nombre: "Milo", edad: 2, tipo: "Gato", peso: 3.9 },
    { nombre: "Bella", edad: 4, tipo: "Perro", peso: 8.7 },
    { nombre: "Toby", edad: 6, tipo: "Conejo", peso: 2.8 },
    { nombre: "Simba", edad: 3, tipo: "Gato", peso: 5.1 },
    { nombre: "Nala", edad: 2, tipo: "Perro", peso: 12.4 },
    { nombre: "Oreo", edad: 5, tipo: "Gato", peso: 4.8 },
    { nombre: "Daisy", edad: 1, tipo: "Conejo", peso: 1.9 },
    { nombre: "Zeus", edad: 8, tipo: "Perro", peso: 20.1 },
    { nombre: "Mimi", edad: 4, tipo: "Gato", peso: 4.5 },
    { nombre: "Bunny", edad: 3, tipo: "Conejo", peso: 2.5 },
    { nombre: "Thor", edad: 6, tipo: "Perro", peso: 18.3 }
];

// 1. Ordenar por edad ascendente
const porEdadAsc = [...mascotas].sort((a, b) => a.edad - b.edad);
console.log("1. Por edad ascendente:", porEdadAsc);


// 2. Ordenar por nombre alfabéticamente
const porNombreAsc = [...mascotas].sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log("2. Por nombre ascendente:", porNombreAsc);


// 3. Ordenar por edad descendente
const porEdadDesc = [...mascotas].sort((a, b) => b.edad - a.edad);
console.log("3. Por edad descendente:", porEdadDesc);


// 4. Ordenar por tipo alfabéticamente y, si son del mismo tipo, por edad ascendente
const porTipoYEdad = [...mascotas].sort((a, b) => {
    const tipo = a.tipo.localeCompare(b.tipo);
    return tipo === 0 ? a.edad - b.edad : tipo;
});
console.log("4. Por tipo y edad:", porTipoYEdad);


// 5. Invertir el orden del arreglo
const invertido = [...mascotas].reverse();
console.log("5. Invertido:", invertido);


// 6. Nuevo arreglo con nombres en mayúsculas
const nombresMayus = mascotas.map(m => m.nombre.toUpperCase());
console.log("6. Nombres en mayúsculas:", nombresMayus);


// 7. Peso total de todas las mascotas
const pesoTotal = mascotas.reduce((acc, m) => acc + m.peso, 0);
console.log("7. Peso total:", pesoTotal);


// 8. Nuevo arreglo con solo los perros
const soloPerros = mascotas.filter(m => m.tipo === "Perro");
console.log("8. Solo perros:", soloPerros);







