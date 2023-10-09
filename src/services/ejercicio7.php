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

$sql = "SELECT * FROM Viajes WHERE (LocOrigen = $localidad OR LocDestino = $localidad) AND MONTH(FecViaje) = $mes AND YEAR(FecViaje) = $anio GROUP BY LocOrigen, LocDestino;";

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
