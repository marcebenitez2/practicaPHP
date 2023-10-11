<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "telefonia";

// Crear una conexión a la base de datos
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("La conexión a la base de datos falló: " . $conn->connect_error);
}

// Consulta SQL para obtener el titular que más consumió en Datos
$sql_datos = "SELECT TITULARES.nomt, SUM(CONSUMOS.cancon) AS total_consumo
             FROM TITULARES
             JOIN CONSUMOS ON TITULARES.doct = CONSUMOS.doct
             WHERE CONSUMOS.concon = 'D'
             GROUP BY TITULARES.doct
             ORDER BY total_consumo DESC
             LIMIT 1";

$result_datos = $conn->query($sql_datos);

if ($result_datos->num_rows > 0) {
    $row_datos = $result_datos->fetch_assoc();
    $titular_datos = $row_datos["nomt"];
    $total_consumo_datos = $row_datos["total_consumo"];
} else {
    $titular_datos = "N/A";
    $total_consumo_datos = 0;
}

// Consulta SQL para obtener el titular que más consumió en Telefonía
$sql_telefonia = "SELECT TITULARES.nomt, SUM(CONSUMOS.cancon) AS total_consumo
                FROM TITULARES
                JOIN CONSUMOS ON TITULARES.doct = CONSUMOS.doct
                WHERE CONSUMOS.concon = 'T'
                GROUP BY TITULARES.doct
                ORDER BY total_consumo DESC
                LIMIT 1";

$result_telefonia = $conn->query($sql_telefonia);

if ($result_telefonia->num_rows > 0) {
    $row_telefonia = $result_telefonia->fetch_assoc();
    $titular_telefonia = $row_telefonia["nomt"];
    $total_consumo_telefonia = $row_telefonia["total_consumo"];
} else {
    $titular_telefonia = "N/A";
    $total_consumo_telefonia = 0;
}

// Calcular el titular que más consumió en general
if ($total_consumo_datos > $total_consumo_telefonia) {
    $titular_general = $titular_datos;
    $total_consumo_general = $total_consumo_datos;
} else {
    $titular_general = $titular_telefonia;
    $total_consumo_general = $total_consumo_telefonia;
}

// Crear un arreglo con los resultados
$resultado = array(
    "titular_datos" => $titular_datos,
    "total_consumo_datos" => $total_consumo_datos,
    "titular_telefonia" => $titular_telefonia,
    "total_consumo_telefonia" => $total_consumo_telefonia,
    "titular_general" => $titular_general,
    "total_consumo_general" => $total_consumo_general
);

// Enviar los resultados al frontend como JSON
echo json_encode($resultado);

// Cerrar la conexión a la base de datos
$conn->close();
?>
