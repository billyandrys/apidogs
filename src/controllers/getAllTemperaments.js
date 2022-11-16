const { Temperament } = require("../db");

const getAllTemperaments = async (req, res) => {
  try {
    const getAllTemparaments = await Temperament.findAll();
    res.status(200).json({ temperaments: getAllTemparaments });
  } catch (error) {
    const  { url , status, statusText } = res
    throw Error(`Error ${status} ${url} ${statusText} ${error}`)
  }
};

module.exports = {
  getAllTemperaments,
};
