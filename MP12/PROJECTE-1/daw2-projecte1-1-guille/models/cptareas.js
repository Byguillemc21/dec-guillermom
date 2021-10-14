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
    this.llistatArr.forEach( tarea =>{
      const { nom, completado } = tarea;
      const compl = completado === true ? 'SI' : 'NO';
      conta += 1;
      console.log(`${(conta + '.').green} ${(`Nombre: `).gray}${nom}  |  ${(`Completado: `).gray}${compl}`);
    });
    
  }

  tareasCom(){
    console.log();//soc un salt de linea
    let conta = 0;
    this.llistatArr.forEach( tasca =>{
      if (tasca.completado==true){
        const { nom, completado } = tasca;
        const compl = completado === true ? 'SI' : 'NO';
        conta += 1;
        console.log(`${(conta + '.').green} ${(`Nombre: `).gray}${nom}  |  ${(`Completado: `).gray}${compl}`);
      }
    });
    if (conta==0){console.log('No hay ninguna tarea completada');}
  } 

  tareasNocom(){
    console.log();//soc un salt de linea
    let conta = 0;
    this.llistatArr.forEach( tasca =>{
      if (tasca.completado==false){
        const { nom, completado } = tasca;
        const compl = completado === true ? 'SI' : 'NO';
        conta += 1;
        console.log(`${(conta + '.').green} ${(`Nombre: `).gray}${nom}  |  ${(`Completado: `).gray}${compl}`);
      }
    });
    if (conta==0){console.log('Todas las tareas estan completadas');}
  }

  async completarTarea(id,comp) {
    const tarea3  = this._llista[id];
    const nombre = tarea3.nom;
    const compl = tarea3.completado;
    if (compl === true){ 
      console.log(`La tarea '${(''+nombre).cyan}' ya estaba completada, selecciones una tarea que no la este`);
      return;
    }else{
      tarea3.completado = comp;
      console.log(`La tarea '${(''+nombre).cyan}' a sido completada `);
      return;
    }
    
  }
  async eliminarTarea(id) {
    const tarea2 = this._llista[id];
    delete this._llista[id];
    return tarea2.nom;
  }

  

  
 
}

module.exports = ComPenTareas;

