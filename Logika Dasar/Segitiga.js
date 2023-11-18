const readline = require("readline");

const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

rl.question("Masukkan Jumlah Baris : ", (baris) => {
    Segitiga(baris)
    rl.close()
});

function Segitiga(baris) {
    for (let i = baris; i > 0; i--) {
        console.log('*'.repeat(2 * i - 1));
    }
}