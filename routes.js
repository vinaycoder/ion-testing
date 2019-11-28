const express = require('express');
const app = express();
const { compareSync, hashSync } = require('bcryptjs');
const userlist = require('./usersList');
module.exports = (app)=>{
//get routes
 app.post('/api/login',(req,res)=>{
    try {
    //  const userName="vinay";
    //  const password ="12345";
     let userDetails = userlist.find(o => o.userName === req.body.userName);
     if(!userDetails){
        res.status(400).send({
            message: 'Invalid login credentials'
         });         
     }
     else{
         if(compareSync(req.body.password,userDetails.password)){
            req.session.user = userDetails;
            res.send({session:req.session.user});
         }else{
            res.status(400).send({
                message: 'Invalid login credentials'
             });             
         }
       
     }     
    } catch (err) {
        res.send({message:"something wrong",status:422});
    }
})

app.get('/api/logout',(req,res)=>{    
    try {
        const user = req.session.user;        
        if (user) {
            delete req.session.user;        
            res.clearCookie('user_sid');
            res.send({message:"success",status:200});         
        } else {
            res.send({message:"Invalid User",status:500});
        }
      } catch (err) {
        res.send({message:"something wrong",status:422});
      }
})  

app.get('/api/session',(req,res)=>{ 
    const user = req.session.user;    
    if(user)
    {
      res.send({session:req.session.user});
    }else{
         res.status(400).send({
            message: 'This is an error!'
         });
    }
   
})  


}

