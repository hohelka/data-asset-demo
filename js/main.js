/* ===== Starbucks Data Asset Platform - Main JavaScript ===== */

// ─── i18n Translation Dictionary ─────────────────────────────────────────────
const I18N = {
  en: {
    // Navigation
    nav_home: 'Home', nav_assets: 'Data Assets', nav_apply_data: 'Data Application',
    nav_create: 'Create Asset', nav_admin: 'Admin',
    // Common buttons
    btn_back: '← Back', btn_bookmark: '☆ Bookmark', btn_download: '↓ Download',
    btn_search: 'Search', btn_submit: 'Submit', btn_cancel: 'Cancel', btn_save_draft: 'Save Draft',
    btn_create_asset: '+ Create Asset', btn_apply_access: 'Apply for Asset Access',
    btn_view_all: 'View All →', btn_edit: '✎ Edit', btn_export: '↓ Export',
    btn_apply_data_access: '🔑 Apply Data Access',
    // Apply data tabs
    apply_tab_data_access: '🗄️ Data Access Request', apply_tab_asset_access: '📂 Asset Catalog Access (L3)',
    // Index
    hero_title: 'Welcome to Data Asset Hub',
    hero_subtitle: 'Your single source of truth for enterprise data assets. Discover, request, and share data with confidence.',
    search_ph: 'Search data assets, glossaries, dictionaries...',
    quick_access: 'Quick Access',
    qa_metadata: 'Metadata', qa_metadata_sub: 'Glossaries & KPIs',
    qa_external: 'External Data', qa_external_sub: '3rd Party Sources',
    qa_office: 'Data Office', qa_office_sub: 'Governance Team',
    qa_guide: 'User Guide', qa_guide_sub: 'How-to Docs',
    qa_college: 'Data College', qa_college_sub: 'Training & Learning',
    qa_apply: 'Apply for Usage', qa_apply_sub: 'Request Data Access',
    metadata_matrix: 'Metadata Matrix', tag_live: 'Live',
    col_glossaries: 'Glossaries', col_dictionary: 'Dictionary', col_ref_doc: 'Ref Doc',
    row_sales: 'Sales', row_customer: 'Customer', row_supply_chain: 'Supply Chain',
    row_finance: 'Finance', row_marketing: 'Marketing', row_external: 'External Data',
    row_hr: 'HR', row_public: 'Public',
    legend_active: 'Active', legend_indev: 'In Development', legend_nc: 'No Content',
    governance_policies: 'Data Governance Policies',
    policy_classification: '📋 Data Classification Standard',
    policy_access: '🔒 Data Access Policy v2.3',
    policy_lifecycle: '🔄 Data Lifecycle Management',
    policy_quality: '📐 Data Quality Framework',
    tag_active: 'Active', tag_under_review: 'Under Review',
    useful_links: 'Useful Links',
    link_request: '→ How to Request Data Access',
    link_onboard: '→ Data Asset Onboarding Guide',
    link_faq: '→ FAQ - Data Classification Levels',
    link_contact: '→ Contact Data Office Team',
    recently_published: 'Recently Published Assets',
    th_asset_name: 'Asset Name', th_category: 'Category', th_subject_area: 'Subject Area',
    th_security: 'Security Level', th_owner: 'Owner', th_published: 'Published',
    security_classification: 'Data Security Classification',
    sec_learn_more: 'Learn more about our Data Governance Policy →',
    l1_name: 'L1 - Public', l1_desc: 'Open data. Can be shared internally and externally. No restrictions.',
    l2_name: 'L2 - Internal', l2_desc: 'Internal data. Default access for all employees. Especially data dictionaries.',
    l3_name: 'L3 - Confidential', l3_desc: 'Restricted data. Requires Data Owner approval to access details.',
    l4_name: 'L4 - Private', l4_desc: 'Highly sensitive (PII). Not allowed on this platform.',
    // Shelf
    shelf_title: 'Data Asset Shelf', breadcrumb_assets: 'Data Assets',
    chip_all: 'All Domains', chip_sales: 'Sales', chip_customer: 'Customer',
    chip_finance: 'Finance', chip_supply: 'Supply Chain', chip_marketing: 'Marketing',
    chip_external: 'External Data', chip_hr: 'HR', chip_public: 'Public',
    sort_latest: 'Sort: Latest', sort_az: 'Sort: Name A-Z', sort_viewed: 'Sort: Most Viewed',
    view_grid: '▦ Grid', view_list: '☰ List',
    filter_category: 'Asset Category', filter_glossary: 'Glossaries / Terms',
    filter_dictionary: 'Data Dictionary', filter_ref_doc: 'Reference Document',
    filter_security: 'Security Level',
    filter_l1: 'L1 - Public', filter_l2: 'L2 - Internal', filter_l3: 'L3 - Confidential',
    search_assets_ph: 'Search assets by name, keyword...',
    // Detail common
    breadcrumb_home: 'Home', tab_metrics: 'Metrics', tab_related: 'Related Assets',
    tab_schema: 'Schema / Fields', tab_overview: 'Overview', sec_related: 'Related Assets',
    // Glossary detail
    glos_subject: '📂 Subject Area:', glos_security: '🔒 Security:',
    glos_biz_owner: '👤 Business Owner:', glos_tech_owner: '🔧 Tech Owner:',
    glos_published: '📅 Published:', glos_version: '🔖 Version:',
    glos_count: '18 Metrics', glos_bc: 'Sales Metrics Glossary',
    th_metric_name: 'Metric Name', th_biz_def: 'Business Definition',
    th_calc_logic: 'Calculation Logic', th_biz_owner2: 'Business Owner',
    th_more: 'More', metrics_showing: 'Showing 8 of 18 metrics.',
    metrics_view_all: 'View all →',
    // Dictionary detail
    dict_bc: 'Data Dictionary Detail', dict_conn_pass: '✔ Connection Test Passed',
    dict_subject: '📂 Subject Area:', dict_security: '🔒 Security:',
    dict_owner: '👤 Owner:', dict_last_sync: '📅 Last Sync:', dict_rows: '📊 Rows:',
    dict_schema_title: 'Table Schema — DWD_Order_Detail',
    th_field_name: 'Field Name', th_data_type: 'Data Type',
    th_desc_en: 'Description (EN)', th_desc_cn: 'Description (CN)',
    th_nullable: 'Nullable', th_last_updated: 'Last Updated',
    dict_table_info: 'Table Information',
    dl_database: 'Database', dl_schema: 'Schema', dl_table_name: 'Table Name',
    dl_table_type: 'Table Type', dl_storage: 'Storage Format',
    dl_approx_rows: 'Approximate Rows', dl_retention: 'Data Retention',
    dl_refresh: 'Refresh Frequency', dl_pk: 'Primary Key',
    dl_conn_status: 'Connection Status', dl_conn_ok: '✔ Test Passed',
    dl_partitioned: 'Partitioned Table (by transaction_date)',
    dl_retention_val: '3 Years Rolling', dl_refresh_val: 'Daily (T+1), 06:00 AM CST',
    // Document detail
    doc_bc: 'Customer Segmentation Guide', doc_document_info: 'Document Info',
    doc_meta_owner: 'Owner', doc_meta_reviewers: 'Reviewers', doc_meta_domain: 'Domain',
    doc_meta_security: 'Security', doc_meta_published: 'Published', doc_meta_version: 'Version',
    doc_outline: 'Outline', doc_attachments: 'Attachments',
    // Glossary item
    gi_biz_attributes: 'Business Attributes', gi_mgmt_attributes: 'Management Attributes',
    gi_tech_attributes: 'Technical Attributes', gi_lineage: 'Data Lineage',
    gi_english_name: 'English Name', gi_chinese_name: 'Chinese Name',
    gi_def_en: 'Definition (EN)', gi_def_cn: 'Definition (CN)',
    gi_type: 'Type', gi_subject: 'Subject Area', gi_is_kpi: 'Is KPI',
    gi_formula: 'Business Formula', gi_unit: 'Unit', gi_related_kpis: 'Related KPIs',
    gi_security_level: 'Security Level', gi_biz_owner: 'Business Owner', gi_data_steward: 'Data Steward',
    gi_tech_owner: 'Technical Owner', gi_owning_dept: 'Owning Department',
    gi_created: 'Created', gi_updated: 'Last Updated',
    gi_source_system: 'Source System', gi_source_table: 'Source Table', gi_source_field: 'Source Field',
    gi_bc_glossary: 'Sales Metrics Glossary',
    // Apply asset
    create_asset_title: 'Create Data Asset', create_asset_bc: 'Create Data Asset',
    step1_title: 'Step 1 — Select Asset Type',
    step1_desc: 'Choose the type of data asset you want to register. The form fields below will adapt accordingly.',
    tc_glossary_title: 'Glossary / Term', tc_glossary_desc: 'Business metrics, KPI definitions, domain terms and acronyms.',
    tc_dictionary_title: 'Data Dictionary', tc_dictionary_desc: 'Database table/view metadata, field schema definitions and data lineage.',
    tc_document_title: 'Reference Document', tc_document_desc: 'Guides, policies, manuals, SOPs and analysis reports.',
    // Apply data
    apply_data_title: 'Data Access Application',
    // Admin
    admin_title: 'Data Asset Management', admin_bc: 'Admin', admin_tab_list: 'Asset List',
    admin_tab_edit: 'Edit Asset', admin_tab_history: 'Change History',
    admin_tab_config: 'Homepage Config', admin_tab_access: 'Access Records',
    admin_total: 'Total Assets', admin_published: 'Published',
    admin_pending: 'Pending Review', admin_draft: 'Draft / Archived',
    th_asset_name: 'Asset Name', th_category: 'Category', th_owner: 'Owner',
    th_domain: 'Domain', th_status: 'Status', th_version: 'Version',
    th_last_updated2: 'Last Updated', th_actions: 'Actions',
    all_categories: 'All Categories', all_status: 'All Status', all_domains: 'All Domains',
    status_published: 'Published', status_draft: 'Draft',
    status_pending: 'Pending Review', status_archived: 'Archived',
    // Policy
    policy_page_title: 'Starbucks China Data Governance Policy',
    policy_page_bc: 'Data Governance Policy',
    policy_toc_title: 'Table of Contents',
    policy_toc_1: '1. Policy Overview', policy_toc_2: '2. Scope & Applicability',
    policy_toc_3: '3. Data Security Classification', policy_toc_4: '4. Data Access & Authorization',
    policy_toc_5: '5. Data Product Lifecycle', policy_toc_6: '6. Roles & Responsibilities',
    policy_toc_7: '7. Appendix 10.1-10.5',
    th_security: 'Security',
  },
  cn: {
    // Navigation
    nav_home: '首页', nav_assets: '数据资产', nav_apply_data: '数据申请',
    nav_create: '创建资产', nav_admin: '管理',
    // Common buttons
    btn_back: '← 返回', btn_bookmark: '☆ 收藏', btn_download: '↓ 下载',
    btn_search: '搜索', btn_submit: '提交申请', btn_cancel: '取消', btn_save_draft: '保存草稿',
    btn_create_asset: '+ 创建资产', btn_apply_access: '申请资产访问',
    btn_view_all: '查看全部 →', btn_edit: '✎ 编辑', btn_export: '↓ 导出',
    btn_apply_data_access: '🔑 申请数据访问',
    // Apply data tabs
    apply_tab_data_access: '🗄️ 数据访问申请', apply_tab_asset_access: '📂 资产目录访问 (L3)',
    // Index
    hero_title: '欢迎使用数据资产中台',
    hero_subtitle: '企业数据资产的统一入口，自信地发现、申请和共享数据。',
    search_ph: '搜索数据资产、指标术语、数据字典...',
    quick_access: '快速入口',
    qa_metadata: '元数据', qa_metadata_sub: '指标术语与KPI',
    qa_external: '外部数据', qa_external_sub: '第三方来源',
    qa_office: '数据治理办公室', qa_office_sub: '监管团队',
    qa_guide: '用户指南', qa_guide_sub: '操作文档',
    qa_college: '数据学院', qa_college_sub: '培训与学习',
    qa_apply: '申请数据使用', qa_apply_sub: '申请访问权限',
    metadata_matrix: '元数据矩阵', tag_live: '运行中',
    col_glossaries: '指标术语', col_dictionary: '数据字典', col_ref_doc: '参考文档',
    row_sales: 'Sales', row_customer: 'Customer', row_supply_chain: 'Supply Chain',
    row_finance: 'Finance', row_marketing: 'Marketing', row_external: 'External Data',
    row_hr: 'HR', row_public: 'Public',
    legend_active: '已上线', legend_indev: '开发中', legend_nc: '无内容',
    governance_policies: '数据治理政策',
    policy_classification: '📋 数据分类标准',
    policy_access: '🔒 数据访问政策 v2.3',
    policy_lifecycle: '🔄 数据生命周期管理',
    policy_quality: '📐 数据质量框架',
    tag_active: '已生效', tag_under_review: '审核中',
    useful_links: '常用链接',
    link_request: '→ 如何申请数据访问权限',
    link_onboard: '→ 数据资产接入指南',
    link_faq: '→ 常见问题 - 数据分类等级',
    link_contact: '→ 联系数据治理办公室',
    recently_published: '最新发布资产',
    th_asset_name: '资产名称', th_category: '类别', th_subject_area: '主题域',
    th_security: '安全级别', th_owner: '负责人', th_published: '发布日期',
    security_classification: '数据安全分类',
    sec_learn_more: '了解更多数据治理政策 →',
    l1_name: 'L1 - 公开', l1_desc: '公开数据，可在内部和外部共享，无访问限制。',
    l2_name: 'L2 - 内部', l2_desc: '内部数据，所有员工默认可访问，尤其适用于数据字典。',
    l3_name: 'L3 - 机密', l3_desc: '受限数据，访问明细需经数据负责人审批。',
    l4_name: 'L4 - 私密', l4_desc: '高度敏感数据（含个人信息），本平台不允许存储。',
    // Shelf
    shelf_title: '数据资产目录', breadcrumb_assets: '数据资产',
    chip_all: '全部域', chip_sales: 'Sales', chip_customer: 'Customer',
    chip_finance: 'Finance', chip_supply: 'Supply Chain', chip_marketing: 'Marketing',
    chip_external: 'External Data', chip_hr: 'HR', chip_public: 'Public',
    sort_latest: '排序：最新', sort_az: '排序：名称 A-Z', sort_viewed: '排序：最多查看',
    view_grid: '▦ 网格', view_list: '☰ 列表',
    filter_category: '资产类别', filter_glossary: '指标术语 / 词条',
    filter_dictionary: '数据字典', filter_ref_doc: '参考文档',
    filter_security: '安全级别',
    filter_l1: 'L1 - 公开', filter_l2: 'L2 - 内部', filter_l3: 'L3 - 机密',
    search_assets_ph: '按名称、关键词搜索资产...',
    // Detail common
    breadcrumb_home: '首页', tab_metrics: '指标列表', tab_related: '关联资产',
    tab_schema: '字段结构', tab_overview: '基本信息', sec_related: '关联资产',
    // Glossary detail
    glos_subject: '📂 主题域：', glos_security: '🔒 安全级别：',
    glos_biz_owner: '👤 业务负责人：', glos_tech_owner: '🔧 技术负责人：',
    glos_published: '📅 发布日期：', glos_version: '🔖 版本：',
    glos_count: '18 个指标', glos_bc: '销售指标术语表',
    th_metric_name: '指标名称', th_biz_def: '业务定义',
    th_calc_logic: '计算逻辑', th_biz_owner2: '业务负责人',
    th_more: '详情', metrics_showing: '显示 18 个指标中的 8 个。',
    metrics_view_all: '查看全部 →',
    // Dictionary detail
    dict_bc: '数据字典详情', dict_conn_pass: '✔ 连接测试通过',
    dict_subject: '📂 主题域：', dict_security: '🔒 安全级别：',
    dict_owner: '👤 负责人：', dict_last_sync: '📅 最后同步：', dict_rows: '📊 行数：',
    dict_schema_title: '字段结构 — DWD_Order_Detail',
    th_field_name: '字段名称', th_data_type: '数据类型',
    th_desc_en: '描述（英文）', th_desc_cn: '描述（中文）',
    th_nullable: '可为空', th_last_updated: '最后更新',
    dict_table_info: '表基本信息',
    dl_database: '数据库', dl_schema: 'Schema', dl_table_name: '表名称',
    dl_table_type: '表类型', dl_storage: '存储格式',
    dl_approx_rows: '近似行数', dl_retention: '数据保留期',
    dl_refresh: '刷新频率', dl_pk: '主键',
    dl_conn_status: '连接状态', dl_conn_ok: '✔ 测试通过',
    dl_partitioned: '分区表（按 transaction_date）',
    dl_retention_val: '滚动保留 3 年', dl_refresh_val: '每日（T+1），北京时间 06:00',
    // Document detail
    doc_bc: '客户分群指南', doc_document_info: '文档信息',
    doc_meta_owner: '负责人', doc_meta_reviewers: '审阅人', doc_meta_domain: '主题域',
    doc_meta_security: '安全级别', doc_meta_published: '发布日期', doc_meta_version: '版本',
    doc_outline: '文档大纲', doc_attachments: '附件',
    // Glossary item
    gi_biz_attributes: '业务属性', gi_mgmt_attributes: '管理属性',
    gi_tech_attributes: '技术属性', gi_lineage: '数据血缘',
    gi_english_name: '英文名称', gi_chinese_name: '中文名称',
    gi_def_en: '英文定义', gi_def_cn: '中文定义',
    gi_type: '类型', gi_subject: '主题域', gi_is_kpi: '是否KPI',
    gi_formula: '业务公式', gi_unit: '单位', gi_related_kpis: '关联KPI',
    gi_security_level: '安全级别', gi_biz_owner: '业务负责人', gi_data_steward: '数据管理员',
    gi_tech_owner: '技术负责人', gi_owning_dept: '归属部门',
    gi_created: '创建时间', gi_updated: '最后更新',
    gi_source_system: '来源系统', gi_source_table: '来源表', gi_source_field: '来源字段',
    gi_bc_glossary: '销售指标术语表',
    // Apply asset
    create_asset_title: '创建数据资产', create_asset_bc: '创建数据资产',
    step1_title: '第一步 — 选择资产类型',
    step1_desc: '选择您要注册的数据资产类型，下方表单字段将相应调整。',
    tc_glossary_title: '指标术语 / 词条', tc_glossary_desc: '业务指标、KPI定义、业务术语和缩略词。',
    tc_dictionary_title: '数据字典', tc_dictionary_desc: '数据库表/视图元数据、字段结构定义和数据血缘。',
    tc_document_title: '参考文档', tc_document_desc: '指南、政策、手册、SOP和分析报告。',
    // Apply data
    apply_data_title: '数据访问申请',
    // Admin
    admin_title: '数据资产管理', admin_bc: '管理', admin_tab_list: '资产列表',
    admin_tab_edit: '编辑资产', admin_tab_history: '变更历史',
    admin_tab_config: '首页配置', admin_tab_access: '访问记录',
    admin_total: '资产总数', admin_published: '已发布',
    admin_pending: '待审核', admin_draft: '草稿/归档',
    th_asset_name: '资产名称', th_category: '类型', th_owner: '负责人',
    th_domain: '主题域', th_status: '状态', th_version: '版本',
    th_last_updated2: '最后更新', th_actions: '操作',
    all_categories: '全部类别', all_status: '全部状态', all_domains: '全部域',
    status_published: '已发布', status_draft: '草稿',
    status_pending: '待审核', status_archived: '已归档',
    // Policy
    policy_page_title: '星巴克中国数据治理政策',
    policy_page_bc: '数据治理政策',
    policy_toc_title: '目录',
    policy_toc_1: '1. 政策概述', policy_toc_2: '2. 适用范围',
    policy_toc_3: '3. 数据安全分级', policy_toc_4: '4. 数据访问与授权',
    policy_toc_5: '5. 数据产品生命周期', policy_toc_6: '6. 角色与职责',
    policy_toc_7: '7. 附录 10.1-10.5',
    th_security: '安全级别',
  }
};

// ─── Language State ────────────────────────────────────────────────────────────
let currentLang = localStorage.getItem('sbux_lang') || 'en';

// Apply all translations to the current page
function applyLang() {
  const L = I18N[currentLang];
  if (!L) return;

  // 1. data-i18n → replace innerHTML
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = L[el.getAttribute('data-i18n')];
    if (v !== undefined) el.innerHTML = v;
  });

  // 2. data-i18n-ph → replace placeholder
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const v = L[el.getAttribute('data-i18n-ph')];
    if (v !== undefined) el.placeholder = v;
  });

  // 3. data-en / data-cn → bilingual content elements
  document.querySelectorAll('[data-en]').forEach(el => {
    const v = currentLang === 'cn'
      ? (el.getAttribute('data-cn') || el.getAttribute('data-en'))
      : el.getAttribute('data-en');
    el.innerHTML = v;
  });

  // 4. .i18n-en / .i18n-cn → show/hide blocks
  document.querySelectorAll('.i18n-en').forEach(el => {
    el.style.display = currentLang === 'en' ? '' : 'none';
  });
  document.querySelectorAll('.i18n-cn').forEach(el => {
    el.style.display = currentLang === 'cn' ? '' : 'none';
  });

  // 5. Sync the select widget value
  document.querySelectorAll('.lang-switch').forEach(sel => { sel.value = currentLang; });
}

// Navigation HTML generator
function getNavHTML(activePage) {
  const L = I18N[currentLang];
  const pages = [
    { id: 'home',       key: 'nav_home',       href: 'index.html' },
    { id: 'shelf',      key: 'nav_assets',     href: 'shelf.html' },
    { id: 'apply-data', key: 'nav_apply_data', href: 'apply-data.html' },
    { id: 'apply-asset',key: 'nav_create',     href: 'apply-asset.html' },
    { id: 'admin',      key: 'nav_admin',      href: 'admin-list.html' },
  ];

  const navLinks = pages.map(p =>
    `<a href="${p.href}" class="${p.id === activePage ? 'active' : ''}" data-i18n="${p.key}">${L[p.key]}</a>`
  ).join('');

  return `
  <nav class="top-nav">
    <div class="logo" onclick="location.href='index.html'">
      <svg viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="31" cy="31" r="31" fill="#00704A"/>
        <circle cx="31" cy="31" r="27" fill="#1E3932" stroke="#D4E9E2" stroke-width="1"/>
        <text x="31" y="36" text-anchor="middle" fill="#D4E9E2" font-size="16" font-weight="bold" font-family="serif">DA</text>
      </svg>
      Data Asset Hub
    </div>
    <div class="nav-links">${navLinks}</div>
    <div class="nav-right">
      <select class="lang-switch" onchange="toggleLang(this.value)">
        <option value="en">English</option>
        <option value="cn">中文</option>
      </select>
      <div class="user-avatar" title="Alex Wang">AW</div>
    </div>
  </nav>`;
}

// Insert navigation and apply language
function initNav(activePage) {
  currentLang = localStorage.getItem('sbux_lang') || 'en';
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) {
    navPlaceholder.innerHTML = getNavHTML(activePage);
  }
  applyLang();
}

// Language toggle — persists and updates everything
function toggleLang(lang) {
  currentLang = lang;
  localStorage.setItem('sbux_lang', lang);
  applyLang();
  showToast(lang === 'cn' ? '已切换为中文' : 'Switched to English');
}

// Tab switching
function initTabs() {
  document.querySelectorAll('.tab-item').forEach(tab => {
    tab.addEventListener('click', function() {
      const group = this.closest('.tabs');
      const container = group.parentElement;
      
      group.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      
      const target = this.dataset.tab;
      container.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      const targetEl = container.querySelector(`#${target}`);
      if (targetEl) targetEl.classList.add('active');
    });
  });
}

// Toast notification
function showToast(message, duration = 3000) {
  let toast = document.getElementById('global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

// Modal helpers
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('show');
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove('show');
}

// Filter toggle on shelf page
function toggleFilter(el) {
  el.classList.toggle('selected');
  // In production, this would trigger a filter/search
}

// Simulate form submission
function handleSubmit(formName) {
  showToast(`${formName} submitted successfully!`);
  return false;
}

// Search handler
function handleSearch(input) {
  const query = typeof input === 'string' ? input : input.value;
  if (query.trim()) {
    showToast(`Searching for "${query}"...`);
  }
}

// Format numbers
function formatNumber(num) {
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toString();
}

// Init on page load
document.addEventListener('DOMContentLoaded', function() {
  initTabs();
  
  // Close modals on overlay click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', function(e) {
      if (e.target === this) this.classList.remove('show');
    });
  });
});
