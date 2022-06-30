class usuario{
  constructor(nombre, apellido, libros,mascotas){
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }
  getFullName (){
    return`${this.nombre} ${this.apellido}` ;
  }
  addLibro(libro){
    this.libros.push(libro);
  }
  addmascota(mascota){
    this.mascotas.push(mascota);
  }
  countMascotas(){
    return this.mascotas.length;
  }
  getBookNames(){
    return this.libros
  }
}
let usuario1 = new usuario("Antonio", "Lopez", ["Harry Potter", "El señor de los anillos"], ["Perro", "Gato"]);

console.log(usuario1.getFullName());
usuario1.addLibro("El señor de los anillos 2");
console.log(usuario1.libros);
usuario1.addmascota("Pez");
console.log(usuario1.mascotas);
console.log(usuario1.countMascotas());
console.log(usuario1.getBookNames());