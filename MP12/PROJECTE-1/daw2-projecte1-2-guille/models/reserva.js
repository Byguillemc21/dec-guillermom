const { v4: uuidv4 } = require("uuid");

class Reserva {
  id = "";
  fila = "";
  columna = "";

  constructor(fila,column) {
    this.id = uuidv4();
    this.fila = fila;
    this.columna = column;
  }
}

module.exports = Reserva;
