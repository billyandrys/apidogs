const axios = require('axios')
const { SERVICES_API } = require('../services/services')
const getAllWeight = async(req, res)=>{
    try{
        const getAllDogs = await axios.get(SERVICES_API)
        const allDogs = getAllDogs.data
        const weight = allDogs?.map(({weight})=>weight)
        const metric = weight?.map(({metric})=>{
            return   { name:metric}
        
        }) 
       
       res.status(200).json({ weight_metric: metric}) 
        

        
    }catch(error){
        const  { url , status, statusText } = res
              // throw Error(`Error ${status} ${url} ${statusText} ${error}`)
               res.status(404).json({message: error})
    }
}

module.exports = {
    getAllWeight
}