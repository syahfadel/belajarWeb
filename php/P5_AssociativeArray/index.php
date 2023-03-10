<?php 

// Array Associative mengganti index dengan key dengan kita menentuka keynya sendiri yaitu nama nim email dan jurusan

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

echo $mahasiswa[0]["nama"];
?>

<html lang="en">
<head>
    <title>Associative Arrays</title>
</head>
<body>
    <h1>Daftar Mahasiswa</h1>
    <?php  foreach($mahasiswa as $mhs):?>
        <ul>
            <li><img src="img/<?= $mhs["gambar"] ?>" alt="<?=$mhs["gambar"]?>"></li>
            <li>Nama: <?= $mhs["nama"];  ?></li>
            <li>NIM: <?= $mhs["NIM"];  ?></li>
            <li>Jurusan: <?= $mhs["jurusan"];  ?></li>
            <li>Email: <?= $mhs["email"];  ?></li>
        </ul>
    <?php endforeach ?>
</body>
</html>