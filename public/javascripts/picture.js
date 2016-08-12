window.onload = function() {

    var messages = [];
    var socket = io.connect('http://localhost:3000');

    var takepicture = document.getElementById("takepicture");
    var content = document.getElementById("capture");

    socket.on('picturetaken', function (data) {
            content.innerHTML = "Picture taken";
    });

    takepicture.onclick = function() {
        socket.emit('takepicture');
    };

}