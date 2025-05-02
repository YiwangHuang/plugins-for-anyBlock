// import { getFullLocaleConfig } from '@vuepress/helper'
import type { Plugin } from 'vuepress/core'
import { getDirname, path } from 'vuepress/utils'
import ab_mdit from 'markdown-it-anyBlock'
import { JSDOM } from "jsdom";

const __dirname = import.meta.dirname||getDirname(import.meta.url)

const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`, {
    url: 'http://localhost/', // @warn 若缺少该行，则在mdit+build环境下，编译报错
});
// @ts-ignore 不能将类型“DOMWindow”分配给类型“Window & typeof globalThis”
global.Storage = function () { // @warn 若缺少改行，则在不知名环境下会出现"Storage is not defined"错误
    this.temp_method = function () {
    }
  }
// @ts-ignore 不能将类型“DOMWindow”分配给类型“Window & typeof globalThis”
global.window = dom.window
global.history = dom.window.history // @warn 若缺少该行，则在mdit+build环境下，编译报错：ReferenceError: history is not defined
global.document = dom.window.document
global.NodeList = dom.window.NodeList
global.HTMLElement = dom.window.HTMLElement
global.HTMLDivElement = dom.window.HTMLDivElement
global.HTMLPreElement = dom.window.HTMLPreElement
global.HTMLQuoteElement = dom.window.HTMLQuoteElement
global.HTMLTableElement = dom.window.HTMLTableElement
global.HTMLUListElement = dom.window.HTMLUListElement
global.HTMLScriptElement = dom.window.HTMLScriptElement
dom.window.scrollTo = ()=>{} // @warn 若缺少该行，编译警告：Error: Not implemented: window.scrollTo*/

export const injectCSSPlugin = (): Plugin => {
    return {
        name: 'inject-css',
        clientConfigFile: path.resolve(__dirname, '../client/config.js'),
        extendsMarkdown: (md) => {
            md.use(ab_mdit)
        },
    }
}

