$(document).ready(function(){

    // limipar Campos 

    function limpiarCampos(){




    }

    // listar Tabla personal

    function listarPersonal(){

        var listaPersonal = "ok";
        var objListaPersonal = new FormData()
        objListaPersonal.append("listaPersonal",listaPersonal);

        $.ajax({

            url: "control/personalControl.php",
            type: "post",
            dataType: "json",
            data: objListaPersonal,
            cache: false,
            contentType: false,
            processData: false,
            success: function(respuesta){

                var dataPersonal = [];

                respuesta.forEach(cargarPersonal)

                function cargarPersonal(item, index){

                    var objBotones = '<button type="button" class="btn btn-warning" title="Editar"  id="btnEditarArea" idArea="' + item.idArea + '" nombreArea="' + item.nombreArea + '" data-toggle="modal" data-target="#modalModArea"><span class="glyphicon glyphicon-pencil"></span></button>'
                    objBotones += '<button type="button" class="btn btn-danger" title ="Eliminar" id="btnEliminarArea" idArea="' + item.idArea + '"><span class="glyphicon glyphicon-remove"></span></button>';


                    dataPersonal.push([item.nombre,item.apellido,item.direccion,item.idGenero,item.idRespuesta,objBotones]);

                }

                

            } 



        })




    }

    // Registrar Personal

    $("#btnRegistrar").click(function(){

        var nombre =  $("#txtNombre").val();
        var apellido = $("#txtApellido").val();
        var direccion = $("#txtDireccion").val();
        var generoM =  $("#txtMasculino").val();
        var generoF = $("#txtFemenino").val();
        var respuesta =  $("#txtRespuesta").val();


        var objData = new FormData();
        objData.append("nombre",nombre);
        objData.append("apellido",apellido);
        objData.append("direccion",direccion);
        objData.append("generoM",generoM);
        objData.append("generoF",generoF);
        objData.append("respuesta",respuesta);

        $.ajax({

            url: "control/personalControl.php",
            type: "post",
            dataType: "json",
            data: objListaPersonal,
            cache: false,
            contentType: false,
            processData: false,
            success: function(respuesta){

                alert("se registro buen trabajo");

            }

        })








    })

    // Modificar Personal


    $("#").on("click", "#", function(){






    })



    $("#").click(function(){








    })

    // Delete Perosonal

    $("#").click(function(){






        
    })


})