const cp = require("child_process");
const numCPUs = require("os").cpus().length;

// function sleep(delay = 1000) {
//   return new Promise((resolve) => setTimeout(resolve, delay));
// }

// // 监听父进程发送的信息
// process.on("message", async (msg) => {
//   const delay = Math.floor(Math.random() * 5000);
//   console.log(msg.data, delay);
//   await sleep(delay);
//   // 在工作进程中，这会发送消息给主进程
//   process.send({ data: `end-${JSON.stringify(msg)}` });
// });

// cp.exec("echo hello world;rm -rf ./s.txt", function (err, stdout) {
//   console.log(stdout);
// });

for (let i = 0; i < numCPUs; i++) {
  let child = cp.fork("./child_process_child");

  child.on("message", function (msg) {
    console.log(msg);
    child.kill();
  });

  child.send({ data: i });
}

// cp.exec("echo hello world", function (err, stdout) {
//   console.log(stdout);
// });
