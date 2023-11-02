import { exec } from 'child_process'
import fs from 'node:fs'
import path from 'path'

const deps = [
  {
    name: '开发依赖',
    install: ['unplugin-vue-components', 'unplugin-auto-import', 'sass']
  },
  {
    name: '编译工具',
    install: ['vite-plugin-vue-setup-extend']
  },
  {
    name: '辅助工具',
    install: ['gsap', 'dayjs']
  },
  {
    name: '辅助帮助',
    install: ['csstype']
  }
]

const config = {
  maxLength: 20,
  fillString: ' '
}

type Deps = typeof deps

/**
 * 自动安装依赖
 * @param dependencies
 */
function autoInstall(dependencies: Deps) {
  dependencies.forEach(({ name, install }) => {
    install.forEach((depName) => {
      exec(`cnpm install ${depName} -D`, (error) => {
        if (!error) {
          log(
            `${name.padEnd(
              config.maxLength,
              config.fillString
            )}${depName.padEnd(
              config.maxLength * 2,
              config.fillString
            )} 安装成功`
          )
        } else {
          log(`${name}:${depName} 安装失败🙇‍♂️`)
        }
      })
    })
  })
}

/**
 * 打印输出
 * @param str
 * @param color
 */
function log(str: string, color: string = '#ff0000') {
  const coloredStr = `\x1b[38;2;${parseInt(color.slice(1, 3), 16)};${parseInt(
    color.slice(3, 5),
    16
  )};${parseInt(color.slice(5), 16)}m${str}\x1b[0m`
  console.log(coloredStr)
}

function copy(origin: string, dist: string) {
  // 判断 origin 是否为目录
  const originStats = fs.statSync(origin)
  if (originStats.isDirectory()) {
    // 创建目标目录
    fs.mkdirSync(dist, { recursive: true })
    // 读取原始目录中的所有文件
    const files = fs.readdirSync(origin)
    // 遍历所有文件
    for (const file of files) {
      const originFilePath = path.join(origin, file)
      const distFilePath = path.join(dist, file)
      // 判断文件类型
      const stats = fs.statSync(originFilePath)
      if (stats.isFile()) {
        // 如果是文件，则进行复制
        fs.copyFileSync(originFilePath, distFilePath)
      } else if (stats.isDirectory()) {
        // 如果是目录，则递归调用复制函数
        copy(originFilePath, distFilePath)
      }
    }
  } else if (originStats.isFile()) {
    // 如果 origin 是文件，则直接进行复制
    fs.copyFileSync(origin, dist)
  }
}

const scss = () => {
  copy('./cli/template', './')
}

autoInstall(deps)
scss()
