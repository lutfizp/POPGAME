window.onload = function(){
    var img = document.getElementById("nyengir");
    var count = document.getElementById("score");
    var score = 0;
    var audio = new Audio("POP.mp3");

    img.addEventListener('mousedown', function (){
        img.src = 'Tidur.png';
        increaseScore();
        audio.play();
    });

    img.addEventListener('mouseup', function (){
        img.src = 'Nyengir.png'
        audio.play();
    });

    function increaseScore(){
        score++;
        count.innerHTML = score;
    }
}

