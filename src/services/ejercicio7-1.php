<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "trafico";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    $resultado = array("error" => "Error de conexión: $conn->connect_error");
    echo json_encode($resultado);
    exit;
}

$sql = "SELECT * FROM ciudades";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $ciudades = array();
    while ($row = $result->fetch_assoc()) {
        $ciudades[] = $row;
    }
    echo json_encode($ciudades);
} else {
    echo json_encode(array("message" => "No se encontraron resultados."));
}

$conn->close();
?>