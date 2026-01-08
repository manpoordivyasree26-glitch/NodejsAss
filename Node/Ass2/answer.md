## QUESTIONS


## Q1. NODE.JS ARCHITECTURE 
![Node.js](https://www.simplilearn.com/ice9/free_resources_article_thumb/node.js-architecture.png)
Node.js allows us to run JavaScript outside the browser. It works in a way where it doesn’t get stuck on slow 
tasks. Instead of using many threads, it uses one main thread and an event loop to handle many requests at the 
same time. This makes Node.js fast and good for real-time apps like chat and live updates.
### V8(javascript engine)
V8 is the part that actually runs JavaScript code. It takes our JavaScript and turns it into machine code so the 
computer can understand it. Google made V8, and both Chrome and Node.js use it.
### Node.js Core APIs
Node.js gives us built-in features so JavaScript can interact with the computer.
For example: we can read files, make servers, or work with encryption.
Without these APIs JavaScript alone cannot do these things.
Examples:
fs → read/write files
http → make a server
path → handle file paths
crypto → hashing/encryption
### Native Bindings
Native bindings are like a bridge.
They connect JavaScript code to the C/C++ code that actually talks to the operating system.
This is important because JavaScript alone cannot directly access system features.
### eventLoop
The event loop is like the main controller of Node.js.
It decides what to run now and what to run later.
It helps Node.js do many tasks without blocking or freezing.
Because of the event loop, Node.js can handle lots of requests smoothly.


## LIBUV
![libuv](https://velog.velcdn.com/images/tastestar/post/2520bbfd-56e1-4512-9d40-d724c6af9072/image.png)

### what is libuv?
libuv is a library written in C that gives Node.js its non-blocking abilities.
If JavaScript wants to read a file or handle a timer, libuv helps make that possible.
### Why Node.js needs libuv
JavaScript cannot do async tasks or talk to the system on its own.
libuv handles those tasks in the background so JavaScript can keep running.
### What libuv is responsible for
event loop
timers (setTimeout etc.)
networking
async tasks
thread pool
Thread Pool


### THREAD POOL
![thread pool](https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Thread_pool.svg/800px-Thread_pool.svg.png)

### What is a thread pool?
Thread pool is a small group of background workers that handle tasks that would otherwise block the main thread.
### Why Node.js uses a thread pool
Some tasks are slow (like reading big files).
If we did those on the main thread, everything would freeze.
Thread pool prevents that from happening.
### which opeartions are handled by the thread pool
file system tasks
DNS lookups
cryptography
compression
These tasks run in the background.


## WORKER THREAD
![worker thread](https://images.ctfassets.net/hspc7zpa5cvq/20h5efXHT4bQbuf44mdq2H/a40944191d031217a9169b17a8ef35d6/worker-diagram_2x__1_.jpg)
### What are worker threads?
Worker threads are extra JavaScript threads inside Node.js.
They can run their own JavaScript code separately.
### Why we need worker threads
If we do heavy CPU work (like image processing or large calculations), the main thread would freeze.
Worker threads allow us to move that heavy work off the main thread.
### difference between thread pool and worker threads
Simple difference (in my words)
Thread Pool → for slow I/O tasks
Worker Threads → for heavy CPU tasks
Event Loop Queues
The event loop has two important queues:

## EVENT LOOP QUEUE
![event loop queue](https://miro.medium.com/v2/resize:fit:1200/1*SvTxMIEudVv8YRW_ELRamw.png)
They event loop has two important queue
### Macro Task Queue
These are bigger async tasks like:
setTimeout
setInterval
setImmediate
I/O callbacks
### Micro Task Queue
These are smaller and more important tasks like:
Promise callbacks (then/catch)
process.nextTick
queueMicrotask
### Which one runs first?
Micro tasks always run before macro tasks.