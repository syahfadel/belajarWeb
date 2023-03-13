<?php
// koneksi ke database
require "functions.php";

// cek apakah tombol submit sudah pernah ditekan
if (isset( $_POST["submit"])){
    if (tambah($_POST) > 0) {
        echo "<script>
                alert('Data Berhasil ditambahkan');
                document.location.href = 'index.php';
              </script>";
    } else {
        echo "<script>
                alert('Data Gagal ditambahkan');
              </script>";
    }
}
?>

<html lang="en">
<head>
    <title>Tambah Data Anime</title>
</head>
<body>
    
    <h1>Tambah Data Anime</h1>

    <form action="" method="post">
        <ul>
            <li>
                <label for="nama">Nama: </label>
                <input type="text" name="nama" id="nama" required>
            </li>
            <li>
                <label for="pengarang">Pengarang: </label>
                <input type="text" name="pengarang" id="pengarang" required>
            </li>
            <li>
                <label for="tahunRilis">Tahun Rilis: </label>
                <input type="number" name="tahunRilis" id="tahunRilis" required>
            </li>
            <li>
                <label for="gambar">gambar: </label>
                <input type="text" name="gambar" id="gambar" required>
            </li>
            <li>
                <button type="submit" name="submit">Tambah Data</button>
            </li>
        </ul>
    </form>
</body>
</html>