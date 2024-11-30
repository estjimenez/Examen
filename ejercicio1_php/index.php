<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $vueltas = (int) $_POST['vueltas'];
    $tiempo_a = (int) $_POST['tiempo_a'];
    $tiempo_b = (int) $_POST['tiempo_b'];

    
    if ($vueltas <= 0 || $tiempo_a <= 0 || $tiempo_b <= 0 || $tiempo_a === $tiempo_b) {
        echo "<h1>Error: Todos los valores deben ser positivos y los tiempos deben ser diferentes.</h1>";
        echo "<a href='index.html'>Regresar</a>";
        exit;
    }

    
    $resultados = [];
    for ($i = 1; $i <= $vueltas; $i++) {
        $tiempo_total_a = $i * $tiempo_a;
        $tiempo_total_b = $i * $tiempo_b;

        if ($tiempo_total_a === $tiempo_total_b) {
            $resultados[] = [
                'vuelta' => $i,
                'tiempo_a' => $tiempo_total_a,
                'tiempo_b' => $tiempo_total_b
            ];
        }
    }

    
    echo "<h1>Resultados</h1>";
    if (count($resultados) > 0) {
        echo "<table border='1' cellpadding='10'>";
        echo "<tr><th>Vuelta</th><th>Tiempo Corredor A (min)</th><th>Tiempo Corredor B (min)</th></tr>";
        foreach ($resultados as $resultado) {
            echo "<tr>
                    <td>{$resultado['vuelta']}</td>
                    <td>{$resultado['tiempo_a']}</td>
                    <td>{$resultado['tiempo_b']}</td>
                  </tr>";
        }
        echo "</table>";
    } else {
        echo "<p>No hubo coincidencias dentro de las {$vueltas} vueltas.</p>";
    }
    echo "<a href='index.html'>Regresar</a>";
}
?>
