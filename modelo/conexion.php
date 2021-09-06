<?php

class Conexion
{

    public static function conectar()
    {
        $servidor = "localhost";
        $nombreBd =  "dbentrenamiento";
        $usuario = "root";
        $contraseña = "";

        try {
            $objConexion = new PDO('mysql:host=' + $servidor + ';dbname=' + $nombreBd + ';' + $usuario + $contraseña);
            $objConexion->exec("set names utf8");
        } catch (Exception $e) {
            $objConexion = $e;
        }
        return $objConexion;
    }
}
