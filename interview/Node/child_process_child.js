// 监听子进程发送的信息
process.on("message", async (msg) => {
  const delay = Math.floor(Math.random() * 5000);
  console.log(msg.data, delay);
  await sleep(delay);
  // 在工作进程中，这会发送消息给主进程
  process.send({ data: `end-${JSON.stringify(msg)}` });
});

function sleep(delay = 1000) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}
