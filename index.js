let personas = [
  {
    nombre: {
      primerNombre: "Juan",
      segundoNombre: "Francisco",
      apellido: "Aguirre",
    },
    edad: 26,
    esMenor: false,
  },
  {
    nombre: {
      primerNombre: "Guido",
      segundoNombre: "Francisco",
      apellido: "Lo Pinto",
    },
    edad: 32,
    esMenor: null,
  },
  {
    nombre: {
      primerNombre: "Valentin",
      segundoNombre: "",
      apellido: "Gonzalez",
    },
    edad: 26,
    esMenor: false,
  },
  {
    nombre: {
      primerNombre: "Ricardo",
      segundoNombre: "Juan",
      apellido: "Perez",
    },
    edad: 16,
    esMenor: true,
  },
];

console.log("After");
// forma vieja de escribir las funciones
// function agregarMayoriaDeEdad(persona) {
//   persona = {
//     ...persona,
//     esMayor: true,
//   };
//   return persona;
// }

// forma nueva de escribir las funciones (arrow function)
// se quita la palabra function, se quita el
// nombre de la funcion y se agrega una flecha
// let agregarMayoriaDeEdad = (persona) => {
//   persona = {
//     ...persona,
//     esMayor: true,
//   };
//   return persona;
// };

// Bucle for
// for (let i = 0; i < personas.length; i++) {
//   personas[i] = { ...personas[i], esMayor: true };
//   console.log(personas[i]);
// }

// utilizando forEach
personas.forEach((persona, i, personas) => {
  personas[i] = {
    ...persona,
    esMayor: null,
  };
});

// utilizando map
let personas1 = personas.map((persona) => {
  //     (persona = {
  //       ...persona,
  //       esMayor: null,
  //     })

  // usando operador ternario v1.0
  persona.edad >= 18
    ? (persona = { ...persona, esMayor: true })
    : (persona = { ...persona, esMayor: false });

  // usando operador ternario v2.0
  //   persona = {
  //     ...persona,
  //     esMayor: persona.edad >= 18 ? true : false,
  //   };

  return persona;
});

console.log(personas);
console.log(personas1);
