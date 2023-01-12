const express = require('express')

const app = express()

const productos = [
  {
    id: 1,
    title: "Producto1",
    description: "Descripcion1",
    price: 1000,
    thumbnail: "Link1",
    code: 001,
    stock: 13000,
    id: 1
  },
  {
    id: 2,
    title: "Producto2",
    description: "Descripcion2",
    price: 90000,
    thumbnail: "Link2",
    code: 002,
    stock: 15000,
    id: 1
  },
  {
    id: 3,
    title: "Producto3",
    description: "Descripcion3",
    price: 9000,
    thumbnail: "Link3",
    code: 003,
    stock: 19000,
    id: 3
  },
  {
    id: 4,
    title: "Producto4",
    description: "Descripcion4",
    price: 25000,
    thumbnail: "Link4",
    code: 004,
    stock: 500,
    id: 4
  }
]

app.use(express.json())

app.get('/productos', (req, res) => {
  res.send(productos)
})

app.get('/productos/:id', (req, res) => {
  res.send(productos)
})

app.post('/productos', (req, res) => {
  const { title, description, price, thumbnail, code, stock, id} = req.body
  users.push({ title, description, price, thumbnail, code, stock,id})
  res.status(201).json({ message: 'Producto creado' })
})

app.put('/producto/:id', (req, res) => {
  const { id } = req.params
  const { title, description, price, thumbnail, code, stock } = req.body
  const infoUser = {
    title, description, price, thumbnail, code, stock
  }

  if (!title) res.status(400).json('error: no hay productos con ese nombre')
  if (!description) res.status(400).json('error: no hay productos que concuerden con esa descripcion')
  if (!price) res.status(400).json('error: no hay productos con ese precio')
  if (!thumbnail) res.status(400).json('error: no hay productos con ese thumbnail')
  if (!code) res.status(400).json('error: no hay productos con ese codigo de producto')
  if (!title) res.status(400).json('error: no hay productos con ese nombre')
  if (!stock) res.status(400).json('error: no hay stock de este producto')

  const myId = Number(id)
  const userPos = users.findIndex(user => user.id === myId)
  const userId = users[userPos].id
  users[userPos] = {
    userId,
    ...infoUser
  }
  res.json({ message: 'usuario actualizado' })
})

app.listen(8080, () => {
  console.log('server running at port 8080')
})