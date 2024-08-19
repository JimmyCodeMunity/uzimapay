const express = require('express');
const { createUser } = require('../controller/Usercontroller');
const { getToken } = require('../controller/PaymentController');


const router = express.Router();
router.use(express.json());

//allow url encoding
router.use(express.urlencoded({extended:false}))

//create user router
router.post('/createuser',createUser);
// router.get('/gettoken',getToken);


module.exports = router;