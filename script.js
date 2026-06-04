const data = {
  lines: [
    {num:1, client:'7.2784793.00.00.100054', appel:'100', adresse:'CONSERVAT, RAISS BLAID-IRAQ EL FATH', type:'Fibre'},
    {num:2, client:'7.2784793.00.00.100061', appel:'100', adresse:'PISCINE COMMUNAL', type:'Fibre', problem:true},
    {num:3, client:'7.2784793.00.00.100062', appel:'100', adresse:'CAMPING COMMUNAL', type:'Fibre'},
    {num:4, client:'100067', appel:'100', adresse:'SEIGE COMMUNE BD HASSAN 2', type:'Fibre'},
    {num:5, client:'100068', appel:'100', adresse:'Bureau RESSOURCE HUMAINE', type:'Fibre'},
    {num:6, client:'100072', appel:'100', adresse:'BUREAU SOUK HEBDOMADAIRE', type:'Fibre'},
    {num:7, client:'100075', appel:'100', adresse:'SIEGE COMMUNAL BD.HASSAN 2', type:'Fibre'},
    {num:8, client:'100078', appel:'100', adresse:'CT. AMOURI MBAREK HAY BOUTAKOURT', type:'Fibre'},
    {num:9, client:'100079', appel:'100', adresse:'CT.EDUCT ROUTIERE RT AGADIR', type:'Fibre'},
    {num:10, client:'100043', appel:'100', adresse:'CT ALI INJARN HAY TAMDROUSTE', type:'Fibre'},
    {num:11, client:'100078', appel:'100', adresse:'CT AMORI MEBARK QT BOUTAQOURT', type:'Fibre'},
    {num:12, client:'100040', appel:'50', adresse:'CT AFRAG QT AFRAG', type:'Internet'},
    {num:13, client:'100037', appel:'50', adresse:'CT AINE ZERQA LOT AIN ZERKA', type:'Internet'},
    {num:14, client:'100039', appel:'50', adresse:'CT ELMERESS QT ELMERES', type:'Internet'},
    {num:15, client:'100038', appel:'50', adresse:'CT ESAIDIA QT ESAIDIA', type:'Internet'},
    {num:16, client:'100036', appel:'50', adresse:'CT ALMASSIRA QT ALMASSIRA', type:'Internet'},
    {num:17, client:'-', appel:'100', adresse:"CT D'INFORMATION TOURISTIQUE", type:'Service', problem:true}
  ],
  fiberCharge: 5000,
  internetCharge: 2584
};

const dict = {
  fr: {
    brandSubtitle:'Commune Tiznit', loginTitle:'Connexion Admin', loginSubtitle:'Accédez au tableau de bord de gestion fibre.', username:"Nom d'utilisateur", password:'Mot de passe', loginButton:'Se connecter', demoAccount:'Compte demo',
    navDashboard:'Dashboard', navRouters:'Routeurs', navTransfers:'Transferts', navProblems:'Les problèmes', navReports:'Rapports', navSettings:'Paramètres',
    session:'Session', adminOnline:'Admin connecté', administrator:'Administrateur', transferRequest:'Demande de transfert', logout:'Logout',
    dashboardTitle:'Dashboard', dashboardSub:'Suivi pratique des lignes fibre et internet', routeursTitle:'Routeurs', routeursSub:'Recherche, détails, modification et suppression', transfertsTitle:'Transferts', transfertsSub:"Demandes de changement d'emplacement", problemesTitle:'Les problèmes', problemesSub:'Signalements et suivi des pannes', rapportsTitle:'Rapports', rapportsSub:'Résumé général et rapport des problèmes', parametresTitle:'Paramètres', parametresSub:'Configuration du projet',
    totalLines:'Total lignes', registeredLines:'Lignes réseau enregistrées', totalRouters:'Total routeurs', activeRouters:'Routeurs / lignes actifs', totalCharge:'Total charge', subscriptionsAmount:'Montant total abonnements', openProblems:'Problèmes ouverts', reportsToProcess:'Signalements à traiter',
    fiberOptic:'Fibre optique', internet:'Internet', openTransfers:'Transferts ouverts', resolvedProblems:'Problèmes résolus', latestLines:'Dernières lignes du réseau', latestLinesDesc:'Vue rapide sur les lignes principales importées depuis Excel.', viewAllLines:'Voir toutes les lignes', transferFiber:'Transférer la fibre', transferDesc:"Créez une demande quand un client change d'adresse ou de bureau.", autoOldAddress:"L'ancienne adresse est remplie automatiquement.", linesAttention:'Lignes à vérifier', linesAttentionDesc:'Seules les lignes marquées dans Excel apparaissent ici.', networkSummary:'Résumé réseau', fiberCharge:'Charge fibre', internetCharge:'Charge internet', globalState:'État global',
    routersList:'Liste des lignes / routeurs', routersDesc:'Admin peut voir détails, modifier et supprimer.', searchPlaceholder:'Rechercher...', add:'Ajouter', transferRequests:'Demandes de transfert', transferRequestsDesc:"Gestion des changements d'emplacement de la fibre.", newRequest:'Nouvelle demande', problems:'Les problèmes', problemsDesc:'Signalements avec priorité, détails, résolution et suppression.', reportProblem:'Signaler un problème', noOpenProblem:'Aucun problème ouvert', noOpenProblemDesc:'Ajoutez un signalement si une ligne rencontre un souci.',
    generalReport:'Rapport général', printReport:'Imprimer rapport', problemsReport:'Rapport des problèmes', noProblemToReport:'Aucun problème à rapporter', networkStable:'Le réseau est stable actuellement.',
    appearanceLanguage:'Apparence & langue', theme:'Thème', accentColor:'Couleur principale', language:'Langue', settingsSaved:"Les changements s'appliquent réellement et restent sauvegardés.", resetSettings:'Réinitialiser paramètres', adminAccount:'Compte admin', hosting:'Hébergement', storage:'Stockage', clearData:'Supprimer données ajoutées',
    professionalOptions:'Options professionnelles ajoutées', realTheme:'Thème réel', realThemeDesc:"Le mode dark/light change toute l'interface.", realLang:'Langue réelle', realLangDesc:'Menus, titres, tableaux, boutons et statuts changent.', savedPrefs:'Sauvegarde', savedPrefsDesc:'Les préférences restent après fermeture du site.', adminActions:'Actions admin', adminActionsDesc:'Détails, modification, suppression et rapports.',
    clientNumber:'N° Client', type:'Type', speed:'Débit', address:'Adresse', save:'Enregistrer', details:'Détails', newTransfer:'Nouvelle demande de transfert', clientLine:'Client / ligne', oldAddress:'Ancienne adresse', newAddress:'Nouvelle adresse', note:'Remarque', saveTransfer:'Enregistrer le transfert', problemType:'Type de problème', priority:'Priorité', description:'Description', saveProblem:'Enregistrer le problème',
    n:'N°', client:'Client', status:'Statut', actions:'Actions', active:'Actif', verify:'À vérifier', normal:'Normale', urgent:'Urgente', critical:'Critique', open:'Ouvert', resolved:'Résolu', waiting:'En attente', finished:'Terminé', stable:'Stable', watch:'À surveiller', view:'Détails', edit:'Modifier', delete:'Supprimer', finish:'Terminer', solve:'Résoudre', noData:'Aucune donnée pour le moment.', all:'Tous', allTypes:'Tous les types', allSpeeds:'Tous les débits', problemYellow:'Ligne marquée en jaune à vérifier', missingClient:'N° client vide à compléter', problemDescYellow:'Cette ligne est marquée en jaune dans le fichier Excel.', problemDescMissing:'Le N° Client est vide/manquant.', badLogin:'Nom utilisateur ou mot de passe incorrect.', confirmDelete:'Supprimer cet élément ?', confirmClear:'Supprimer les données ajoutées ?'
  },
  en: {},
  ar: {}
};
dict.en = {
  brandSubtitle:'Tiznit Commune', loginTitle:'Admin Login', loginSubtitle:'Access the fiber management dashboard.', username:'Username', password:'Password', loginButton:'Login', demoAccount:'Demo account',
  navDashboard:'Dashboard', navRouters:'Routers', navTransfers:'Transfers', navProblems:'Problems', navReports:'Reports', navSettings:'Settings',
  session:'Session', adminOnline:'Admin online', administrator:'Administrator', transferRequest:'Transfer request', logout:'Logout',
  dashboardTitle:'Dashboard', dashboardSub:'Practical tracking of fiber and internet lines', routeursTitle:'Routers', routeursSub:'Search, details, edit and delete', transfertsTitle:'Transfers', transfertsSub:'Fiber location change requests', problemesTitle:'Problems', problemesSub:'Issue reports and outage tracking', rapportsTitle:'Reports', rapportsSub:'General summary and problems report', parametresTitle:'Settings', parametresSub:'Project configuration',
  totalLines:'Total lines', registeredLines:'Registered network lines', totalRouters:'Total routers', activeRouters:'Active routers / lines', totalCharge:'Total charge', subscriptionsAmount:'Total subscription amount', openProblems:'Open problems', reportsToProcess:'Reports to process',
  fiberOptic:'Fiber optic', internet:'Internet', openTransfers:'Open transfers', resolvedProblems:'Resolved problems', latestLines:'Latest network lines', latestLinesDesc:'Quick view of the main lines imported from Excel.', viewAllLines:'View all lines', transferFiber:'Transfer fiber', transferDesc:'Create a request when a client changes address or office.', autoOldAddress:'The old address is filled automatically.', linesAttention:'Lines to verify', linesAttentionDesc:'Only lines marked in Excel appear here.', networkSummary:'Network summary', fiberCharge:'Fiber charge', internetCharge:'Internet charge', globalState:'Global state',
  routersList:'Lines / routers list', routersDesc:'Admin can view details, edit and delete.', searchPlaceholder:'Search...', add:'Add', transferRequests:'Transfer requests', transferRequestsDesc:'Manage fiber location changes.', newRequest:'New request', problems:'Problems', problemsDesc:'Reports with priority, details, resolution and deletion.', reportProblem:'Report a problem', noOpenProblem:'No open problem', noOpenProblemDesc:'Add a report if a line has an issue.',
  generalReport:'General report', printReport:'Print report', problemsReport:'Problems report', noProblemToReport:'No problem to report', networkStable:'The network is currently stable.',
  appearanceLanguage:'Appearance & language', theme:'Theme', accentColor:'Main color', language:'Language', settingsSaved:'Changes are applied for real and saved.', resetSettings:'Reset settings', adminAccount:'Admin account', hosting:'Hosting', storage:'Storage', clearData:'Delete added data',
  professionalOptions:'Professional options added', realTheme:'Real theme', realThemeDesc:'Dark/light mode changes the entire interface.', realLang:'Real language', realLangDesc:'Menus, titles, tables, buttons and statuses change.', savedPrefs:'Saved preferences', savedPrefsDesc:'Preferences remain after closing the site.', adminActions:'Admin actions', adminActionsDesc:'Details, edit, delete and reports.',
  clientNumber:'Client No.', type:'Type', speed:'Speed', address:'Address', save:'Save', details:'Details', newTransfer:'New transfer request', clientLine:'Client / line', oldAddress:'Old address', newAddress:'New address', note:'Note', saveTransfer:'Save transfer', problemType:'Problem type', priority:'Priority', description:'Description', saveProblem:'Save problem',
  n:'No.', client:'Client', status:'Status', actions:'Actions', active:'Active', verify:'To verify', normal:'Normal', urgent:'Urgent', critical:'Critical', open:'Open', resolved:'Resolved', waiting:'Waiting', finished:'Finished', stable:'Stable', watch:'Watch', view:'Details', edit:'Edit', delete:'Delete', finish:'Finish', solve:'Resolve', noData:'No data yet.', all:'All', allTypes:'All types', allSpeeds:'All speeds', problemYellow:'Yellow-marked line to verify', missingClient:'Missing client number', problemDescYellow:'This line is marked in yellow in the Excel file.', problemDescMissing:'The client number is empty/missing.', badLogin:'Invalid username or password.', confirmDelete:'Delete this item?', confirmClear:'Delete added data?'
};
dict.ar = {
  brandSubtitle:'جماعة تزنيت', loginTitle:'تسجيل دخول المدير', loginSubtitle:'ادخل إلى لوحة إدارة الألياف البصرية.', username:'اسم المستخدم', password:'كلمة المرور', loginButton:'دخول', demoAccount:'حساب تجريبي',
  navDashboard:'لوحة التحكم', navRouters:'الراوترات', navTransfers:'التحويلات', navProblems:'المشاكل', navReports:'التقارير', navSettings:'الإعدادات',
  session:'الجلسة', adminOnline:'المدير متصل', administrator:'مدير', transferRequest:'طلب تحويل', logout:'خروج',
  dashboardTitle:'لوحة التحكم', dashboardSub:'تتبع عملي لخطوط الألياف والإنترنت', routeursTitle:'الراوترات', routeursSub:'بحث، تفاصيل، تعديل وحذف', transfertsTitle:'التحويلات', transfertsSub:'طلبات تغيير مكان الألياف', problemesTitle:'المشاكل', problemesSub:'التبليغات وتتبع الأعطال', rapportsTitle:'التقارير', rapportsSub:'ملخص عام وتقرير المشاكل', parametresTitle:'الإعدادات', parametresSub:'إعدادات المشروع',
  totalLines:'مجموع الخطوط', registeredLines:'خطوط الشبكة المسجلة', totalRouters:'مجموع الراوترات', activeRouters:'راوترات / خطوط نشطة', totalCharge:'المبلغ الإجمالي', subscriptionsAmount:'مجموع مبالغ الاشتراكات', openProblems:'مشاكل مفتوحة', reportsToProcess:'تبليغات للمعالجة',
  fiberOptic:'الألياف البصرية', internet:'الإنترنت', openTransfers:'تحويلات مفتوحة', resolvedProblems:'مشاكل محلولة', latestLines:'آخر خطوط الشبكة', latestLinesDesc:'نظرة سريعة على الخطوط الرئيسية المستوردة من Excel.', viewAllLines:'عرض كل الخطوط', transferFiber:'تحويل الألياف', transferDesc:'أنشئ طلباً عندما يغير العميل العنوان أو المكتب.', autoOldAddress:'يتم ملء العنوان القديم تلقائياً.', linesAttention:'خطوط يجب التحقق منها', linesAttentionDesc:'تظهر هنا فقط الخطوط المحددة في Excel.', networkSummary:'ملخص الشبكة', fiberCharge:'مبلغ الألياف', internetCharge:'مبلغ الإنترنت', globalState:'الحالة العامة',
  routersList:'لائحة الخطوط / الراوترات', routersDesc:'يمكن للمدير رؤية التفاصيل والتعديل والحذف.', searchPlaceholder:'بحث...', add:'إضافة', transferRequests:'طلبات التحويل', transferRequestsDesc:'إدارة تغيير مكان الألياف.', newRequest:'طلب جديد', problems:'المشاكل', problemsDesc:'تبليغات بالأولوية والتفاصيل والحل والحذف.', reportProblem:'تبليغ عن مشكل', noOpenProblem:'لا توجد مشاكل مفتوحة', noOpenProblemDesc:'أضف تبليغاً إذا كان هناك مشكل في خط.',
  generalReport:'تقرير عام', printReport:'طباعة التقرير', problemsReport:'تقرير المشاكل', noProblemToReport:'لا يوجد مشكل للتقرير', networkStable:'الشبكة مستقرة حالياً.',
  appearanceLanguage:'المظهر واللغة', theme:'الوضع', accentColor:'اللون الرئيسي', language:'اللغة', settingsSaved:'التغييرات تطبق فعلياً ويتم حفظها.', resetSettings:'إرجاع الإعدادات', adminAccount:'حساب المدير', hosting:'الاستضافة', storage:'التخزين', clearData:'حذف البيانات المضافة',
  professionalOptions:'خيارات احترافية مضافة', realTheme:'وضع حقيقي', realThemeDesc:'الوضع الداكن/الفاتح يغير الواجهة كاملة.', realLang:'لغة حقيقية', realLangDesc:'القوائم، العناوين، الجداول، الأزرار والحالات تتغير.', savedPrefs:'حفظ الإعدادات', savedPrefsDesc:'تبقى الإعدادات بعد إغلاق الموقع.', adminActions:'إجراءات المدير', adminActionsDesc:'تفاصيل، تعديل، حذف وتقارير.',
  clientNumber:'رقم العميل', type:'النوع', speed:'الصبيب', address:'العنوان', save:'حفظ', details:'تفاصيل', newTransfer:'طلب تحويل جديد', clientLine:'العميل / الخط', oldAddress:'العنوان القديم', newAddress:'العنوان الجديد', note:'ملاحظة', saveTransfer:'حفظ التحويل', problemType:'نوع المشكل', priority:'الأولوية', description:'الوصف', saveProblem:'حفظ المشكل',
  n:'رقم', client:'العميل', status:'الحالة', actions:'الإجراءات', active:'نشط', verify:'للتحقق', normal:'عادية', urgent:'مستعجلة', critical:'حرجة', open:'مفتوح', resolved:'محلول', waiting:'قيد الانتظار', finished:'منتهي', stable:'مستقر', watch:'للمراقبة', view:'تفاصيل', edit:'تعديل', delete:'حذف', finish:'إنهاء', solve:'حل', noData:'لا توجد بيانات حالياً.', all:'الكل', allTypes:'كل الأنواع', allSpeeds:'كل الصبيب', problemYellow:'خط محدد بالأصفر يجب التحقق منه', missingClient:'رقم العميل ناقص', problemDescYellow:'هذا الخط محدد بالأصفر في ملف Excel.', problemDescMissing:'رقم العميل فارغ/ناقص.', badLogin:'اسم المستخدم أو كلمة المرور غير صحيحة.', confirmDelete:'حذف هذا العنصر؟', confirmClear:'حذف البيانات المضافة؟'
};

let lines = JSON.parse(localStorage.getItem('proLines') || 'null') || [...data.lines];
let transfers = JSON.parse(localStorage.getItem('proTransfers') || '[]');
let problems = JSON.parse(localStorage.getItem('proProblems') || 'null');
if (!problems) {
  problems = data.lines.filter(l => l.problem).map(l => ({
    client: l.client === '-' ? dict.fr.missingClient : l.client,
    type: l.client === '-' ? dict.fr.missingClient : dict.fr.problemYellow,
    priority: 'Urgente',
    description: l.client === '-' ? `${dict.fr.problemDescMissing} ${l.adresse}` : `${dict.fr.problemDescYellow} ${l.adresse}`,
    status: 'Ouvert',
    date: 'Auto'
  }));
  save();
}

const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));
let lang = localStorage.getItem('proLang') || 'fr';
let theme = localStorage.getItem('proTheme') || 'light';
let accent = localStorage.getItem('proAccent') || 'blue';
let currentPage = 'dashboard';

function t(k){ return dict[lang][k] || dict.fr[k] || k; }
function money(n){ return `${Number(n).toLocaleString(lang === 'ar' ? 'ar-MA' : 'fr-FR')} DH`; }
function save(){
  localStorage.setItem('proLines', JSON.stringify(lines));
  localStorage.setItem('proTransfers', JSON.stringify(transfers));
  localStorage.setItem('proProblems', JSON.stringify(problems));
}
function badge(key, cls='soft'){ return `<span class="badge ${cls}">${t(key)}</span>`; }
function translatedStatus(status){
  const map = {'Ouvert':'open','Résolu':'resolved','En attente':'waiting','Terminé':'finished','Actif':'active'};
  return t(map[status] || status);
}
function table(id, headers, rows){
  $(id).innerHTML = `<thead><tr>${headers.map(h=>`<th>${t(h)}</th>`).join('')}</tr></thead><tbody>${rows.length ? rows.join('') : `<tr><td colspan="${headers.length}" style="text-align:center;padding:28px;color:var(--muted)">${t('noData')}</td></tr>`}</tbody>`;
}
function openProblemCount(){ return problems.filter(p => p.status !== 'Résolu').length; }
function openTransferCount(){ return transfers.filter(x => x.status !== 'Terminé').length; }
function lineIsProblem(l){ return l.problem || l.client === '7.2784793.00.00.100061' || l.client === '-'; }

function applyLanguage(){
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  $$('[data-i18n]').forEach(el => el.textContent = t(el.dataset.i18n));
  $$('[data-i18n-placeholder]').forEach(el => el.placeholder = t(el.dataset.i18nPlaceholder));
  $('#langSelect') && ($('#langSelect').value = lang);
  updatePageTitle();
  fillSelects();
  renderAll();
}
function applyTheme(){
  document.body.dataset.theme = theme;
  document.body.dataset.accent = accent;
  $('#themeSelect') && ($('#themeSelect').value = theme);
  $('#accentSelect') && ($('#accentSelect').value = accent);
}
function updatePageTitle(){
  const keys = {
    dashboard:['dashboardTitle','dashboardSub'], routeurs:['routeursTitle','routeursSub'], transferts:['transfertsTitle','transfertsSub'],
    problemes:['problemesTitle','problemesSub'], rapports:['rapportsTitle','rapportsSub'], parametres:['parametresTitle','parametresSub']
  }[currentPage];
  $('#pageTitle').textContent = t(keys[0]);
  $('#pageSubtitle').textContent = t(keys[1]);
}

function renderDashboard(){
  $('#totalLinesValue').textContent = lines.length;
  $('#totalRoutersValue').textContent = lines.length;
  $('#totalChargeValue').textContent = money(data.fiberCharge + data.internetCharge).replace(' DH','');
  $('#problemCountValue').textContent = openProblemCount();
  $('#fiberCountValue').textContent = lines.filter(l=>l.type==='Fibre').length;
  $('#internetCountValue').textContent = lines.filter(l=>l.type==='Internet').length;
  $('#transferCountValue').textContent = openTransferCount();
  $('#resolvedCountValue').textContent = problems.filter(p=>p.status==='Résolu').length;
  $('#summary100').textContent = lines.filter(l=>l.appel==='100').length;
  $('#summary50').textContent = lines.filter(l=>l.appel==='50').length;
  $('#fiberChargeValue').textContent = money(data.fiberCharge);
  $('#internetChargeValue').textContent = money(data.internetCharge);
  $('#globalStateValue').textContent = openProblemCount() ? t('watch') : t('stable');
  $('#globalStateValue').className = openProblemCount() ? 'bad-text' : 'ok-text';
  $('#notifCount').textContent = openProblemCount() + openTransferCount();
  const attention = lines.filter(lineIsProblem);
  $('#problemLineBadge').textContent = `${attention.length}`;

  table('#latestTable', ['n','clientNumber','type','speed','address','status'],
    lines.slice(0,6).map(l => `<tr><td>${l.num}</td><td><strong>${l.client}</strong></td><td>${badge(l.type, l.type==='Fibre'?'ok':l.type==='Internet'?'run':'soft')}</td><td>${l.appel} Mbps</td><td>${l.adresse}</td><td>${lineIsProblem(l)?badge('verify','critical'):badge('active','ok')}</td></tr>`)
  );
  table('#attentionTable', ['n','clientNumber','address','problemType','status'],
    attention.map(l => `<tr><td>${l.num}</td><td><strong>${l.client === '-' ? t('missingClient') : l.client}</strong></td><td>${l.adresse}</td><td>${l.client === '-' ? t('missingClient') : t('problemYellow')}</td><td>${badge('verify','critical')}</td></tr>`)
  );
}

function renderRouters(){
  const q = $('#routerSearch').value.toLowerCase();
  const type = $('#typeFilter').value;
  const speed = $('#speedFilter').value;
  const rows = lines.filter(l => {
    return (`${l.client} ${l.adresse} ${l.type} ${l.appel}`.toLowerCase().includes(q)) &&
      (type === 'all' || l.type === type) && (speed === 'all' || l.appel === speed);
  }).map((l) => {
    const i = lines.indexOf(l);
    return `<tr><td>${l.num}</td><td><strong>${l.client}</strong></td><td>${badge(l.type,l.type==='Fibre'?'ok':l.type==='Internet'?'run':'soft')}</td><td>${l.appel} Mbps</td><td>${l.adresse}</td><td>${lineIsProblem(l)?badge('verify','critical'):badge('active','ok')}</td><td>
      <button class="table-action details" data-router-details="${i}">${t('view')}</button>
      <button class="table-action edit" data-router-edit="${i}">${t('edit')}</button>
      <button class="table-action delete" data-router-delete="${i}">${t('delete')}</button>
    </td></tr>`;
  });
  table('#routerTable', ['n','clientNumber','type','speed','address','status','actions'], rows);
}
function renderTransfers(){
  const rows = transfers.map((x,i)=>`<tr><td>${i+1}</td><td><strong>${x.client}</strong></td><td>${x.oldAddress}</td><td>${x.newAddress}</td><td>${translatedStatus(x.status)}</td><td>${x.date}</td><td>
    <button class="table-action details" data-transfer-details="${i}">${t('view')}</button>
    ${x.status !== 'Terminé' ? `<button class="table-action done" data-transfer-done="${i}">${t('finish')}</button>` : ''}
    <button class="table-action delete" data-transfer-delete="${i}">${t('delete')}</button>
  </td></tr>`);
  table('#transferTable', ['n','client','oldAddress','newAddress','status','date','actions'], rows);
}
function renderProblems(){
  const has = problems.length > 0;
  $('#noProblems').style.display = has ? 'none' : 'block';
  $('#problemTable').style.display = has ? 'table' : 'none';
  table('#problemTable', ['n','client','problemType','priority','description','status','date','actions'],
    problems.map((p,i)=>`<tr><td>${i+1}</td><td><strong>${p.client}</strong></td><td>${translateProblemText(p.type)}</td><td>${translatePriority(p.priority)}</td><td>${translateProblemText(p.description)}</td><td>${translatedStatus(p.status)}</td><td>${p.date}</td><td>
      <button class="table-action details" data-problem-details="${i}">${t('view')}</button>
      ${p.status !== 'Résolu' ? `<button class="table-action done" data-problem-done="${i}">${t('solve')}</button>` : ''}
      <button class="table-action delete" data-problem-delete="${i}">${t('delete')}</button>
    </td></tr>`)
  );
}
function renderReports(){
  $('#reportRouters').textContent = lines.length;
  $('#reportCharge').textContent = money(data.fiberCharge + data.internetCharge);
  $('#reportProblems').textContent = openProblemCount();
  $('#reportTransfers').textContent = openTransferCount();
  const has = problems.length > 0;
  $('#noReportProblems').style.display = has ? 'none' : 'block';
  $('#reportProblemTable').style.display = has ? 'table' : 'none';
  table('#reportProblemTable', ['n','client','problemType','priority','status','date'],
    problems.map((p,i)=>`<tr><td>${i+1}</td><td><strong>${p.client}</strong></td><td>${translateProblemText(p.type)}</td><td>${translatePriority(p.priority)}</td><td>${translatedStatus(p.status)}</td><td>${p.date}</td></tr>`)
  );
}
function translatePriority(p){ return p==='Critique'?t('critical'):p==='Urgente'?t('urgent'):t('normal'); }
function translateProblemText(text=''){
  return String(text)
    .replace('Ligne marquée en jaune à vérifier', t('problemYellow'))
    .replace('N° client vide à compléter', t('missingClient'))
    .replace('Cette ligne est marquée en jaune dans le fichier Excel.', t('problemDescYellow'))
    .replace('Le N° Client est vide/manquant.', t('problemDescMissing'));
}
function renderAll(){ renderDashboard(); renderRouters(); renderTransfers(); renderProblems(); renderReports(); }

function fillSelects(){
  $('#typeFilter').innerHTML = `<option value="all">${t('allTypes')}</option><option value="Fibre">Fibre</option><option value="Internet">Internet</option><option value="Service">Service</option>`;
  $('#speedFilter').innerHTML = `<option value="all">${t('allSpeeds')}</option><option value="100">100 Mbps</option><option value="50">50 Mbps</option>`;
  $('#routerTypeInput').innerHTML = `<option>Fibre</option><option>Internet</option><option>Service</option>`;
  $('#routerSpeedInput').innerHTML = `<option value="100">100 Mbps</option><option value="50">50 Mbps</option>`;
  $('#problemTypeSelect').innerHTML = `<option value="Pas de connexion">${lang==='ar'?'انقطاع الاتصال':lang==='en'?'No connection':'Pas de connexion'}</option><option value="Débit faible">${lang==='ar'?'صبيب ضعيف':lang==='en'?'Low speed':'Débit faible'}</option><option value="Routeur non fonctionnel">${lang==='ar'?'الراوتر لا يعمل':lang==='en'?'Router not working':'Routeur non fonctionnel'}</option><option value="Coupure fibre">${lang==='ar'?'انقطاع الألياف':lang==='en'?'Fiber cut':'Coupure fibre'}</option>`;
  $('#prioritySelect').innerHTML = `<option value="Normale">${t('normal')}</option><option value="Urgente">${t('urgent')}</option><option value="Critique">${t('critical')}</option>`;
  const opts = lines.map(l=>`<option value="${l.client}" data-address="${l.adresse}">${l.client} — ${l.adresse}</option>`).join('');
  $('#transferClient').innerHTML = opts; $('#problemClient').innerHTML = opts; setOldAddress();
}
function setOldAddress(){ const o = $('#transferClient').selectedOptions[0]; if(o) $('#oldAddress').value = o.dataset.address || ''; }

function switchPage(page){
  currentPage = page;
  $$('.page').forEach(p=>p.classList.remove('active'));
  $('#'+page).classList.add('active');
  $$('.nav-link').forEach(b=>b.classList.toggle('active', b.dataset.page === page));
  $('#sidebar').classList.remove('open');
  updatePageTitle(); renderAll();
}
function openModal(id){ $(id).classList.add('show'); }
function closeModals(){ $$('.modal').forEach(m=>m.classList.remove('show')); }
function detail(items){
  $('#detailContent').innerHTML = items.map(([k,v])=>`<div><strong>${t(k)}</strong>${v || '-'}</div>`).join('');
  openModal('#detailModal');
}

$('#loginForm').addEventListener('submit', e => {
  e.preventDefault();
  if($('#usernameInput').value.trim()==='admin' && $('#passwordInput').value.trim()==='admin123'){
    sessionStorage.setItem('logged','yes'); checkLogin();
  } else $('#loginError').textContent = t('badLogin');
});
function checkLogin(){
  const ok = sessionStorage.getItem('logged') === 'yes';
  $('#loginScreen').classList.toggle('hide', ok);
  $('#appShell').classList.toggle('show', ok);
}
function logout(){ sessionStorage.removeItem('logged'); checkLogin(); }
$('#logoutBtn').onclick = logout; $('#logoutMini').onclick = logout;

$$('.nav-link').forEach(b=>b.onclick=()=>switchPage(b.dataset.page));
$$('[data-page-link]').forEach(b=>b.onclick=()=>switchPage(b.dataset.pageLink));
$('#menuBtn').onclick=()=>$('#sidebar').classList.toggle('open');
$('#quickTransfer').onclick=()=>openModal('#transferModal'); $('#openTransfer').onclick=()=>openModal('#transferModal'); $('#newTransferBtn').onclick=()=>openModal('#transferModal');
$('#addProblemBtn').onclick=()=>openModal('#problemModal');
$('#routerSearch').oninput=renderRouters; $('#typeFilter').onchange=renderRouters; $('#speedFilter').onchange=renderRouters;
$('#transferClient').onchange=setOldAddress;
$$('.close-modal').forEach(b=>b.onclick=closeModals); $$('.modal').forEach(m=>m.onclick=e=>{if(e.target===m)closeModals()});
$('#themeSelect').onchange=e=>{theme=e.target.value; localStorage.setItem('proTheme',theme); applyTheme();};
$('#accentSelect').onchange=e=>{accent=e.target.value; localStorage.setItem('proAccent',accent); applyTheme();};
$('#langSelect').onchange=e=>{lang=e.target.value; localStorage.setItem('proLang',lang); applyLanguage();};
$('#resetSettingsBtn').onclick=()=>{lang='fr';theme='light';accent='blue';localStorage.setItem('proLang',lang);localStorage.setItem('proTheme',theme);localStorage.setItem('proAccent',accent);applyTheme();applyLanguage();};
$('#printReport').onclick=()=>window.print();
$('#clearDataBtn').onclick=()=>{if(confirm(t('confirmClear'))){localStorage.removeItem('proLines');localStorage.removeItem('proTransfers');localStorage.removeItem('proProblems');location.reload();}};

$('#addRouterBtn').onclick=()=>{ $('#routerEditIndex').value=''; $('#routerModalTitle').textContent=t('add'); $('#routerForm').reset(); openModal('#routerModal'); };
$('#routerForm').onsubmit=e=>{
  e.preventDefault(); const fd=new FormData(e.target); const i=$('#routerEditIndex').value;
  const item={num:i===''?Math.max(...lines.map(l=>+l.num))+1:lines[+i].num,client:fd.get('client'),type:fd.get('type'),appel:fd.get('appel'),adresse:fd.get('adresse')};
  if(i==='') lines.push(item); else lines[+i]=item; save(); fillSelects(); closeModals(); renderAll();
};
$('#transferForm').onsubmit=e=>{
  e.preventDefault(); const fd=new FormData(e.target); transfers.unshift({client:fd.get('client'),oldAddress:fd.get('oldAddress'),newAddress:fd.get('newAddress'),note:fd.get('note'),status:'En attente',date:new Date().toLocaleDateString('fr-FR')}); save(); e.target.reset(); setOldAddress(); closeModals(); switchPage('transferts');
};
$('#problemForm').onsubmit=e=>{
  e.preventDefault(); const fd=new FormData(e.target); problems.unshift({client:fd.get('client'),type:fd.get('type'),priority:fd.get('priority'),description:fd.get('description'),status:'Ouvert',date:new Date().toLocaleDateString('fr-FR')}); save(); e.target.reset(); closeModals(); switchPage('problemes');
};

document.addEventListener('click', e=>{
  const rD=e.target.closest('[data-router-details]'), rE=e.target.closest('[data-router-edit]'), rX=e.target.closest('[data-router-delete]');
  const tD=e.target.closest('[data-transfer-details]'), tF=e.target.closest('[data-transfer-done]'), tX=e.target.closest('[data-transfer-delete]');
  const pD=e.target.closest('[data-problem-details]'), pS=e.target.closest('[data-problem-done]'), pX=e.target.closest('[data-problem-delete]');
  if(rD){const l=lines[+rD.dataset.routerDetails]; detail([['n',l.num],['clientNumber',l.client],['type',l.type],['speed',l.appel+' Mbps'],['address',l.adresse],['status',lineIsProblem(l)?t('verify'):t('active')]]);}
  if(rE){const i=+rE.dataset.routerEdit,l=lines[i]; $('#routerEditIndex').value=i; $('#routerModalTitle').textContent=t('edit'); $('#routerClientInput').value=l.client; $('#routerTypeInput').value=l.type; $('#routerSpeedInput').value=l.appel; $('#routerAddressInput').value=l.adresse; openModal('#routerModal');}
  if(rX && confirm(t('confirmDelete'))){lines.splice(+rX.dataset.routerDelete,1); save(); fillSelects(); renderAll();}
  if(tD){const x=transfers[+tD.dataset.transferDetails]; detail([['client',x.client],['oldAddress',x.oldAddress],['newAddress',x.newAddress],['note',x.note],['status',translatedStatus(x.status)],['date',x.date]]);}
  if(tF){transfers[+tF.dataset.transferDone].status='Terminé'; save(); renderAll();}
  if(tX && confirm(t('confirmDelete'))){transfers.splice(+tX.dataset.transferDelete,1); save(); renderAll();}
  if(pD){const p=problems[+pD.dataset.problemDetails]; detail([['client',p.client],['problemType',translateProblemText(p.type)],['priority',translatePriority(p.priority)],['description',translateProblemText(p.description)],['status',translatedStatus(p.status)],['date',p.date]]);}
  if(pS){problems[+pS.dataset.problemDone].status='Résolu'; save(); renderAll();}
  if(pX && confirm(t('confirmDelete'))){problems.splice(+pX.dataset.problemDelete,1); save(); renderAll();}
});

applyTheme(); checkLogin(); fillSelects(); applyLanguage();
