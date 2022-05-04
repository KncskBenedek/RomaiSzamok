const romaSzamok = [
  ["I", "V"],
  ["X", "L"],
  ["C", "D"],
  ["M", "ↁ"],
];
/* 
let beSzam = "3201";

const lebontvaSzam = lebont(beSzam);
//ki("------------------")
console.log( romaiAlakit(lebontvaSzam));
 */

function lebont(beSzam) {
    const tomb = [];
  if (Number(beSzam) > 0 ) {
    for (let index = beSzam.length - 1; index >= 0; index--) {
      //ki(beSzam[index])
      tomb.push(Number(beSzam[index]));
    }
  }
  //console.log(tomb);
  return tomb;
}

function romaiAlakit(szamok) {
  const szoveg = [];
  let szamokHossz = szamok.length;
  if (!(szamokHossz === 0)) {
    for (let index = 0; index < szamokHossz; index++) {
      if (!(szamok[index] === 0)) {
        if (szamok[index] > 5) {
          if (szamok[index] === 9) {
            szoveg.push(romaSzamok[index][0] + romaSzamok[index + 1][0]);
          } else {
            let szov = "";
            szov += romaSzamok[index][1];
            let y = szamok[index] - 5;
            for (let i = 0; i < y; i++) {
              szov += romaSzamok[index][0];
            }
            szoveg.push(szov);
          }
        } else {
          if (szamok[index] === 5) {
            szoveg.push(romaSzamok[index][1]);
          } else if (szamok[index] === 4) {
            szoveg.push(romaSzamok[index][0] + romaSzamok[index][1]);
          } else {
            let szov = "";
            let v = szamok[index];
            for (let x = 0; x < v; x++) {
              szov += romaSzamok[index][0];
            }
            szoveg.push(szov);
          }
        }
      }
    }
    szoveg.reverse();
  } else {
    szoveg.push("Hiba");
  }
  //console.log("------------------");

  //console.log();
  return szoveg.join("");
}
