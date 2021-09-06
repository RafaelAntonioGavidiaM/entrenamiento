<?php
require_once "conexion.php";

class personalModelo{



    public static function mdlInsertar($nombre,$apellidos,$direccion,$genero){

        $mensaje="";

        $objConsulta=Conexion::conectar()->prepare("insert into personal(nombre,apellido,direccion,idGenero) values (:n,:a,:d,:g )");
        $objConsulta->bindParam(":n",$nombre,PDO::PARAM_STR);
        $objConsulta->bindParam(":a",$apellidos,PDO::PARAM_STR);
        $objConsulta->bindParam(":d",$direccion,PDO::PARAM_STR);
        $objConsulta->bindParam(":n",$genero,PDO::PARAM_INT);

        if($objConsulta->execute()){

            $respuesta=personalModelo::consultarUltimoId();
            $mensaje=$respuesta;





        }else{

            $mensaje="error";
        }


        $objConsulta=null;
        return $mensaje;

        



    }
    public  static function consultarUltimoId(){
        $objConsulta=Conexion::conectar()->prepare("Select last_insert_id() from personal ");
        $objConsulta->execute();
        $resultado=$objConsulta->fetch();
        $objConsulta=null;

        $respuesta=$resultado[0][0];
        return $respuesta;






    }

    public static function mdlInsertarRespuesta($id,$respuesta){
        $mensaje="";



        $objInsertar=Conexion::conectar()->prepare("insert into(idPersonal,respuesta) values (:id,:r)");
        $objInsertar->bindParam(":id",$id,PDO::PARAM_INT);
        $objInsertar->bindParam(":r",$respuesta,PDO::PARAM_STR);
        if($objInsertar->execute()){
            $mensaje="ok";



        }
        else{
            $mensaje="error";
        }

        $objInsertar=null;
        return $mensaje;


    }

    public static function mdlConsultarPersonal(){
        $objConsulta=Conexion::conectar()->prepare("Select * from personal");

        $objConsulta->execute();

        $lista=$objConsulta->fetchAll();
        $objConsulta=null;
        return $lista;

    }





}