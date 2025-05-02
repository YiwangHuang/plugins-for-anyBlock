import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { defineConfig } from 'rollup'
import postcss from 'rollup-plugin-postcss'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/**
 * TODO: 两种CSS处理方式 extract: true 和 inject: true
 * CSS打包配置函数
 * @param {string} cssFilePath - CSS源文件路径
 * @param {string} outputDir - 输出目录
 * @param {string} outputFileName - 输出文件名
 */
export const buildCssBundle = (
  cssFilePath = 'client/styles/styles.css',
  outputDir = 'client/styles',
  outputFileName = 'styles.css'
) => ({
  input: resolve(__dirname, 'src', cssFilePath),
  output: {
    dir: resolve(__dirname, 'lib', outputDir),
    assetFileNames: outputFileName
  },
  plugins: [
    postcss({
      extract: true, // CSS提取为独立文件
      minimize: true, // 压缩CSS
      sourceMap: true, // 生成sourceMap
      inject: false, // 不注入到JS
      plugins: []
    })
  ]
})

// 导出配置
export default defineConfig([
  buildCssBundle('client/styles/styles.css', 'client/styles', 'styles.css')
]) 