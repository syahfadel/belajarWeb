<html lang="en">
<head>
    <title>Latihan 1</title>
</head>
<body>
    <a href="index.php">[kembali]</a>
    <table border="1" cellpadding = "10" cellspacing=0;>
        <?php 
        for ($i = 1; $i <= 3; $i++){
            echo "<tr>";
            for($j = 1; $j <= 5;$j++){
                echo "<td> $i,$j </td>";
            }
            echo "</tr>";
        }
        ?>
    </table>

    <!-- // cara mengeluarkan tag php supaya tidak bercampur antara php dan html -->
    <br>
    <table border="1" cellpadding = "10" cellspacing=0;>
        <?php for ($i = 1; $i <= 3; $i++) : ?>
            <tr>
                <?php for($j = 1; $j <= 5;$j++) : ?> <!--kurawal buka bisa diganti titik dua dan kurung kurawal tutup diganti end{namayangakanditutup}-->
                    <td> <?="$i,$j"?> </td> <!-- jika hanya echo bisa diganti dengan ?=  -->
                <?php endfor ?>
            </tr>
        <?php endfor ?>
    </table>
</body>
</html>