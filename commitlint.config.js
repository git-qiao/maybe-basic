/**
 * 提交格式：<type>(<scope>): <subject>
 * 1. type 为必填项，用于指定 commit 的类型
 * build : 更改构建系统和外部依赖项（如将 gulp 改为 webpack，更新某个 npm 包）
 * ci : 对 CI 配置文件和脚本的更改
 * docs : 仅仅修改文档说明
 * feat : 增加一个新特性
 * fix : 修复一个 bug
 * perf : 更改代码以提高性能
 * refactor : 代码重构时使用
 * style : 不影响代码含义的改动，例如去掉空格、改变缩进、增删分号
 * test : 增加新的测试功能或更改原有的测试模块
 *
 * 2. scope 为非必填项，用于描述改动的范围，可以是文件的名称，最好包含路径
 * 3. subject 是必填项，这次提交的日志信息，提交日志必须有意义。
 */
module.exports = {
  extends: ['@commitlint/config-conventional']
};

// 一般情况下，默认的就够用了。
// 当然，如果需要自定义限制这些规则，不启用默认的规则，可以把配置写的更详细
/* module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['upd', 'feat', 'fix', 'refactor', 'docs', 'chore', 'style', 'revert']
    ],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72]
  }
}; */
