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

    $("#").click(function(){







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