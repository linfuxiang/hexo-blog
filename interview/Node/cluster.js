const cluster = require("cluster");
const numCPUs = require("os").cpus().length;

// console.log(cluster.isMaster, numCPUs);

// cluster.setupMaster({
//   exec: 'worker.js',
//   args: ['--use', 'https'],
//   silent: true
// });

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    const worker = cluster.fork();
    //  在主进程中，这会发送消息给特定的工作进程
    worker.send({ data: i });

    worker.on("message", (msg) => {
      console.log(msg);
      worker.kill();
    });
  }
  cluster.on("exit", function (worker, code, signal) {
    console.log("worker " + worker.process.pid + " died");
  });
} else {
  // 监听子进程发送的信息
  process.on("message", async (msg) => {
    const delay = Math.floor(Math.random() * 5000);
    console.log(msg.data, delay);
    await sleep(delay);
    // 在工作进程中，这会发送消息给主进程
    process.send({ data: `end-${JSON.stringify(msg)}` });
  });
}

function sleep(delay = 1000) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}
