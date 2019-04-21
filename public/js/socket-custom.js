var socket = io();

socket.on('connect', function() {

    console.log('Conectado al servidor');
});

//escuchar
socket.on('disconnect', function() {

    console.log('Se perdio conexion con el servidor');
});

//enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Matias',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta del servidor: ', resp)
});

//escuchar informacion
socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor: ', mensaje)
});