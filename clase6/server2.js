const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/clima', (req, res) => {
    res.send('hace frio');
}
);

app.listen(port,()=>{
  console.log("Tu servidor esta corriendo en el puerto 3000");
}
);

app.on("error",error =>console.log("el error es" +error));