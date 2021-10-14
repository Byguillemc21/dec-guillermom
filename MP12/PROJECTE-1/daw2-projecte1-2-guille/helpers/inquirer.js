const inquirer = require("inquirer");
const ComPenTareas = require("../models/cinereservas");
require("colors");

const preguntes = [
  {
    type: "list",
    name: "opcio",
    message: "Què vols fer?",
    choices: [
      {
        value: "1",
        name: `${"1. ".green} Nova reserva`,
      },
      {
        value: "2",
        name: `${"2. ".green} Mostrar sala`,
      },
      {
        value: "3",
        name: `${"3. ".green} Mostrar recaudació`,
      },
      {
        value: "4",
        name: `${"4. ".green} Eliminar reserva`,
      },
      {
        value: "0",
        name: `${"0. ".green} Salir`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log(`=========`.cyan ,`${'CINE MAX'.green}`, `=========`.cyan);
  console.log("    Secciona una opció".gray);
  console.log("============================\n".cyan);

  const { opcio } = await inquirer.prompt(preguntes);

  return opcio; // retorno un valor entre 0 i 5
};

const pausa = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: `Presiona ${"enter".yellow} para continuar`,
    },
  ];
  console.log("\n");
  await inquirer.prompt(question);
};

const nuevaFila = async (message) => {
  const question = [
    {
      type: "input",
      name: "nom",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Porfavor, introduzca una fila";
        }
        return true;
      },
    },
  ];

  const { nom } = await inquirer.prompt(question);
  return nom;
};

const nuevaButaca = async (message) => {
  const question = [
    {
      type: "input",
      name: "nom",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Porfavor, introduzca una butaca";
        }
        return true;
      },
    },
  ];

  const { nom } = await inquirer.prompt(question);
  return nom;
};

const tareaSelectCheck = async( tareas = [] ) => {
  const choices = tareas.map( (tarea, i) => {
    const idx =`${ i +1}.`.green;
    return {
      value: tarea.id,
      name: `${idx} ${tarea.nom}`
    };
  });
  choices.unshift({
    value: '0',
    name: '0. '.green + 'Cancel·lar'
  });
  const pregunta= [
    {
      type: 'checkbox',
      name: 'id',
      message:'Selecciona tarea',
      choices,

    },
  ];

  const {id} = await inquirer.prompt(pregunta);
  return id;
};

const tareaSelect = async( tareas = [] ) => {
  const choices = tareas.map( (tarea, i) => {
    const idx =`${ i +1}.`.green;
    return {
      value: tarea.id,
      name: `${idx} ${tarea.nom}`
    };
  });
  choices.unshift({
    value: '0',
    name: '0. '.green + 'Cancel·lar'
  });
  const pregunta= [
    {
      type: 'list',
      name: 'id',
      message:'Selecciona tarea',
      choices,

    },
  ];

  const {id} = await inquirer.prompt(pregunta);
  return id;
};
/* 
const eliminarAlumne = aync( alumnes = [] ) => {

};
 */


/* const introHores = async(message) => {
  const question = [
    {
      type: "input",
      name: "hores",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Si us plau, introdueix un numero";
        }
        return true;
      },
    },
  ];
  const { hores } = await inquirer.prompt(question);
  return hores;
} */

const confirmar = async() => {
  const question = [
    {
      type: "confirm",
      name: "ok",
      message: "Quieres eliminar esta tarea? ",
    },
  ];
  const { ok } = await inquirer.prompt(question);
  return ok;

}






module.exports = {
  inquirerMenu,
  pausa,
  nuevaFila,
  nuevaButaca,
  tareaSelect,
  tareaSelectCheck,
  confirmar,
};
