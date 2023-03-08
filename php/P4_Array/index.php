<?php 
/**
 * Array
 * 
 * Cara lama membuat array
 * $hari = array ("Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu", "Minggu") 
 * 
 * tipe data array boleh beda
 */
// cara baru membuat array
$hari = array ("Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu");
$bulan = ["Januari", "Februari", "Maret"];
$arr1 = [123, "tulisan", false];

// menampilkan array bisa pakai var_dump() atau print_r()
var_dump($hari);
echo "<br>";
print_r($bulan);
echo "<br>";
echo $arr1[0];
echo "<br>";
echo($bulan[1]);
echo "<br>";

// Menambahkan elemen baru pada array
$hari[] = "Minggu"; //berarti menambahkan nilai pada elemen terakhir
?>

<a href="latihan1.php ">Menampilkan Array</a> <br>
<a href="latihan2.php">Contoh kasus penerapan</a>