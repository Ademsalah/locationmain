const express = require('express')
const categoriesSchema = require('../model/categories')
 const categoriRoute = express.Router()



//  http://localhost:4000/produits/deleteproduit/657c5c81437620f83988d3a1
 categoriRoute.get('/allgat',async(req,res)=>{
try{

    const getAll = await categoriesSchema.find()
    res.status(200).json({msg:"voici kolhom",getAll})

}catch(err){
console.log(err)

res.status(500).json({ message: err });
}
})

categoriRoute.post('/addgategorie',async(req,res)=>{
    try{
        const category  = new categoriesSchema(req.body)
       await  category.save()
        res.status(200).json({msg:"hak zidet categorie jdida",category})
    }catch(err){
    console.log(err)}
    })
    
    categoriRoute.post('/update/:id',async(req,res)=>{
        try{
            const{id} = req.params

            const category  = await categoriesSchema.findByIdAndUpdate(id,{$set:{...req.body}})
            res.status(200).json({msg:"hak bedilit categorie jdida",category})
        }catch(err){
        console.log(err)}
        })
    
        
        categoriRoute.delete('/remove/:id', async (req,res)=>{
            try{
                const{id} = req.params
        
                const delstadium = await categoriesSchema.findByIdAndDelete(id)
        res.status(200).send('could delet stadiums ')
            }catch(err){
        res.status(500).send('could not delete')
            }
        })
    
            

 module.exports = categoriRoute