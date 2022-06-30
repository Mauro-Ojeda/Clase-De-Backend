const http =  require ('http');

const resultado = () => {
    const horaActual = new Date().getHours();
    if (horaActual >= 6 && horaActual <= 12) {
    return 'Buenos días';
}else if (horaActual >= 13 && horaActual <= 19) {
    return 'Buenas tardes';
}else {
    return 'Buenas noches';
}
}
const server = http.createServer((req, res) => {
    res.end(resultado());
});
const connectedServer = server.listen(8095, () => {
    console.log('servidor escuchado en:' + connectedServer.address().port);
}
);
// Si la hora actual se encuentra entre las 6 y las 12 hs será 'Buenos días!'.
// Entre las 13 y las 19 hs será 'Buenas tardes!'. 
// De 20 a 5 hs será 'Buenas noches!'.
