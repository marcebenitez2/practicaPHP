<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$servername = "localhost";
$username = "root";
$password = "";
$database = "calculo";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Conexion fallida: " . $conn->connect_error);
}

// Realizar una consulta para obtener los datos de las herramientas
$sql = "SELECT H.HerCod, H.HerDes, H.HerSto, 
               SUM(CASE WHEN M.MovCod = 0 THEN 1 ELSE 0 END) AS CantDevueltas,
               SUM(CASE WHEN M.MovCod = 1 THEN 1 ELSE 0 END) AS CantPrestadas
        FROM HERRAMIENTAS H
        LEFT JOIN MOVIMIENTOS M ON H.HerCod = M.HerCod
        GROUP BY H.HerCod, H.HerDes, H.HerSto";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $response = array();
    while ($row = $result->fetch_assoc()) {
        $response[] = $row;
    }
    echo json_encode($response);
} else {
    echo json_encode(array()); // No se encontraron resultados
}

$conn->close();
?>
