const express = require('express');
const router = express.Router();
const {getUsers,getUserDetails}=require('./retrieve');

const putData=require('./update');
const createUser=require('./insert');
const deleteData=require('./delete');
const userRoles=require('./userRoles');
const softDelete=require('./softDelete');
const userProjects=require('./userProjects');

router.get('/users',getUsers);
//router.get('/users/:userId',userRoles);
router.get('/users/:userId',userProjects);
//router.get('/users/:userId',getUserDetails);
router.put('/users/:userId',putData);
router.post('/users',createUser);
router.delete('/users/:userId',softDelete);
module.exports = router;
