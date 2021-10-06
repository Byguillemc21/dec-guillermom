const { v4: uuidv4 } = require("uuid");

class Alumne {
  id = "";
  nom = "";

  constructor(nom) {
    this.id = uuidv4();
    this.nom = nom;
  }
}

module.exports = Alumne;
