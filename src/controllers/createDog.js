const { Breed, Temperament } = require("../db");

const createDog = async (req, res) => {
  const { name, height, weight, life_span, temperament, image } = req.body;
  try {

    let dogFind = await Breed.findAll({
      where: { name: name },
    });
    console.log(dogFind);
    if( !dogFind.length){
      let newDog = await Breed.create({
        name,
        height,
        weight,
        life_span,
        temperament,
        image,
      });
  
      let dbTemperament = await Temperament.findAll({
        where: { name: [...temperament] },
      });
  
      newDog.addTemperament(dbTemperament);
  
      res.status(200).json({ "Dog Create exit": newDog });
  
    }else {
      //res.status(404).json({dog: 'ya create'})
      console.log("test")
    }





      } catch (error) {
    const  { url , status, statusText } = res
       throw Error(`Error ${status} ${url} ${statusText} ${error}`)
  }
};

module.exports = {
  createDog,
};
