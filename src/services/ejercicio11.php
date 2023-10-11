<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "telefonia";

// Crear una conexión a la base de datos
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error en la conexión a la base de datos: " . $conn->connect_error);
}

// Consulta SQL para obtener al titular que más consumió en concepto de Datos
$query_datos = "SELECT t.nomtit AS nombre, SUM(c.cancon) AS consumo_datos
               FROM titulares t
               INNER JOIN consumos c ON t.numlin = c.numlin
               WHERE c.concon = 'D'
               GROUP BY t.nomtit
               ORDER BY consumo_datos DESC
               LIMIT 1";

// Consulta SQL para obtener al titular que más consumió en concepto de Telefonía
$query_telefonia = "SELECT t.nomtit AS nombre, SUM(c.cancon) AS consumo_telefonia
                   FROM titulares t
                   INNER JOIN consumos c ON t.numlin = c.numlin
                   WHERE c.concon = 'T'
                   GROUP BY t.nomtit
                   ORDER BY consumo_telefonia DESC
                   LIMIT 1";

// Consulta SQL para obtener al titular que más consumió en general
$query_general = "SELECT t.nomtit AS nombre, SUM(c.cancon) AS consumo_general
                 FROM titulares t
                 INNER JOIN consumos c ON t.numlin = c.numlin
                 GROUP BY t.nomtit
                 ORDER BY consumo_general DESC
                 LIMIT 1";

$result_datos = $conn->query($query_datos);
$result_telefonia = $conn->query($query_telefonia);
$result_general = $conn->query($query_general);

$response = array();

if ($result_datos->num_rows > 0) {
    $row_datos = $result_datos->fetch_assoc();
    $response[] = $row_datos["nombre"] . " fue quien más consumió, en $, en datos.";
    // $response[] = $row_datos["nombre"] . " fue quien más consumió, en $" . $row_datos["consumo_datos"] . ", en datos.";
}

if ($result_telefonia->num_rows > 0) {
    $row_telefonia = $result_telefonia->fetch_assoc();
    $response[] = $row_telefonia["nombre"] . " fue quien más consumió, en $, en telefonía.";
    // $response[] = $row_telefonia["nombre"] . " fue quien más consumió, en $" . $row_telefonia["consumo_telefonia"] . ", en telefonía.";
}

if ($result_general->num_rows > 0) {
    $row_general = $result_general->fetch_assoc();
    $response[] = $row_general["nombre"] . " fue quien más consumió, en $, en general.";
    // $response[] = $row_general["nombre"] . " fue quien más consumió, en $" . $row_general["consumo_general"] . ", en general.";
}

echo json_encode($response);

$conn->close();
?>
