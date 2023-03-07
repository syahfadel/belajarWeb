<?php 
/**
 * terdapat beberapa fungsi yang disediakan oleh php beberapanya yaitu 
 * date/Time 
 * • time()
 * • date()
 * • mktime()
 * • strtotime()
*/
    echo date("l, d-M-Y"); 
//    l hari, d tanggal, m bulan angka kalau huruf besar berarti huruf 
    echo "<br>";
    echo time(); //menampilkan UNIX / EPOCH yang menunjukan detik yang telah berlalu dari 1 januari 1970
    echo "<br>";
    echo date("l", time()+(60*60*24*100)); // mencari 100 hari kedepan
    echo "<br>";
    
    // mktime membuat sendiri detik
    echo date("l", mktime(0,0,0,3,19,2000,)); //urutan jam, menit, detik, bulan, tanggal, tahun
    echo "<br>";
    
    
    // strtotime memasukan format tanggal keluar detik
    echo date("l",strtotime("19 Mar 2000"));
    echo "<br>";

/**
 * fungsi pada string
 * • strlen() mencari panjang string
 * • strcmp() membandingkan 2 string
 * • explode() untuk memecah string menjadi array
 * 
 * fungsi utility atau bantuan
 * • var_dump()
 * • isset() mengecek apakah variabel sudah pernah dibuat atau belum
 * • empty() mengecek apakah variabel ada isinya atau tidak
 * • die() untuk mematikan program sehingga program dibawahnya tidak dieksekusi
 * • sleep() menghentikan sementara
 * 
 * User-defined Function
 * fungsi harus didefinisikan dulu
 */

 function salam($waktu = "Datang", $nama = "Admin") { //bisa diberikan parameter default  
    return "Selamat $waktu, $nama!";
 } 
 ?>
 

 <html lang="en">
 <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Latihan Function</title>
 </head>
 <body>
    <h1><?= salam("Pagi","Fadel"); ?></h1>
 </body>
 </html>