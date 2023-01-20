const { Router } = require('express')

const router = Router()

const CartList = []

router.get('/', (req, res) => {
    res.json({ message: CartList })
})

router.post('/', (req, res) => {
    const infoProduct = req.body
    users.push(infoProduct)
    res.json({ message: 'Carrito creado exitosamente!' })
})

router.post('/:cartdId/products/:id', (req, res) => {
    const Cart = req.body
    const NuevaLista = JSON.parse(Cart.products)
    const IdCartElement = CartList.findIndex(producto => producto.productId == NuevaLista.products.productId)
    if(IdCartElement != -1){
        const NewValue = Number(NuevaLista.quantity[IdCartElement]) + 1
        CartList.products.quantity[IdCartElement] = NewValue
    }
    else{
        CartList.push(Cart)
    }
    res.json({ message: 'Producto agregado al carrito exitosamente!' })
})

router.get('/:cartId', (req, res) => {
    const { id } = req.params
    const myId = Number(id)
    const cartPos = CartList.findIndex(list => list.id === myId)
    if(cartPos != -1){
        res.json({ message: CartList[cartPos] })
    }
    else{
        res.json({ message: "Error al realizar busqueda"} )
    }
})

module.exports = router