 /*
 terdapat 3 buah pop up box yang dapat digunakan yaitu 
 alert
 promt tidak hanya oke namun terdapat text box untuk memasukan inputan
 confirm digunakan untuk meminta konfirmasi dari user mengembalikan boolean
 */

 var nama, yakin;

 alert("Selamat datang!"); //berisikan pesan yang akan ditampilkan popup alert
 nama = prompt("Masukkan nama");
 alert("Hallo " + nama + ", apa kabar?");
 yakin = confirm("yakin menghapus nama?");

 if (yakin === true) {
    nama = null;
    alert("Nama telah dihapus");
} else {
    alert("nama " + nama + " tetap tersimpan");
}