import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Pages from 'vite-plugin-pages'
import { resolve } from 'path'
import Components from 'unplugin-vue-components/vite'
import ViteComponents, { ElementPlusResolver } from 'unplugin-vue-components/resolvers'



// https://vitejs.dev/config/
export default ({mode})=>{
  const base = mode === 'production' ? '/dashboard/' : './';
  return defineConfig({
    mode,
    base,
    plugins: [
      vue(),
      vueJsx(),
      legacy({
        targets: ['defaults', 'not IE 11']
      }),
      Pages({
        extensions: ['vue'],
        pagesDir: 'src/views',
        // views 中页面拆分的子模块放parts文件夹中
        exclude: ['**/parts/*.vue'],
      }),
      Components({ 
        dts: true,
        dirs: ['src/components'],
        include: [/\.vue$/, /\.vue\?vue/],
        exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
        resolvers: [
          ElementPlusResolver(),
        ]
       }),
    ],
    server: {
      port: 3001,
      proxy: {
        // 字符串简写写法
        // 选项写法
        '/api': {
          target: 'http://localhost:3000/api',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
      }
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '~': resolve(__dirname, 'src'),
      },
    },
    css: {
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove();
                }
              }
            }
          }
        ]
      }
    }
  })
  
} 