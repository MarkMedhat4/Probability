/* ═══════════════════════════════════════════════════════
   app.js — Renders all content from data.js
═══════════════════════════════════════════════════════ */

/* ── helpers ─────────────────────────────────────────── */
const el  = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html !== undefined) e.innerHTML = html; return e; };
const div = (cls, html) => el('div', cls, html);

/* ── build hero tags ─────────────────────────────────── */
const heroTagsEl = document.getElementById('heroTags');
HERO_TAGS.forEach(t => {
  const a = el('a', 'hero-tag', t.label);
  a.href = '#';
  a.addEventListener('click', e => { e.preventDefault(); switchTab(t.tab); });
  heroTagsEl.appendChild(a);
});

/* ── build tab nav ───────────────────────────────────── */
const tabNavEl = document.getElementById('tabNav');
const panelsEl = document.getElementById('panels');

TABS.forEach((tab, i) => {
  const btn = el('button', 'tab-btn' + (i === 0 ? ' active' : ''), tab.label);
  btn.dataset.tab = tab.id;
  btn.addEventListener('click', () => switchTab(tab.id));
  tabNavEl.appendChild(btn);

  const panel = div('panel' + (i === 0 ? ' active' : ''));
  panel.id = 'panel-' + tab.id;
  panelsEl.appendChild(panel);
});

function switchTab(id) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === id));
  document.querySelectorAll('.panel').forEach(p => p.classList.toggle('active', p.id === 'panel-' + id));
}

/* ── renderers ───────────────────────────────────────── */

function renderTag(tagDef) {
  if (!tagDef) return '';
  return `<span class="tag ${tagDef.cls}">${tagDef.label}</span>`;
}

function renderCard(item) {
  const spanClass = n => n === 2 ? 's2' : n === 3 ? 's3' : n === 4 ? 's4' : '';
  const gridClass = item.grid === 3 ? 'g3' : item.grid === 4 ? 'g4' : item.grid === 1 ? 'g1' : '';

  let cellsHtml = item.cells.map(c => {
    const sp = spanClass(c.span);
    return `<div class="fc${sp ? ' ' + sp : ''}">
      ${c.tag ? renderTag(c.tag) : ''}
      <div class="fl">${c.label}</div>
      <div class="fe">${c.expr}</div>
      ${c.note ? `<div class="fn">${c.note}</div>` : ''}
    </div>`;
  }).join('');

  let extra = '';
  if (item.extra === 'two-col-type') {
    extra = `<div class="two">
      <div class="type-box tb2">
        <h4>Discrete r.v.</h4>
        <p>Takes finite or countably infinite values</p>
        <ul>
          <li>X = {−1, 0, 1, 2, 3} e.g.</li>
          <li>Uses <strong>PMF</strong> (Probability Mass Function)</li>
          <li>CDF: F(x) = Σ P(xᵢ) for xᵢ ≤ x</li>
        </ul>
      </div>
      <div class="type-box tt2">
        <h4>Continuous r.v.</h4>
        <p>Takes values on an interval (uncountably infinite)</p>
        <ul>
          <li>−3 ≤ X ≤ 3 e.g.</li>
          <li>Uses <strong>PDF</strong> (Probability Density Function)</li>
          <li>CDF: F(x) = ∫₋∞^x f(t) dt</li>
        </ul>
      </div>
    </div>`;
  }

  return `
    <div class="card ${item.color}">
      <div class="card-head">
        <div class="card-num">${item.num}</div>
        <div class="card-title">${item.title}</div>
      </div>
      <div class="fgrid ${gridClass}">${cellsHtml}</div>
      ${extra}
    </div>`;
}

function renderDistTable(dist) {
  if (!dist) return '';
  const headerCells = dist.headers.map(h => `<th>${h}</th>`).join('');
  const xCells      = dist.xrow.map((v, i) => i === 0 ? `<td class="rl">${v}</td>` : `<td>${v}</td>`).join('');
  const fCells      = dist.frow.map((v, i) => i === 0 ? `<td class="rl">${v}</td>` : `<td>${v}</td>`).join('');
  return `
    <div class="dw">
      <table class="dt">
        <thead><tr>${headerCells}</tr></thead>
        <tbody>
          <tr>${xCells}</tr>
          <tr class="fr">${fCells}</tr>
        </tbody>
      </table>
    </div>
    ${dist.check ? `<div class="inline-note">${dist.check}</div>` : ''}`;
}

function renderCdfTable(cdf) {
  if (!cdf || cdf.length === 0) return '';
  const rows = cdf.map(r => `<tr><td class="cv">${r.val}</td><td class="cc">${r.cond}</td></tr>`).join('');
  return `
    <div class="cw">
      <table class="ct">
        <thead><tr><th style="width:28%">F(x)</th><th>Condition</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
}

function renderAnswers(answers) {
  if (!answers || answers.length === 0) return '';
  const rows = answers.map(a => `<tr><td class="ap">${a.part}</td><td class="av">${a.val}</td></tr>`).join('');
  return `<table class="at">${rows}</table>`;
}

function renderQBlock(item) {
  const theme = item.theme || '';
  return `
    <div class="qb">
      <div class="qh ${theme}">
        <div class="qn">${item.num}</div>
        <div class="qt">${item.title}</div>
      </div>
      <div class="qbody">
        ${item.note ? `<div class="qnote">${item.note}</div>` : ''}
        ${renderDistTable(item.dist)}
        ${renderAnswers(item.answers)}
        ${item.cdf && item.cdf.length ? `<div class="qnote" style="font-style:normal;font-weight:500;border-top:.5px solid var(--border)">CDF — F(x)</div>${renderCdfTable(item.cdf)}` : ''}
      </div>
    </div>`;
}

function renderQBlockCont(item) {
  const theme = item.theme || '';
  const stepsHtml = item.steps.map(s => {
    const lines = s.lines.map(l => `<div class="fe" style="margin-bottom:2px">${l}</div>`).join('');
    return `
      <div class="fc">
        <div class="fl">${s.label}</div>
        ${lines}
      </div>`;
  }).join('');

  return `
    <div class="qb">
      <div class="qh ${theme}">
        <div class="qn">${item.num}</div>
        <div class="qt">${item.title}</div>
      </div>
      <div class="qbody">
        <div class="fgrid g${item.steps.length}">${stepsHtml}</div>
      </div>
    </div>`;
}

function renderItems(items) {
  return items.map(item => {
    if (item.type === 'card')          return renderCard(item);
    if (item.type === 'qblock')        return renderQBlock(item);
    if (item.type === 'qblock-cont')   return renderQBlockCont(item);
    return '';
  }).join('');
}

/* ── fill all panels ─────────────────────────────────── */
document.getElementById('panel-laws').innerHTML      = renderItems(PANEL_LAWS);
document.getElementById('panel-rv').innerHTML        = renderItems(PANEL_RV);
document.getElementById('panel-discrete').innerHTML  = renderItems(PANEL_DISCRETE);
document.getElementById('panel-continuous').innerHTML = renderItems(PANEL_CONTINUOUS);
document.getElementById('panel-cond').innerHTML      = renderItems(PANEL_COND);
document.getElementById('panel-examples').innerHTML  = renderItems(PANEL_EXAMPLES);
