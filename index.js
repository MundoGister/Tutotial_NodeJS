'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.urlencoded({
	extended: false
}))
app.use(bodyParser.json())

app.get('/hola', (req, res) => {
	res.send(200, {products: []})
})

app.get('/api/product', (req, res) => {
	res.send(200, {products: []})
})

app.get('/api/product/:productId', (req, res) => {
	res.send(200, {})
})

app.post('/api/product', (req, res) => {
	console.log(req.body)
	res.status(200).send({message: 'El producto se ha recibido correctamente'})
})

app.put('/api/product/:productId', (req, res) => {
	console.log(req.body)
})

app.delete('/api/product/:productId', (req, res) => {

})

app.listen(3001, () => {
	console.log(`API REST corriendo en http://localhost:${port}`)

})
