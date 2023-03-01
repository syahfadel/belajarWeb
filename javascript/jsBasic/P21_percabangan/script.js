/*
percabangan
*/

var angka = prompt("Masukkan Angka");
if(angka % 2 === 0){
    alert("anda memasukan bilangan GENAP");
} else if (angka % 2 === 1) {
    alert("anda memasukan bilangan GANJIL");
} else {
    alert("input '" + angka + "' bukan angka ")
}

var hari = parseInt(prompt("Hari ke-")); //parseInt untuk mengubah tipe dari string jadi int
switch(hari){
    case 1:
        alert("senin");
        break;
    case 2:
        alert("selasa");
        break;
    case 3:
        alert("rabu");
        break;
    case 4:
        alert("kamis");
        break;
    case 5:
        alert("jum'at");
        break;
    case 6:
        alert("sabtu");
        break;
    case 7:
        alert("minggu");
        break;
    default:
        alert("data yang anda masukkan salah");
}