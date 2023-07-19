const express=require('express');
const router=express.Router();

router.get('/api/notes',(req,res)=>{
    res.json([])
})

module.exports=router