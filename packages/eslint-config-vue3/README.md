# eslint-config-vue3

源生 vue3 + typescript 项目的 通用 eslint-config 配置。

## 版本说明
`1.0.0` 之前的版本，基于 `eslint@8` 的规则。

`1.0.0` 及后续版本，基于 `eslint@9` 的 flat 格式规则 （**注意：`eslint@9` 需要 node 版本 >= 18.18.0**）。

## 功能说明

* 集成了 Vue 官方脚手架自带的 ESLint 配置项，及依赖包
* 修改 Vue 官方校验规则等级（`essential` 改为 `recommended`）
* 添加团队常用的自定义规则覆写

## 使用：

安装：
```
pnpm i @seemusic/eslint-config-vue3 -D
```

### 1.0.0 之前版本（eslint 8）
配置 `.eslintrc.cjs` （或者其他格式的 eslintrc 文件）：

```
/* eslint-env node */
module.exports = {
  'extends': [
    '@seemusic/eslint-config-vue3'
  ]
};
```

> 如果是从 `create-vue` 创建的项目，需要清理已经封装过的脚手架自带的依赖

```
pnpm uninstall @rushstack/eslint-patch @vue/eslint-config-typescript eslint-plugin-vue
```

> 如果项目 packages.json 中已经有低版本的 eslint，需要按照 peer 提示的说明升级或者重新安装

### 1.0.0 及后续版本（eslint 9）

配置 `.eslint.config.js` （或者其他格式的 eslint 配置 文件）：

> 注意：ESLint 9 放弃了所有 `eslintrc` 格式的配置，统一使用 `config` 格式，如 `eslint.config.js` 或 `eslint.config.mjs`

```
import config from '@seemusic/eslint-config-vue3';

export default [
  ...config
];
```

> 如果是从 `create-vue` 创建的项目，需要清理脚手架自带的依赖

```
pnpm uninstall @vue/eslint-config-typescript eslint-plugin-vue
```

## 其他
eslint 的多个 extends 配置存在 **覆盖及合并** 操作，如果需要查看最终结果，在调用方项目中，执行以下命令可以把最终结果保存到指定的文件查看：

```
pnpm eslint --print-config .eslintrc.cjs > eslint-config-log.json
```

> 命令中，`.eslintrc.cjs` 是项目中 eslint 配置文件名，需要注意不同版本的文件；`eslint-config-log.json` 是输出的文件名

如果是 `eslint@9` 版本，则可以使用 `npx @eslint/config-inspector` 通过 GUI 查看。

