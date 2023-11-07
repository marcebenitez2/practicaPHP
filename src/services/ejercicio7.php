<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Recibe por post 3 valores enteros
$data = json_decode(file_get_contents('php://input'), true);
$localidad = $data['localidad'];
$mes = $data['mes'];
$anio = $data['anio'];


// Conecta a la base de datos

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "trafico";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica la conexión

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Realiza la consulta

$sql = "SELECT 
            COALESCE(LOC1.nomLoc, LOC2.nomLoc) AS locOrigen, 
            COALESCE(LOC2.nomLoc, LOC1.nomLoc) AS locDestino, 
            ROUND(
                CASE
                    WHEN V.LocOrigen = $localidad THEN -V.cantKg
                    WHEN V.LocDestino = $localidad THEN V.cantKg
                    ELSE V.cantKg
                END, 2
            ) AS cantKg, 
            V.fecViaje 
        FROM Viajes V
        LEFT JOIN Ciudades LOC1 ON V.LocOrigen = LOC1.codLoc
        LEFT JOIN Ciudades LOC2 ON V.LocDestino = LOC2.codLoc
        WHERE (V.LocOrigen = $localidad OR V.LocDestino = $localidad) 
        AND MONTH(V.FecViaje) = $mes 
        AND YEAR(V.FecViaje) = $anio";




$result = $conn->query($sql);

// Devuelve el resultado

if ($result->num_rows > 0) {
    $rows = array();
    while ($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }
    echo json_encode($rows);
} else {
    echo "0 results";
}

$conn->close();


?>