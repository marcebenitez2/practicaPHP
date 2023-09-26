<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

function calcularPrimos($n) {
    $numerosPrimos = array(2);
    $num = 3;
    while (count($numerosPrimos) < $n) {
        $esPrimo = true;
        for ($i = 2; $i*$i <= $num; $i++) {
            if ($num % $i == 0) {
                $esPrimo = false;
                break;
            }
        }
        if($esPrimo){
            array_push($numerosPrimos, $num);
        }
        $num+=2;
    }

    return $numerosPrimos;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $n = $_POST['numero'];
    $primos = calcularPrimos($n);
    echo join(", ", $primos);
}
?>