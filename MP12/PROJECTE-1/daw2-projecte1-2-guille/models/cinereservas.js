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
    console.log(`\n=====================`.cyan);
    console.log(`${(`RESERVA COMPLETADA`).green}`);
    console.log(`=====================\n`.cyan);

  }

  // crearReserva(nom = "", fila = "", columna = "") {
    
  //   const reservaa = new Reserva(nom, fila, columna);
  //   this.llistatArr.forEach( reserva => {
  //     const { fila, columna } = reserva;
  //     if (fila == reservaa.fila && columna == reservaa.columna){
  //       console.log(`\n=====================`.cyan);
  //       console.log(`! ${(`RESERVA OCUPADA`).RED}`);
  //       console.log(`=====================\n`.cyan);
  //     }
  //     else {
  //       this._llista[reservaa.id] = reservaa;
  //       console.log(`\n=====================`.cyan);
  //       console.log(`${(`RESERVA COMPLETADA`).green}`);
  //       console.log(`=====================\n`.cyan);
  //     }
  //   })
      

  // }

  carregarReservasFromArray(reservas = []){
    reservas.forEach( ( reserva ) => {
      this._llista[reserva.id]= reserva;
    });
  }

  mostrarSala(sala){
    console.log(); //Soc un salt de linia
    /* console.log('              _'.cyan); */
    let conta = 0;
    console.log(`   ${(`_____________________________`).bgBlue.blue}`);
    console.log(`  ${(`|`).bgBlue.blue}                             ${(`|`).bgBlue.blue}`);
    this.llistatArr.forEach( reserva =>{
      
        const { fila, columna } = reserva;
        conta += 1;
        console.log(`  ${(`|`).bgBlue.blue}    ${(conta + '.').green} Fila: ${fila}  Butaca: ${columna}    ${(`|`).bgBlue.blue}`);
      
    });
    console.log();
    console.log('| |=============================|'.blue);
    console.log('| |=========-SALA CINE-=========|'.cyan);
    console.log('| |=============================|___'.blue);
    console.log(`|___      `.cyan,' ||||||||||'.italic.red,'         __  |'.cyan);
    console.log('  |                            |  | |'.cyan); //Soc una salt de linia
    
    for (let a = 0; a < sala.length; a++) {
      process.stdout.write(`  |  `.cyan);
      for (let b = 0; b <=7; b++) {
        let columnas = sala[a][b];
        let ocupado = false;
        this.llistatArr.forEach( reserva =>{
          
          const { fila, columna } = reserva;
          
          //console.log(`${fila} ${columna}`);

          if (a == fila-1 && b == columna-1){
            ocupado = true;
            if(ocupado == true){
              process.stdout.write(`|`.blue+`${columnas}`.red+`|`.blue);
            }
          }
        
        }); 
        if (ocupado == false){
          process.stdout.write(`|`.blue+`${columnas}`.green+`|`.blue);
        }
      }
      process.stdout.write(`  |  | |`.cyan);
      console.log();
    }
   

    console.log('  |                            |'.cyan); //Soc un salt de linia
    console.log('  |============================|'.cyan);

  }

  mostrarSala2(sala){
    
    console.log('| |=============================|'.blue);
    console.log('| |=========-SALA CINE-=========|'.cyan);
    console.log('| |=============================|___'.blue);
    console.log(`|___      `.cyan,' ||||||||||'.italic.red,'         __  |'.cyan);
    console.log('  |                            |  | |'.cyan); //Soc una salt de linia
    
    for (let a = 0; a < sala.length; a++) {
      process.stdout.write(`  |  `.cyan);
      for (let b = 0; b <=7; b++) {
        let columnas = sala[a][b];
        let ocupado = false;
        this.llistatArr.forEach( reserva =>{
          
          const { fila, columna } = reserva;
          
          //console.log(`${fila} ${columna}`);

          if (a == fila-1 && b == columna-1){
            ocupado = true;
            if(ocupado == true){
              process.stdout.write(`|`.blue+`${columnas}`.red+`|`.blue);
            }
          }
        
        }); 
        if (ocupado == false){
          process.stdout.write(`|`.blue+`${columnas}`.green+`|`.blue);
        }
      }
      process.stdout.write(`  |  | |`.cyan);
      console.log();
    }
   

    console.log('  |                            |'.cyan); //Soc un salt de linia
    console.log('  |============================|'.cyan);

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
  
  async eliminarReserva(id) {
    const elreserva = this._llista[id];
    delete this._llista[id];
    return elreserva.nom;
  }

  

  
 
}

module.exports = Cineres;

