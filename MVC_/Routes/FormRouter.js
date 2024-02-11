import express from "express";
import { PostMessage } from "../Controller/FormController.js";

const FormRouter = express.Router();

FormRouter.route("/contact").post(PostMessage);
FormRouter.get('/check',(req,res)=>{res.send({success:true,message:"hey there welcome to my portfolio"})})
export default FormRouter;
