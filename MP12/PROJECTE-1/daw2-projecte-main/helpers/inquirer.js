const inquirer = require("inquirer");
const AlumnesHores = require("../models/alumneshores");
require("colors");

const preguntes = [
  {
    type: "list",
    name: "opcio",
    message: "Qué desea hacer?",
    choices: [
      {
        value: "1",
        name: `${"1. ".green} Crear tarea`,
      },
      {
        value: "2",
        name: `${"2. ".green} Listar tareas`,
      },
      {
        value: "3",
        name: `${"3. ".green} Listar tareas completadas`,
      },
      {
        value: "4",
        name: `${"4. ".green} Listar tareas pendientes`,
      },
      {
        value: "5",
        name: `${"5. ".green} Completar tarea(s)`,
      },
      {
        value: "6",
        name: `${"6. ".green} Borrar tarea`,
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
  console.log("========================".green);
  console.log("   Seccione una opció".gray);
  console.log("========================\n".green);

  const { opcio } = await inquirer.prompt(preguntes);

  return opcio; // retorno un valor entre 0 i 5
};

const pausa = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: `Presiona ${"enter".yellow} per a continuar`,
    },
  ];
  console.log("\n");
  await inquirer.prompt(question);
};

const novaTarea = async (message) => {
  const question = [
    {
      type: "input",
      name: "nom",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Si us plau, introdueix una tarea";
        }
        return true;
      },
    },
  ];

  const { nom } = await inquirer.prompt(question);
  return nom;
};

const alumneSelect = async( alumnes = [] ) => {
  const choices = alumnes.map( (alumne, i) => {
    const idx =`${ i +1}.`.green;
    return {
      value: alumne.id,
      name: `${idx} ${alumne.nom}`
    };
  });
  choices.unshift({
    value: '0',
    name: '0.'.green + 'Cancel·lar'
  });
  const pregunta= [
    {
      type: 'list',
      name: 'id',
      message:'Selecciona alumne',
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
const introHores = async(message) => {
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
}

const confirmar = async() => {
  const question = [
    {
      type: "confirm",
      name: "ok",
      message: "Vols eliminar aquest alumne? ",
    },
  ];
  const { ok } = await inquirer.prompt(question);
  return ok;

}



module.exports = {
  inquirerMenu,
  pausa,
  novaTarea,
  alumneSelect,
  introHores,
  confirmar,
};
