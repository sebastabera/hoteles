'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('express-promise-router')();

const app = express();

const port = process.env.PORT || 3000;
const hotels = require("./data")
//const server = http.createServer(app);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
/*app.get('/hotels/:name', (req, res) => {
	res.send({message: `hola ${req.params.name}`})
});*/

app.get('/api/hotels', (req, res, next) => {
	res.json(hotels);
});

app.get('/api/hotels/:filter', (req, res, next) => {
	let hotels_result = hotels.filter((h) => {
		return h.name.includes(req.params.filter);
	});
	if(!hotels_result){
		res.send(404);
	}  else{
		res.send(hotels);
	}
});


app.listen(port, () => {
	console.log(`corriendo en puerto ${port}`);
});

