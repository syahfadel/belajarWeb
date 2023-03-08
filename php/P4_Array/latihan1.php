<?php 
$angka = [3,2,15,20,11,77,89, 8]
?>

<html lang="en">
<head>
    <title>Menampilkan Array</title>
    <style>
        .kotak{
            width: 50px;
            height: 50px;
            background-color: salmon;
            text-align: center;
            line-height: 50px;
            margin: 3px;
            float: left;
        }

        .clear {
            clear:both;
        }
    </style>
</head>
<body>
    <a href="index.php">[kembali]</a>
    <?php for($i = 0; $i< count($angka); $i++) :?>
    <div class="kotak"> <?php echo $angka[$i]; ?> </div>
    <?php endfor ?>
    
    <div class="clear"></div>

    <?php foreach($angka as $a) : ?>
        <div class="kotak"><?= $a  ?></div>
    <?php endforeach ?>
</body>
</html>