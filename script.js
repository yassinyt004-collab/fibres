const initialLines = [
  {num:1, client:'100054', appel:'100', adresse:'CONSERVAT, RAISS BLAID-IRAQ EL FATH', type:'Fibre'},
  {num:2, client:'100061', appel:'100', adresse:'PISCINE COMMUNAL', type:'Fibre'},
  {num:3, client:'100062', appel:'100', adresse:'CAMPING COMMUNAL', type:'Fibre'},
  {num:4, client:'100067', appel:'100', adresse:'CT AIT MOUSSA OUAMER QT AGLOU', type:'Fibre'},
  {num:5, client:'100068', appel:'100', adresse:'CT ADMINE QT IDZKRI', type:'Fibre'},
  {num:6, client:'100072', appel:'100', adresse:'CT MOUKRI NAMAHE HAY TARGA', type:'Fibre'},
  {num:7, client:'100075', appel:'100', adresse:'CT MOUKRI NOUREDDINE QT AGLOU', type:'Fibre'},
  {num:8, client:'100078', appel:'100', adresse:'CT. AMOURI MBAREK HAY BOUTAKOURT', type:'Fibre'},
  {num:9, client:'100079', appel:'100', adresse:'CT.EDUCT ROUTIERE RT AGADIR', type:'Fibre'},
  {num:10, client:'100043', appel:'100', adresse:'CT ALI INJARN HAY TAMDROUSTE', type:'Fibre'},
  {num:11, client:'100078', appel:'100', adresse:'CT AMORI MEBARK QT BOUTAQOURT', type:'Fibre'},
  {num:12, client:'100040', appel:'50', adresse:'CT AFRAG QT AFRAG', type:'Internet'},
  {num:13, client:'100037', appel:'50', adresse:'CT AINE ZERQA LOT AIN ZERKA', type:'Internet'},
  {num:14, client:'100039', appel:'50', adresse:'CT ELMERESS QT ELMERES', type:'Internet'},
  {num:15, client:'100038', appel:'50', adresse:'CT ESAIDIA QT ESAIDIA', type:'Internet'},
  {num:16, client:'100036', appel:'50', adresse:'CT ALMASSIRA QT ALMASSIRA', type:'Internet'},
  {num:17, client:'-', appel:'100', adresse:"CT D'INFORMATION TOURISTIQUE", type:'Service'}
];

const fiberSubscriptions = [
  {client:'7.2784793.00.00.100043', montant:500},
  {client:'7.2784793.00.00.100054', montant:500},
  {client:'7.2784793.00.00.100061', montant:500},
  {client:'7.2784793.00.00.100062', montant:500},
  {client:'7.2784793.00.00.100067', montant:500},
  {client:'7.2784793.00.00.100068', montant:500},
  {client:'7.2784793.00.00.100072', montant:500},
  {client:'7.2784793.00.00.100075', montant:500},
  {client:'7.2784793.00.00.100078', montant:500},
  {client:'7.2784793.00.00.100079', montant:500}
];

const internetSubscriptions = [
  {client:'7.2784793.00.00.100035', montant:199},
  {client:'7.2784793.00.00.100036', montant:199},
  {client:'7.2784793.00.00.100037', montant:149},
  {client:'7.2784793.00.00.100038', montant:199},
  {client:'7.2784793.00.00.100039', montant:199},
  {client:'7.2784793.00.00.100040', montant:199},
  {client:'7.2784793.00.00.100041', montant:199},
  {client:'7.2784793.00.00.100042', montant:199},
  {client:'7.2784793.00.00.100048', montant:149},
  {client:'7.2784793.00.00.100055', montant:99},
  {client:'7.2784793.00.00.100056', montant:99},
  {client:'7.2784793.00.00.100057', montant:99},
  {client:'7.2784793.00.00.100058', montant:99},
  {client:'7.2784793.00.00.100059', montant:99},
  {client:'7.2784793.00.00.100071', montant:199},
  {client:'7.2784793.00.00.100074', montant:199}
];

let lines = JSON.parse(localStorage.getItem('fiberLines') || 'null') || initialLines;
let transfers = JSON.parse(localStorage.getItem('fiberTransfers') || '[]');
let problems = JSON.parse(localStorage.getItem('fiberProblems') || '[]');

const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));

const pageTitles = {
  dashboard: ['Dashboard', 'Suivi pratique des lignes fibre et internet'],
  routeurs: ['Routeurs', 'Recherche, détails, modification et suppression'],
  transferts: ['Transferts', "Demandes de changement d'emplacement"],
  problemes: ['Les problèmes', 'Signalements et suivi des pannes'],
  rapports: ['Rapports', 'Résumé général et rapport des problèmes'],
  parametres: ['Paramètres', 'Configuration du projet']
};

function badge(text, type='soft') {
  return `<span class="badge ${type}">${text}</span>`;
}
function renderTable(id, headers, rows) {
  const table = $(id);
  if (!table) return;
  table.innerHTML = `<thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.join('')}</tbody>`;
}
function money(n){ return `${Number(n).toLocaleString('fr-FR')} DH`; }
function formatDate(){ return new Date().toLocaleDateString('fr-FR'); }
function save(){
  localStorage.setItem('fiberLines', JSON.stringify(lines));
  localStorage.setItem('fiberTransfers', JSON.stringify(transfers));
  localStorage.setItem('fiberProblems', JSON.stringify(problems));
}
function totalFiberCharge(){ return fiberSubscriptions.reduce((s, x) => s + x.montant, 0); }
function totalInternetCharge(){ return internetSubscriptions.reduce((s, x) => s + x.montant, 0); }
function totalCharge(){ return totalFiberCharge() + totalInternetCharge(); }
function openProblems(){ return problems.filter(p => p.status !== 'Résolu'); }
function openTransfers(){ return transfers.filter(t => t.status !== 'Terminé'); }

function checkAuth(){
  const isLogged = sessionStorage.getItem('fiberAdminLogged') === 'true';
  $('#loginScreen').classList.toggle('hide', isLogged);
  $('#appShell').classList.toggle('show', isLogged);
}
$('#loginForm').addEventListener('submit', e => {
  e.preventDefault();
  const user = $('#username').value.trim();
  const pass = $('#password').value.trim();
  if(user === 'admin' && pass === 'admin123'){
    sessionStorage.setItem('fiberAdminLogged', 'true');
    $('#loginError').textContent = '';
    checkAuth();
  }else{
    $('#loginError').textContent = 'Nom utilisateur ou mot de passe incorrect.';
  }
});
function logout(){
  sessionStorage.removeItem('fiberAdminLogged');
  checkAuth();
}
$('#logoutBtn').addEventListener('click', logout);
$('#logoutMini').addEventListener('click', logout);

function refreshNotificationCount(){
  $('#notifCount').textContent = openTransfers().length + openProblems().length;
}
function renderDashboard(){
  const slowLines = lines.filter(l => l.appel === '50');
  $('#totalLines').textContent = lines.length;
  $('#totalRouters').textContent = lines.length;
  $('#totalCharge').textContent = money(totalCharge()).replace(' DH','');
  $('#fiberCount').textContent = fiberSubscriptions.length;
  $('#internetCount').textContent = internetSubscriptions.length;
  $('#problemCount').textContent = openProblems().length;
  $('#transferCountTop').textContent = openTransfers().length;
  $('#resolvedCount').textContent = problems.filter(p => p.status === 'Résolu').length;
  $('#summary100').textContent = lines.filter(l => l.appel === '100').length;
  $('#summary50').textContent = slowLines.length;
  $('#fiberCharge').textContent = money(totalFiberCharge());
  $('#internetCharge').textContent = money(totalInternetCharge());
  $('#slowCountBadge').textContent = `${slowLines.length} lignes`;
  $('#problemLine').style.width = `${Math.min(100, Math.max(14, openProblems().length * 16))}%`;
  $('#globalState').textContent = openProblems().length ? 'À surveiller' : 'Stable';
  $('#globalState').className = openProblems().length ? 'bad-text' : 'ok-text';

  renderTable('#latestTable', ['N°', 'Client', 'Type', 'Débit', 'Adresse', 'État'],
    lines.slice(0, 6).map(l => `
      <tr>
        <td>${l.num}</td>
        <td><strong>${l.client}</strong></td>
        <td>${badge(l.type, l.type === 'Fibre' ? 'ok' : l.type === 'Internet' ? 'run' : 'soft')}</td>
        <td>${l.appel} Mbps</td>
        <td>${l.adresse}</td>
        <td>${badge('Actif','ok')}</td>
      </tr>`)
  );
  renderTable('#waitingTable', ['N°', 'Client', 'Débit', 'Adresse', 'Suivi'],
    slowLines.map(l => `
      <tr><td>${l.num}</td><td><strong>${l.client}</strong></td><td>${badge(l.appel + ' Mbps','wait')}</td><td>${l.adresse}</td><td>${badge('À surveiller','soft')}</td></tr>`)
  );
  const miniProblems = problems.length ? problems.slice(0,4).map((p,i) => `
      <tr><td>${i+1}</td><td><strong>${p.client}</strong></td><td>${p.type}</td><td>${badge(p.priority, p.priority === 'Critique' ? 'critical' : 'wait')}</td><td>${badge(p.status || 'Ouvert', p.status === 'Résolu' ? 'ok' : 'wait')}</td></tr>
    `) : [`<tr><td colspan="5" style="text-align:center;color:#6b7895;padding:28px">Aucun problème enregistré.</td></tr>`];
  renderTable('#miniProblemsTable', ['#', 'Client', 'Type', 'Priorité', 'Statut'], miniProblems);
  refreshNotificationCount();
  renderReports();
}

function renderRouteurs(){
  const q = $('#routerSearch').value.trim().toLowerCase();
  const type = $('#typeFilter').value;
  const speed = $('#speedFilter').value;
  const data = lines.filter(l => {
    const matchQuery = `${l.client} ${l.adresse} ${l.appel} ${l.type}`.toLowerCase().includes(q);
    const matchType = type === 'all' || l.type === type;
    const matchSpeed = speed === 'all' || l.appel === speed;
    return matchQuery && matchType && matchSpeed;
  });
  renderTable('#routerTable', ['N°', 'Client', 'Type', 'Débit', 'Adresse', 'État', 'Actions'],
    data.map(l => {
      const i = lines.findIndex(x => x.num === l.num && x.client === l.client && x.adresse === l.adresse);
      return `
      <tr>
        <td>${l.num}</td><td><strong>${l.client}</strong></td>
        <td>${badge(l.type, l.type === 'Fibre' ? 'ok' : l.type === 'Internet' ? 'run' : 'soft')}</td>
        <td>${l.appel} Mbps</td><td>${l.adresse}</td><td>${badge('Actif','ok')}</td>
        <td>
          <button class="table-action details" data-router-details="${i}">Détails</button>
          <button class="table-action edit" data-router-edit="${i}">Modifier</button>
          <button class="table-action delete" data-router-delete="${i}">Supprimer</button>
        </td>
      </tr>`;
    })
  );
}

function renderTransfers(){
  const rows = transfers.length
    ? transfers.map((t, i) => `
      <tr>
        <td>${i + 1}</td><td><strong>${t.client}</strong></td><td>${t.oldAddress}</td><td>${t.newAddress}</td>
        <td>${badge(t.status || 'En attente', t.status === 'Terminé' ? 'ok' : 'wait')}</td><td>${t.date}</td>
        <td>
          <button class="table-action details" data-transfer-details="${i}">Détails</button>
          ${t.status !== 'Terminé' ? `<button class="table-action done" data-transfer-done="${i}">Terminer</button>` : ''}
          <button class="table-action delete" data-transfer-delete="${i}">Supprimer</button>
        </td>
      </tr>`)
    : [`<tr><td colspan="7" style="text-align:center;color:#6b7895;padding:32px">Aucune demande de transfert pour le moment.</td></tr>`];
  renderTable('#transferTable', ['#', 'Client', 'Ancienne adresse', 'Nouvelle adresse', 'Statut', 'Date', 'Actions'], rows);
}

function renderProblems(){
  const has = problems.length > 0;
  $('#noProblems').style.display = has ? 'none' : 'block';
  $('#problemTable').style.display = has ? 'table' : 'none';
  if(!has) return;
  renderTable('#problemTable', ['#', 'Client', 'Type', 'Priorité', 'Description', 'Statut', 'Date', 'Actions'],
    problems.map((p, i) => `
      <tr>
        <td>${i + 1}</td><td><strong>${p.client}</strong></td><td>${p.type}</td>
        <td>${badge(p.priority, p.priority === 'Critique' ? 'critical' : p.priority === 'Urgente' ? 'wait' : 'soft')}</td>
        <td>${p.description || '-'}</td><td>${badge(p.status || 'Ouvert', p.status === 'Résolu' ? 'ok' : 'wait')}</td><td>${p.date}</td>
        <td>
          <button class="table-action details" data-problem-details="${i}">Détails</button>
          ${p.status !== 'Résolu' ? `<button class="table-action done" data-problem-done="${i}">Résoudre</button>` : ''}
          <button class="table-action delete" data-problem-delete="${i}">Supprimer</button>
        </td>
      </tr>`)
  );
}
function renderReports(){
  $('#reportRouters').textContent = lines.length;
  $('#reportCharge').textContent = money(totalCharge());
  $('#reportProblems').textContent = openProblems().length;
  $('#reportTransfers').textContent = openTransfers().length;
  const has = problems.length > 0;
  $('#noReportProblems').style.display = has ? 'none' : 'block';
  $('#reportProblemTable').style.display = has ? 'table' : 'none';
  if(has){
    renderTable('#reportProblemTable', ['#', 'Client', 'Type', 'Priorité', 'Statut', 'Date'],
      problems.map((p,i) => `<tr><td>${i+1}</td><td><strong>${p.client}</strong></td><td>${p.type}</td><td>${p.priority}</td><td>${p.status}</td><td>${p.date}</td></tr>`)
    );
  }
}

function populateSelects(){
  const opts = lines.map(l => `<option value="${l.client}" data-address="${l.adresse}">${l.client} — ${l.adresse}</option>`).join('');
  $('#transferClient').innerHTML = opts;
  $('#problemClient').innerHTML = opts;
  setOldAddress();
}
function setOldAddress(){
  const opt = $('#transferClient').selectedOptions[0];
  if(opt) $('#oldAddress').value = opt.dataset.address || '';
}
function openModal(id){ $(id).classList.add('show'); }
function closeModals(){ $$('.modal').forEach(m => m.classList.remove('show')); }
function detail(title, items){
  $('#detailContent').innerHTML = items.map(([k,v]) => `<div><strong>${k}</strong>${v || '-'}</div>`).join('');
  openModal('#detailModal');
}

function switchPage(page){
  $$('.page').forEach(p => p.classList.remove('active'));
  $(`#${page}`).classList.add('active');
  $$('.nav-link').forEach(b => b.classList.toggle('active', b.dataset.page === page));
  $('#pageTitle').textContent = pageTitles[page][0];
  $('#pageSubtitle').textContent = pageTitles[page][1];
  $('#sidebar').classList.remove('open');
  if(page === 'routeurs') renderRouteurs();
  if(page === 'transferts') renderTransfers();
  if(page === 'problemes') renderProblems();
  if(page === 'rapports') renderReports();
}

$$('.nav-link').forEach(btn => btn.addEventListener('click', () => switchPage(btn.dataset.page)));
$$('[data-page-link]').forEach(btn => btn.addEventListener('click', () => switchPage(btn.dataset.pageLink)));
$('#menuBtn').addEventListener('click', () => $('#sidebar').classList.toggle('open'));
$('#routerSearch').addEventListener('input', renderRouteurs);
$('#typeFilter').addEventListener('change', renderRouteurs);
$('#speedFilter').addEventListener('change', renderRouteurs);
$('#quickTransfer').addEventListener('click', () => openModal('#transferModal'));
$('#openTransfer').addEventListener('click', () => openModal('#transferModal'));
$('#shortcutTransfer').addEventListener('click', () => openModal('#transferModal'));
$('#newTransferBtn').addEventListener('click', () => openModal('#transferModal'));
$('#addProblemBtn').addEventListener('click', () => openModal('#problemModal'));
$('#addRouterBtn').addEventListener('click', () => {
  $('#routerModalTitle').textContent = 'Ajouter routeur / ligne';
  $('#routerEditIndex').value = '';
  $('#routerForm').reset();
  openModal('#routerModal');
});
$('#printReport').addEventListener('click', () => window.print());
$('#clearDataBtn').addEventListener('click', () => {
  if(confirm('Supprimer les transferts, problèmes et modifications ajoutés ?')){
    localStorage.removeItem('fiberLines');
    localStorage.removeItem('fiberTransfers');
    localStorage.removeItem('fiberProblems');
    lines = [...initialLines];
    transfers = [];
    problems = [];
    save();
    populateSelects();
    renderDashboard(); renderRouteurs(); renderTransfers(); renderProblems(); renderReports();
  }
});
$$('.close-modal').forEach(b => b.addEventListener('click', closeModals));
$$('.modal').forEach(m => m.addEventListener('click', e => { if(e.target === m) closeModals(); }));
$('#transferClient').addEventListener('change', setOldAddress);

$('#routerForm').addEventListener('submit', e => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const editIndex = $('#routerEditIndex').value;
  const data = {
    num: editIndex === '' ? (Math.max(0, ...lines.map(l => Number(l.num))) + 1) : lines[Number(editIndex)].num,
    client: fd.get('client'),
    type: fd.get('type'),
    appel: fd.get('appel'),
    adresse: fd.get('adresse')
  };
  if(editIndex === '') lines.push(data);
  else lines[Number(editIndex)] = data;
  save(); closeModals(); populateSelects(); renderDashboard(); renderRouteurs();
});

$('#transferForm').addEventListener('submit', e => {
  e.preventDefault();
  const fd = new FormData(e.target);
  transfers.unshift({
    client: fd.get('client'),
    oldAddress: fd.get('oldAddress'),
    newAddress: fd.get('newAddress'),
    note: fd.get('note'),
    status: 'En attente',
    date: formatDate()
  });
  save(); e.target.reset(); setOldAddress(); closeModals(); renderTransfers(); renderDashboard(); switchPage('transferts');
});

$('#problemForm').addEventListener('submit', e => {
  e.preventDefault();
  const fd = new FormData(e.target);
  problems.unshift({
    client: fd.get('client'),
    type: fd.get('type'),
    priority: fd.get('priority'),
    description: fd.get('description'),
    status: 'Ouvert',
    date: formatDate()
  });
  save(); e.target.reset(); closeModals(); renderProblems(); renderDashboard(); switchPage('problemes');
});

document.addEventListener('click', e => {
  const rDetails = e.target.closest('[data-router-details]');
  const rEdit = e.target.closest('[data-router-edit]');
  const rDelete = e.target.closest('[data-router-delete]');
  const tDetails = e.target.closest('[data-transfer-details]');
  const tDone = e.target.closest('[data-transfer-done]');
  const tDelete = e.target.closest('[data-transfer-delete]');
  const pDetails = e.target.closest('[data-problem-details]');
  const pDone = e.target.closest('[data-problem-done]');
  const pDelete = e.target.closest('[data-problem-delete]');

  if(rDetails){
    const l = lines[Number(rDetails.dataset.routerDetails)];
    detail('Détails routeur', [['N°', l.num], ['Client', l.client], ['Type', l.type], ['Débit', l.appel + ' Mbps'], ['Adresse', l.adresse], ['État', 'Actif']]);
  }
  if(rEdit){
    const i = Number(rEdit.dataset.routerEdit);
    const l = lines[i];
    $('#routerModalTitle').textContent = 'Modifier routeur / ligne';
    $('#routerEditIndex').value = i;
    $('#routerClientInput').value = l.client;
    $('#routerTypeInput').value = l.type;
    $('#routerSpeedInput').value = l.appel;
    $('#routerAddressInput').value = l.adresse;
    openModal('#routerModal');
  }
  if(rDelete){
    const i = Number(rDelete.dataset.routerDelete);
    if(confirm('Supprimer cette ligne ?')){
      lines.splice(i,1); save(); populateSelects(); renderDashboard(); renderRouteurs();
    }
  }
  if(tDetails){
    const t = transfers[Number(tDetails.dataset.transferDetails)];
    detail('Détails transfert', [['Client', t.client], ['Ancienne adresse', t.oldAddress], ['Nouvelle adresse', t.newAddress], ['Remarque', t.note], ['Statut', t.status], ['Date', t.date]]);
  }
  if(tDone){ transfers[Number(tDone.dataset.transferDone)].status = 'Terminé'; save(); renderTransfers(); renderDashboard(); }
  if(tDelete){ transfers.splice(Number(tDelete.dataset.transferDelete), 1); save(); renderTransfers(); renderDashboard(); }
  if(pDetails){
    const p = problems[Number(pDetails.dataset.problemDetails)];
    detail('Détails problème', [['Client', p.client], ['Type', p.type], ['Priorité', p.priority], ['Description', p.description], ['Statut', p.status], ['Date', p.date]]);
  }
  if(pDone){ problems[Number(pDone.dataset.problemDone)].status = 'Résolu'; save(); renderProblems(); renderDashboard(); }
  if(pDelete){ problems.splice(Number(pDelete.dataset.problemDelete), 1); save(); renderProblems(); renderDashboard(); }
});

checkAuth();
populateSelects();
renderDashboard();
renderRouteurs();
renderTransfers();
renderProblems();
renderReports();
refreshNotificationCount();
