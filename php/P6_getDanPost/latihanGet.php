<?php 
// cek apakah tidak ada data di get
if(
    !isset($_GET["nama"]) ||
    !isset($_GET["nim"]) ||
    !isset($_GET["jurusan"]) ||
    !isset($_GET["gambar"]) ||
    !isset($_GET["email"])

){
    //redirect untuk memindahkan pengguna dari satu halaman ke halaman lain
    header("Location: index.php");
    exit; //untuk tidak mengeksekusi program berikutnya
}
?>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detail Mahasiswa</title>
</head>
<body>
    <a href="index.php">kembali</a>
    <br>
    <ul>
        <li><img src="img/<?=$_GET["gambar"]?>" alt="<?=$_GET["gambar"]?>"></li>
        <li><?= $_GET["nama"]  ?></li>
        <li><?= $_GET["nim"]  ?></li>
        <li><?= $_GET["jurusan"]  ?></li>
        <li><?= $_GET["email"]  ?></li>
    </ul>
    
</body>  
</html>