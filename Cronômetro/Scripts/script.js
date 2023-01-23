"use strict"
let milissegundos = 0;
let segundos = 0;
let minutos = 0;
let horas = 0;

let cronometro;

function iniciar(){
    pausar();
    cronometro = setInterval(() => { timer(); }, 10);
}

function pausar (){
    clearInterval(cronometro);
}

function resetar(){
    pausar()
    horas = 0
    minutos = 0
    segundos = 0
    milissegundos = 0
    defineValoresTelaPara(horas,minutos,segundos,milissegundos)
}

function timer(){
    if ((milissegundos += 10) == 1000){
        milissegundos = 0
        segundos++
    }
    if(segundos == 60){
        segundos = 0
        minutos++
    }
    if(minutos == 60){
        minutos = 0
        horas++
    }else if(horas >= 60){
        pausar()
        alert("Tempo máximo atingido.")
    }
    defineValoresTelaPara(horas, minutos, segundos, milissegundos)
}

function defineValoresTelaPara(horasP,minutosP, segundosP, milissegundosP){
    document.getElementById("horas").innerHTML = formataValoresTela(horasP);
    document.getElementById("minutos").innerHTML = formataValoresTela(minutosP);
    document.getElementById("segundos").innerHTML = formataValoresTela(segundosP);
    document.getElementById("milissegundos").innerHTML = formataMilissegundosTela(milissegundosP);
}


function formataValoresTela(input){
    return input < 10 ? `0${input}`: input
}

function formataMilissegundosTela(input){
    if(input < 10){
        return `00${input}`
    }
    else if(input < 100){
        return `0${input}`
    }
    else{
        return input
    }
}