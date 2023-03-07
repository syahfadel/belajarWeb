<?php 
/**
 * pengulangan
 * for
 * while
 * do ... while
 * foreach
 */

 for ($i = 0; $i < 5; $i++){
    echo "[for] hello world! ".$i."<br>";
 }

$i =0;
while ($i < 5){
    echo "[while] hello world! ".$i."<br>";
    $i++;
}

$j = 0;
do{
    echo "[do while] hello world! ".$j."<br>";
    $j++;
} while($j < 5);
?>

<p>
    Contoh penerapan <a href="latihan1.php">perulangan</a>
</p>

<?php 
 /**
 * pengkondisian
 * if ... else
 * if ... else if ... else
 * ternary
 * switch
 *  */ 

 $x = 10;
 if ($x < 20){
    echo "[if] benar";
 }
 echo "<br>";
 $y = 20;
 if ($y < 20){
    echo "[if else] benar";
 } else {
    echo "[if else] salah";
 }
 echo "<br>";
 $z = 20;
 if ($z < 20){
    echo "[if else if] benar";
 } else if($z == 20){
    echo "[if else if] bingo!";
 }
 else {
    echo "[if else if] salah";
 }
?>

<p>
    Contoh penerapan <a href="latihan2.php">percabangan</a>
</p>