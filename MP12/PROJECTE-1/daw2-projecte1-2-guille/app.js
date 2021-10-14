require("colors");

const { inquirerMenu, pausa, nuevoNombre, nuevaFila, nuevaButaca, tareaSelect,tareaSelectCheck, confirmar,} = require("./helpers/inquirer");
const { guardarDB , readDB} = require("./helpers/guardarFitxer");

const Cineres = require("./models/cinereservas");

const main = async () => {
  let opt = "";
  const reservas = new Cineres();

  const reservasDB = readDB();

  if(reservasDB){// si hi ha dades, carregales
      reservas.carregarReservasFromArray(reservasDB);
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const nom = await nuevoNombre("A nombre de quien es la reserva: ")
        const fila = await nuevaFila("Indique la fila para la reserva: ");
        const butaca = await nuevaButaca("Indique la butaca: ");
        reservas.crearReserva(nom, fila, butaca);
      
        break;

      case "2":
        const sala = [['U','U','U','U','U','U','U','U'],
                      ['U','U','U','U','U','U','U','U'],
                      ['U','U','U','U','U','U','U','U'],
                      ['U','U','U','U','U','U','U','U'],
                      ['U','U','U','U','U','U','U','U'],
                      ['U','U','U','U','U','U','U','U'],
                      ['U','U','U','U','U','U','U','U'],
                      ['U','U','U','U','U','U','U','U']
                      ];
        reservas.mostrarSala(sala);
        break;

      case "3":
        tareas.tareasCom();
        break;

      case "4":
        /* const id1 = await alumneSelect(alumnes.llistatArr);
          /*const hores = await alumneHoresSelect(); 
        if ( id1 !== '0'){
          const hores = await introHores("Hores fetes :");
          const nomAlumne = await alumnes.introNumHores( id1, hores);
          console.log(`Alumne : ${nomAlumne} ${'::'.yellow} ${hores} hores guardades!`);
        } */
        tareas.tareasNocom();
        break;

      case "5":
        const idtc = await tareaSelectCheck(tareas.llistatArr);
        if ( idtc !== '0') {
            idtc.forEach(i => {
              if (i !== '0'){ 
                  const idtc2 = i;
                  const completado = true;
                  /* console.log(`Id tarea -> ${idtc2}`); */ 
                    tareas.completarTarea(idtc2,completado);
                    console.log(`La/s tasca/s a sido completada `);   
              }
              else {
                 console.log('Seleccione alguna tarea');
              }
            });
        }; 
        
        /* const id2 = await alumneSelect(alumnes.llistatArr);
        if ( id2 !== '0') {
          const ok = await confirmar();
            if (ok) {
              const alumneEliminat = await alumnes.eliminarAlumne(id2);
              console.log(`L'alumne ${alumneEliminat} ha sigut eliminat`);
            }
            else {
              console.log(`L'alumne no s'ha eliminat`);
            }
        }; */
        break;
      case "6":
        const idte = await tareaSelect(tareas.llistatArr);
        if ( idte !== '0') {
    
          const ok = await confirmar();
            if (ok) {
              const tareaEliminat = await tareas.eliminarTarea(idte);
              console.log(`La tarea '${tareaEliminat}' a sido eliminada`);
            }
            else {
              console.log(`La tarea no a sido eliminada`);
            }
        };
        break;
      default:
        break;
    }

    guardarDB(reservas.llistatArr);

    await pausa();
  } while (opt !== "0");
};

main();
