<?php
header("Access-Control-Allow-Origin: *"); 
header("Content-Type: application/json; charset=UTF-8"); 

$data = array();

for ($x = 0; $x <= 2; $x += 0.01) {
    $sin_value = sin($x);
    $cos_value = cos($x);
    $color_sin = ($sin_value < 0) ? 'blue' : 'red';
    $color_cos = ($cos_value < 0) ? 'blue' : 'red';


    $data[] = array(
        'x' => round($x,2),
        'sin' => $sin_value,
        'cos' => $cos_value,
        'color_sin' => $color_sin,
        'color_cos' => $color_cos,
    );
}

// Devolver los datos como JSON
header('Content-Type: application/json');
echo json_encode($data);
?>
