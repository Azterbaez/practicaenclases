// ejercicio1
let agregarelementoFinal = (arreglo1, elemento) => {
arreglo1.puhs(elemento);
return arreglo1;
}

let numeros1 = [1, 2, 3];
console.log(agregarelementoFinal(numeros1, 0));

//ejercici2
let agregarelementoInicio = (arreglo, elemento) => {
arreglo.unshift(elemento);
return arreglo;
}

let numeros2 = [1, 2, 3];
console.log (agregarelementoInicio(numeros2, 0));

//ejercicio3
let eliminarElementoFinal = (arreglo) => {
let ultimo = arreglo.pop();
return ultimo;
}

let numeros3 = [24, 32, 89, 52];
console.log(eliminarElementoFinal(numeros3));


//ejercicio4
let elimineydevuelvaElemento = (arreglo, elemento) =>{
    let primerElemento = arreglo.shift();
    return primerElemento();
}
let numeros4= [24, 32, 89, 52];
console.log(eliminarElementoFinal(numeros4));
