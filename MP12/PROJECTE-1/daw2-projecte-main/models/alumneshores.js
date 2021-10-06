const Tarea = require("./tarea");

/**
 * _llista :
 *  { uuid-234235324-234234523: {id: uuid-234235324-234234523, nom: 'pepito', hores: 10 }}
 */

class AlumnesHores {
  _llista = {
    abc: 123,
  };

  get llistatArr() {
    const llistat = [];
    Object.keys(this._llista).forEach((key) => {
      const alumne = this._llista[key];
      llistat.push(alumne);
    });

    return llistat;
  }


  constructor() {
    this._llista = {};
  }

  crearTarea(nom = "") {
    const tarea = new Tarea(nom);
    this._llista[tarea.id] = tarea;
  }

  carregarAlumnesFromArray(alumnes = []){
    alumnes.forEach( ( alumne ) => {
      this._llista[alumne.id]= alumne;
    });
  }

  llistarTareas(){
    console.log();//soc un salt de linea
    let conta = 0;
    this.llistatArr.forEach( alumne =>{
      const { nom } = alumne;
      conta += 1;
      console.log(`${(conta + '.').green} ${nom}`);
    });
  }

  llistarAlumnesHores(){
    console.log();
    let conta = 0;

    this.llistatArr.forEach ( alumne =>{
      const {nom, horesFetes } = alumne;
      /* const hores = horesFetes > 0 ? `${horesFetes}`.green:`${horesFetes}`.red */
      conta += 1;
      console.log(`${(conta + '.').green} ${'Nom:'.yellow} ${(nom + "").cyan} ${"::".green} ${'Hores:'.yellow} ${(horesFetes+"").cyan}`);
    }); 
 
  }
  async introNumHores ( id, hores ) {
    const alumne = this._llista[id];
    alumne.horesFetes = hores;
    return alumne.nom;
  }

  async eliminarTarea(id) {
    const tarea2 = this._llista[id]
    delete this._llista[id];
    return tarea2.nom;
  }

}

module.exports = AlumnesHores;

