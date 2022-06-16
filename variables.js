class usuario{
  constructor(nombre, apellido, libros,mascotas){
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }
}

let usuario1 = new usuario("Antonio", "Lopez", ["Harry Potter", "El señor de los anillos"], ["Perro", "Gato"]);

getFullName = () => {
  console.log( `${usuario1.nombre} ${usuario1.apellido}`);
}
getFullName();

addMascota = () => {
  usuario1.mascotas.push('Leon');
}
addMascota();
console.log(usuario1.mascotas)

countMascotas = () => {
  console.log(usuario1.mascotas.length);
}
countMascotas();

addLibro = () => {
  usuario1.libros.push('LoveCraft');
  console.log(usuario1.libros);
}
addLibro();

getBookNames = () => {
  console.log(usuario1.libros);
}
getBookNames();