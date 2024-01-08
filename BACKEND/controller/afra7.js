const afra7Schema = require('../model/afra7');

exports.Getafra7=async(req,res)=>{
    try{
    const afra7s = await afra7Schema.find()
    res.status(200).send({afra7s,msg:'list of afra7s'})
    }catch{
    res.status(500).send('could not get afra7s')
    }
    }


    exports.Addafra7=async(req,res)=>{
        try{
     const Newafra7= new afra7Schema(req.body)
     await Newafra7.save()
    res.status(200).send({Newafra7,msg:"you did it the afra7s is added "})
        }catch(err){
            res.status(500).send('could not add the afra7')
        }
    }

    exports.Updateafra7 = async(req,res)=>{
        const {id}= req.params
        try{
            const Updateafra7 = await afra7Schema.findByIdAndUpdate(id,{$set:{...req.body}})
    res.status(200).send('the afra7s is updated ')
        }catch(err){
            res.status(500).send('u didnt do it  , no afra7s is not  updated')
        }
    }
    exports.GetById=async(req,res)=>{
        const {id} = req.params
    
        try{
    
    const getuser = await afra7Schema.findById(id)
    res.status(200).send({getuser})
        }catch(err){
            console.log(err)
            res.status(500).send('there is no getting afra7s now ')
            
        }
    }

    exports.deletafra7= async (req,res)=>{
        try{
            const{id} = req.params
    
            const delafra7 = await afra7Schema.findByIdAndDelete(id)
    res.status(200).send('could delet afra7s ')
        }catch(err){
    res.status(500).send('could not delete')
        }
    }
