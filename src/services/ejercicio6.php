<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Obtener los valores enviados por POST
$data = json_decode(file_get_contents('php://input'), true);
$numero = $data['numero'];
$base = $data['base'];

// Validar que el número sea un número entero
if (!is_numeric($numero) || floor($numero) != $numero) {
    // Si el número no es válido, enviar una respuesta de error
    $response = 'Numero invalido';
} else {
    // Convertir el número a la base indicada
    $numero_convertido = base_convert($numero, 10, $base);

    // Enviar la respuesta como JSON
    $response = $numero_convertido;
}

header('Content-Type: application/json');
echo $response;
