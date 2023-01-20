const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'Cart method GET' })
})

router.post('/', (req, res) => {
  res.json({ message: 'Cart method POST' })
})

router.put('/', (req, res) => {
  res.json({ message: 'Cart method PUT' })
})

router.delete('/', (req, res) => {
  res.json({ message: 'Cart method DELETE' })
})

module.exports = {
  router
}