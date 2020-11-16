draw();

function draw() {
    var div = document.createElement('div');
    div.setAttribute("class", "wave");
    div.innerHTML = "Hello World";
    var button = document.createElement('button');
    button.innerHTML = "CLOSE";
    button.onclick = function() {
            document.getElementById('myDiv')
    }
    div.appendChild(button);
    document.body.appendChild(div);
}
