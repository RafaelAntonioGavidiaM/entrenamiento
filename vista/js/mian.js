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

                var interface = "";

                respuesta.forEach(item, index){

                    interface += '<tr>';
                    interface += '<td>' + item.nombre + '<td>';
                    interface += '<td>' + item.apellido + '<td>';
                    interface += '<td>' + item.direccion + '<td>';
                    interface += '<td>' + item.idGenero + '<td>';
                    interface += '<td>' + item.idRespuesta + '<td>';
                    interface += '<td>';
                

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