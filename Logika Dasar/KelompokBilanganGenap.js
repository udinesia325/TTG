const readline = require("readline");

const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

rl.question("Masukkan Jumlah Bilangan : ", (jmlBil) => {
  rl.question("Masukkan Jumlah Kelompok : ", (jmlKel) => {
    if(isNaN(parseInt(jmlBil)) || isNaN(parseInt(jmlKel))){
        console.log("Jumlah bilangan ataupun kelompok harus berisi angka!");
        return rl.close()
    }
    KelompokBilanganGenap(jmlBil,jmlKel)
    rl.close()
  });
});

function KelompokBilanganGenap(bil, kel) {
  let data = [];
  let result = [];
  let i = 2;
  while (data.length < bil) {
    data.push(i);
    i += 2;
  }
  let mod = data.length / kel;
  for (let i = 0; i < kel; i++) {
    let startI = i * mod;
    let endI = startI + mod;
    result.push(data.slice(startI, endI));
  }

  console.log(result);
}
