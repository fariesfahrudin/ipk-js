function ambilData() {
  let nama = document.getElementById("nama").value;
  let jmlmatkul = parseInt(document.getElementById("jmlmatkul").value);
  let jmlsks = 0;
  let jmlnilai = 0;
  let hasilHtml = ""; // String untuk menyimpan hasil perulangan
  
  console.log("Nama : " + nama);
  for (let i = 0; i < jmlmatkul; i++) {
    let matkul = prompt("Masukkan Nama Mata Kuliah Anda: ");
    let sks = parseInt(prompt("Masukkan SKS Anda: "));
    let nilai = prompt("Masukkan Nilai (A, B, C): ").toUpperCase();
    let box = ""; // Menyimpan huruf nilai
    let total = 0;

    if (nilai === "A") {
      nilai = 4;
      box = "A";
    } else if (nilai === "B") {
      nilai = 3;
      box = "B";
    } else if (nilai === "C") {
      nilai = 2;
      box = "C";
    } else {
      nilai = "Nilai yang Anda masukkan Tidak Ada";
    }

    total = sks * nilai;

    // Menambahkan hasil per iterasi ke HTML. yah mau gimana lagi hasus di akalin :)
    hasilHtml += `  
            <tr style="text-align: center;" border="1">
              <td >${matkul}</td>
              <td >${sks}</td>
              <td >${nilai} (${box})</td>
              <td >${total}</td>
            </tr>
          `;

    jmlsks += sks;
    jmlnilai += total;
  }

  let ipk = jmlnilai / jmlsks;

  //tampilan Nama
  document.getElementById("namaDisplay").innerText = nama;
  document.getElementById("jmlmatkulDisplay").innerText = jmlmatkul;
  // Menampilkan hasil akhir di HTML
  document.getElementById("hasil").innerHTML = hasilHtml;
  document.getElementById("jmlsks").innerText = jmlsks;
  document.getElementById("jmlnilai").innerText = jmlnilai;
  document.getElementById("ipk").innerText = ipk.toFixed(2);
}
