const { v4: uuidv4 } = require("uuid");

class Reserva {
  id = "";
  nom = "";
  fila = "";
  columna = "";

  constructor(nom,fila,column) {
    this.id = uuidv4();
    this.nom = nom;
    this.fila = fila;
    this.columna = column;
  }
}

module.exports = Reserva;
