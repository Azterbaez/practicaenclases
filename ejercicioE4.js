const universidad = {
  nombre: "Universidad Central",
  ubicacion: {
    ciudad: "Sevilla",
    direccion: {
      calle: "Av. Principal",
      numero: 123
    }
  },
  facultades: [
    {
      nombre: "Ingeniería",
      carreras: [
        {
          nombre: "Informática",
          estudiantes: [
            { nombre: "Laura", edad: 20, hobbies: ["programar", "ajedrez"] },
            { nombre: "Javier", edad: 22, hobbies: ["fútbol", "cine"] }
          ]
        },
        {
          nombre: "Civil",
          estudiantes: [
            { nombre: "Sofía", edad: 21, hobbies: ["fotografía", "leer"] }
          ]
        }
      ]
    },
    {
      nombre: "Derecho",
      carreras: [
        {
          nombre: "Derecho Penal",
          estudiantes: [
            { nombre: "Andrés", edad: 23, hobbies: ["debate", "natación"] }
          ]
        }
      ]
    }
  ]
};

// 1. Muestra el nombre de la universidad
const mostrarNombreUniversidad = (uni) => {
  console.log("Nombre de la universidad:", uni.nombre);
};

// 2. Muestra la calle donde está ubicada
const mostrarCalle = (uni) => {
  console.log("Calle:", uni.ubicacion.direccion.calle);
};

// 3. Muestra el nombre de la primera facultad
const mostrarPrimeraFacultad = (uni) => {
  console.log("Primera facultad:", uni.facultades[0].nombre);
};

// 4. Muestra el nombre de la segunda carrera en la primera facultad
const mostrarSegundaCarreraPrimeraFacultad = (uni) => {
  console.log("Segunda carrera en la primera facultad:", uni.facultades[0].carreras[1].nombre);
};

// 5. Muestra el nombre del primer estudiante de la carrera de Informática
const mostrarPrimerEstudianteInformatica = (uni) => {
  console.log("Primer estudiante de Informática:", uni.facultades[0].carreras[0].estudiantes[0].nombre);
};

// 6. Muestra el segundo hobby de Laura
const mostrarSegundoHobbyLaura = (uni) => {
  console.log("Segundo hobby de Laura:", uni.facultades[0].carreras[0].estudiantes[0].hobbies[1]);
};

// 7. Muestra la edad de Sofía
const mostrarEdadSofia = (uni) => {
  console.log("Edad de Sofía:", uni.facultades[0].carreras[1].estudiantes[0].edad);
};

// 8. Muestra el primer hobby del estudiante de Derecho Penal
const mostrarHobbyDerechoPenal = (uni) => {
  console.log("Primer hobby del estudiante de Derecho Penal:", uni.facultades[1].carreras[0].estudiantes[0].hobbies[0]);
};

mostrarNombreUniversidad(universidad);

mostrarCalle(universidad);

mostrarPrimeraFacultad(universidad);

mostrarSegundaCarreraPrimeraFacultad(universidad);

mostrarPrimerEstudianteInformatica(universidad);

mostrarSegundoHobbyLaura(universidad);

mostrarEdadSofia(universidad);

mostrarHobbyDerechoPenal(universidad);
