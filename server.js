const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
 //servir archivos estaticos nodemon server.js con user siempre se va a llamar
 // para el hbs use npm install hbs  como estoy en sub carpertas solo me lo tomo al agregarlo también a la de node raiz
app.use(express.static(__dirname+ '/public'));
// express HBS
hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');
app.get('/', (req, res)=>{
    res.render('home', {
        nombre: 'Milagros',
        anio: new Date().getFullYear()
    });
})
app.get('/about', (req, res)=>{
    res.render('about', {
        anio: new Date().getFullYear()
    });
})
/* app.get('/', (req, res) => {
    let salida = {
        nombre: 'fernando',
        edad: 32,
        url: req.url
    }
    res.send(salida);
  //res.send('Hello World')
}); */

app.get('/data', (req, res) => {
    res.send('Hola Data');
})
 
app.listen(3000, () =>{
    console.log('Escuchando peticiones en el puerto 3000')
})