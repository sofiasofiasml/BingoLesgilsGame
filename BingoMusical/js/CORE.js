
var CORE = {
    DictSong : {},
    rango: 0, 
    init: function()
    {
        VIEW.init(); 
        MODEL.init(); 

        rango = _.range(1,90);
        rango = _.shuffle(rango);
        const cartonJugador = rango.slice(0, 15);
    
        rango = _.shuffle(rango);
        const cartonCpu = rango.slice(0, 15);
    
    
    
        CORE.crearCartonHTML('cartonJugador',cartonJugador);
        CORE.crearCartonHTML('cartonCpu',cartonCpu);

    },
    /*
    90 bolas
    for() crear array()
    15 números por cartón
    2 cartones (yo y máquina)
    Botón de sacar bola.
    Detectar cuando dana o pierde el jugador

    USAR lodash

    var rango = _.range(0,10);        // genera array de 0 a 10
    var rango = _.shuffle([1,2,3,4]); // Desordena
    _.pull(rango,2);                  // Elimina 2 del array

    Para empezar
    */
    contarTachado:function()
    {
        let totalJugador = document.querySelectorAll('.cartonJugador .tachado').length;
        let totalCpu = document.querySelectorAll('.cartonCpu .tachado').length;
        
        if(totalJugador==15)
            alert('FELICIDADES CARTON JUGADOR COMPLETADO');
        if(totalCpu==15)
            alert('FELICIDADES CARTON CPU COMPLETADO');
        
        console.log(totalJugador + ' - ' + totalCpu);
    },

    sacarBola:function()
    {
        
        let bola = Math.floor(Math.random() * rango.length);
            bola = rango[bola];
        
        _.pull(rango,bola);
        
        console.log(rango);
        
        let divbola = document.querySelector('#bola');
        divbola.textContent = bola;
        let numero = document.querySelectorAll(`.n${bola}`);
        for (var i = 0; i < numero.length; ++i) {
            numero[i].classList.add('tachado');
        }
    },
     crearCartonHTML:function(selector,array)
    { 
        let parent = document.querySelector(`.${selector}`)
        
        for(e of array)
        {
            let divcarton = document.createElement('div');
            divcarton.className = 'numero n'+e;
            divcarton.textContent = e;
            parent.appendChild(divcarton);
        }
    }

}







