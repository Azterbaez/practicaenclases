// Objeto persona con datos anidados y un array de hobbies
const persona = {
  nombre: "Carlos",
  edad: 28,
  direccion: {
    ciudad: "Madrid",
    codigoPostal: 28001
  },
  hobbies: ["leer", "correr", "pintar"]
};

// 1. Función flecha que muestra el nombre de la persona
const mostrarNombre = (persona) => {
  console.log("Nombre:", persona.nombre);
};

// 2. Función flecha que muestra la edad de la persona
const mostrarEdad = (persona) => {
  console.log("Edad:", persona.edad);
};

// 3. Función flecha que muestra la ciudad donde vive la persona
const mostrarCiudad = (persona) => {
  console.log("Ciudad:", persona.direccion.ciudad);
};

// 4. Función flecha que muestra el código postal usando corchetes
const mostrarCodigoPostal = (persona) => {
  console.log("Código Postal:", persona["direccion"]["codigoPostal"]);
};

// 5. Función flecha que muestra el segundo hobby de la persona
const mostrarSegundoHobby = (persona) => {
  console.log("Segundo hobby:", persona.hobbies[1]);
};

// Llamadas a las funciones (para que se vean los resultados)
mostrarNombre(persona);
mostrarEdad(persona);
mostrarCiudad(persona);
mostrarCodigoPostal(persona);
mostrarSegundoHobby(persona);
