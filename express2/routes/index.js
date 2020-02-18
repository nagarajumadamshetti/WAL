const express = require('express');
const router = express.Router(); 


router.get('/', (req,res)=>{
    res.json({
        "message": "Hello from get",
    });
});
router.put('/', (req,res)=>{
    res.json({
        "message": "Hello from get",
    });
});
router.post('/', (req,res)=>{
    res.json({
        "message": "Hello from post",
    });
});
router.delete('/',(req,res)=>{
    res.json({
        "message": "Hello from delete",
    });
});
module.exports = router;