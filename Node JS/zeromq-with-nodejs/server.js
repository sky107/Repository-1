const zmq = require('zeromq');

const sock = new zmq.Push();

run();

async function run() {
  await sock.bind("tcp://localhost:7000")
  console.log("server running at 7000")
}