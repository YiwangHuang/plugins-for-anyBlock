# VuePress Blog MonoRepo

这是一个Monorepo项目，用于基于[GitHub - any-block/obsidian-any-block](https://github.com/any-block/obsidian-any-block)创建功能丰富的文档和博客网站。

## 项目结构

此Monorepo包含以下主要组件：

1. **VuePress模板** - 位于`docs`目录，基于`vuepress-theme-hope`主题扩展开发，主要用于对AnyBlock相关插件进行测试和展示。

2. **AnyBlock Markdown-it插件** - 用于扩展Markdown语法，支持更丰富的内容块表示和自定义渲染。

3. **AnyBlock VuePress插件** - 将AnyBlock功能集成到VuePress中，使VuePress站点能够使用增强的Markdown格式。

## 使用方法

### 安装依赖

本项目使用pnpm作为包管理工具：

```bash
pnpm install
```

### 构建

构建整个项目：

```bash
pnpm build
```

### 开发

启动vuepress开发服务器：

```bash
pnpm docs:dev
```

## 技术栈

- VuePress v2
- vuepress-theme-hope
- Vue.js
- TypeScript
- Markdown-it

## TODO

- 为插件增加options参数，用于控制支持的anyBlock语法块类型
- 解决plugins/markdown-it-anyBlock/index.ts中`import "../ABConverter/converter/abc_mermaid"`在`pnpm docs:dev`引起的document相关的报错
- 优化**AnyBlock VuePress插件**的构建流程，特别是CSS片段的打包方式

## 许可证

[MIT](LICENSE) 