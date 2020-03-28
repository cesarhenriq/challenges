import io from 'socket.io-client'

const url = `https://zrp-challenge-socket.herokuapp.com:443`
const socket = io(url)

export default socket
