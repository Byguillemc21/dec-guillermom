const Tarea = require("./tarea");

/**
 * _llista :
 *  { uuid-234235324-234234523: {id: uuid-234235324-234234523, nom: 'pepito', hores: 10 }}
 */

class ComPenTareas {
  _llista = {
    abc: 123,
  };

  get llistatArr() {
    const llistat = [];
    Object.keys(this._llista).forEach((key) => {
      const tasca = this._llista[key];
      llistat.push(tasca);
    });

    return llistat;
  }


  constructor() {
    this._llista = {};
  }

  crearTarea(nom = "", comp) {
    const tarea = new Tarea(nom, comp);
    this._llista[tarea.id] = tarea;
  }

  carregarTareasFromArray(tareas = []){
    tareas.forEach( ( tarea ) => {
      this._llista[tarea.id]= tarea;
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

  tareasCom(){
    console.log();//soc un salt de linea
    let conta = 0;
    this.llistatArr.forEach( tasca =>{
      if (tasca.completado==true){
        const { nom } = tasca;
        conta += 1;
        console.log(`${(conta + '.').green} ${nom}`);
      }
    });
    if (conta==0){console.log('No hay ninguna tarea completada');}
  } 

  tareasNocom(){
    console.log();//soc un salt de linea
    let conta = 0;
    this.llistatArr.forEach( tasca =>{
      if (tasca.completado==false){
        const { nom } = tasca;
        conta += 1;
        console.log(`${(conta + '.').green} ${nom}`);
      }
    });
    if (conta==0){console.log('Todas las tareas estan completadas');}
  }

 /*  llistarAlumnesHores(){
    console.log();
    let conta = 0;

    this.llistatArr.forEach ( alumne =>{
      const {nom, horesFetes } = alumne;
      /* const hores = horesFetes > 0 ? `${horesFetes}`.green:`${horesFetes}`.red 
      conta += 1;
      console.log(`${(conta + '.').green} ${'Nom:'.yellow} ${(nom + "").cyan} ${"::".green} ${'Hores:'.yellow} ${(horesFetes+"").cyan}`);
    }); 
 
  } */
  /* async introNumHores ( id, hores ) {
    const alumne = this._llista[id];
    alumne.horesFetes = hores;
    return alumne.nom;
  } */
  async completarTarea(id,comp) {
    const tarea3  = this._llista[id];
    tarea3.completado = comp;
    return tarea3.nom;
    
  }
  async eliminarTarea(id) {
    const tarea2 = this._llista[id];
    delete this._llista[id];
    return tarea2.nom;
  }

  
 
}

module.exports = ComPenTareas;

