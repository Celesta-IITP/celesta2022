const Joi=require('joi');

module.exports={

    validateBody: (schema)=>{
        return (req,res,next)=>{
            const result=Joi.validate(req.body,schema);
            console.log(result.error);
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
        eventSchema: Joi.object().keys({
            organizers: Joi.string().allow(''),
            name: Joi.string().required(),
            description: Joi.string(),
            imageUrl: Joi.string().allow(''),
            venue: Joi.string().allow(''),
            venueUrl: Joi.string().allow(''),
            date: Joi.string().allow(''),
            startTime: Joi.string().allow(''),
            endTime: Joi.string().allow(''),
            teamSize: Joi.string(),
            eventType: Joi.string(),
            rulebookUrl: Joi.string().allow(''),
            charge: Joi.string(),
            postLinks: Joi.string().allow('')
        }).unknown(false),

    }
}