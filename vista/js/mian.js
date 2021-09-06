$(document).ready(function(){
    // inicio de metodos
    listarPersonal();
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

                    var objBotones = '<button type="button" class="btn btn-warning" title="Editar"  id="btnEditarPersonal" idPersonal="' + item.idPersonal + '" nombre="' + item.nombre + '" apellido="' + item.apellido + '" direccion="' + item.direccion + '" idGenero="' + item.idGenero + '" idRespuesta="' + item.idRespuesta + '" data-toggle="modal" data-target="#modalModPersonal"><span class="glyphicon glyphicon-pencil"></span></button>'
                    objBotones += '<button type="button" class="btn btn-danger" title ="Eliminar" id="btnEliminarPersonal" idPersonal="' + item.idPersonal + '"><span class="glyphicon glyphicon-remove"></span></button>';


                    dataPersonal.push([item.nombre,item.apellido,item.direccion,item.idGenero,item.idRespuesta,objBotones]);

                }

                
                $('#tablaPersonal').DataTable({
                    data: dataPersonal,

                    language: {
                        "decimal": "",
                        "emptyTable": "No data available in table",
                        "info": "Showing _START_ to _END_ of _TOTAL_ entries",
                        "infoEmpty": "Showing 0 to 0 of 0 entries",
                        "infoFiltered": "(filtered from _MAX_ total entries)",
                        "infoPostFix": "",
                        "thousands": ",",
                        "lengthMenu": "Show _MENU_ entries",
                        "loadingRecords": "Loading...",
                        "processing": "Processing...",
                        "search": "Buscar:",
                        "zeroRecords": "No se encuentro registros con el criterio de busqueda",
                        "paginate": {
                            "first": "Primero",
                            "last": "Ultimo",
                            "next": "Siguiente",
                            "previous": "Anterior"
                        },
                        "aria": {
                            "sortAscending": ": activate to sort column ascending",
                            "sortDescending": ": activate to sort column descending"
                        }
                    }
                });
                

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


    $("#tablaPersonal").on("click", "#", function(){






    })



    $("#").click(function(){








    })

    // Delete Perosonal

    $("#").click(function(){






        
    })


})