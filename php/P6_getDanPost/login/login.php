<?php 
$error;
if (isset($_POST["submit"])){
    if($_POST["username"] == "fadel" && $_POST["password"] == "123"){
        header("Location: admin.php");
        exit;
    } else {
        $error = true;
    }
}

?>

<html lang="en">
<head>
    <title>Halaman Login</title>
</head>
<body>
    <h1>Halaman Login</h1>
    <?php if (isset($error)) :?>
        <p style="color: red; font-style:italic;">username/password salah</p>
    <?php endif; ?>
    <form method="post">
        <label for="username">username:</label> <input type="text" name="username" id="username"> <br>
        <label for="password">password:</label> <input type="password" name="password" id="password"><br>
        <button type="submit" name="submit">Submit</button>
    </form>
</body>
</html>