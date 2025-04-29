import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: 'markdownItAnyBlock',
      fileName: 'index_mdit',
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      // 指定外部依赖，这些依赖不会被打包进最终文件
      external: ['markdown-it'],
      // 明确指定输入文件，避免构建时包含无关文件
      // 这对于 monorepo 项目特别重要，可以防止递归处理整个项目结构
      input: {
        index: resolve(__dirname, 'index.ts')
      },
      output: {
        globals: {
          'markdown-it': 'markdownit'
        }
      }
    }
  },
  plugins: [dts({
    // 只包含当前项目的 TypeScript 文件
    include: ['index.ts', 'src/**/*.ts'],
    // 排除不需要的文件和目录
    // 这对于 monorepo 项目很重要，可以避免包含其他子项目或文档
    exclude: ['**/node_modules/**', '**/dist/**', '**/docs/**']
  })],
  resolve: {
    alias: {
      '@ABConverter': resolve(__dirname, '../ABConverter')
    }
  }
})