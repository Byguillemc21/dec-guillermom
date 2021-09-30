require("colors");
const fs = require("fs");

const llistarTaula = (base, limit) => {
  console.log("=====================".green);
  console.log(
    `${"||".green}${("   Taula del " + base + "   ").yellow}${"||".green}`
  );
  console.log("=====================".green);

  for (let i = 0; i <= limit; i++) {
    console.log(`${base} * ${i} = ${base * i}`.yellow);
  }
};

const crearFitxer = (base, limit) => {
  if (!Number(base)) {
    console.log("El valor de la base ha de ser numeric");
    return;
  }
  let data = "";
  for (let i = 0; i <= limit; i++) {
    data += base + " * " + i + " = " + base * i + "\n";
  }

  fs.writeFile(`taula-${base}-${limit}.txt`, data, (err) => {
    if (err) throw Error(err);
    else {
      console.log(`taula_${base} -- $(limit).txt`);
    }
  });
};

module.exports = {
  llistarTaula,
  crearFitxer,
};