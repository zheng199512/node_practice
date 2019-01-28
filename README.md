# NodeJS教程

Node.js 是一个基于Chrome JavaScript 运行时建立的一个平台。

Node.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。

# Node.js创建第一个应用

node服务器的组成：

1. **引入 required 模块**我们可以使用 **require** 指令来载入 Node.js 模块。
2. **创建服务器**服务器可以监听客户端的请求，类似于 Apache 、Nginx 等 HTTP 服务器。
3. **接收请求与响应请求** 服务器很容易创建，客户端可以使用浏览器或终端发送 HTTP 请求，服务器接收请求后返回响应数据。

# NPM使用介绍

NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：

- 允许用户从NPM服务器下载别人编写的第三方包到本地使用。
- 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
- 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。

全局安装和本地安装的区别：

可能会出现错误:

```
npm err! Error: connect ECONNREFUSED 127.0.0.1:8087 
```

解决方法：

```
$ npm config set proxy null
```

查看全局安装的模块：

```
$ npm list -g
```

查看某个模块的版本号:

```bash
npm list grunt
projectName@projectVersion /path/to/project/folder
└── grunt@0.4.1
```

## Package.json 属性说明

- **name** - 包名。
- **version** - 包的版本号。
- **description** - 包的描述。
- **homepage** - 包的官网 url 。
- **author** - 包的作者姓名。
- **contributors** - 包的其他贡献者姓名。
- **dependencies** - 依赖包列表。如果依赖包没有安装，npm 会自动将依赖包安装在 node_module 目录下。
- **repository** - 包代码存放的地方的类型，可以是 git 或 svn，git 可在 Github 上。
- **main** - main 字段指定了程序的主入口文件，require('moduleName') 就会加载这个文件。这个字段的默认值是模块根目录下面的 index.js。
- **keywords** - 关键字

## 卸载模块

```bash
npm uninstall express
```

卸载后查看是否存在：

```bash
npm ls
```

## 更新模块

```bash
npm update express
```

## 搜索模块

```bash
npm search express
```

## 创建模块

生成的文件包括基本的结果

```bash
npm init
```

可以使用命令在npm资源库中注册用户：

```bash
npm adduser
```

接下来就可以发布模块：

```bash
npm publish
```

## 版本号

使用NPM下载和发布代码时都会接触到版本号。NPM使用语义版本号来管理代码，这里简单介绍一下。

语义版本号分为X.Y.Z三位，分别代表主版本号、次版本号和补丁版本号。当代码变更时，版本号按以下原则更新。

- 如果只是修复bug，需要更新Z位。
- 如果是新增了功能，但是向下兼容，需要更新Y位。
- 如果有大变动，向下不兼容，需要更新X位。

NPM提供了很多命令，例如install和publish，使用npm help可查看所有命令。

- NPM提供了很多命令，例如`install`和`publish`，使用`npm help`可查看所有命令。
- 使用`npm help <command>`可查看某条命令的详细帮助，例如`npm help install`。
- 在`package.json`所在目录下使用`npm install . -g`可先在本地安装当前命令行程序，可用于发布前的本地测试。
- 使用`npm update <package>`可以把当前目录下`node_modules`子目录里边的对应模块更新至最新版本。
- 使用`npm update <package> -g`可以把全局安装的对应命令行程序更新至最新版。
- 使用`npm cache clear`可以清空NPM本地缓存，用于对付使用相同版本号发布新版本代码的人。
- 使用`npm unpublish <package>@<version>`可以撤销发布自己发布过的某个版本代码。

# Node.js REPL

- **读取** - 读取用户输入，解析输入了Javascript 数据结构并存储在内存中。
- **执行** - 执行输入的数据结构
- **打印** - 输出结果
- **循环** - 循环操作以上步骤直到用户两次按下 **ctrl-c** 按钮退出。

## REPL命令

- **ctrl + c** - 退出当前终端。
- **ctrl + c 按下两次** - 退出 Node REPL。
- **ctrl + d** - 退出 Node REPL.
- **向上/向下 键** - 查看输入的历史命令
- **tab 键** - 列出当前命令
- **.help** - 列出使用命令
- **.break** - 退出多行表达式
- **.clear** - 退出多行表达式
- **.save filename** - 保存当前的 Node REPL 会话到指定文件
- **.load filename** - 载入当前 Node REPL 会话的文件内容。

# Node.js 回调函数

Node.js 异步编程的直接体现就是回调。

异步编程依托于回调来实现，但不能说使用了回调后程序就异步化了。

回调函数在完成任务后就会被调用，Node 使用了大量的回调函数，Node 所有 API 都支持回调函数。

例如，我们可以**一边读取文件，一边执行其他命令**，在文件读取完成后，我们将文件内容作为回调函数的参数返回。这样在执行代码时就没有阻塞或等待文件 I/O 操作。这就大大提高了 Node.js 的性能，可以处理大量的并发请求。

回调函数一般作为函数的最后一个参数出现。错误作为第一个参数。

# Node.js 事件循环

Node.js 是单进程单线程应用程序，但是因为 V8 引擎提供的异步执行回调接口，通过这些接口可以处理大量的并发，所以性能非常高。

Node.js 几乎每一个 API 都是支持回调函数的。

Node.js 基本上所有的事件机制都是用设计模式中观察者模式实现。

Node.js 单线程类似进入一个while(true)的事件循环，直到没有事件观察者退出，每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数.

## 事件驱动程序

最著名的非阻塞I/O或者事件驱动I/O

Node.js 使用事件驱动模型，当web server接收到请求，就把它关闭然后进行处理，然后去服务下一个web请求。

当这个请求完成，它被放回处理队列，当到达队列开头，这个结果被返回给用户。

这个模型非常高效可扩展性非常强，因为webserver一直接受请求而不等待任何读写操作。（这也被称之为非阻塞式IO或者事件驱动IO）

在事件驱动模型中，会生成一个主循环来监听事件，当检测到事件时触发回调函数。

![img](http://www.runoob.com/wp-content/uploads/2015/09/event_loop.jpg)

哈~

有点类似于观察者模式，事件相当于一个主题(Subject)，而所有注册到这个事件上的处理函数相当于观察者(Observer)。

Node.js 有多个内置的事件，我们可以通过引入 events 模块，并通过实例化 EventEmitter 类来绑定和监听事件，如下实例：

```js
// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
```

以下程序绑定事件处理程序：

```javascript
// 绑定事件及事件的处理程序
eventEmitter.on('eventName', eventHandler);
```

我们可以通过程序触发事件：

```javascript
// 触发事件
eventEmitter.emit('eventName');
```

# Node.js EventEmitter

- [vents（事件触发器）](http://nodejs.cn/api/events.html#events_events)
  - [传参数与 `this` 到监听器](http://nodejs.cn/api/events.html#events_passing_arguments_and_this_to_listeners)
  - [异步 VS 同步](http://nodejs.cn/api/events.html#events_asynchronous_vs_synchronous)
  - [事件只处理一次](http://nodejs.cn/api/events.html#events_handling_events_only_once)
  - [`error` 事件](http://nodejs.cn/api/events.html#events_error_events)
  - [EventEmitter 类](http://nodejs.cn/api/events.html#events_class_eventemitter)
    - ['newListener' 事件](http://nodejs.cn/api/events.html#events_event_newlistener)
    - ['removeListener' 事件](http://nodejs.cn/api/events.html#events_event_removelistener)
    - [EventEmitter.listenerCount(emitter, eventName)](http://nodejs.cn/api/events.html#events_eventemitter_listenercount_emitter_eventname)
    - [EventEmitter.defaultMaxListeners](http://nodejs.cn/api/events.html#events_eventemitter_defaultmaxlisteners)
    - [emitter.addListener(eventName, listener)](http://nodejs.cn/api/events.html#events_emitter_addlistener_eventname_listener)
    - [emitter.emit(eventName[, ...args\])](http://nodejs.cn/api/events.html#events_emitter_emit_eventname_args)
    - [emitter.eventNames()](http://nodejs.cn/api/events.html#events_emitter_eventnames)
    - [emitter.getMaxListeners()](http://nodejs.cn/api/events.html#events_emitter_getmaxlisteners)
    - [emitter.listenerCount(eventName)](http://nodejs.cn/api/events.html#events_emitter_listenercount_eventname)
    - [emitter.listeners(eventName)](http://nodejs.cn/api/events.html#events_emitter_listeners_eventname)
    - [emitter.off(eventName, listener)](http://nodejs.cn/api/events.html#events_emitter_off_eventname_listener)
    - [emitter.on(eventName, listener)](http://nodejs.cn/api/events.html#events_emitter_on_eventname_listener)
    - [emitter.once(eventName, listener)](http://nodejs.cn/api/events.html#events_emitter_once_eventname_listener)
    - [emitter.prependListener(eventName, listener)](http://nodejs.cn/api/events.html#events_emitter_prependlistener_eventname_listener)
    - [emitter.prependOnceListener(eventName, listener)](http://nodejs.cn/api/events.html#events_emitter_prependoncelistener_eventname_listener)
    - [emitter.removeAllListeners([eventName\])](http://nodejs.cn/api/events.html#events_emitter_removealllisteners_eventname)
    - [emitter.removeListener(eventName, listener)](http://nodejs.cn/api/events.html#events_emitter_removelistener_eventname_listener)
    - [emitter.setMaxListeners(n)](http://nodejs.cn/api/events.html#events_emitter_setmaxlisteners_n)
    - [emitter.rawListeners(eventName)](http://nodejs.cn/api/events.html#events_emitter_rawlisteners_eventname)

## 继承EventEmitter

大多数时候我们不会直接使用 EventEmitter，而是在对象中继承它。包括 fs、net、 http 在内的，只要是支持事件响应的核心模块都是 EventEmitter 的子类。

为什么要这样做呢？原因有两点：

首先，具有某个实体功能的对象实现事件符合语义， 事件的监听和发生应该是一个对象的方法。

其次 JavaScript 的对象机制是基于原型的，支持 部分多重继承，继承 EventEmitter 不会打乱对象原有的继承关系。

# Node.js Buffer缓冲区

v6.0以后，官方文档里面建议使用 Buffer.from() 接口去创建Buffer对象。

处理像TCP流或文件流时，必须使用到二进制数据。因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。

**Node.js 目前支持的字符编码包括：**

- **ascii** - 仅支持 7 位 ASCII 数据。如果设置去掉高位的话，这种编码是非常快的。
- **utf8** - 多字节编码的 Unicode 字符。许多网页和其他文档格式都使用 UTF-8 。
- **utf16le** - 2 或 4 个字节，小字节序编码的 Unicode 字符。支持代理对（U+10000 至 U+10FFFF）。
- **ucs2** - **utf16le** 的别名。
- **base64** - Base64 编码。
- **latin1** - 一种把 **Buffer** 编码成一字节编码的字符串的方式。
- **binary** - **latin1** 的别名。
- **hex** - 将每个字节编码为两个十六进制字符。

Buffer 提供了以下 API 来创建 Buffer 类：

- **Buffer.alloc(size[, fill[, encoding]])：** 返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0
- **Buffer.allocUnsafe(size)：** 返回一个指定大小的 Buffer 实例，但是它不会被初始化，所以它可能包含敏感的数据
- **Buffer.allocUnsafeSlow(size)**
- **Buffer.from(array)：** 返回一个被 array 的值初始化的新的 Buffer 实例（传入的 array 的元素只能是数字，不然就会自动被 0 覆盖）
- **Buffer.from(arrayBuffer[, byteOffset[, length]])：** 返回一个新建的与给定的 ArrayBuffer 共享同一内存的 Buffer。
- **Buffer.from(buffer)：** 复制传入的 Buffer 实例的数据，并返回一个新的 Buffer 实例
- **Buffer.from(string[, encoding])：** 返回一个被 string 的值初始化的新的 Buffer 实例

