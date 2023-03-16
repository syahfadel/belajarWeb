<?php 

require "functions.php";

$anime = query("SELECT * FROM anime");
if (isset($_POST["cari"])){
    $anime = cari($_POST["keyword"]);
}


?>

<html lang="en">
<head>
    <title>Halaman Admin</title>
    <style>
        body{
            text-align:center;
        }
        table{
            margin:5px auto;
            text-align:center;
        }
    </style>
</head>
<body>
    <h1>Daftar Anime</h1>
    
    <a href="tambah.php">Tambah Data</a>
    <br><br>
    
    <form action="" method="post">
        <label for="search">Search :</label> <br>
        <input type="text" name="keyword" id="search" size="100%" autofocus
          placeholder="Masukkan keyword pencarian" autocomplete="off"
        > <!--auto focus untuk mengaktifkan langsung input, autocomplete untuk mematikan history-->
        <button type="submit" name="cari">search</button>
    </form>

    <table border=1 cellpadding=10 cellspacing ="0">
        <tr>
            <th>No.</th>
            <th>Aksi</th>
            <th>Gambar</th>
            <th>Nama</th>
            <th>Tahun</th>
            <th>Pengarang</th>
        </tr>

        <?php $i = 1; ?>
        <?php foreach($anime as $row): ?>
        <tr>
            <td><?= $i++;  ?></td>
            <td>
                <a href="ubah.php?id=<?=$row['id']?>">ubah</a>|
                <a href="hapus.php?id=<?=$row['id']?>" onclick="return confirm('yakin menghapus?');">hapus</a>
            </td>
            <td>
                <img src="img/<?=$row["gambar"];?>" alt="<?=$row["gambar"];?>" width=180>
            </td>
            <td><?= $row["nama"]; ?></td>
            <td><?= $row["tahunRilis"]; ?></td>
            <td><?= $row["pengarang"]; ?></td>
        </tr>
        <?php endforeach ?>
    </table>
</body>
</html>