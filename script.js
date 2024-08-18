let score = 0;
let lives = 3;
let antSpeed = 3000;
let speedDecreaseInterval = 5000;
let speedFactor = 0.9;
let smashSound = new Audio('smash.mp3');

function createAnt(){
    const ant = document.createElement('div');
    ant.classList.add('ant');
    ant.style.left = Math.random() * (window.innerWidth * 0.7) + 'px';
    ant.style.top = '0px';
    document.getElementById('game').appendChild(ant);


    const antMovement = setInterval(() => {
        ant.style.top = parseInt(ant.style.top) + 3 + "px";

        if (parseInt(ant.style.top) > window.innerHeight - 50){
            clearInterval(antMovement);
            ant.remove();

            lives -= 1;
            document.getElementById('life').innerText = lives;

            if (lives <= 0){
                alert("Game over your Score " + score);
                resetGame();
            }
        }

    }, antSpeed / 200);


    ant.addEventListener('click', function(){
        clearInterval(antMovement);
        ant.classList.add('smashed');
        score += 10;
        document.getElementById('score').innerText = score;
        smashSound.play();
        setTimeout(() => {
            ant.remove();
        }, 2000);

    });


}

function resetGame(){
    score = 0;
    lives = 3;
    document.getElementById('score').innerText = score;
    document.getElementById('life').innerText = lives;
    antSpeed = 4000;
}

function startGame(){

    setInterval(createAnt, 1500);

    setInterval(() => {
        antSpeed *= speedFactor;
    }, speedDecreaseInterval);

}


startGame();
