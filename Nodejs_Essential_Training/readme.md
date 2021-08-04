## LinkedIn Learning
# Node.js Essential Training
This course is divided into 6 chapters 
- What is Node.js
- Set up your Environment
- Node Globals
- Node Modules
- File System Basics
- Files and Streams


# Node Globals

inside the globalProcess.js file 
```js
const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag)+1;
    return process.argv[indexAfterFlag];
}

const greeting = grab("--greeting")
const user = grab("--user");

console.log(`${greeting} ${user}`)

```

In terminal we should write
```
node globalProcess --greeting Hello --user Agnik
```




# Node modules

```js
const path = require("path");
//console.log(path)
const dirUploads = path.join(__dirname,"www","files","uploads");
console.log(dirUploads)


const util = require('util')
util.log(path.basename(__filename));
util.log(" ^ The name of the current file");
/*
3 Aug 22:37:05 - core.js
3 Aug 22:37:05 -  ^ The name of the current file
*/

const v8 = require('v8');
util.log(v8.getHeapStatistics());
}

```

Destructuring 
```js
const {getHeapStatistics} = require('v8')

```

**Output**
```

(base) Agniks-MacBook-Air:Nodejs_Essential_Training agniksaha$ node core
/Users/agniksaha/Documents/Nodejs_developer/code_with_mosh/node apps/Nodejs_Essential_Training/www/files/uploads
3 Aug 22:39:06 - core.js
3 Aug 22:39:06 -  ^ The name of the current file
3 Aug 22:39:06 - {
  total_heap_size: 4902912,
  total_heap_size_executable: 524288,
  total_physical_size: 3751656,
  total_available_size: 2194124200,
  used_heap_size: 2715120,
  heap_size_limit: 2197815296,
  malloced_memory: 8192,
  peak_malloced_memory: 123200,
  does_zap_garbage: 0,
  number_of_native_contexts: 1,
  number_of_detached_contexts: 0
}
```