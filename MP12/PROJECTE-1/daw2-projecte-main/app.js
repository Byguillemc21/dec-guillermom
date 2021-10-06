require("colors");

const { inquirerMenu, pausa, novaTarea, alumneSelect, introHores, confirmar} = require("./helpers/inquirer");
const { guardarDB , readDB} = require("./helpers/guardarFitxer");

const AlumnesHores = require("./models/alumneshores");

const main = async () => {
  let opt = "";
  const tareas = new AlumnesHores();

  const tareasDB = readDB();

  if(tareasDB){// si hi ha dades, carregales
      tareas.carregarAlumnesFromArray(tareasDB);
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const nomTarea = await novaTarea("Nom de la tarea: ");
        tareas.crearTarea(nomTarea);
        // const alumne = new Alumne("Ricard", 10);
        // console.log(alumne);
        break;

      case "2":
        tareas.llistarTareas();
        break;

      case "3":
        alumnes.llistarAlumnesHores();
        break;

      case "4":
        const id1 = await alumneSelect(alumnes.llistatArr);
        /* const hores = await alumneHoresSelect(); */
        if ( id1 !== '0'){
          const hores = await introHores("Hores fetes :");
          const nomAlumne = await alumnes.introNumHores( id1, hores);
          console.log(`Alumne : ${nomAlumne} ${'::'.yellow} ${hores} hores guardades!`);
        }
        
        break;

      case "5":
        //eliminar alumne de la bbdd

        //const id2 = ...
        //if ( id2 !== '0'){
        //  
        //
        //  
        //}

        const id2 = await alumneSelect(alumnes.llistatArr);
        if ( id2 !== '0') {
          const ok = await confirmar();
            if (ok) {
              const alumneEliminat = await alumnes.eliminarAlumne(id2);
              console.log(`L'alumne ${alumneEliminat} ha sigut eliminat`);
            }
            else {
              console.log(`L'alumne no s'ha eliminat`);
            }
        };
        break;
      case "6":
        
      default:
        break;
    }

    guardarDB(tareas.llistatArr);

    await pausa();
  } while (opt !== "0");
};

main();
