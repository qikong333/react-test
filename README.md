# React + TypeScript + Vite 项目

## 技术栈

- React 18.2.0 - 用于构建用户界面的 JavaScript 库
- TypeScript 5.7.2 - JavaScript 的超集，添加了类型系统
- Vite 6.1.0 - 现代前端构建工具，提供极速的开发体验
- TailwindCSS 3.3.5 - 实用优先的 CSS 框架
- Swiper 11.2.4 - 现代移动触摸滑块框架
- React Simple Animate 3.5.3 - React 动画库
- SASS - CSS 预处理器，用于编写更优雅的样式代码

## 项目特性

- 🚀 基于 Vite 的快速开发和构建
- 💪 TypeScript 支持，提供类型安全
- 🎨 TailwindCSS 实现响应式设计
- 📱 移动端优先的设计理念
- 🔄 流畅的轮播和动画效果
- 🎯 ESLint 代码规范检查

## 项目结构

```
├── src/
│   ├── components/     # React 组件
│   ├── styles/        # 样式文件
│   ├── assets/        # 静态资源
│   ├── App.tsx        # 应用程序入口组件
│   └── main.tsx       # 应用程序入口文件
├── public/            # 公共静态资源
├── vite.config.ts     # Vite 配置文件
├── tailwind.config.js # TailwindCSS 配置
└── tsconfig.json      # TypeScript 配置
```

## 安装和运行

1. 安装依赖

```bash
npm install
```

2. 启动开发服务器

```bash
npm run dev
```

3. 构建生产版本

```bash
npm run build
```

4. 预览生产版本

```bash
npm run preview
```

## ESLint 配置

项目使用 ESLint 进行代码规范检查，支持 TypeScript。如果你正在开发生产应用，建议启用类型感知的 lint 规则：

1. 配置 `parserOptions`：

```js
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname
    }
  }
})
```

2. 使用推荐的 TypeScript 检查配置：

- 将 `tseslint.configs.recommended` 替换为 `tseslint.configs.recommendedTypeChecked` 或 `tseslint.configs.strictTypeChecked`
- 可选添加 `...tseslint.configs.stylisticTypeChecked`

3. 集成 React ESLint 插件：

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  settings: { react: { version: '18.3' } },
  plugins: {
    react
  },
  rules: {
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules
  }
})
```
