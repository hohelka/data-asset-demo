/* ===== Starbucks Data Asset Platform - Main JavaScript ===== */

// Navigation HTML generator
function getNavHTML(activePage) {
  const pages = [
    { id: 'home', label: 'Home', href: 'index.html' },
    { id: 'shelf', label: 'Data Assets', href: 'shelf.html' },
    { id: 'apply-data', label: 'Data Application', href: 'apply-data.html' },
    { id: 'apply-asset', label: 'Create Asset', href: 'apply-asset.html' },
    { id: 'admin', label: 'Admin', href: 'admin-list.html' },
  ];

  const navLinks = pages.map(p =>
    `<a href="${p.href}" class="${p.id === activePage ? 'active' : ''}">${p.label}</a>`
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

// Insert navigation into page
function initNav(activePage) {
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) {
    navPlaceholder.innerHTML = getNavHTML(activePage);
  }
}

// Language toggle (demo only)
function toggleLang(lang) {
  console.log('Language switched to:', lang);
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
