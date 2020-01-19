import socketio from 'socket.io-client'

// pegar ip do pc que está no expo web para rodar no celular
const socket = socketio('http://localhost:3333', {
    autoConnect: false,
})

function subscribeToNewDevs(subscribeFunction) {
    socket.on('new-dev', subscribeFunction)
}

function connect(latitude, longitude, techs) {
    socket.io.opts.query= {
        latitude,
        longitude,
        techs,
    }

    socket.connect()

}    

function disconnect() {
    if(socket.connected) {
        socket.disconnect()
    }
}

export {
    connect,
    disconnect,
    subscribeToNewDevs
}