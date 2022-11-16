const axios = require("axios");
const { Temperament } = require("../db");
const { SERVICES_API } = require("../services/services");

const createAllTemperaments = async (req, res) => {
  try {
    const allApiExterna = await axios.get(SERVICES_API);
    const allBreeds = allApiExterna.data;
    const allTemperaments = allBreeds.map(({ temperament }) => temperament);
    let eachTemperaments = [];

    allTemperaments.forEach((temperament) => {
      let allTemperamentEach = temperament?.split(",");

      eachTemperaments.push(allTemperamentEach);
    });

    const allListTemperaments = [];

    eachTemperaments.forEach((temperaments) => {
      temperaments?.forEach((temperament) => {
        let deleteSpacesTemperaments = temperament.replace(/ /g, "");
        allListTemperaments.push(deleteSpacesTemperaments);
      });
    });

    const deleteTemperamentsRepeat = new Set(allListTemperaments);
    let listTemparaments = [...deleteTemperamentsRepeat];
    const listTemperamentSaveDB = listTemparaments.map((temperament) => {
      return { name: temperament };
    });

    await Temperament.bulkCreate(listTemperamentSaveDB);
  } catch (e) {
   
       throw Error(`Error ${e} `)
  }
};

module.exports = {
  createAllTemperaments,
};
