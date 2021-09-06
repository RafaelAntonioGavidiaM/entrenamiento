<?php 

include_once "../modelo/personalModelo.php";

class personalControl{

    public $idPersonal;
    public $nombre;
    public $apellidos;
    public $direccion;
    public $genero;
    public $respuesta;



    public function ctrlInsertarDatos(){

        $objRespuesta=personalModelo::mdlInsertar($this->nombre,$this->apellidos,$this->direccion,$this->genero);

        echo json_encode($objRespuesta);



    }

    public function ctrlInsertarRespuesta(){

        $objRespuesta=personalModelo::mdlInsertarRespuesta($this->idPersonal,$this->respuesta);
        echo json_encode($objRespuesta);



    }

    public function ctrlConsultarPersonal(){
        $objRespuesta=personalModelo::mdlConsultarPersonal();
        echo json_encode($objRespuesta);


    }




    }

if(isset($_POST["txtNombre"] ) && isset($_POST["txtApellidos"] ) &&isset($_POST["txtDireccion"]) && isset($_POST["txtGenero"] )){

    $objConsulta = new personalControl();
    $objConsulta->nombre=$_POST["txtNombre"];
    $objConsulta->apellidos=$_POST["txtApellidos"];
    $objConsulta->direccion=$_POST["txtDireccion"];
    $objConsulta->genero=$_POST["txtGenero"];




}

if(isset($_POST["idPersonal"]) && isset($_POST["respuesta"])){
    $objConsulta = new personalControl();
    $objConsulta->idPersonal=$_POST["idPersonal"];
    $objConsulta->respuesta=$_POST["respuesta"];



}

if(isset($_POST["listaPersonal"])){
    $objConsulta = new personalControl();
    $objConsulta->ctrlConsultarPersonal();



}