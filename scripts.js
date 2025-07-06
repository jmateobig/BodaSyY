$(document).ready(function() {
    $('.carousel').carousel({
        interval: 2000 // Cambia cada 2 segundos
    });
});

function updateCountdown() {
    const endDate = new Date('2025-08-09T16:00:00');
    const now = new Date();
    const timeDiff = endDate - now;

    if (timeDiff <= 0) {
        document.getElementById('countdown').innerHTML = '¡La fecha ha llegado!';
        return;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML =
        `<span>${days}</span><label>Días</label>`;
    document.getElementById('hours').innerHTML =
        `<span>${hours.toString().padStart(2, '0')}</span><label>Horas</label>`;
    document.getElementById('minutes').innerHTML =
        `<span>${minutes.toString().padStart(2, '0')}</span><label>Minutos</label>`;
    document.getElementById('seconds').innerHTML =
        `<span>${seconds.toString().padStart(2, '0')}</span><label>Segundos</label>`;
}

setInterval(updateCountdown, 1000); // Actualiza cada segundo
updateCountdown(); // Inicializa el temporizador


document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const playPauseButton = document.getElementById('playPauseButton');
    const playIcon = playPauseButton.querySelector('.fa-play');
    const pauseIcon = playPauseButton.querySelector('.fa-pause');

    // Aplicar la clase no-vibrate al inicio para el efecto de agrandamiento inicial
    playPauseButton.classList.add('no-vibrate');

    // Retirar la clase no-vibrate después de la animación inicial para empezar a vibrar
    playPauseButton.addEventListener('animationend', function(event) {
        if (event.animationName === 'focus') {
            playPauseButton.classList.remove('no-vibrate');
        }
    });

    playPauseButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play().catch(error => {
                console.error('Error al reproducir el audio:', error);
            });
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'inline-block';
            playPauseButton.classList.add('active');
        } else {
            audio.pause();
            playIcon.style.display = 'inline-block';
            pauseIcon.style.display = 'none';
            playPauseButton.classList.remove('active');
        }
    });
});

AOS.init({
    duration: 1200, // duración de la animación en milisegundos
    easing: 'ease-in-out', // tipo de easing de la animación
    once: true // si se debe ejecutar solo una vez
});

document.addEventListener('DOMContentLoaded', function () {
    if (window.matchMedia('(min-width: 768px)').matches) {
        // Remove all AOS animations by removing the data-aos attributes
        document.querySelectorAll('[data-aos]').forEach(function(element) {
            element.removeAttribute('data-aos');
        });
    }
    
    // Initialize AOS
    AOS.init();
});