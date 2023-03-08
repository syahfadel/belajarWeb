<?php 
$mahasiswa = [
    ["Syah Fadel Putra Dwingga", "1810953019", "Teknik Elektro", "syahfadel@email.com"],
    ["Putra Dwingga", "1810953040", "Teknik Elektro", "putraDwingga@email.com"],
    ["Syaputra", "1810953050", "Teknik Elektro", "syaputra@email.com"]
    ];
 ?>
 <html lang="en">
 <head>
    <title>Contoh Kasus Penerapan Array</title>
 </head>
 <body>
    <a href="index.php">[kembali]</a>
 </body>

    <h1>Daftar Mahasiswa</h1>

    <?php foreach($mahasiswa as $m) : ?>
    <ul>
            <?php foreach($m as $o): ?>
                <li> <?= $o ?></li>
            <?php endforeach; ?>
    </ul>
        <?php endforeach; ?>
 </html>