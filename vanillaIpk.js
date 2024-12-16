let jmlsks = 0;
let jmlnilai = 0;
let nama = prompt("Masukan nama anda : ");
let jmlmatkul = prompt("Berapa Jumlah matkul Anda : ");
console.log("Nama : " + nama);
for (let i = 0; i < jmlmatkul; i++) {
  let matkul = prompt("Masukan Nama matkul anda : ");
  let sks = parseInt(prompt("Masukan sks anda : "));
  let nilai = prompt("masukan nilai (A,B,C) :").toUpperCase();



  if (nilai === "A") {
    nilai = 4;
    box = 4;
    if ((box = 4)) {
      box = "A";
    }
  } else if (nilai === "B") {
    nilai = 3;
    box = 3;
    if ((box = 3)) {
      box = "B";
    }
  } else if (nilai === "C") {
    nilai = 2;
    box = 2;
    if ((box = 2)) {
      box = "C";
    }
  } else {
    console.log("nilai Yang Anda masud Tidak Ada");
  }

  console.log(matkul);
  total = sks * nilai;
  
  
  console.log("Jumlah SKS : " + sks);
  console.log("Nilai Anda  : " + nilai + " / " + box);
  console.log("Nilai mata kuliah :" + total);
  console.log("==============================");
  jmlsks += sks;
  jmlnilai += total;
  ipk = jmlnilai / jmlsks;
}
console.log("jumlah sks total adalah : " + jmlsks);
console.log("jumlah nilai matkul andalah : " + jmlnilai);
console.log("nilai ipk Anda adalah : " + ipk.toFixed(2));

