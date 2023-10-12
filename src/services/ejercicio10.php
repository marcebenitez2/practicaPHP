<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

error_reporting(E_ALL);
ini_set('display_errors', 1);

// Si la solicitud es OPTIONS, devolver 0
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    return 0;
}

// Si la solicitud es POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json_data = file_get_contents("php://input");
    $data = json_decode($json_data);

    if (isset($data->empleado)) {
        $numero_empleado = $data->empleado;

        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "fabrica";
        $conn = new mysqli($servername, $username, $password, $dbname);

        if ($conn->connect_error) {
            die("Conexión fallida: " . $conn->connect_error);
        }

        $escaped_numero_empleado = $conn->real_escape_string($numero_empleado);

        $sql = "SELECT e.Nombre, t.FechaTrabajo, SUM(t.CantidadHorasTrabajadas) AS TotalHoras, e.ValorHora, e.Actualizado
                FROM EMPLEADO e
                JOIN TRABAJO t ON e.NumeroDeEmpleado = t.NumeroDeEmpleado
                WHERE e.NumeroDeEmpleado = $escaped_numero_empleado
                GROUP BY e.Nombre, t.FechaTrabajo, e.ValorHora, e.Actualizado";

        $result = $conn->query($sql);

        if ($result) {
            $respuesta = array();
            $importe_total = 0;
            $horas_total = 0;

            while ($row = $result->fetch_assoc()) {
                $nombre = $row['Nombre'];
                $fecha_trabajo = $row['FechaTrabajo'];
                $total_horas = $row['TotalHoras'];
                $valor_hora = $row['ValorHora'];
                $importe = $total_horas * $valor_hora;

                $horas_total += $total_horas;
                $importe_total += $importe;

                $actualizado = $row['Actualizado'];

                if ($actualizado == 'SI') {
                    echo json_encode('Trabajador ya actualizado');
                    exit();
                }

                $respuesta[] = array(
                    'Numero' => $numero_empleado,
                    'Nombre' => $nombre,
                    'Horas' => $total_horas,
                    'Importe' => $importe,
                    'Actualizado' => 'SI',
                );
            }

            $update_sql = "UPDATE EMPLEADO SET Actualizado = 'SI' WHERE NumeroDeEmpleado = $escaped_numero_empleado";
            if ($conn->query($update_sql)) {
                // Agregar al arreglo de respuesta el importe y las horas totales
                $respuesta['TotalHoras'] = $horas_total;
                $respuesta['ImporteTotal'] = $importe_total;

                echo json_encode($respuesta);
            } else {
                http_response_code(500);
                echo json_encode(array('message' => 'Error al actualizar el campo "actualizado"'));
            }
        } else {
            http_response_code(500);
            echo json_encode(array('message' => 'Error al ejecutar la consulta SQL'));
        }

        $conn->close();
    } else {
        http_response_code(400);
        echo json_encode(array('message' => 'Campo "empleado" no encontrado en el cuerpo de la solicitud'));
    }
} else {
    http_response_code(405);
    echo json_encode(array('message' => 'Método de solicitud no permitido'));
}
?>
