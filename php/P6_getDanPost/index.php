<?php 
// variable scope
$x = 10;
//variabel khusus file ini

// function tampilx(){
//     echo($x); tidak bisa karema x bukan variabelnya
// }

// jika ingin mengambil nilai variabel x diluar function bisa ditambahkan kata global

function tampilX(){
    global $x;
    echo $x;
}

tampilX();
echo "<br>";

// pada php terdapat variabel super global adalah variabel yang dimiliki php yang dibisa diakses kapan pun dan
// dimana pun pada file php kita
/**
 * contoh superglobal
 * $_GET
 * $_POST
 * $_REQUEST
 * $_SESSION
 * $_COOKIE
 * $_SERVER
 * $_ENV
 * 
 * semuanya merupakan array associative
 */

//  SUPERGLOBALS
// $_GET
// dapat dimasukan pada url dengan menambahkan ?key=value contoh index.php?nama=Syah Fadel&nim-1810953019
var_dump($_GET);

$mahasiswa = [
    [
    "nama" => "Syah Fadel Putra Dwingga",
    "NIM" => "1810953019",
    "email" => "syahfadel@email.com",
    "jurusan" => "Teknik Elektro",
    "gambar" => "wisuda2.jpg"
    ],
    [
    "nama" => "Putra Dwingga",
    "NIM" => "1810953020",
    "email" => "putraDwingga@email.com",
    "jurusan" => "Teknik Elektro",
    "gambar" => "wisuda3.jpg"
    ]

];
?>



<html lang="en">
<head>
    <title>GET</title>
</head>
<body>
    <h1>Daftar Mahasiswa</h1>
    <ul>
         <?php foreach($mahasiswa as $mhs) : ?>
        <li>
            <a href="latihanGet.php?nama=<?=$mhs["nama"];?>&nim=<?=$mhs["NIM"]?>&email=<?=$mhs["email"]?>&jurusan=<?=$mhs["jurusan"]?>&gambar=<?=$mhs["gambar"]?>">
                <?= $mhs["nama"];  ?>
            </a>
        </li>
        <?php endforeach ?>
    </ul>

    <a href="post.php">Latihan POST</a>
    <a href="postSendiri.php">Latihan POST ke halaman sendiri</a>
</body>
</html>