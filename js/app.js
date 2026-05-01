// Shared app logic for WHO Relay Demo

// Render the sidebar into any page that has <nav class="main-menu">
function renderSidebar(activePage) {
  const pages = {
    'fr-surveillance': 'dashboards/fr-surveillance.html',
    'hmis': 'dashboards/hmis.html',
    'covid': 'dashboards/covid.html',
    'afp': 'dashboards/afp.html',
    'fr-training': 'dashboards/fr-training.html',
  };

  // Resolve relative paths based on current page location
  const isInDashboards = window.location.pathname.includes('/dashboards/');
  const prefix = isInDashboards ? '../' : '';

  const nav = document.querySelector('nav.main-menu ul');
  if (!nav) return;

  nav.innerHTML = `
    <li class="has-subnav open">
      <a href="javascript:;">
        <i class="fa fa-home nav_icon"></i>
        <span class="nav-text">Dashboard</span>
        <i class="icon-angle-right"></i><i class="icon-angle-down"></i>
      </a>
      <ul style="display:block;">
        <span style="color: yellow; font-size: 16px; padding-left:15px; display:block; margin: 8px 0 4px;">Surveillance</span>
        <li class="${activePage==='fr-surveillance'?'active':''}">
          <a class="subnav-text" href="${prefix}dashboards/fr-surveillance.html">FR Surveillance</a>
        </li>
        <li class="${activePage==='afp'?'active':''}">
          <a class="subnav-text" href="${prefix}dashboards/afp.html">AFP Surv 2020-25</a>
        </li>
        <li class="${activePage==='fr-training'?'active':''}">
          <a class="subnav-text" href="${prefix}dashboards/fr-training.html">FR Training</a>
        </li>

        <span style="color: yellow; font-size: 16px; padding-left:15px; display:block; margin: 8px 0 4px;">Immunization</span>
        <li class="${activePage==='hmis'?'active':''}">
          <a class="subnav-text" href="${prefix}dashboards/hmis.html">HMIS</a>
        </li>

        <span style="color: yellow; font-size: 16px; padding-left:15px; display:block; margin: 8px 0 4px;">Covid</span>
        <li class="${activePage==='covid'?'active':''}">
          <a class="subnav-text" href="${prefix}dashboards/covid.html">National Level</a>
        </li>
      </ul>
    </li>

    <li>
      <a href="${prefix}index.html">
        <i class="fa fa-home nav_icon"></i>
        <span class="nav-text">Home</span>
      </a>
    </li>
    <li>
      <a href="${prefix}login.html">
        <i class="fa fa-sign-out nav_icon"></i>
        <span class="nav-text">Logout</span>
      </a>
    </li>
  `;
}

// Format large numbers with commas
function fmt(n) {
  return Number(n).toLocaleString('en-IN');
}

// Demo banner HTML
const DEMO_BANNER = `
  <div style="background:#fff3cd;border:2px solid #ffc107;border-radius:6px;padding:10px 18px;margin:0 0 18px 0;display:flex;align-items:center;gap:10px;">
    <span style="font-size:20px;">⚠️</span>
    <span style="font-size:13px;color:#856404;font-weight:600;">
      DEMO DATA — All figures shown are <u>simulated/fake</u> for Relay enterprise demonstration purposes only. 
      Not real WHO surveillance data.
    </span>
  </div>
`;
