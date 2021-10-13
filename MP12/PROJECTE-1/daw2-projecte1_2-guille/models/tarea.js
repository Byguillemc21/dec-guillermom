const { v4: uuidv4 } = require("uuid");

class Tarea {
  id = "";
  nom = "";
  completado = false;

  constructor(nom,comp) {
    this.id = uuidv4();
    this.nom = nom;
    this.completado = comp;
  }
}

module.exports = Tarea;
