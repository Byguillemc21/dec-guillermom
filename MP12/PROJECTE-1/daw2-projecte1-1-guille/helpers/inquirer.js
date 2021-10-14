const inquirer = require("inquirer");
const ComPenTareas = require("../models/cptareas");
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
  console.log("   Seccione una opción".gray);
  console.log("========================\n".green);

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

const novaTarea = async (message) => {
  const question = [
    {
      type: "input",
      name: "nom",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Porfavor, introduzca una tarea";
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
    const compl = tarea.completado === true ? 'SI' : 'NO';
    return {
      value: tarea.id,
      name: `${idx} ${(`Nombre: `).gray}${tarea.nom}   |  ${(`Completo: `).gray}${compl}`
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
    const compl = tarea.completado === true ? 'SI' : 'NO'; 
    return {
      value: tarea.id,
      name: `${idx} ${(`Nombre: `).gray}${tarea.nom}   |  ${(`Completo: `).gray}${compl}`
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
  novaTarea,
  tareaSelect,
  tareaSelectCheck,
  confirmar,
};
