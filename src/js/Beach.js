var count = 0;
var maxBottleNum = 8;
var interval = 500;
var wave = document.getElementsByClassName('wave');

create = setInterval(function() {
    if (count < maxBottleNum)
        createBottle();
 }, interval);

 function initialize() {
    var tempEvent = document.getElementsByClassName('tempEvent');
    for(let i = 0; i < tempEvent.length; i++) {
        tempEvent[i].addEventListener("click", function() {
          console.log("Clicked index: " + i);
          for(let j = 0; j < wave.length; j++) {
              var style = wave[i].style;
              style.animationPlayState = "running";
            } 
              setTimeout(cleanBottle, 500);
        })
    }

    const animated = document.querySelector('.wave');

    animated.addEventListener('animationend', () => {
        var target = wave[0];
        target.classList.remove('wave');
        void target.offsetWidth;
        target.classList.add('wave');
        target.style.animationPlayState = "paused";
    console.log('Animation ended');
});
 }

 initialize();

 function createBottle() {
        count += 1;

        var div = document.createElement('button')

        div.className = "bottle";

        var divWidth = document.getElementById('beach').offsetWidth;
        var divHeight = document.getElementById('beach').offsetHeight;

        console.log(divWidth + divHeight);

        div.style.position = 'absolute';
        div.style.left = String((Math.random()*100)%100) + '%';
        div.style.top = String((Math.random()*100)%100) + '%';
        div.style.zIndex = String(count);

        var image = document.createElement('img');
        image.className = "bottle";
        image.src = './image/letter.svg';
        div.appendChild(image);
        document.getElementById('beach').appendChild(div);
}

function deleteBottle(bottle) {
    bottle.parentNode.removeChild(bottle);
}

function cleanBottle() {
    var beach = document.getElementById('beach');
    var child = beach.lastElementChild;  
        while (child) { 
            beach.removeChild(child); 
            child = beach.lastElementChild; 
            count -= 1;
        } 
}

function getRandomPos(minRange, maxRange) {
    return Math.random() * maxRange + minRange;
}
