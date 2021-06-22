const { Worker, isMainThread } = require("worker_threads");
const path = require("path");

if (isMainThread) {
  // This code is executed in the main thread and not in the worker.

  // Create the worker.
  const worker = new Worker(path.resolve("./worker_threads_child.js"));
  // Listen for messages from the worker and print them.
  worker.on("message", (msg) => {
    console.log(msg);
  });
}
