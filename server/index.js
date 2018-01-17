'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

/*app.get('/hotels/:name', (req, res) => {
	res.send({message: `hola ${req.params.name}`})
});*/

app.get('/api/hotels', (req, res) => {
	res.send({message: `hola ${req.params.name}`})
});

app.get('/api/hotels/:param', (req, res) => {

});

app.post('/api/hotel', (req, res) => {
	res.status(200).send({message: 'todo correcto'});
});

app.put('/api/hotel/:hotelId', (req, res) => {

});

app.delete('/api/hotel/:hotelId', (req, res) => {

});

app.listen(port, () => {
	console.log(`corriendo en puerto ${port}`);
});

