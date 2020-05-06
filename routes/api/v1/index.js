const express=require('express');

// using express route
const router=express.Router();

router.use('/movie',require('./movies'));


module.exports=router;