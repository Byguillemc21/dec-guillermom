
  
const fs = require("fs");
require("colors");

const crearAlumne = (alumne = "no_name", hores = 0) => {
  let sortida = "";
  sortida = `Alumne: ${alumne} Hores: ${hores}`;

  fs.writeFileSync(`Alumne_${alumne}.txt`, sortida);
};
module.exports = {
  crearAlumne,
};