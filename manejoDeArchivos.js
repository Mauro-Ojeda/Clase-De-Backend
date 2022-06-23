class Contenedor {
  save(archivo, contenido) {
    fs.writeFileSync(archivo, contenido);
  }
  getById( id) {
    return this.getAll().find(item => item.id === id);
  }
  getAll() {
    return JSON.parse(fs.readFileSync(this.archivo));
  }
  delete(id) {
    let lista = this.getAll();
    let index = lista.findIndex(item => item.id === id);
    lista.splice(index, 1);
    this.save(this.archivo, JSON.stringify(lista));
  }
  deleteAll() {
    this.save(this.archivo, JSON.stringify([]));
  }
}
console.log(Contenedor);

// : Implementar programa que contenga una clase llamada Contenedor que reciba el nombre del archivo con el que va a trabajar e implemente los siguientes métodos:

// save(Object): Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
// getById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no está.
// getAll(): Object[] - Devuelve un array con los objetos presentes en el archivo.
// deleteById(Number): void - Elimina del archivo el objeto con el id buscado.
// deleteAll(): void - Elimina todos los objetos presentes en el archivo.
