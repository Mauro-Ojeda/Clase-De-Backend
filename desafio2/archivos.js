const fs = require('fs');

class Contenedor {

  constructor(title){
    this.title =title;
  }
  async firstProduct(objeto) { 
    try {
        //First Object
        objeto.id = 1;
        await fs.promises.writeFile(this.title, JSON.stringify([objeto]));
    } catch(err) {
        console.log(err.message);
    };
};
//   async save(object){
//   const data = await fs.promises.readFile(this.title, 'utf-8');
//   const previousInfo = JSON.parse(data);

//   let newId = previousInfo[previousInfo.length - 1].id + 1;
//   object.id = newId;

//   let newArray = [...previousInfo, object];
//   await fs.promises.writeFile(this.title, JSON.stringify(newArray));
  
// }
async save(object) {
  try {
      //Read prior data
      const data = await fs.promises.readFile(this.title, 'utf-8');
      const previousInfo = JSON.parse(data);

      //Get id
      let newId = previousInfo[previousInfo.length - 1].id + 1;
      object.id = newId;

      //Write data
      let newArray = [...previousInfo, object];
      await fs.promises.writeFile(this.title, JSON.stringify(newArray));
  } catch(err) {
      console.log('No se tiene creado ningun objeto aun', err.message);
      this.firstProduct(object);
  };
};

  async getById( id) {
    const data = await fs.readFile(this.title," utf-8");
    const allData = JSON.parse(data);
    const res = allData.find(item => item.id === id);
    console.log(res);
  }
  async getAll() {
    const data = await fs.promises.readFile(this.title, "utf-8");
    const allData = JSON.parse(data);
    console.log(allData);
  }
  async deleteById(id) {
    const data = await fs.promises.readFile(this.title, 'utf-8');
  const allData =  JSON.parse(data);
console.log(data)

  const res = allData.filter(element => element.id !== id);
  await fs.promises.writeFile(this.title, JSON.stringify(res), null, 2);
  }

  async deleteAll() {
    try {
      await fs.promises.unlink(this.title);
  } catch(err) {
      console.log(err.message);
  }
  }
}
const newProduct = new Contenedor("./productos.txt");
// console.log(newProduct.getAll());

  function map(){
    newProduct.getAll().then(data => console.log(data));
    
  }


// *********************************************************************************************
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(mapear());
});

app.get('/productos', (req, res) => {
    res.send('respuesta de productos');
}
);
app.get('/random', (req, res) => {
  res.send('random');
}
);

app.listen(port,()=>{
  console.log("Tu servidor esta corriendo en el puerto 3000");
}
);

app.on("error",error =>console.log("el error es" +error));

const random = (min , max) => Math.floor(Math.random() * (max - min + 1) + min);

  const mapear = (data) => {
    let res = [];
    for (let i = 0; i < data.length; i++) {
      res.push({
        id: data[i].id,
        name: data[i].name,
        price: data[i].price,
      });
    }
    return res;
  };