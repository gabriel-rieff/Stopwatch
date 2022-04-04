var sec=0
var min=0
var hro=0

var intervalo 

function secdigit(digit) {
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
    
}

function Start (){
    relogio()
    intervalo = setInterval(relogio,1000)
}

function Stop (){
    clearInterval(intervalo)
}

function Zero (){
    clearInterval(intervalo)
    sec=0
    min=0
    document.getElementById('relogio').innerHTML='00:00:00'
}

function relogio() {
    sec++
    if(sec==60){
        min++
        sec=00
        if(min==60){
            min=0
            hro++
        }
    }

    document.getElementById('relogio').innerHTML=secdigit(hro)+':'+secdigit(min)+':'+secdigit(sec)
}