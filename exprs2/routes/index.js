const express = require('express');
const router = express.Router();
const {getUsers,getUserDetails}=require('./retrieve');
//const getUserDetails=require('./retrieve');
const putData=require('./update');
const createUser=require('./insert');
const deleteData=require('./delete');


router.get('/users',getUsers);
router.get('/users/:userId',getUserDetails);
router.put('/users/:userId',putData);
router.post('/users',createUser);
//router.get('/user',)
router.delete('/users/:userId',deleteData);
module.exports = router;
