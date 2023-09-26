<?php
header("Access-Control-Allow-Origin: *"); 
header("Content-Type: application/json; charset=UTF-8"); 

function generarNotas($num_estudiantes=30, $min=0, $max=10) {
    $notas = [];
    for($i=0; $i<$num_estudiantes; $i++) {
        $notas[] = rand($min, $max);
    }
    return $notas;
}

function abanderado($notas, $num_mejores=3) {
    $mejores = [];
    $copiaNotas = $notas;
    rsort($copiaNotas);
    for ($i=0; $i<$num_mejores; $i++) {
        $mejorNota = $copiaNotas[$i];
        $indice = array_search($mejorNota, $notas);
        $mejores[] = ['nota' => $mejorNota, 'posicion' => $indice];
        unset($notas[$indice]);
    }
    return $mejores;
}

$notas = generarNotas();

$resultado['notas'] = $notas;
$resultado['mejores'] = abanderado($notas);

echo json_encode($resultado);

?>
