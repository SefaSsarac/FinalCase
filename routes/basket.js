const express = require('express');
const basketController = require('../controllers/basket');



const router = express.Router();


router.post('/',basketController.create)
router.post('/clear',basketController.clearBasket)
router.get('/:userId',basketController.getBasket)
router.delete('/',basketController.deleteProduct)



module.exports = router;

