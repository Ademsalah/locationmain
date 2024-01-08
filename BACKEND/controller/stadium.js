const stadiumSchema = require('../model/stadium');

exports.Getstadium=async(req,res)=>{
    try{
    const stadiums = await stadiumSchema.find()
    res.status(200).send({stadiums,msg:'list of stadiums'})
    }catch{
    res.status(500).send('could not get stadiums')
    }
    }


    exports.Addstadium=async(req,res)=>{
        try{
     const Newstadium= new stadiumSchema(req.body)
     await Newstadium.save()
    res.status(200).send({Newstadium,msg:"you did it the stadiums is added "})
        }catch(err){
            res.status(500).send('could not add the stadium')
        }
    }

    exports.UpdateStadium = async(req,res)=>{
        const {id}= req.params
        try{
            const UpdateStadium = await stadiumSchema.findByIdAndUpdate(id,{$set:{...req.body}})
    res.status(200).send('the stadiums is updated ')
        }catch(err){
            res.status(500).send('u didnt do it  , no stadiums is not  updated')
        }
    }
    exports.GetById=async(req,res)=>{
        const {id} = req.params
    
        try{
    
    const getuser = await stadiumSchema.findById(id)
    res.status(200).send({getuser})
        }catch(err){
            console.log(err)
            res.status(500).send('there is no getting stadiums now ')
            
        }
    }

    exports.deletstadium= async (req,res)=>{
        try{
            const{id} = req.params
    
            const delstadium = await stadiumSchema.findByIdAndDelete(id)
    res.status(200).send('could delet stadiums ')
        }catch(err){
    res.status(500).send('could not delete')
        }
    }
