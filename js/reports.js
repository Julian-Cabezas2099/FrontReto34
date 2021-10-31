function consultarRepClientes(){

    $.ajax(
        {
            url         : 'http://localhost:8080/api/Reservation/report-clients',
            type        : 'GET',
            dataType    : 'JSON',
            success     : function(respuesta){
                console.log(respuesta);
                    $("#tablaid").show();
                    for (let i = 0; i < respuesta.length; i++) {
                        
                        $("#tablaReporte").append("<tr>");
                        $("#tablaReporte").append("<td class='text-center'>" + respuesta[i].client.name + "</td>");
                        $("#tablaReporte").append("<td class='text-center'>" + respuesta[i].client.email + "</td>");
                        $("#tablaReporte").append("<td class='text-center'>" + respuesta[i].total + "</td>");
                        $("#tablaReporte").append("</tr>");
                        
                    }
                        

            }
        }
    );
}

function consultarConReservas() {
    // var f1 = new Date(document.getElementById("fechaInicio").value);
    let f1 = new Date($("#fechaInicio").val());
    let isoF = f1.toISOString();
    let fechaInicio = isoF.slice(0,10);
    // var fechaInicio = (f.getFullYear())+ '-' + ( f.getMonth() + 1 ) + '-' + f.getDate();
    let f2 = new Date($("#fechaEntrega").val());
    // var f2 = new Date(document.getElementById("fechaEntrega").value);
    let isoFEntrega = f2.toISOString();
    let fechaEntrega = isoFEntrega.slice(0,10);
    // var fechaEntrega = (f2.getFullYear())+ '-' + ( f2.getMonth() + 1 ) + '-' + f2.getDate();
    $.ajax(
             {
                url          : 'http://localhost:8080/api/Reservation/report-dates/'+fechaInicio+'/'+fechaEntrega,
                type         : 'GET',
                dataType     : 'JSON',
                success      :  function(json){
            
                                    $("#resultado").empty();
                                    var numElementos = json.length
                                    // var contador = 0;
                                    
                                    
                                    // for (i=0; i < json.length; i++){

                                    //    // var idClient= json[i].idClient;
                                    //     //var nombre = json[i].name;  
                                    //     contador++;                

                                    // }
                                    $("#resultado").append("TOTAL DE RESERVAS EN EL TIEMPO SELECCIONADO: "+numElementos);

                                    console.log(json)
                                },

                 error       :  function(xhr,status){
                                    console.log(xhr)
                                }
             }
    );    
}

function consultarRepVs (){

    $.ajax(
        {
            url         : 'http://localhost:8080/api/Reservation/report-status',
            type        : 'GET',
            dataType    : 'JSON',
            success     : function(respuesta){
                console.log(respuesta);
                    $("#contenedorRepVs").show();
                    $("#resCompleted").append("<p>Reservas completadas: "+respuesta.completed+"</p>");
                    $("#resCancelled").append("<p>Reservas canceladas: "+respuesta.cancelled+"</p>");
                        

            }
        }
    );

}