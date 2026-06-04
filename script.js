const mainLines = [
  {num:1, client:'7.2784793.00.00.100054', appel:'100', adresse:'CONSERVAT, RAISS BLAID-IRAQ EL FATH'},
  {num:2, client:'7.2784793.00.00.100061', appel:'100', adresse:'PISCINE COMMUNAL'},
  {num:3, client:'7.2784793.00.00.100062', appel:'100', adresse:'CAMPING COMMUNAL'},
  {num:4, client:'100067', appel:'100', adresse:'SIEGE COMMUNE BD HASSAN 2'},
  {num:5, client:'100068', appel:'100', adresse:'Bureau RESSOURCE HUMAINE'},
  {num:6, client:'100072', appel:'100', adresse:'BUREAU SOUK HEBDOMADAIRE'},
  {num:7, client:'100075', appel:'100', adresse:'SIEGE COMMUNAL .BD.HASSAN 2'},
  {num:8, client:'100078', appel:'100', adresse:'CT. AMOURI MBAREK HAY BOUTAKOURT'},
  {num:9, client:'100079', appel:'100', adresse:'CT.EDUCT ROUTIERE RT AGADIR'},
  {num:10, client:'100043', appel:'100', adresse:'CT ALI INJARN HAY TAMDROUSTE'},
  {num:11, client:'100078', appel:'100', adresse:'CT AMORI MEBARK QT BOUTAQOURT'},
  {num:12, client:'100040', appel:'50', adresse:'CT AFRAG QT AFRAG'},
  {num:13, client:'100037', appel:'50', adresse:'CT AINE ZERQA LOT AIN ZERKA'},
  {num:14, client:'100039', appel:'50', adresse:'CT ELMERESS QT ELMERES'},
  {num:15, client:'100038', appel:'50', adresse:'CT ESAIDIA QT ESAIDIA'},
  {num:16, client:'100036', appel:'50', adresse:'CT ALMASSIRA QT ALMASSIRA'},
  {num:17, client:'-', appel:'100', adresse:"CT D'INFORMATION TOURISTIQUE"}
];

const fiberSubscriptions = [
  {num:1, client:'7.2784793.00.00.100043', facture:'1803148092024', reference:'15161793', montant:500},
  {num:2, client:'7.2784793.00.00.100054', facture:'1803156092024', reference:'16371249', montant:500},
  {num:3, client:'7.2784793.00.00.100061', facture:'1803163092024', reference:'17005674', montant:500},
  {num:4, client:'7.2784793.00.00.100062', facture:'1803164092024', reference:'17005686', montant:500},
  {num:5, client:'7.2784793.00.00.100067', facture:'1803166092024', reference:'19516531', montant:500},
  {num:6, client:'7.2784793.00.00.100068', facture:'1803167092024', reference:'19516658', montant:500},
  {num:7, client:'7.2784793.00.00.100072', facture:'1803171092024', reference:'24160317', montant:500},
  {num:8, client:'7.2784793.00.00.100075', facture:'1803174092024', reference:'24756880', montant:500},
  {num:9, client:'7.2784793.00.00.100078', facture:'1803175092024', reference:'25458695', montant:500},
  {num:10, client:'7.2784793.00.00.100079', facture:'1803176092024', reference:'25458708', montant:500}
];

const internetSubscriptions = [
  {num:1, client:'7.2784793.00.00.100035', facture:'1803140092024', reference:'14349374', montant:199},
  {num:2, client:'7.2784793.00.00.100036', facture:'1803143092024', reference:'14377223', montant:199},
  {num:3, client:'7.2784793.00.00.100037', facture:'1803142092024', reference:'14374957', montant:149},
  {num:4, client:'7.2784793.00.00.100038', facture:'1803141092024', reference:'14374788', montant:199},
  {num:5, client:'7.2784793.00.00.100039', facture:'1803145092024', reference:'14386482', montant:199},
  {num:6, client:'7.2784793.00.00.100040', facture:'1803144092024', reference:'14384283', montant:199},
  {num:7, client:'7.2784793.00.00.100041', facture:'1803146092024', reference:'14816132', montant:199},
  {num:8, client:'7.2784793.00.00.100042', facture:'1803147092024', reference:'15074570', montant:199},
  {num:9, client:'7.2784793.00.00.100048', facture:'1803151092024', reference:'16353620', montant:149},
  {num:10, client:'7.2784793.00.00.100055', facture:'1803157092024', reference:'16371259', montant:99},
  {num:11, client:'7.2784793.00.00.100056', facture:'1803158092024', reference:'16712920', montant:99},
  {num:12, client:'7.2784793.00.00.100057', facture:'1803159092024', reference:'16712921', montant:99},
  {num:13, client:'7.2784793.00.00.100058', facture:'1803160092024', reference:'16712924', montant:99},
  {num:14, client:'7.2784793.00.00.100059', facture:'1803161092024', reference:'16712925', montant:99},
  {num:15, client:'7.2784793.00.00.100071', facture:'1803170092024', reference:'22577600', montant:199},
  {num:16, client:'7.2784793.00.00.100074', facture:'1803173092024', reference:'24748890', montant:199}
];

let transfers = JSON.parse(localStorage.getItem('fiberTransfers') || '[]');
let problems = JSON.parse(localStorage.getItem('fiberProblems') || '[]');

const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));

const pageTitles = {
  dashboard: ['Dashboard', 'Suivi des lignes fibre et internet'],
  routeurs: ['Routeurs', 'Liste des lignes et routeurs'],
  transferts: ['Transferts', "Demandes de changement d'emplacement"],
  problemes: ['Les problèmes', 'Signalements et suivi des pannes'],
  parametres: ['Paramètres', 'Configuration du projet']
};

function badge(text, type='soft') { return `<span class="badge ${type}">${text}</span>`; }

function renderTable(id, headers, rows) {
  const table = $(id);
  if (!table) return;
  table.innerHTML = `<thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.join('')}</tbody>`;
}

function renderDashboard(){
  $('#totalLines').textContent = mainLines.length;
  $('#fiberCount').textContent = fiberSubscriptions.length;
  $('#internetCount').textContent = internetSubscriptions.length;
  $('#problemCount').textContent = problems.length;

  renderTable('#latestTable', ['N°', 'N° Client', 'Débit appel', 'Adresse', 'Statut'],
    mainLines.slice(0,5).map(l => `<tr><td>${l.num}</td><td><strong>${l.client}</strong></td><td>${l.appel} Mbps</td><td>${l.adresse}</td><td>${badge('Actif','ok')}</td></tr>`)
  );
  renderTable('#waitingTable', ['N°', 'N° Client', 'Adresse', 'Abonnement', 'Action'],
    mainLines.filter(l => l.appel === '50').slice(0,5).map(l => `<tr><td>${l.num}</td><td>${l.client}</td><td>${l.adresse}</td><td>${badge(l.appel + ' Mbps','wait')}</td><td><button class="ghost-btn">Voir</button></td></tr>`)
  );
}

function renderRouteurs(filter=''){
  const q = filter.toLowerCase();
  const data = mainLines.filter(l => `${l.client} ${l.adresse} ${l.appel}`.toLowerCase().includes(q));
  renderTable('#routerTable', ['N° Ord', 'N° Client', 'N° Appel', 'Adresse', 'État'],
    data.map(l => `<tr><td>${l.num}</td><td><strong>${l.client}</strong></td><td>${l.appel} Mbps</td><td>${l.adresse}</td><td>${badge('Actif','ok')}</td></tr>`)
  );
}

function renderTransfers(){
  const rows = transfers.length ? transfers.map((t,i) => `<tr><td>${i+1}</td><td><strong>${t.client}</strong></td><td>${t.oldAddress}</td><td>${t.newAddress}</td><td>${badge('En attente','wait')}</td><td>${t.date}</td></tr>`) : [`<tr><td colspan="6" style="text-align:center;color:#6b7895;padding:32px">Aucune demande de transfert pour le moment.</td></tr>`];
  renderTable('#transferTable', ['#','Client','Ancienne adresse','Nouvelle adresse','Statut','Date'], rows);
}

function renderProblems(){
  const has = problems.length > 0;
  $('#noProblems').style.display = has ? 'none' : 'block';
  $('#problemTable').style.display = has ? 'table' : 'none';
  if(!has) return;
  renderTable('#problemTable', ['#','Client','Type','Priorité','Description','Date'],
    problems.map((p,i) => `<tr><td>${i+1}</td><td><strong>${p.client}</strong></td><td>${p.type}</td><td>${badge(p.priority, p.priority === 'Critique' ? 'critical' : 'wait')}</td><td>${p.description || '-'}</td><td>${p.date}</td></tr>`)
  );
}

function populateSelects(){
  const opts = mainLines.map(l => `<option value="${l.client}" data-address="${l.adresse}">${l.client} — ${l.adresse}</option>`).join('');
  $('#transferClient').innerHTML = opts;
  $('#problemClient').innerHTML = opts;
  setOldAddress();
}
function setOldAddress(){
  const opt = $('#transferClient').selectedOptions[0];
  if(opt) $('#oldAddress').value = opt.dataset.address || '';
}

function save(){
  localStorage.setItem('fiberTransfers', JSON.stringify(transfers));
  localStorage.setItem('fiberProblems', JSON.stringify(problems));
}

function openModal(id){ $(id).classList.add('show'); }
function closeModals(){ $$('.modal').forEach(m => m.classList.remove('show')); }

function switchPage(page){
  $$('.page').forEach(p => p.classList.remove('active'));
  $(`#${page}`).classList.add('active');
  $$('.nav-link').forEach(b => b.classList.toggle('active', b.dataset.page === page));
  $('#pageTitle').textContent = pageTitles[page][0];
  $('#pageSubtitle').textContent = pageTitles[page][1];
  $('#sidebar').classList.remove('open');
  if(page === 'routeurs') renderRouteurs($('#routerSearch')?.value || '');
  if(page === 'transferts') renderTransfers();
  if(page === 'problemes') renderProblems();
}

$$('.nav-link').forEach(btn => btn.addEventListener('click', () => switchPage(btn.dataset.page)));
$$('[data-page-link]').forEach(btn => btn.addEventListener('click', () => switchPage(btn.dataset.pageLink)));
$('#menuBtn').addEventListener('click', () => $('#sidebar').classList.toggle('open'));
$('#routerSearch').addEventListener('input', e => renderRouteurs(e.target.value));
$('#quickTransfer').addEventListener('click', () => openModal('#transferModal'));
$('#openTransfer').addEventListener('click', () => openModal('#transferModal'));
$('#shortcutTransfer').addEventListener('click', () => openModal('#transferModal'));
$('#newTransferBtn').addEventListener('click', () => openModal('#transferModal'));
$('#addProblemBtn').addEventListener('click', () => openModal('#problemModal'));
$$('.close-modal').forEach(b => b.addEventListener('click', closeModals));
$$('.modal').forEach(m => m.addEventListener('click', e => { if(e.target === m) closeModals(); }));
$('#transferClient').addEventListener('change', setOldAddress);

$('#transferForm').addEventListener('submit', e => {
  e.preventDefault();
  const fd = new FormData(e.target);
  transfers.unshift({
    client: fd.get('client'),
    oldAddress: fd.get('oldAddress'),
    newAddress: fd.get('newAddress'),
    note: fd.get('note'),
    date: new Date().toLocaleDateString('fr-FR')
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
    date: new Date().toLocaleDateString('fr-FR')
  });
  save(); e.target.reset(); closeModals(); renderProblems(); renderDashboard(); switchPage('problemes');
});

populateSelects();
renderDashboard();
renderRouteurs();
renderTransfers();
renderProblems();
