
function mostrarHora(){
    myDate = new Date();
    hours = myDate.getHours();
    minutes = myDate.getMinutes();
    seconds = myDate.getSeconds();
    if (hours < 10) hours = 0 + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    document.getElementById("horaServidor").innerHTML = "Hora servidor: "+ hours+ ":" +minutes+ ":" +seconds ;
    setTimeout("mostrarHora()", 1000);
    }

    mostrarHora();