<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

function planeta_con_mas_particulasH($array)
{
    $mayor = 0;
    $nombre_mayor = null;

    for ($i = 0; $i < count($array); $i++) {
        if ($array[$i]['valor'] > $mayor) {
            $mayor = $array[$i]['valor'];
            $nombre_mayor = $array[$i]['planeta'];
        }
    }

    return array('nombre' => $nombre_mayor, 'valor' => $mayor);
}

function planeta_con_menos_particulasH($array)
{
    $menor = PHP_INT_MAX; // Cambio a un valor máximo válido
    $nombre_menor = null;

    for ($i = 0; $i < count($array); $i++) {
        if ($array[$i]['valor'] < $menor) {
            $menor = $array[$i]['valor'];
            $nombre_menor = $array[$i]['planeta'];
        }
    }

    return array('nombre' => $nombre_menor, 'valor' => $menor);
}

function promedio_planetas($array)
{
    if (count($array) === 0) {
        return 0; 
    }

    $promedio = 0;
    foreach ($array as $planeta) {
        $promedio += $planeta['valor'];
    }

    return $promedio / count($array);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $json_data = file_get_contents('php://input');
    $data = json_decode($json_data, true);

    if ($data !== null && isset($data['valores'])) {
        $valoresArray = $data['valores'];

        $mas_particulas = planeta_con_mas_particulasH($valoresArray);
        $menos_particulas = planeta_con_menos_particulasH($valoresArray);
        $promedio = promedio_planetas($valoresArray);

        $respuestas = array(
            'mas_particulas' => $mas_particulas,
            'menos_particulas' => $menos_particulas,
            'promedio' => $promedio
        );

        $respuesta_json = json_encode($respuestas);

        header('Content-Type: application/json');


        echo $respuesta_json;
    } else {

    }
}
?>
