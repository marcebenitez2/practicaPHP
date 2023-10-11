<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "concesionaria";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    $resultado = array("error" => "Error de conexión: $conn->connect_error");
    echo json_encode($resultado);
    exit;
}

// Consulta SQL para calcular el capital acumulado por marca
$sql = "SELECT Marca, SUM(PrecioVenta) AS CapitalAcumulado FROM AUTOS GROUP BY Marca";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $autos = array();
    while ($row = $result->fetch_assoc()) {
        $autos[] = $row;
    }
    echo json_encode($autos);
} else {
    echo json_encode(array("message" => "No se encontraron resultados."));
}

// Cerrar la conexión a la base de datos
$conn->close();
?>
