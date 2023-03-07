<html lang="en">
<head>
    <title>Latihan 2</title>
    <style>
        .warna-baris {
            background-color: silver;
        }
    </style>
</head>
<body>
    <a href="index.php">[kembali]</a>
    <table border="1" cellpadding = "10" cellspacing=0;>
        <?php for ($i = 1; $i <= 5; $i++) : ?>
            <?php if($i % 2 ==1) : ?>
                <tr class = "warna-baris">
            <?php else :?>
                <tr></tr>
            <?php endif ?>
                <?php for($j = 1; $j <= 5;$j++) : ?>
                    <td> <?="$i,$j"?> </td>
                <?php endfor ?>
            </tr>
        <?php endfor ?>
    </table>
</body>
</html>