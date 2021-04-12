- 初始化参数：从配置文件和 shell 语句读取、合并参数
- 开始编译：初始化 compiler，调用配置中的插件的 apply 方法注册插件
- 确定入口：从配置文件的 entry 入口开始，解析文件构建 AST 语法树，递归找出所有的依赖，如果非 js 或 json 文件，就使用 loader 进行加载和解析
- 编译模块：对所有模块进行编译，
- 生成代码：把 externals，assets 配置的依赖独立出来，然后合并生成新的代码，最后输出到新的文件去

css-loader 处理 css 文件中的@import 和 url
style-loader 把 css 代码内联到 link 标签去

Compilation 对象代表了一次资源版本构建。当运行 webpack 开发环境中间件时，每当检测到一个文件变化，就会创建一个新的 compilation，从而生成一组新的编译资源。一个 Compilation 对象表现了当前的模块资源、编译生成资源、变化的文件、以及被跟踪依赖的状态信息，简单来讲就是把本次打包编译的内容存到内存里。Compilation 的职责就是构建模块和 Chunk
