const { v4: uuidv4 } = require("uuid");

class Tarea {
  id = "";
  nom = "";

  constructor(nom) {
    this.id = uuidv4();
    this.nom = nom;
  }
}

module.exports = Tarea;
