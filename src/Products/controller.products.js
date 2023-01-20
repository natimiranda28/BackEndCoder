const { Router } = require('express')

const router = Router()

const products = []

router.get('/', (req, res) => {
    res.json({ message: products })
})

router.put('/:id', (req, res) => {
    const { id } = req.params
    const { title, description, price, thumbnail, code, stock } = req.body
    const infoProd = {
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
    const prodPosition = products.findIndex(product => product.id === myId)
    const prodId = products[prodPosition].id
    users[prodPosition] = {
        prodId,
        ...infoProd
    }
    res.json({ message: 'Producto actualizado' })
})

router.delete('/:id', (req, res) =>{
    const { id } = req.params
    const myId = Number(id)
    const prodPosition = products.findIndex(product => product.id === myId)
    if(prodPosition != -1){
        array.splice(prodPosition, 1);
    }
    else{
        res.json({message: 'Error al eliminar'})
    }
})

router.post('/', (req, res) => {
    const infoProduct = req.body
    users.push(infoProduct)
    res.json({ message: 'Producto creado exitosamente!' })
})

module.exports = router