const express = require('express');
const router = express.Router();
const getUsers=require('./get');
const signIn=require('./api/signin');
const signUp=require('./api/signup');
const signOut=require('./api/signout');
const profile=require('./api/profile');

const putData=require('./put');
//const signUp=require('./post');
const deleteUser=require('./delete');


router.get('/getUsers',getUsers);
router.put('/signin',signIn);
router.get('/profile',profile);
router.put('/signout',signOut);
router.put('/users/:userId',putData);
router.post('/signup',signUp);
router.delete('/deleteUser/:userId',deleteUser);
module.exports = router;
