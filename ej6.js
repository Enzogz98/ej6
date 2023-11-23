let tiempoInicial;
let tiempoRestante;
let intervalo;

function iniciarTemporizador() {
    tiempoInicial = parseInt(document.getElementById('tiempo').value);

   
    if (!intervalo) {
        tiempoRestante = tiempoInicial;

        intervalo = setInterval(function() {
            if (tiempoRestante <= 0) {
                pausarTemporizador();
                alert('¡Tiempo agotado!');
            } else {
                tiempoRestante--;
                actualizarTemporizador();
            }
        }, 1000);
    }
}

function pausarTemporizador() {
    clearInterval(intervalo);
    intervalo = null; 
}

function retomarTemporizador() {
    if (!intervalo && tiempoRestante > 0) {
        intervalo = setInterval(function() {
            if (tiempoRestante <= 0) {
                pausarTemporizador();
                alert('¡Tiempo agotado!');
            } else {
                tiempoRestante--;
                actualizarTemporizador();
            }
        }, 1000);
    }
}

function resetearTemporizador() {
    pausarTemporizador();
    tiempoRestante = tiempoInicial;
    actualizarTemporizador();
}

function actualizarTemporizador() {
    const temporizador = document.getElementById('temporizador');
    temporizador.innerHTML = tiempoRestante;
}