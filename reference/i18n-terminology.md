# 数据资产中台 — 中英文切换术语表 / i18n Terminology Reference

> 本文件记录产品中所有需要中英文切换的专有名词、翻译规则与例外。
> This file records all proper terms requiring EN/CN switching, translation rules, and exceptions.

---

## 一、专有名词对照 / Terminology Mapping

| English | 中文 | 备注 |
|---|---|---|
| Glossaries / Metrics Glossary | 指标术语 / 指标术语表 | 非"词汇表"，非"术语表" |
| Metadata | 元数据 | |
| Metadata Matrix | 元数据矩阵 | |
| Data Governance Team | 数据治理团队 | |
| Data Domain | 主题域 | |
| Data Office | 数据治理办公室 | |
| Data College | 数据学院 | 非"数据学堂" |
| Data Dictionary | 数据字典 | |
| Reference Document | 参考文档 | |
| Data Asset | 数据资产 | |
| Data Asset Hub | 数据资产中台 | |
| Data Asset Shelf | 数据资产目录 | |
| Subject Area | 主题域 | 与 Data Domain 同义 |
| Business Owner | 业务负责人 | |
| Technical Owner | 技术负责人 | |
| Data Steward | 数据管理员 | |
| Security Level | 安全级别 | |
| L1 - Public | L1 - 公开 | |
| L2 - Internal | L2 - 内部 | |
| L3 - Confidential | L3 - 机密 | |
| L4 - Private | L4 - 私密 | |
| Published | 已发布 | 状态标签 |
| Draft | 草稿 | 状态标签 |
| Pending Review | 待审核 | 状态标签 |
| Archived | 已归档 | 状态标签 |
| Data Governance Policy | 数据治理政策 | |
| Data Security Classification | 数据安全分类 | |
| Data Product Lifecycle | 数据产品生命周期 | |
| Roles & Responsibilities | 角色与职责 | |
| Change History | 变更历史 | |
| Schema / Fields | 字段结构 | |
| Related Assets | 关联资产 | |
| Business Definition | 业务定义 | |
| Calculation Logic | 计算逻辑 | |
| Business Formula | 业务公式 | |
| Data Lineage | 数据血缘 | |

---

## 二、不需要翻译的内容 / Items That Must NOT Be Translated

### 1. Data Domain 名称（主题域名称保持英文）
所有主题域名称在中英文模式下均保持英文不变：

| Domain | ✅ 保持不变 |
|---|---|
| Sales | Sales |
| Customer | Customer |
| Finance | Finance |
| Supply Chain | Supply Chain |
| Marketing | Marketing |
| External Data | External Data |
| HR | HR |
| Public | Public |

### 2. 数据字典类资产名称
数据字典类资产的技术名称不翻译，保持原始命名：
- `DWD_Order_Detail`
- `DIM_Store_Master`
- 其他所有以 DWD_、DIM_、ODS_、ADS_ 等开头的技术表名

### 3. 数据资产详情页的业务内容
详情页内用户自行填写的内容不翻译：
- 指标定义（metric definitions）
- 字段描述（field descriptions）
- 文档正文（document body）—— 除非用户明确要求翻译
- 策略文档正文 —— 中文版使用 `reference/` 文件夹中原始政策文件内容

### 4. 已存在中英双语的界面
当页面内已同时存在中英文内容时，不做二次翻译：
- 申请数据使用页（apply-data.html）的表单选项内 —— 例如"External Data Exchange（外部数据交换申请）"下方已有中文注释，无需再次翻译

### 5. 人名
所有人名在中英文模式下保持不变：
- Sarah Chen, James Li, Ming Zhang, Lisa He, Kevin Wu, Alex Wang 等

### 6. 部门名称
部门名称在中英文模式下保持不变：
- Finance Dept., Data Engineering, Data & Analytics 等

---

## 三、翻译规则 / Translation Rules

- **UI Chrome**（导航、面包屑、按钮、标签、表头、筛选器标签）→ 需要中英切换
- **数据资产元数据标签**（发布日期、安全级别、主题域等标签字段）→ 需要中英切换
- **资产卡片标题**（shelf 页面的资产名称）→ 如果有对应中文名则切换，否则保持英文
- **资产描述文字**（shelf 卡片描述、列表描述）→ 如果有对应中文描述则切换
- **政策文档正文**（detail-policy.html）→ 中文版使用原始中文政策内容，英文版为对应翻译

---

## 四、实现方式 / Implementation

| 方式 | 用法 | 适用场景 |
|---|---|---|
| `data-i18n="key"` | JS 替换 innerHTML | 纯 UI 标签 |
| `data-i18n-ph="key"` | JS 替换 placeholder | input/textarea 占位符 |
| `data-en="..." data-cn="..."` | JS 按语言切换 innerHTML | 有双语内容的元素 |
| `.i18n-en` / `.i18n-cn` | CSS 显示/隐藏整段 | 整块内容不同的区域 |

---

## 五、语言持久化 / Language Persistence

- 用户选择的语言存储于：`localStorage.getItem('sbux_lang')`（值为 `'en'` 或 `'cn'`）
- 默认语言：`en`（英文）
- 切换函数：`toggleLang(lang)` in `js/main.js`

---

*如有新增专有名词，请补充至第一节对照表中。*
