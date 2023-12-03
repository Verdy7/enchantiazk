document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}


// Function to handle music player
    function initializeMusicPlayer(audioId, playPauseButtonId, alertMessageId) {
        const audioElement = document.getElementById(audioId);
        const playPauseButton = document.getElementById(playPauseButtonId);
        let isPlaying = false;
        let alertShown = false;
    
        playPauseButton.addEventListener('click', () => {
            if (!alertShown) {
                var alertMessage = document.getElementById(alertMessageId);
                alertMessage.style.display = 'block';
    
                setTimeout(function () {
                    alertMessage.style.display = 'none';
                }, 7500);
    
                alertShown = true;
            }
    
            if (isPlaying) {
                audioElement.pause();
                playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
            } else {
                audioElement.play();
                playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
            }
    
            isPlaying = !isPlaying;
        }); 
}
    
    // Initialize music players
    initializeMusicPlayer('audio1', 'play-pause-button1', 'alert-message1');
    initializeMusicPlayer('audio2', 'play-pause-button2', 'alert-message2');
    initializeMusicPlayer('audio3', 'play-pause-button3', 'alert-message3');
    initializeMusicPlayer('audio4', 'play-pause-button4', 'alert-message4');
    initializeMusicPlayer('audio5', 'play-pause-button5', 'alert-message5');
    initializeMusicPlayer('audio6', 'play-pause-button6', 'alert-message6');


const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const bars = document.querySelectorAll('.bar');

let isOpen = false;

hamburger.addEventListener('click', () => {
isOpen = !isOpen;

if (isOpen) {
bars[0].style.transform = 'rotate(45deg) translate(6px, 7px)';
bars[1].style.opacity = '0';
bars[2].style.transform = 'rotate(-45deg) translate(6px, -7px)';
menu.style.right = '0';
} else {
bars[0].style.transform = 'none';
bars[1].style.opacity = '1';
bars[2].style.transform = 'none';
menu.style.right = '-258px';
}
});

const isDarkMode = localStorage.getItem('darkMode') === 'true';


if (isDarkMode) {
    document.body.classList.add('dark');
}

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
   
    document.body.classList.toggle('dark');

    localStorage.setItem('darkMode', document.body.classList.contains('dark'));

});