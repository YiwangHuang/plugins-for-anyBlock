import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { markdownAnyblockPlugin } from 'vuepress-plugin-markdown-anyblock'

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "VuePress 博客",
  description: "vuepress-theme-hope 的博客演示",
  theme,
  // extendsMarkdown: (md) => {
  //   md.use(ab_mdit)
  // },
  plugins: [
    markdownAnyblockPlugin(),
  ],
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
