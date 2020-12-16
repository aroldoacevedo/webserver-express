const express = require('express');
var hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000;

// helpers--
require('./hbs/helpers');

//http://localhost:3000/home.html
//En esta ruta estan las hojas de estilo 
app.use(express.static(__dirname + '/public'));

//  Express HBS engine -- 
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    res.render('home', { nombre: 'Aroldo Acevedo' });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`);
});