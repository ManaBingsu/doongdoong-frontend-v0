createBottle()
createBottle()
createBottle()

var count = 0;
var maxBottleNum = 6;

create = setInterval(function() {
    if (count < maxBottleNum)
        createBottle();
 }, 2000);

 function createBottle() {
        count += 1;

        var div = document.createElement('div');
        div.className = "bottle";

        var divWidth = document.getElementById('beach').offsetWidth;
        var divHeight = document.getElementById('beach').offsetHeight;

        console.log(divWidth + divHeight);

        div.style.position = 'absolute';
        div.style.left = String(getRandomPos(0, divWidth)) + 'px';
        div.style.top = String(getRandomPos(0, divHeight)) + 'px';
        div.style.zIndex = String(count);

        var image = document.createElement('img');
        image.className = "bottle";
        image.src = './image/letter.svg';
        div.appendChild(image);
        document.getElementById('beach').appendChild(div);
}

function getRandomPos(minRange, maxRange) {
    return Math.random() * maxRange + minRange;
}
