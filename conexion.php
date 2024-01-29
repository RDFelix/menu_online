<?php
$host = "localhost";
$dtbase = "kike_foods";
$user = "root";
$pass = "";
// Conectar base de datos
$connect = mysqli_connect($host, $user, $pass, $dtbase);
// Verificar conexion
if (!$connect) {
    die($estado="Ha habido un error al intentar conectar" . mysqli_connect_error());
}
$estado="Se ha conectado con exito";
?>