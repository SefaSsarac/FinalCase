const express = require('express');
const userController = require('../controllers/user'); 
const authMiddleware = require('../middlewares/auth')


const router = express.Router();


router.post('/korumali',authMiddleware, function test(req,res){
    console.log('test')
     res.status(200).send({message:'success'})
})
router.put('/', userController.updateUser);
router.delete('/:id', authMiddleware, userController.deleteUser);
router.get('/:id',authMiddleware,userController.getUser);
router.get('/',authMiddleware,userController.getUsers);

router.post('/order',userController.createOrder)

module.exports = router;
