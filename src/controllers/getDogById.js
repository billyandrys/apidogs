const { allDogsDbApiExterna } = require("./getAllDogs");

const getDogById = async (req, res) => {
  try {
    const allDogs = await allDogsDbApiExterna();
    const idBreed = req.params.idRaza;
    const dogsById = allDogs.find(({ id }) => id.toString() === idBreed);
    res.status(200).json({ id: dogsById });
  } catch (error) {
    const  { url , status, statusText } = res
   // throw Error(`Error ${status} ${url} ${statusText} ${error}`)
  }
};

module.exports = {
  getDogById,
};
