require("colors");

const { inquirerMenu, pausa, nuevoNombre, nuevaFila, nuevaButaca, reservaSelect, confirmar,} = require("./helpers/inquirer");
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
        const idre = await reservaSelect(reservas.llistatArr);
        if ( idre !== '0') {
    
          const ok = await confirmar();
            if (ok) {
              const reservaEliminat = await reservas.eliminarReserva(idre);
              console.log(`La reserva a nombre de '${(''+reservaEliminat).blue}' a sido eliminada`);
            }
            else {
              console.log(`La reserva no a sido eliminada`);
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
