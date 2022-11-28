const { Breed, Temperament } = require("../db");

const createDog = async (req, res) => {
  const { name, height, weight, life_span, temperament, image } = req.body;
  
  let dogFind = await Breed.findOne({
    where: { name: name }
    });
  console.log(dogFind)
  if(dogFind === null){
    try {
      let newDog = await Breed.create({
        name,
        height,
        weight,
        life_span,
        temperament,
        image,
      });
  
      let dbTemperament = await Temperament.findAll({
        where: { name: [...temperament] }
      });
        console.log('test api')
      newDog.addTemperament(dbTemperament);
  
      res.status(200).json({ "Dog Create exit": newDog });
        } catch (error) {
    const   { url , status, statusText } = res
               throw Error(`Error ${status} ${url} ${statusText} ${error}`)
              }      
  }else{
    res.status(404).json({ "Dog Create exit": 'FALL' });
    //throw Error('ya exite')
  }

  
  
};

module.exports = {
  createDog,
};
