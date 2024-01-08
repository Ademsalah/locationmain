const meetingSchema = require('../model/meeting');

exports.Getmeeting=async(req,res)=>{
    try{
    const meetings = await meetingSchema.find()
    res.status(200).send({meetings,msg:'list of meetings'})
    }catch{
    res.status(500).send('could not get meetings')
    }
    }


    exports.Addmeeting=async(req,res)=>{
        try{
     const Newmeeting= new meetingSchema(req.body)
     await Newmeeting.save()
    res.status(200).send({Newmeeting,msg:"you did it the meetings is added "})
        }catch(err){
            res.status(500).send('could not add the meeting')
        }
    }

    exports.Updatemeeting = async(req,res)=>{
        const {id}= req.params
        try{
            const Updatemeeting = await meetingSchema.findByIdAndUpdate(id,{$set:{...req.body}})
    res.status(200).send('the meetings is updated ')
        }catch(err){
            res.status(500).send('u didnt do it  , no meetings is not  updated')
        }
    }
    exports.GetById=async(req,res)=>{
        const {id} = req.params
    
        try{
    
    const getuser = await meetingSchema.findById(id)
    res.status(200).send({getuser})
        }catch(err){
            console.log(err)
            res.status(500).send('there is no getting meetings now ')
            
        }
    }

    exports.deletmeeting= async (req,res)=>{
        try{
            const{id} = req.params
    
            const delmeeting = await meetingSchema.findByIdAndDelete(id)
    res.status(200).send('could delet meetings ')
        }catch(err){
    res.status(500).send('could not delete')
        }
    }
