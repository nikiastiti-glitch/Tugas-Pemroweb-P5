
function hitung() {
    let nilai = Number(document.getElementById("nilai").value);
    let hasil = "";

    // 5 kondisi percabangan
    if (nilai >= 90) {
        hasil = "Grade A";
    } else if (nilai >= 80) {
        hasil = "Grade B";
    } else if (nilai >= 70) {
        hasil = "Grade C";
    } else if (nilai >= 60) {
        hasil = "Grade D";
    } else {
        hasil = "Grade E";
    }

    document.getElementById("hasil").innerHTML = hasil;

    // Perulangan FOR
    let teks = "";
    for (let i = 1; i <= 3; i++) {
        teks += "Belajar ke-" + i + "<br>";
    }

    // Perulangan WHILE
    let angka = 1;
    while (angka <= 2) {
        teks += "Latihan ke-" + angka + "<br>";
        angka++;
    }

    document.getElementById("ulang").innerHTML = teks;
}
