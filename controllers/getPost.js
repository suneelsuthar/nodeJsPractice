const express = require('express')
const router = express.Router()
let schema = require('./../schema/addPostSchema')
const db = require('./../database/database')



 router.get('/getpost',async (req,res)=>{
  let user=  await schema.find()
    res.send(user)
})



router.get('/getallpost/:_id',async (req,res)=>{
  console.log(req.params._id)
     await schema.findById({_id:req.params._id})
     .then(user=>{
       res.send(user)
     })
     .catch(err=>{
       res.send({message:err.message})
     })
  })



  router.put('/updatepost/:_id',async (req,res)=>{
    console.log(req.params._id)
       await schema.findByIdAndUpdate({_id:req.params._id},{email:req.body.updateEmail})
       .then(user=>{
         res.send(user)
       })
       .catch(err=>{
         res.send({message:err.message})
       })
    })


    router.delete('/deletpost/:_id',async (req,res)=>{
      console.log(req.params._id)
         await schema.findByIdAndDelete({_id:req.params._id})
         .then(user=>{
           res.send(user)
         })
         .catch(err=>{
           res.send({message:err.message})
         })
      })


      router.delete('/deleleposts',async (req,res)=>{
        console.log(req.params._id)
           await schema.deleteMany()
           .then(user=>{
             res.send(user)
           })
           .catch(err=>{
             res.send({message:err.message})
           })
        })
  

module.exports = router