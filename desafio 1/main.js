console.log('Hello World');

// function random(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let object = {
//     name: 'John',
//     key: random(1,20)
// }
// console.log(object);

// const productos = [
//   { id:1, nombre:'Escuadra', precio:323.45 },
//   { id:2, nombre:'Calculadora', precio:234.56 },
//   { id:3, nombre:'Globo Terráqueo', precio:45.67 },
//   { id:4, nombre:'Paleta Pintura', precio:456.78 },
//   { id:5, nombre:'Reloj', precio:67.89 },
//   { id:6, nombre:'Agenda', precio:78.90 }
// ]
// function total(){
//   precios = productos.reduce((acc,{precio})=> acc + precio,0)
//   console.log(precios);
// }
// total();

// 16/12/2001
// 21/06/2021

function Edad(){
  let hoy = new Date(2021,6,21);
  let fechaDeNacimiento = new Date(2001,12,16);
  let edad = hoy.getFullYear() - fechaDeNacimiento.getFullYear();
  let mes = hoy.getMonth() - fechaDeNacimiento.getMonth();
  if (mes < 0 || (mes === 0 && hoy.getDate() < fechaDeNacimiento.getDate())) {
    edad;
  }
  return edad;
}


Edad();

// function getEdad(dateString) {
//   let hoy = new Date()
//   let fechaNacimiento = new Date(1985,06,01)
//   let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
//   let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
//   if (
//     diferenciaMeses < 0 ||
//     (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
//   ) {
//     edad
//   }
//   return edad
// }

// console.log(getEdad())
