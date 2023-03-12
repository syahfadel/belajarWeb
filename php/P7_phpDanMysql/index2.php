<?php 
// koneksi ke database
$conn = mysqli_connect("localhost","root","","phpdasar");

// ambil data dari tabel mahasiswa
$result = mysqli_query($conn, "SELECT * FROM anime");

// ambil data (fetch) anime dari object result
// mysqli_fetch_row() mengembalikan array numerik
// mysqli_fetch_assoc() mengembalikan associative array
// mysqli_fetch_array() mengembalikan array numerik dan associative
// mysqli_fetch_object() mengembalikan object

// var_dump(mysqli_fetch_row($result));
// echo "<br>";
// var_dump(mysqli_fetch_assoc($result));
// echo "<br>";
// var_dump(mysqli_fetch_array($result));
// echo "<br>";
// var_dump(mysqli_fetch_object($result));
// echo mysqli_fetch_object($result)->nama; //cara memanggil object
// echo "<br>";

?>

<html lang="en">
<head>
    <title>Halaman Admin</title>
</head>
<body>
    <h1>Daftar Anime</h1>

    <table border=1 cellpadding=10 cellspacing ="0" style="text-align:center;">
        <tr>
            <th>No.</th>
            <th>Aksi</th>
            <th>Gambar</th>
            <th>Nama</th>
            <th>Tahun</th>
            <th>Pengarang</th>
        </tr>

        <?php $i = 1; ?>
        <?php while ($row = mysqli_fetch_assoc($result)) : ?>
        <tr>
            <td><?= $i++;  ?></td>
            <td>
                <a href="">ubah</a>|
                <a href="">hapus</a>
            </td>
            <td>
                <img src="img/<?=$row["gambar"];?>" alt="<?=$row["gambar"];?>" width=180>
            </td>
            <td><?= $row["nama"]; ?></td>
            <td><?= $row["tahunRilis"]; ?></td>
            <td><?= $row["pengarang"]; ?></td>
        </tr>
        <?php endwhile ?>
    </table>
</body>
</html>