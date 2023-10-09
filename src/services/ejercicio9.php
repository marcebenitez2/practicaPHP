<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "colegio";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    $resultado['error'] = "Error de conexión: $conn->connect_error";
    echo json_encode($resultado);
    exit;
}

$sql = "SELECT ALU.AluNombre, COUNT(EXA.ExaNota) AS CantidadExamenes, COUNT(CASE WHEN EXA.ExaNota >= 7 THEN 1 ELSE NULL END) AS Aprobados, AVG(EXA.ExaNota) AS Promedio FROM ALUMNOS ALU LEFT JOIN EXAMENES EXA ON ALU.AluLegajo = EXA.AluLegajo GROUP BY ALU.AluNombre";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $resultado['alumnos'] = [];
    while($row = $result->fetch_assoc()) {
        $resultado['alumnos'][] = $row;
    }
} else {
    $resultado['error'] = "No se encontraron alumnos";
}

echo json_encode($resultado);

$conn->close();
?>
