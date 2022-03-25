const Joi=require('joi');

module.exports={

    validateBody: (schema)=>{
        return (req,res,next)=>{
            const result=Joi.validate(req.body,schema);
            if(result.error){
                return res.status(400).send(result.error)
            }
            if(!req.value){
                req.value={}
            }
            req.value['body']=result.value;
            next();
        }
    },
    
    //valiadtion schemas
    schemas: {
        regSchema: Joi.object().keys({
            teamName: Joi.string().allow(''),
            teamDetails: Joi.array().items(Joi.string()),
            paymentStatus: Joi.string()
        }).unknown(false),

    }
}