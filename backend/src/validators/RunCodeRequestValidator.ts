import Joi from "joi";


const RunCodeRequestValidator = Joi.object().keys({
    lang : Joi.string().valid('python','node').required() ,
    code : Joi.string().allow('') 
})

export default RunCodeRequestValidator ;