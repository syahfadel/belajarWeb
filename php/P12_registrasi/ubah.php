<?php
// koneksi ke database
require "functions.php";

// ambil data di url
$id = $_GET['id'];
$anime =query("SELECT * FROM anime WHERE id =$id")[0];

// cek apakah tombol submit sudah pernah ditekan
if (isset( $_POST["submit"])){
// cek apakah data berhasil diubah
    if (ubah($_POST) > 0) {
        echo "<script>
                alert('Data Berhasil diubah');
                document.location.href = 'index.php';
              </script>";
              
    } else {
        echo "<script>
                alert('Data Gagal diubah');
              </script>";
    }
}
?>

<html lang="en">
<head>
    <title>Ubah Data Anime</title>
</head>
<body>
    
    <h1>Ubah Data Anime</h1>

    <form action="" method="post" enctype="multipart/form-data">
        <input type="hidden" name="id" value="<?=$anime["id"]?>"> <!--membuat input yang tidak dapat dilihat pengguna-->
        <input type="hidden" name="gambarLama" value="<?=$anime["gambar"]?>"> <!--membuat input yang tidak dapat dilihat pengguna-->
        <ul>
            <li>
                <label for="nama">Nama: </label>
                <input type="t  ext" name="nama" id="nama" required value="<?= $anime["nama"] ?>">
            </li>
            <li>
                <label for="pengarang">Pengarang: </label>
                <input type="text" name="pengarang" id="pengarang" required value="<?= $anime["pengarang"] ?>">
            </li>
            <li>
                <label for="tahunRilis">Tahun Rilis: </label>
                <input type="number" name="tahunRilis" id="tahunRilis" required value="<?= $anime["tahunRilis"] ?>">
            </li>
            <li>
                <label for="gambar">gambar: </label> <br>
                <img src="img/<?=$anime['gambar']?>" alt="" width="80px"> <br>
                <input type="file" name="gambar" id="gambar">
            </li>
            <li>
                <button type="submit" name="submit">Ubah Data</button>
            </li>
        </ul>
    </form>
</body>
</html>