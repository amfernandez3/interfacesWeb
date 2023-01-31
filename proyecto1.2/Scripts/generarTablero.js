function generartablero(){
    var cantidad=64;//document.getElementById('cantidad').value;
    var alto=110 //ò document.getElementById('alto').value;
    var ancho=110  //ó document.getElementById('ancho').value;
    var auxiliarRand = 0;
    document.getElementById('cuadricula').innerHTML='';
    document.getElementById('cuadricula').style.width = ((2 + parseInt(ancho)) * 8) + "px";
    
    //Función iterativa que genera las casillas del mapa
    /**
     * TODO: completar documentación
     * Queremos que la generación asigne un id único (incremental)
     */
    for (var i=0;i<cantidad;i++){
        if(Math.floor(i/8)%2 == i%2){
            //Función random para generar elementos
            auxiliarRand = Math.floor(Math.random() * 10);
            if(auxiliarRand == 2){
                document.getElementById('cuadricula').innerHTML+=
            '<div class="cuadrosImpares" id="cuadro'+i+'" style="width:'+ ancho +'px;height:' + alto +
            'px;" onmouseover=marcarCasilla()><img src="../assets/gameAssets/gameImages/rocks.png" alt="rock"></div>';
            }
            else{
                document.getElementById('cuadricula').innerHTML+=
            '<div class="cuadrosImpares" id="cuadro'+i+'" style="width:'+ ancho +'px;height:' + alto +
            'px;" onmouseover=marcarCasilla()></div>';
            }
        }else{
            document.getElementById('cuadricula').innerHTML+='<div class="cuadrosPares" id="cuadro'+i+'" style="width:'+ ancho +'px;height:' + alto +'px;"></div>';
    
        }
        }
    }

    function marcarCasilla(){
        this.style.border="red";
    }