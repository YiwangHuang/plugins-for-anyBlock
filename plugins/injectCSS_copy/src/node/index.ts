// import { getFullLocaleConfig } from '@vuepress/helper'
import type { Plugin } from 'vuepress/core'
import { getDirname, path } from 'vuepress/utils'

const __dirname = import.meta.dirname||getDirname(import.meta.url)

export const injectCSSPlugin = (): Plugin => {
    return {
        name: 'inject-css',
        clientConfigFile: path.resolve(__dirname, '../client/config.js')
    }
}

