const express = require('express')
let router = express.Router()
let schema = require('./../schema/addPostSchema')

router.post('/addpost', async (req,res)=>{
    let body= req.body
    const doc = new schema(body);
    await doc.save()
    .then(response=>{
        res.send({
            message:body.email
        })
        console.log("=============>",body)
    })
    .catch(error=>{
        res.send({message:error})
    })

})


router.get('/addpost',(req,res)=>{
    res.send("addpost successfully")
})


module.exports = router