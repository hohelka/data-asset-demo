---
name: data-domain-taxonomy
description: "Use when: any page or feature references data domains, subject areas, or domain chips. Covers the canonical 8 data domains used across the Starbucks China Data Asset Hub: Sales, Customer, Finance, Supply Chain, Marketing, External Data, HR, Public. Use for: dropdown options, filter chips, tag rendering, form field options, asset categorization."
---

# Data Domain Taxonomy — Starbucks China Data Asset Hub

## 8 Canonical Data Domains

These are the **only** domain values used across all pages (shelf filters, asset cards, apply forms, detail pages). Do not add, rename, or remove domains without updating all pages.

| Domain | Display Name | Tag Class | Typical Asset Types |
|--------|-------------|-----------|---------------------|
| Sales | Sales | `tag-brown` | Glossary, Dictionary |
| Customer | Customer | `tag-green` | Glossary, Ref Doc |
| Finance | Finance | `tag-gold` | Glossary, Ref Doc |
| Supply Chain | Supply Chain | `tag-green` | Dictionary |
| Marketing | Marketing | `tag-brown` | Ref Doc, Glossary |
| External Data | External Data | `tag-gold` | Dictionary, Ref Doc |
| HR | HR | `tag-brown` | Ref Doc |
| Public | Public | `tag-green` | Ref Doc (Policy) |

## Canonical Order

Always present domains in this exact order (shelf chips, dropdowns, multi-selects):

```
Sales → Customer → Finance → Supply Chain → Marketing → External Data → HR → Public
```

## Usage Patterns by Context

### Filter Chips (shelf.html)
```html
<span class="domain-chip active">All Domains</span>
<span class="domain-chip" onclick="toggleFilter(this)">Sales</span>
<span class="domain-chip" onclick="toggleFilter(this)">Customer</span>
<span class="domain-chip" onclick="toggleFilter(this)">Finance</span>
<span class="domain-chip" onclick="toggleFilter(this)">Supply Chain</span>
<span class="domain-chip" onclick="toggleFilter(this)">Marketing</span>
<span class="domain-chip" onclick="toggleFilter(this)">External Data</span>
<span class="domain-chip" onclick="toggleFilter(this)">HR</span>
<span class="domain-chip" onclick="toggleFilter(this)">Public</span>
```

### Single-Select Dropdown (detail pages, apply forms)
```html
<select class="form-control">
  <option value="">Select subject area...</option>
  <option>Sales</option>
  <option>Customer</option>
  <option>Finance</option>
  <option>Supply Chain</option>
  <option>Marketing</option>
  <option>External Data</option>
  <option>HR</option>
  <option>Public</option>
</select>
```

### Custom Checkbox Dropdown (multi-select, apply-asset.html Data Dictionary)
```html
<div class="chk-dropdown" id="sa-dropdown">
  <div class="chk-trigger" tabindex="0" onclick="toggleChkDropdown('sa-dropdown')">
    <span class="chk-val placeholder" id="sa-display">Select subject area(s)...</span>
    <span class="chk-arrow">&#9660;</span>
  </div>
  <div class="chk-panel" id="sa-panel">
    <div class="chk-option"><input type="checkbox" id="sa-sales" value="Sales"><label for="sa-sales">Sales</label></div>
    <div class="chk-option"><input type="checkbox" id="sa-customer" value="Customer"><label for="sa-customer">Customer</label></div>
    <div class="chk-option"><input type="checkbox" id="sa-finance" value="Finance"><label for="sa-finance">Finance</label></div>
    <div class="chk-option"><input type="checkbox" id="sa-sc" value="Supply Chain"><label for="sa-sc">Supply Chain</label></div>
    <div class="chk-option"><input type="checkbox" id="sa-mkt" value="Marketing"><label for="sa-mkt">Marketing</label></div>
    <div class="chk-option"><input type="checkbox" id="sa-ext" value="External Data"><label for="sa-ext">External Data</label></div>
    <div class="chk-option"><input type="checkbox" id="sa-hr" value="HR"><label for="sa-hr">HR</label></div>
    <div class="chk-option"><input type="checkbox" id="sa-pub" value="Public"><label for="sa-pub">Public</label></div>
  </div>
</div>
<div class="chk-chips" id="sa-chips"></div>
<input type="hidden" id="sa-val">
```

### Asset Card Domain Tag
```html
<!-- Use the tag class matching the domain's color (see table above) -->
<span class="tag tag-brown">Sales</span>
<span class="tag tag-green">Customer</span>
<span class="tag tag-gold">Finance</span>
<span class="tag tag-green">Supply Chain</span>
<span class="tag tag-brown">Marketing</span>
<span class="tag tag-gold">External Data</span>
<span class="tag tag-brown">HR</span>
<span class="tag tag-green">Public</span>
```

## Known Assets per Domain (as of Apr 2026)

| Domain | Assets |
|--------|--------|
| Sales | Sales Metrics (Glossary, L3), DWD_Order_Detail (Dictionary, L2), Sales Business Terms (Glossary, L2) |
| Customer | Customer Segmentation Guide (Ref Doc, L2) |
| Finance | Finance Metrics (Glossary, L3) |
| Supply Chain | DIM_Store_Master (Dictionary, L3) |
| External Data | 竞品开闭店与销售数据（线上）(Ref Doc, L2), 天气信息数据 (Dictionary, L2), 街区信息与流量数据 (Ref Doc, L3), 消费者标签数据 (Dictionary, L3), 市场舆情监测数据 (Ref Doc, L2) |
| Public | 星巴克中国数据治理政策 (Ref Doc, L1) |
| HR | — |
| Marketing | — |

## URL Param Convention

When pre-filling domain on apply-data.html, use the `?domain=` query param with the exact English domain name:

```
apply-data.html?domain=Sales
apply-data.html?domain=Finance
apply-data.html?domain=Supply+Chain
```
