const Reserva = require("./reserva");


/**
 * _llista :
 *  { uuid-234235324-234234523: {id: uuid-234235324-234234523, nom: 'pepito', hores: 10 }}
 */

class Cineres {
  _llista = {
    abc: 123,
  };

  get llistatArr() {
    const llistat = [];
    Object.keys(this._llista).forEach((key) => {
      const reserva = this._llista[key];
      llistat.push(reserva);
    });

    return llistat;
  }


  constructor() {
    this._llista = {};
  }

  crearReserva(nom = "", fila = "", columna = "") {
    const reserva = new Reserva(nom, fila, columna);
    this._llista[reserva.id] = reserva;
  }

  carregarReservasFromArray(reservas = []){
    reservas.forEach( ( reserva ) => {
      this._llista[reserva.id]= reserva;
    });
  }

  mostrarSala(sala){
    console.log(); //Soc un salt de linia
    /* console.log('              _'.cyan); */
    console.log('| |=============================|'.blue);
    console.log('| |=========-SALA CINE-=========|'.cyan);
    console.log('| |=============================|___'.blue);
    console.log(`|____     `.cyan,' ||||||||||'.italic.red,'         __  |'.cyan);
    console.log('  |                            |  | |'.cyan); //Soc una salt de linia
      //  for (let fila = 0; fila < sala.length; fila++) {
      //    let columnas = sala[fila].join('|'.blue);
         
      //    console.log('|    '.cyan+`|`.blue+`${columnas}`+`|`.blue+`    |`.cyan); 
         
      //  } 
    for (let a = 0; a < sala.length; a++) {
      process.stdout.write(`  |  `.cyan);
      for (let b = 0; b <=7; b++) {
        let columnas = sala[a][b];
        process.stdout.write(`|`.blue+`${columnas}`.green+`|`.blue);
        
      }
      process.stdout.write(`  |  | |`.cyan);
      console.log();
    }
    /* const arrr = arr.join(' ')+'.'; */
   

    console.log('  |                            |'.cyan); //Soc un salt de linia
    console.log('  |============================|'.cyan);
    
  }

  // llistarTareas(){
  //   console.log();//soc un salt de linea
  //   let conta = 0;
  //   this.llistatArr.forEach( tarea =>{
  //     const { nom } = tarea;
  //     conta += 1;
  //     console.log(`${(conta + '.').green} ${nom}`);
  //   });
  // }

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
  
  async eliminarReserva(id) {
    const elreserva = this._llista[id];
    delete this._llista[id];
    return elreserva.nom;
  }

  

  
 
}

module.exports = Cineres;

