<?php 
// koneksi ke database
$conn = mysqli_connect("localhost","root","","phpdasar");

function query ($query){
    global $conn;
    $result = mysqli_query($conn,$query);
    $rows = [];
    while ($row = mysqli_fetch_assoc($result)){
        $rows[] = $row;
    }
    return $rows;
}

function tambah ($data){
    global $conn;
    $nama = htmlspecialchars($data["nama"]); //Untuk melindungi dari memasukan script atau html
    $pengarang = htmlspecialchars($data["pengarang"]);
    $tahunRilis = htmlspecialchars($data["tahunRilis"]);

    // upload gambar
    $gambar = upload();
    if (!$gambar){
        return false;
    }
    
    $query = "INSERT INTO anime 
                VALUES
              ('','$nama','$pengarang','$tahunRilis','$gambar')";
    mysqli_query($conn, $query);

    return mysqli_affected_rows($conn);
}

function upload(){

    $namaFile = $_FILES['gambar']['name'];
    $ukuranFile = $_FILES['gambar']['size'];
    $error = $_FILES['gambar']['error'];
    $tmpName = $_FILES['gambar']['tmp_name'];

    if ($error == 4) {
        echo "<script>alert('pilih gambar terlebih dahulu');</script>";
        return false;
    }

    //cek apakah yang dikirim gambar
    $ekstensiGambarValid = ['jpg','jpeg','png'];
    $ekstensiGambar = explode(".",$namaFile);
    $ekstensiGambar = strtolower(end($ekstensiGambar));
    if (!in_array($ekstensiGambar,$ekstensiGambarValid)){ //mencari pada sebuah array return true jika ada 
        echo "<script>alert('yang anda upload bukan gambar');</script>";
        return false;
    }

    // cek jika ukuran terlalu besar
    // generate nama gambar baru
    $namaFileBaru = uniqid(); //menampilkan string random
    $namaFileBaru .= ".";
    $namaFileBaru .= $ekstensiGambar;

    if ($ukuranFile > 1000000){
        echo "<script>alert('ukuran gambar terlalu besar');</script>";
        return false;
    }

    // lolos pengecekan gambar siap diupload
    move_uploaded_file($tmpName, "img/$namaFileBaru");
    return $namaFileBaru;



}

function hapus($id){
    global $conn;
    mysqli_query($conn, "DELETE FROM anime WHERE id = $id");
    return mysqli_affected_rows($conn);
}

function ubah ($data) {
    global $conn;
    $id = $data["id"];
    $nama = htmlspecialchars($data["nama"]);
    $pengarang = htmlspecialchars($data["pengarang"]);
    $tahunRilis = htmlspecialchars($data["tahunRilis"]);
    $gambarLama = htmlspecialchars($data["gambarLama"]);
    
    // cek apakah user rpilih gambar baru atau tidak
    if($_FILES['gambar']['error'] ===4){
        $gambar = $gambarLama;
    } else{
        $gambar = upload();
    }
    
    $query = "UPDATE anime SET 
                nama = '$nama',
                pengarang = '$pengarang',
                tahunRilis = '$tahunRilis',
                gambar = '$gambar'
              WHERE id = $id
                ";
    mysqli_query($conn, $query);
    return mysqli_affected_rows($conn);
}

function cari($keyword){
    $query = "SELECT * FROM anime
                WHERE
              nama LIKE '%$keyword%' OR
              tahunRilis LIKE '%$keyword%' OR
              pengarang LIKE '%$keyword%'
              ";
    return query($query);
}
?>