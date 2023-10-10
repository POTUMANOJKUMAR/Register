const express=require("express")
const router=express.Router();
const functi=require("../Controller/register")
const Validation=require("../Validation/validation")

const verifyToken=require("../authentication/auth")


router.post("/register",Validation,functi.register);

router.post('/post', verifyToken,functi.post)
  








module.exports=router