---
name: git-commit-add-all
# 快速全量提交并自动生成 Git 提交信息
#
description: |
  Use when: 需要直接 git add .，自动生成规范 commit message 并完成 commit/push。
  适用于：全量提交所有变更文件、无需逐文件选择、追求高效一键提交。
  关键词：git add .、自动生成 message、全量提交、push。
---

# 全量自动 Git 提交 Skill

## 适用场景
- 需要一次性提交所有变更（包括新增、修改、删除文件）。
- 不关心逐文件选择，追求快速提交。
- 希望自动生成规范化 commit message 并推送。

## 工作流程
1. 执行 git add .，将所有变更文件加入暂存区。
2. 自动读取所有 diff，生成符合 Conventional Commits 规范的 commit message。
3. 执行 git commit -m "生成的 message"。
4. 执行 git push。

## 质量标准
- commit message 简明、准确反映整体变更内容。
- 遵循团队/项目约定的提交规范（如 feat/fix/docs/chore 等）。
- 不遗漏任何变更文件。
- 提交历史清晰、可追溯。

## 检查清单
- [ ] 是否包含所有变更文件？
- [ ] commit message 是否准确、规范？
- [ ] 是否已成功 push 到远端？

## 相关示例
- "直接 git add .，自动生成提交说明并 push"
- "全量提交所有变更，生成规范 commit message 并推送"
- "不用选文件，直接全部提交并生成 message"
