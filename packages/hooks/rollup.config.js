import resolve from '@rollup/plugin-node-resolve'; // 解析第三方模块路径
import commonjs from '@rollup/plugin-commonjs'; // 转换 CommonJS 模块供 Rollup 处理
import typescript from '@rollup/plugin-typescript'; // 支持 TypeScript 编译和类型检查
import { terser } from 'rollup-plugin-terser'; //代码压缩混淆（生产环境启用）
import dts from 'rollup-plugin-dts';
import { globSync } from 'glob';
import cleaner from 'rollup-plugin-cleaner'; // 构建前清理 lib/es 目录

// 获取所有 hooks 目录下的 index.ts 作为入口
const hookEntries = globSync('src/use*/index.ts').reduce((entries, file) => {
  const name = file.split('/')[1];
  entries[`${name}/index`] = file;
  return entries;
}, {});

export default [
  // JS 打包
  {
    input: {
      index: 'src/index.ts',
      ...hookEntries,
    },
    output: [
      {
        dir: 'lib', // 指定所有生成的 chunk 被放置在哪个目录中
        entryFileNames: '[name].js', // 控制入口文件命名规则
        format: 'cjs',
        // sourcemap: true,
        exports: 'named', // 适用于使用命名导出的情况
        preserveModules: true, // 保持目录结构
        preserveModulesRoot: 'src',
      },
      {
        dir: 'es',
        entryFileNames: '[name].js',
        format: 'esm',
        preserveModules: true, // 保持目录结构
        preserveModulesRoot: 'src',
      },
    ],
    plugins: [
      cleaner({
        targets: ['./lib/', './es/'], // 同步实际输出目录 注意targets路径
        verbose: true, // 显示清理日志
        cleanStale: true, // 清理未使用的文件
      }),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
      }),
      terser(),
    ],
    external: ['react'],
  },
  // 类型声明打包
  {
    input: {
      index: 'src/index.ts',
      ...hookEntries,
    },
    output: [
      {
        dir: 'lib',
        entryFileNames: '[name].d.ts',
        format: 'lib',
        preserveModules: true, // 保持目录结构
      },
      // {
      //   dir: 'es',
      //   entryFileNames: '[name].d.ts',
      //   format: 'esm',
      //   preserveModules: true, // 保持目录结构
      // },
    ],
    plugins: [dts()],
  },
  {
    // 不允许文件分割， UMD 和 IIFE 格式要求所有代码打包为单个文件
    input: {
      index: 'src/index.ts',
    },
    output: {
      dir: 'dist',
      format: 'umd',
      name: 'ChangfengHooks',
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false, // 类型文件单独打包
      }),
      terser(),
    ],
  },
];
