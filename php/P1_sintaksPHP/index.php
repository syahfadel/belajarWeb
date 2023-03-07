<?php 
    //  sintaks dasar php

    // standar output
    // echo, print, print_r (untuk isi array), var_dump (isi dari variabel);

    // echo "Syah Fadel Putra Dwingga <br>";
    // print "Ini dengan print <br>";
    // print_r("ini dengan print_r<br>");
    // var_dump("ini dengan vardump");

    // echo "<br>Fadel berkata 'bagus'";

    // penulisan sintaks php
    // 1. php didalam html
    // 2. html di dalam php

    // variabel dan tipe data
    // Variabel
    // tidak boleh diawali dengan angka
    $nama = "Syah Fadel"; 

    // Operator
    
    // aritmatika + - * / %
    
    // penggabung string .
    $nama_depan = "Syah";
    $nama_belakang = "Fadel";
    echo $nama_depan . " " . $nama_belakang
    
    // assignment =, +=, -=, *=, /=, .=

    // Perbandingan <, > , <=, >=, ==, !=
    
    // identitas ===, !-- mengecek tipe data sama apa tidak

    // logika %%, ||, !
?>

<html lang="en">
<head>
    <title>PHP</title>
</head>
<body>
    <!-- <h1>Halo, Selamat Datang <?php //echo "Fadel"; ?>conto</h1> contoh php di dalam html-->
    <?php //echo "<h1>Halo, Selamat Datang Fadel</h1>"; html di dalam php ?>

    <h1>Halo, <?php echo "Selamat Datang $nama"; ?></h1> <!-- pakai kutip dua karena jika pakai kutip satu yang akan muncul $nama bukan nilainya-->
    <h1>Halo, <?php echo 'Selamat Datang $nama'; ?></h1> 
</body>
</html>