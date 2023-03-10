<html lang="en">
<head>
    <title>POST</title>
</head>
<body>
<!-- default action halaman itu sendiri jika dikosongkan ""  method jika dikosongkan defaultya get -->
<?php if (isset($_POST["submit"])): //submit selalu ada nilai jika tombol submit ditekan?>
    <h1>Selamat Datang <?= $_POST["nama"] ?>!</h1>
<?php endif ?>
    <form method="post"> 
        Masukkan nama:
        <input type="text" name="nama">
        <br>
        <button type="submit" name="submit">Kirim!</button>
    </form>
    
</body>
</html>