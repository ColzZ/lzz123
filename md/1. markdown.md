## 欢迎使用 MarkdownPad 2 ##

**MarkdownPad** 是 Windows 平台上一个功能完善的 Markdown 编辑器。

### 专为 Markdown 打造 ###

提供了语法高亮和方便的快捷键功能，给您最好的 Markdown 编写体验。

来试一下：

- **粗体** (`Ctrl+B`) and *斜体* (`Ctrl+I`)
- 引用 (`Ctrl+Q`)
- 代码块 (`Ctrl+K`)
- 标题 1, 2, 3 (`Ctrl+1`, `Ctrl+2`, `Ctrl+3`)
- 列表 (`Ctrl+U` and `Ctrl+Shift+O`)

### 实时预览，所见即所得 ###

无需猜测您的 [语法](http://markdownpad.com) 是否正确；每当您敲击键盘，实时预览功能都会立刻准确呈现出文档的显示效果。

### 自由定制 ###
 
100% 可自定义的字体、配色、布局和样式，让您可以将 MarkdownPad 配置的得心应手。

### 为高级用户而设计的稳定的 Markdown 编辑器 ###
 
 MarkdownPad 支持多种 Markdown 解析引擎，包括 标准 Markdown 、 Markdown 扩展 (包括表格支持) 以及 GitHub 风格 Markdown 。
 
 有了标签式多文档界面、PDF 导出、内置的图片上传工具、会话管理、拼写检查、自动保存、语法高亮以及内置的 CSS 管理器，您可以随心所欲地使用 MarkdownPad。

### 链接

简单的链接

	This is an [example link](http://example.com/)
	--
	<p>This is an <a href="http://example.com/">
	example link</a>.</p>

带title的链接

	This is an [example link](http://example.com/ "With a Title")
	--
	<p>This is an <a href="http://example.com/" title="With a Title">
	example link</a>.</p>

可以引用的链接

	I get 10 times more traffic from [Google][1] than from
	[Yahoo][2] or [MSN][3].
	
	[1]: http://google.com/ "Google"
	[2]: http://search.yahoo.com/ "Yahoo Search"
	[3]: http://search.msn.com/ "MSN Search"

### 图片

行内形式（title 是选择性的）：

	![alt text](/path/to/img.jpg "Title")

参考形式：	

	![alt text][id]
	[id]: /path/to/img.jpg "Title"

上面两种方法都会输出 HTML 为：

	<img src="/path/to/img.jpg" alt="alt text" title="Title" />