const express = require('express');
const router = express.Router()
const usercontroller = require('../controllers/guru')


router.get('/getguru', usercontroller.index)
router.get('/getidguru/:id', usercontroller.show)
router.post('/addguru', usercontroller.store)
router.put('/updateguru/:id', usercontroller.update )
router.delete('/deleteguru/:id', usercontroller.delete)

module.exports = router