(function() {
    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
            /**
             * Your drawings need to be inside this function otherwise they will be reset when 
             * you resize the browser window and the canvas goes will be cleared.
             */
            drawStuff(); 
    }
    resizeCanvas();

    function drawStuff() {
            // do your drawing stuff here
            //draw()
    }

    function draw() {
                var div = document.createElement('div');
                div.setAttribute("id", "bottle");
                div.innerHTML = "Hello World";
                var button = document.createElement('button');
                button.innerHTML = "CLOSE";
                button.onclick = function() {
                        document.getElementById('myDiv')
                }
                div.appendChild(button);
                document.body.appendChild(div);
        }
})()
