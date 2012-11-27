var datos_recibidos;

function enviar(ruta_archivo, str_datos)
{
//    alert('entra a enviar');
    $.ajax({
            async:true,
            type: "POST",
            dataType: "html",
            contentType: "application/x-www-form-urlencoded",
            url:ruta_archivo,
            data:str_datos,
            beforeSend:previoEnvio,
            success:recibirDatos,
            timeout:1000,
            error:errores
        }); 
        return false;
}

function recibirDatos(datos)
{
    alert(datos);
    datos_recibidos = eval(datos);
    alert(datos_recibidos[1].length);
}

function errores()
{
    alert('Error al realizar la operacion');
}

function previoEnvio()
{
//    alert('iniciando el envio delos datos');
}

function insertarLista(id_coleccion, nombre, ruta_imagen)
{
    var url = "../Interfaces/listaReproduccionInterface.php";
    var datos_a_enviar = "opcion=1&id_coleccion="+id_coleccion+"&nombre="+nombre+'&ruta_imagen='+ruta_imagen;
    alert(url+': '+ datos_a_enviar);
    var x;
    x=$(document);
    x.ready(enviar(url, datos_a_enviar));
}

function consultarLista(id_coleccion, nombre)
{
    var url = "../Interfaces/listaReproduccionInterface.php";
    var datos_a_enviar = "opcion=1&nombre="+nombre+'&ruta_imagen='+ruta_imagen;
    var x;
    x=$(document);
    x.ready(enviar(url, datos_a_enviar));
    return datos_recibidos;
}

function modificarLista()
{
    
}

function cargarListas()
{
    var url = "../Interfaces/listaReproduccionInterface.php";
    var datos_a_enviar = "opcion=3";
    var x;
    x=$(document);
    x.ready(enviar(url, datos_a_enviar));
    return datos_recibidos;
}

function agregarCancionALista(id_coleccion, nombre_lista, id_cancion)
{
    alert('entro a la funcion');
    var url = "../Interfaces/listaReproduccionInterface.php";
    var datos_a_enviar = "opcion=5&id_coleccion="+id_coleccion+"&nombre_lista="+nombre_lista+"&id_cancion="+id_cancion;
    var x;
    x=$(document);
    x.ready(enviar(url, datos_a_enviar));
    return datos_recibidos;
}

function cancionesPorLista(id_coleccion)
{
    var url = "../Interfaces/listaReproduccionInterface.php";
    var datos_a_enviar = "opcion=6&id_coleccion="+id_coleccion;
    var x;
    x=$(document);
    x.ready(enviar(url, datos_a_enviar));
    return datos_recibidos;
}