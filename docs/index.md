---
title: 首页
hero:
    image: /react-project-changfeng/react.png
    desc: '企业级React 业务通用Hooks库'
    actions:
      - text: 指南
        link: /guide
      - text: Hooks列表
        link: /hooks
---

## 特性
- 落地pnpm + workspace多包管理解决方案
- 通过抽象工程中常用的hook，掌握企业级自定义Hooks开发模式
- 可靠的代码健壮：使用TS构建，提供完善的类型定义文件
- 功能丰富：实现20+高频场景Hooks（如网络请求、DOM操作、状态管理、性能优化等）
- 可定制化：支持自定义Hooks，满足特定业务需求
- 文档完善：每个Hooks都有详细的使用说明和示例

## 安装
```bash
pnpm install changfeng-hooks
```

## 使用
```ts
import { useMemoizedFn } from 'changfeng-hooks';
```
