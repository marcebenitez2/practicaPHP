<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$data = file_get_contents("php://input");
$decodedData = json_decode($data);


if (isset($decodedData->vector1) && isset($decodedData->vector2)) {
    $vector1 = json_decode($decodedData->vector1);
    $vector2 = json_decode($decodedData->vector2);

    
    $repetidos = [];
    foreach ($vector1 as $posicion1 => $elemento1) {
        foreach ($vector2 as $posicion2 => $elemento2) {
            if ($elemento1 === $elemento2) {
                $repetidos[] = "El elemento $elemento1 está en la posición " . ($posicion1 + 1) . " de origen y en la posición " . ($posicion2 + 1) . " de destino";
            }
        }
    }

    // Devolver la respuesta como JSON
    $response = [
        "repetidos" => $repetidos,
        "cantidad" => count($repetidos)
    ];
    echo json_encode($response);
} else {
    // Si no se recibieron los datos esperados, devolver un mensaje de error
    $response = [
        "error" => "No se recibieron los datos esperados."
    ];
    echo json_encode($response);
}
