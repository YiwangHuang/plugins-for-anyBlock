import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { injectCSSPlugin } from 'inject-css'
export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "VuePress 博客",
  description: "vuepress-theme-hope 的博客演示",

  theme,
  plugins: [
    injectCSSPlugin(),
  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
