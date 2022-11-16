const { SERVICES_API } = require("../services/services");
const { Breed, Temperament } = require("../db");
const axios = require("axios");
const searchWord = (dog, word) => {
  for (let i = 0; i < dog?.length; i += 1) {
    const dogString = dog.toString();
    const dogLower = dogString.toLowerCase();
    const wordLower = word.toLowerCase();
    if (dogLower.slice(i, i + word.length) === wordLower) {
      return dog;
    }
  }
};

const allDogsDbApiExterna = async () => {
  const allDogs = await Breed.findAll({
    include: [Temperament],
  });
  const ApiExternal = await axios.get(SERVICES_API);
  const dogsApiExternal = ApiExternal.data;
  const allDogsList = dogsApiExternal.map(
    ({ id, name, weight, height, life_span, image, temperament }) => {
      weight = weight.metric;
      height = height.metric;
      image = image.url;
      return { id, name, weight, height, life_span, image, temperament };
    }
  );

  if (allDogs.length) {
    allDogs.forEach((dogDb) => {
      
      allDogsList.push(dogDb);
    });
  }

  return allDogsList;
};

const getAllDogs = async (req, res) => {
  try {
    let word = req.query.name;
    word = typeof word === "number" ? word.toString() : word;
    if (word) {
      
  
      const allDogs = await allDogsDbApiExterna();
      const dogs = allDogs.filter((dog) => {

        return (
          searchWord(dog.name, word) ||
          searchWord(dog.temperament, word) ||
          searchWord(dog.height, word) ||
          searchWord(dog.weight, word) ||
          searchWord(dog.life_span, word)
        );
      });
     
      if( dogs.length ){
        res.status(200).json(dogs);
      }else{
         res.status(200).json({ notfound : true})
         
      }
      

      
    } else {
      const allDogs = await allDogsDbApiExterna();
      res.status(200).json(allDogs);
    }
  } catch (error) {
    const  { url , status, statusText } = res
    return (`Error ${status} ${url} ${statusText} ${error}`)
  }
};

module.exports = {
  getAllDogs,
  allDogsDbApiExterna,
};
