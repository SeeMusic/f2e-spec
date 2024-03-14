# eslint-config-nuxt3

Nuxt3 + TypeScript 项目的 通用 eslint-config 配置。

## 功能说明

* 集成了官方的 ESLint 配置项，及依赖包
* 添加团队常用的自定义规则覆写

## 使用：

安装：
```
pnpm i @seemusic/eslint-config-nuxt3 -D
```

配置 `.eslintrc.cjs` （或者其他格式的 eslintrc 文件）：

```
/* eslint-env node */
module.exports = {
  'extends': [
    '@seemusic/eslint-config-nuxt3'
  ]
};
```
> 如果项目 packages.json 中已经有低版本的 eslint，需要按照 peer 提示的说明升级或者重新安装

## 其他
eslint 的多个 extends 配置存在 **覆盖及合并** 操作，如果需要查看最终结果，在调用方项目中，执行以下命令可以把最终结果保存到指定的文件查看：

```
pnpm eslint --print-config .eslintrc.cjs > eslint-config-log.json
```

> 命令中，`.eslintrc.cjs` 是项目中 eslintrc 文件名，`eslint-config-log.json` 是输出的文件名

