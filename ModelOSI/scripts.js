document.addEventListener('DOMContentLoaded', function () {
    
    const infoButtons = document.querySelectorAll('.info-btn');

    
    infoButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const layer = button.closest('.layer');
            
            
            layer.classList.toggle('active');
            
            
            if (layer.classList.contains('active')) {
                button.textContent = 'Fechar';
                
                startDataFlow();
            } else {
                button.textContent = 'Detalhes';
                
                stopDataFlow();
            }
        });
    });

    
    function startDataFlow() {
        const dataPackets = document.querySelectorAll('.data-packet');
        dataPackets.forEach(function(packet) {
            packet.style.animationPlayState = 'running'; 
        });
    }

    
    function stopDataFlow() {
        const dataPackets = document.querySelectorAll('.data-packet');
        dataPackets.forEach(function(packet) {
            packet.style.animationPlayState = 'paused'; 
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('osiPopup');
    const closePopup = document.getElementById('closePopup');

    
    popup.style.display = 'flex';

    
    closePopup.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    
    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});
