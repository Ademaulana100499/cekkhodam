let maximum = parseInt(
  prompt("Ayo masukan jumlah angka di nama kamu, untuk cek apa khodam kamu!")
);
while (!maximum) {
  maximum = parseInt(prompt("Masukan dengan angka"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("coba tebak berapa angka khodam kamu"));
let attemps = 1;
let khodam = "";

while (parseInt(guess) !== targetNum) {
  attemps++;
  if (guess > targetNum) {
    guess = parseInt(
      prompt(
        "Angka yang anda masukan masih tinggi coba lagi angka lebih rendah sehingga pas dengan angka khodam anda"
      )
    );
  } else {
    guess = parseInt(
      prompt(
        "Angka yang anda masukan masih rendah coba lagi angka lebih tinggi sehingga pas dengan angka khodam anda"
      )
    );
  }
}
if (targetNum <= 3) {
  khodam = "TUYUL BOTI";
} else if (targetNum <= 5) {
  khodam = "POCONG BUNTUNG";
} else if (targetNum <= 7) {
  khodam = "KUNTI BOTAK";
} else if (targetNum <= 10) {
  khodam = "KUNTI JANDA";
} else {
  khodam = "POCONG TAEHYUNG";
}

alert(
  `Selamat angka khodam anda adalah ${targetNum} yang berarti khodam anda adalah ${khodam} dan anda mencoba ${attemps} kali percobaan`
);
