require("colors");

const { inquirerMenu, pausa, novaTarea, tareaSelect,tareaSelectCheck, confirmar,} = require("./helpers/inquirer");
const { guardarDB , readDB} = require("./helpers/guardarFitxer");

const ComPenTareas = require("./models/cptareas");

const main = async () => {
  let opt = "";
  const tareas = new ComPenTareas();

  const tareasDB = readDB();

  if(tareasDB){// si hi ha dades, carregales
      tareas.carregarTareasFromArray(tareasDB);
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const nomTarea = await novaTarea("Nombre de la tarea: ");
        tareas.crearTarea(nomTarea, false);
      
        break;

      case "2":
        tareas.llistarTareas();
        break;

      case "3":
        tareas.tareasCom();
        break;

      case "4":
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
                    console.log(`La(s) tasca(s) a sido completada `);   
              }
              else {
                 console.log('Seleccione alguna tarea');
              }
            });
        }; 
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

    guardarDB(tareas.llistatArr);

    await pausa();
  } while (opt !== "0");
};

main();
