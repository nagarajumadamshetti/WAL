const express = require('express');
const router = express.Router();
const {getUsers,getUserDetails}=require('./retrieve');

const putData=require('./update');
const createUser=require('./insert');
const deleteData=require('./delete');
const userRoles=require('./userRoles');

router.get('/users',getUsers);
router.get('/users/:userId',userRoles);

//router.get('/users/:userId',getUserDetails);
router.put('/users/:userId',putData);
router.post('/users',createUser);
router.delete('/users/:userId',deleteData);
module.exports = router;
