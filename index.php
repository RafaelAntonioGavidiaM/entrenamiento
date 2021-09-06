<!DOCTYPE html>
<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js"></script>
    <!-- DataTables -->
    <!-- Por Defecto -->
    <script src="https://cdn.datatables.net/1.10.25/js/jquery.dataTables.min.js"></script>
    <link rel='stylesheet' type='text/css' media='screen' href='https://cdn.datatables.net/1.10.25/css/jquery.dataTables.min.css'>
    <!-- Botones Exportacion-->
    <script src="https://cdn.datatables.net/buttons/1.7.1/js/buttons.colVis.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.7.1/js/buttons.html5.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.7.1/js/dataTables.buttons.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.7.1/js/buttons.html5.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.7.1/js/buttons.print.min.js"></script>
    <link rel='stylesheet' type='text/css' media='screen' href='https://cdn.datatables.net/buttons/1.7.1/css/buttons.dataTables.min.css'>
    <link rel='stylesheet' type='text/css' media='screen' href='https://cdn.datatables.net/colreorder/1.5.4/css/colReorder.dataTables.min.css'>
    <link rel='stylesheet' type='text/css' media='screen' href='vista/css/main.css'>
    <script src='vista/js/mian.js'></script>
</head>

<body>

    <div class="container">
        <div class="jumbotron">
            <h1>Entrenamiento</h1>
            <p>Web SIIGO</p>
        </div>

        <div class="col-sm-5">

            <input type="text" id="txtNombre" placeholder="Nombre">
            <br>
            <input type="text" id="txtApellido" placeholder="Apellido">
            <br>
            <input type="text" id="txtDireccion" placeholder="Direccion">
            <br>
            <h2>Genero:</h2>
            <input type="radio" name="r" id="txtMasculino">
            <label for="txtGenero">M</label>
            <input type="radio" name="r" id="txtFemenino">
            <label for="txtGenero">F</label>
            <br>
            <input type="text" id="txtDeporte" placeholder="Deporte favorito">
            <br>
            <input type="text" id="txtPelicula" placeholder="Pelicula favorita">

            <button id="btnRegistrar">Registrar</button>
            
        </div>
        <div class="col-sm-7">
            <table class="table table-bordered">
                <thead>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Direccion</th>
                    <th>Genero</th>
                    <th>Respuesta</th>
                    <th>Accion</th>
                </thead>
                <tbody id="cuerpoTabla">

                </tbody>
            </table>
        </div>
    </div>



</body>

</html>