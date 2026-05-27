// ╔══════════════════════════════════════════════════════════════╗
// ║  FIREBASE CONFIG                                           ║
// ╚══════════════════════════════════════════════════════════════╝
const firebaseConfig = {
  apiKey: "AIzaSyCQ9RamZQVUeiGxZjB_wgCfUEqKGGP2wkk",
  authDomain: "ironman-rafael.firebaseapp.com",
  projectId: "ironman-rafael",
  storageBucket: "ironman-rafael.firebasestorage.app",
  messagingSenderId: "33909938476",
  appId: "1:33909938476:web:b5d0401464438dd47f3489"
};

// ═══ Plan ═══
const PLAN_START = new Date(2026, 4, 27);

const PHASES = [
  {
    id: 1, name: 'Base', subtitle: 'Meses 1–3', startMonth: 0, endMonth: 3, color: '#4facfe',
    schedule: {
      1: { name: 'T25 Cardio', duration: '25 min', type: 't25', icon: '\u{1F3CB}\u{FE0F}' },
      2: { name: 'T25 Speed 1.0', duration: '25 min', type: 't25', icon: '\u{26A1}' },
      3: { name: 'Natação — Técnica', duration: '45–60 min', type: 'swim', icon: '\u{1F3CA}' },
      4: { name: 'T25 Total Body Circuit', duration: '25 min', type: 't25', icon: '\u{1F4AA}' },
      5: { name: 'Natação — Resistência', duration: '45–60 min', type: 'swim', icon: '\u{1F30A}' },
      6: { name: 'T25 Ab Intervals + Lower Focus', duration: '50 min', type: 't25', icon: '\u{1F525}' },
      0: { name: 'Descanso + Stretch', duration: null, type: 'rest', icon: '\u{1F634}' }
    },
    metas: ['Completar T25 Alpha', 'Nadar 1 km sem parar', 'Streak de 30 dias']
  },
  {
    id: 2, name: 'Expansão', subtitle: 'Meses 4–6', startMonth: 3, endMonth: 6, color: '#00e676',
    schedule: {
      1: { name: 'Corrida 20–30 min', duration: '20–30 min', type: 'run', icon: '\u{1F3C3}' },
      2: { name: 'Natação 1,5 km', duration: null, type: 'swim', icon: '\u{1F3CA}' },
      3: { name: 'Spinning 45 min', duration: '45 min', type: 'bike', icon: '\u{1F6B4}' },
      4: { name: 'Corrida intervalado', duration: null, type: 'run', icon: '\u{26A1}' },
      5: { name: 'Natação técnica', duration: null, type: 'swim', icon: '\u{1F3CA}' },
      6: { name: 'Spinning 60 min', duration: '60 min', type: 'bike', icon: '\u{1F6B4}' },
      0: { name: 'Descanso', duration: null, type: 'rest', icon: '\u{1F634}' }
    },
    metas: ['Correr 5 km', 'Nadar 2 km', '45 min de bike sem parar', 'Comprar bike usada']
  },
  {
    id: 3, name: 'Preparação 70.3', subtitle: 'Meses 7–10', startMonth: 6, endMonth: 10, color: '#ff9800',
    schedule: {
      1: { name: 'Corrida 40 min', duration: '40 min', type: 'run', icon: '\u{1F3C3}' },
      2: { name: 'Natação 2,5 km', duration: null, type: 'swim', icon: '\u{1F3CA}' },
      3: { name: 'Bike 1h30', duration: '1h30', type: 'bike', icon: '\u{1F6B4}' },
      4: { name: 'Brick — Natação + corrida', duration: null, type: 'brick', icon: '\u{1F504}', subs: ['swim', 'run'] },
      5: { name: 'Descanso', duration: null, type: 'rest', icon: '\u{1F634}' },
      6: { name: 'Brick — Bike + corrida', duration: null, type: 'brick', icon: '\u{1F504}', subs: ['bike', 'run'] },
      0: { name: 'Long run 60–75 min', duration: '60–75 min', type: 'run', icon: '\u{1F3C3}' }
    },
    metas: ['Nadar 2 km', 'Bike 60 km', 'Correr 15 km', 'Sprint triathlon']
  },
  {
    id: 4, name: 'Iron Man 70.3', subtitle: 'Meses 10–12', startMonth: 10, endMonth: 12, color: '#e040fb',
    schedule: {
      1: { name: 'Natação 1,9 km', duration: null, type: 'swim', icon: '\u{1F3CA}' },
      2: { name: 'Bike 60–90 km', duration: null, type: 'bike', icon: '\u{1F6B4}' },
      3: { name: 'Corrida 45 min', duration: '45 min', type: 'run', icon: '\u{1F3C3}' },
      4: { name: 'Brick — Natação + corrida', duration: null, type: 'brick', icon: '\u{1F504}', subs: ['swim', 'run'] },
      5: { name: 'Descanso', duration: null, type: 'rest', icon: '\u{1F634}' },
      6: { name: 'Brick — Bike + corrida', duration: null, type: 'brick', icon: '\u{1F504}', subs: ['bike', 'run'] },
      0: { name: 'Long run 90 min', duration: '90 min', type: 'run', icon: '\u{1F3C3}' }
    },
    metas: ['Nadar 1,9 km', 'Bike 90 km', 'Correr 21 km'],
    targetDistances: { swim: 1.9, bike: 90, run: 21 }
  },
  {
    id: 5, name: 'Full Iron Man', subtitle: 'Meses 13–18', startMonth: 12, endMonth: 18, color: '#ffd700',
    schedule: {
      1: { name: 'Natação 3 km', duration: null, type: 'swim', icon: '\u{1F3CA}' },
      2: { name: 'Bike 100 km', duration: null, type: 'bike', icon: '\u{1F6B4}' },
      3: { name: 'Corrida 60 min', duration: '60 min', type: 'run', icon: '\u{1F3C3}' },
      4: { name: 'Brick — Natação + corrida', duration: null, type: 'brick', icon: '\u{1F504}', subs: ['swim', 'run'] },
      5: { name: 'Descanso', duration: null, type: 'rest', icon: '\u{1F634}' },
      6: { name: 'Brick — Bike + corrida longa', duration: null, type: 'brick', icon: '\u{1F504}', subs: ['bike', 'run'] },
      0: { name: 'Long run 2h', duration: '2h', type: 'run', icon: '\u{1F3C3}' }
    },
    metas: ['Nadar 3,86 km', 'Bike 180 km', 'Correr 42 km'],
    targetDistances: { swim: 3.86, bike: 180, run: 42 }
  }
];

const ACHIEVEMENTS = [
  { id: 'primeira-largada', name: 'Primeira Largada', desc: 'Correr uma prova de 5 km', phase: 1, icon: '\u{1F3C1}' },
  { id: '30-dias', name: '30 Dias Sem Parar', desc: 'Streak de 30 dias consecutivos', phase: 1, icon: '\u{1F525}' },
  { id: 'dois-digitos', name: 'Dois Dígitos', desc: 'Completar uma corrida de 10 km', phase: 2, icon: '\u{1F51F}' },
  { id: 'primeiro-km-bike', name: 'Primeiro Km de Bike', desc: '45 min de spinning sem parar', phase: 2, icon: '\u{1F6B4}' },
  { id: 'triatleta', name: 'Triatleta', desc: 'Completar sprint triathlon', phase: 3, icon: '\u{1F3C5}' },
  { id: 'meia-maratona', name: 'Meia Maratona', desc: 'Completar 21 km correndo', phase: 3, icon: '\u{1F396}\u{FE0F}' },
  { id: '70-3', name: '70.3', desc: 'Cruzar a linha de chegada do IM 70.3', phase: 4, icon: '\u{1F947}' },
  { id: 'iron-man', name: 'Iron Man', desc: 'Cruzar a linha de chegada do Full Iron Man', phase: 5, icon: '\u{1F3C6}' }
];

const RACES = [
  { id: 'circuito-inverno-2026', name: 'Circuito das Estações — Inverno SP', date: '2026-06-28', confirmed: true, distances: '5 km, 10 km ou 15 km', location: 'Praça Charles Miller, Pacaembu — SP', note: 'Opcional/bônus — cedo no plano', link: 'https://circuitodasestacoes.com.br', phase: 1 },
  { id: 'circuito-primavera-2026', name: 'Circuito das Estações — Primavera SP', date: '2026-09-01', confirmed: false, distances: '5 km', location: 'Praça Charles Miller, Pacaembu — SP', link: 'https://circuitodasestacoes.com.br', phase: 1, achievementId: 'primeira-largada' },
  { id: 'circuito-verao-2026', name: 'Circuito das Estações — Verão SP', date: '2026-12-01', confirmed: false, distances: '10 km', location: 'São Paulo', link: 'https://circuitodasestacoes.com.br', phase: 2, achievementId: 'dois-digitos' },
  { id: 'meia-sp-2027', name: 'Meia Maratona Internacional de SP', date: '2027-04-15', confirmed: false, distances: '21 km', location: 'SP — Ibirapuera → Pacaembu', link: 'https://meiamaratonasaopaulo.com.br', phase: 3, achievementId: 'meia-maratona' },
  { id: 'ironman-70-3', name: 'Iron Man 70.3', date: '2027-10-15', confirmed: false, distances: '1,9 km + 90 km + 21,1 km', location: 'Maceió ou Florianópolis', link: 'https://ironman.com/im703-brazil', phase: 4, achievementId: '70-3' },
  { id: 'ironman-full', name: 'Full Iron Man Brasil', date: '2027-12-01', confirmed: false, distances: '3,86 km + 180 km + 42,2 km', location: 'Brasil', link: 'https://ironman.com/triathlon/ironman-brazil', phase: 5, achievementId: 'iron-man' }
];

const DAY_NAMES = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const MONTH_NAMES = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
const TYPE_ICONS = { swim: '\u{1F3CA}', run: '\u{1F3C3}', bike: '\u{1F6B4}' };
const TYPE_LABELS = { swim: 'Natação', run: 'Corrida', bike: 'Bike' };
const TYPE_UNITS = { swim: 'metros', run: 'km', bike: 'km' };

// ═══ State ═══
let db, auth, currentUser;
let cachedWorkouts = {};
let cachedAchievements = {};
let cachedRaces = {};
let isSignUp = false;
let undoTimeout = null;
let currentTab = 'dashboard';
let wmType = null;
let wmSubs = null;
let pendingAchieveId = null;
let pendingRaceId = null;

// ═══ Init ═══
document.addEventListener('DOMContentLoaded', () => {
  firebase.initializeApp(firebaseConfig);
  db = firebase.firestore();
  auth = firebase.auth();
  db.enablePersistence({ synchronizeTabs: true }).catch(() => {});

  auth.onAuthStateChanged(user => {
    currentUser = user;
    document.getElementById('loading-screen').classList.add('hidden');
    if (user) {
      document.getElementById('login-screen').classList.add('hidden');
      document.getElementById('app').classList.remove('hidden');
      loadDashboard();
    } else {
      document.getElementById('app').classList.add('hidden');
      document.getElementById('login-screen').classList.remove('hidden');
    }
  });

  setupEvents();
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(() => {});
});

function setupEvents() {
  document.getElementById('login-form').addEventListener('submit', handleAuth);
  document.getElementById('toggle-auth').addEventListener('click', e => {
    e.preventDefault();
    isSignUp = !isSignUp;
    document.getElementById('auth-btn').textContent = isSignUp ? 'Criar conta' : 'Entrar';
    document.getElementById('toggle-auth').textContent = isSignUp ? 'Já tenho conta' : 'Criar conta';
    document.getElementById('login-error').textContent = '';
  });
  document.getElementById('logout-btn').addEventListener('click', () => auth.signOut());
  document.getElementById('complete-btn').addEventListener('click', handleComplete);
  document.getElementById('fab').addEventListener('click', handleComplete);
  document.getElementById('undo-btn').addEventListener('click', handleUndo);

  document.querySelectorAll('.nav-tab').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  document.getElementById('wm-save').addEventListener('click', handleWmSave);
  document.getElementById('wm-skip').addEventListener('click', () => { hideWmModal(); completeWorkout(new Date(), {}); });
  document.getElementById('wm-cancel').addEventListener('click', hideWmModal);

  document.getElementById('achieve-confirm').addEventListener('click', confirmAchievement);
  document.getElementById('achieve-cancel').addEventListener('click', () => document.getElementById('achieve-modal').classList.add('hidden'));

  document.getElementById('race-save').addEventListener('click', confirmRace);
  document.getElementById('race-cancel').addEventListener('click', () => document.getElementById('race-modal').classList.add('hidden'));

  document.getElementById('achievements-list').addEventListener('click', e => {
    const card = e.target.closest('.achieve-card.available');
    if (card) showAchieveModal(card.dataset.id);
  });

  document.getElementById('races-list').addEventListener('click', e => {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    const card = btn.closest('.race-card');
    const id = card.dataset.id;
    if (btn.dataset.action === 'complete') showRaceModal(id);
    else if (btn.dataset.action === 'notify') toggleNotify(id);
  });

  document.querySelectorAll('.next-card').forEach(c => {
    c.addEventListener('click', () => switchTab(c.dataset.tab));
  });
}

// ═══ Auth ═══
async function handleAuth(e) {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const errEl = document.getElementById('login-error');
  const btn = document.getElementById('auth-btn');
  errEl.textContent = '';
  btn.disabled = true;
  btn.textContent = 'Aguarde...';
  try {
    if (isSignUp) await auth.createUserWithEmailAndPassword(email, password);
    else await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    const msgs = { 'auth/wrong-password':'Senha incorreta','auth/user-not-found':'Usuário não encontrado','auth/invalid-email':'Email inválido','auth/email-already-in-use':'Email já cadastrado','auth/weak-password':'Senha fraca (mín. 6)','auth/invalid-credential':'Email ou senha incorretos' };
    errEl.textContent = msgs[err.code] || 'Erro ao autenticar';
    btn.disabled = false;
    btn.textContent = isSignUp ? 'Criar conta' : 'Entrar';
  }
}

// ═══ Navigation ═══
function switchTab(tab) {
  currentTab = tab;
  document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.nav-tab').forEach(el => el.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.remove('hidden');
  document.querySelector('[data-tab="' + tab + '"]').classList.add('active');
  if (tab === 'phases') renderPhases();
  else if (tab === 'achievements') renderAchievements();
  else if (tab === 'races') renderRacesScreen();
}

// ═══ Data ═══
async function loadDashboard() {
  const uid = currentUser.uid;
  const [workSnap, achieveSnap, raceSnap] = await Promise.all([
    db.collection('users').doc(uid).collection('workouts').where('date', '>=', fmtDate((() => { const d = new Date(); d.setDate(d.getDate() - 90); return d; })())).get(),
    db.collection('users').doc(uid).collection('achievements').get(),
    db.collection('users').doc(uid).collection('races').get()
  ]);
  cachedWorkouts = {};
  workSnap.forEach(doc => { cachedWorkouts[doc.id] = doc.data(); });
  cachedAchievements = {};
  achieveSnap.forEach(doc => { cachedAchievements[doc.id] = doc.data(); });
  cachedRaces = {};
  raceSnap.forEach(doc => { cachedRaces[doc.id] = doc.data(); });
  renderAll();
}

// ═══ Phase Helpers ═══
function phaseStartDate(p) { const d = new Date(PLAN_START); d.setMonth(d.getMonth() + p.startMonth); return d; }
function phaseEndDate(p) { const d = new Date(PLAN_START); d.setMonth(d.getMonth() + p.endMonth); d.setDate(d.getDate() - 1); return d; }

function getCurrentPhase() {
  const now = new Date();
  for (const p of PHASES) {
    if (now >= phaseStartDate(p) && now <= phaseEndDate(p)) return p;
  }
  return now < PLAN_START ? PHASES[0] : PHASES[PHASES.length - 1];
}

function getPhaseForDate(date) {
  for (const p of PHASES) {
    if (date >= phaseStartDate(p) && date <= phaseEndDate(p)) return p;
  }
  return date < PLAN_START ? PHASES[0] : PHASES[PHASES.length - 1];
}

function getSchedule(date) {
  return getPhaseForDate(date).schedule[date.getDay()];
}

// ═══ Render All ═══
function renderAll() {
  renderToday();
  renderWeek();
  renderMonthSummary();
  renderStreak();
  renderNextCards();
  renderDistances();
}

// ═══ Today ═══
function renderToday() {
  const today = new Date();
  const sched = getSchedule(today);
  const dateStr = fmtDate(today);
  const workout = cachedWorkouts[dateStr];
  const done = workout && workout.completed;
  const phase = getCurrentPhase();

  document.getElementById('today-date').textContent = fmtDateDisplay(today);
  document.getElementById('today-phase').textContent = 'Fase ' + phase.id + ' — ' + phase.name;
  document.getElementById('today-phase').style.color = phase.color;
  document.getElementById('today-icon').textContent = sched.icon;
  document.getElementById('today-name').textContent = sched.name;

  const card = document.getElementById('today-card');
  card.className = 'today-card ' + sched.type + (done ? ' done' : '');

  const durEl = document.getElementById('today-duration');
  const restEl = document.getElementById('today-rest-msg');
  const btn = document.getElementById('complete-btn');
  const fab = document.getElementById('fab');
  const dataEl = document.getElementById('workout-data');

  durEl.textContent = sched.duration || '';
  restEl.classList.add('hidden');
  dataEl.classList.add('hidden');

  if (sched.type === 'rest') {
    btn.classList.add('hidden');
    fab.classList.add('hidden');
    restEl.classList.remove('hidden');
    durEl.textContent = '';
  } else if (done) {
    btn.classList.remove('hidden');
    btn.textContent = '✓ Concluído!';
    btn.className = 'btn-complete done-btn';
    fab.classList.add('hidden');
    showWorkoutData(workout, sched, dataEl);
  } else {
    btn.classList.remove('hidden');
    btn.textContent = 'CONCLUIR ✓';
    btn.className = 'btn-complete ' + sched.type + '-btn';
    fab.classList.remove('hidden');
    fab.className = 'fab ' + sched.type + '-fab';
  }
}

function showWorkoutData(w, sched, el) {
  const parts = [];
  if (w.activities) {
    w.activities.forEach(a => {
      const bits = [];
      if (a.distance) bits.push(a.type === 'swim' ? a.distance + 'm' : a.distance + ' km');
      if (a.time) bits.push(a.time + ' min');
      if (bits.length) parts.push(TYPE_ICONS[a.type] + ' ' + bits.join(' · '));
    });
  } else if (sched.type === 'swim') {
    if (w.swimDistance) parts.push(w.swimDistance + 'm');
    if (w.swimTime) parts.push(w.swimTime + ' min');
  } else if (w.distance || w.time) {
    if (w.distance) parts.push(w.distance + ' km');
    if (w.time) parts.push(w.time + ' min');
  }
  if (parts.length) {
    el.innerHTML = parts.join(w.activities ? '<br>' : ' · ');
    el.classList.remove('hidden');
  }
}

// ═══ Complete ═══
function handleComplete() {
  const today = new Date();
  const sched = getSchedule(today);
  if (sched.type === 'rest') return;
  const dateStr = fmtDate(today);
  if (cachedWorkouts[dateStr] && cachedWorkouts[dateStr].completed) return;

  if (['swim', 'run', 'bike', 'brick'].includes(sched.type)) {
    showWmModal(sched.type, sched.subs);
    return;
  }
  completeWorkout(today, {});
}

async function completeWorkout(date, extra) {
  const dateStr = fmtDate(date);
  const sched = getSchedule(date);
  const phase = getPhaseForDate(date);
  const data = {
    date: dateStr, completed: true, type: sched.type, name: sched.name,
    phase: phase.id, completedAt: firebase.firestore.FieldValue.serverTimestamp(),
    ...extra
  };
  cachedWorkouts[dateStr] = { ...data, completed: true };
  renderAll();
  animateCheckIn();
  showUndoToast(dateStr);
  await db.collection('users').doc(currentUser.uid).collection('workouts').doc(dateStr).set(data);
}

function animateCheckIn() {
  const btn = document.getElementById('complete-btn');
  btn.classList.add('animate-check');
  setTimeout(() => btn.classList.remove('animate-check'), 500);
}

// ═══ Workout Modal ═══
function showWmModal(type, subs) {
  wmType = type;
  wmSubs = subs;
  const modal = document.getElementById('workout-modal');
  const sec1 = document.getElementById('wm-section1');
  const sec2 = document.getElementById('wm-section2');

  if (type === 'brick' && subs) {
    document.getElementById('wm-title').textContent = '\u{1F504} Log de Brick';
    sec1.classList.remove('hidden');
    sec2.classList.remove('hidden');
    document.getElementById('wm-label1').textContent = TYPE_ICONS[subs[0]] + ' ' + TYPE_LABELS[subs[0]];
    document.getElementById('wm-dlabel1').textContent = 'Distância (' + TYPE_UNITS[subs[0]] + ')';
    document.getElementById('wm-label2').textContent = TYPE_ICONS[subs[1]] + ' ' + TYPE_LABELS[subs[1]];
    document.getElementById('wm-dlabel2').textContent = 'Distância (' + TYPE_UNITS[subs[1]] + ')';
  } else {
    document.getElementById('wm-title').textContent = (TYPE_ICONS[type] || '') + ' Log de ' + (TYPE_LABELS[type] || 'Treino');
    sec1.classList.remove('hidden');
    sec2.classList.add('hidden');
    document.getElementById('wm-label1').textContent = '';
    document.getElementById('wm-dlabel1').textContent = 'Distância (' + (TYPE_UNITS[type] || 'km') + ')';
  }
  ['wm-d1', 'wm-t1', 'wm-d2', 'wm-t2'].forEach(id => { document.getElementById(id).value = ''; });
  modal.classList.remove('hidden');
  setTimeout(() => document.getElementById('wm-d1').focus(), 100);
}

function hideWmModal() { document.getElementById('workout-modal').classList.add('hidden'); }

function handleWmSave() {
  const extra = {};
  if (wmType === 'brick' && wmSubs) {
    extra.activities = [
      { type: wmSubs[0], distance: parseFloat(document.getElementById('wm-d1').value) || null, time: parseInt(document.getElementById('wm-t1').value) || null },
      { type: wmSubs[1], distance: parseFloat(document.getElementById('wm-d2').value) || null, time: parseInt(document.getElementById('wm-t2').value) || null }
    ];
  } else if (wmType === 'swim') {
    extra.swimDistance = parseInt(document.getElementById('wm-d1').value) || null;
    extra.swimTime = parseInt(document.getElementById('wm-t1').value) || null;
  } else {
    extra.distance = parseFloat(document.getElementById('wm-d1').value) || null;
    extra.time = parseInt(document.getElementById('wm-t1').value) || null;
  }
  hideWmModal();
  completeWorkout(new Date(), extra);
}

// ═══ Undo ═══
function showUndoToast(dateStr) {
  const toast = document.getElementById('undo-toast');
  toast.classList.remove('hidden');
  toast.dataset.dateStr = dateStr;
  if (undoTimeout) clearTimeout(undoTimeout);
  undoTimeout = setTimeout(() => { toast.classList.add('hidden'); undoTimeout = null; }, 5000);
}

async function handleUndo() {
  const toast = document.getElementById('undo-toast');
  const dateStr = toast.dataset.dateStr;
  if (undoTimeout) clearTimeout(undoTimeout);
  toast.classList.add('hidden');
  delete cachedWorkouts[dateStr];
  renderAll();
  await db.collection('users').doc(currentUser.uid).collection('workouts').doc(dateStr).delete();
}

// ═══ Week ═══
function renderWeek() {
  const today = new Date();
  const monday = getMonday(today);
  const container = document.getElementById('week-days');
  container.innerHTML = '';
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(d.getDate() + i);
    const dayNum = d.getDay();
    const sched = getSchedule(d);
    const dateStr = fmtDate(d);
    const isToday = dateStr === fmtDate(today);
    const done = cachedWorkouts[dateStr] && cachedWorkouts[dateStr].completed;
    const el = document.createElement('div');
    const cls = ['day-card', sched.type];
    if (isToday) cls.push('is-today');
    if (done) cls.push('completed');
    el.className = cls.join(' ');
    el.innerHTML = '<span class="day-label">' + DAY_NAMES[dayNum] + '</span><span class="day-number">' + d.getDate() + '</span><span class="day-status">' + (done ? '✓' : sched.type === 'rest' ? '—' : '○') + '</span>';
    container.appendChild(el);
  }
}

// ═══ Month ═══
function renderMonthSummary() {
  const today = new Date();
  const year = today.getFullYear(), month = today.getMonth();
  let total = 0, done = 0;
  for (let day = 1; day <= today.getDate(); day++) {
    const d = new Date(year, month, day);
    if (getSchedule(d).type === 'rest') continue;
    total++;
    const ds = fmtDate(d);
    if (cachedWorkouts[ds] && cachedWorkouts[ds].completed) done++;
  }
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  document.getElementById('month-name').textContent = MONTH_NAMES[month] + ' ' + year;
  document.getElementById('month-count').textContent = done + '/' + total + ' treinos';
  document.getElementById('month-percentage').textContent = pct + '%';
  requestAnimationFrame(() => { document.getElementById('month-bar-fill').style.width = pct + '%'; });
}

// ═══ Streak ═══
function renderStreak() {
  const completed = new Set();
  for (const [ds, w] of Object.entries(cachedWorkouts)) { if (w.completed) completed.add(ds); }
  let streak = 0;
  const d = new Date();
  let first = true;
  for (let i = 0; i < 365; i++) {
    if (getSchedule(d).type === 'rest') { d.setDate(d.getDate() - 1); continue; }
    const ds = fmtDate(d);
    if (completed.has(ds)) { streak++; first = false; }
    else if (first) { first = false; }
    else break;
    d.setDate(d.getDate() - 1);
  }
  document.getElementById('streak-count').textContent = streak;
}

// ═══ Next Cards (Dashboard) ═══
function renderNextCards() {
  const phase = getCurrentPhase();
  const nextA = ACHIEVEMENTS.find(a => !cachedAchievements[a.id] && a.phase <= phase.id);
  const nc = document.getElementById('next-achieve-card');
  if (nextA) {
    nc.classList.remove('hidden');
    document.getElementById('next-achieve-icon').textContent = nextA.icon;
    document.getElementById('next-achieve-name').textContent = nextA.name;
    document.getElementById('next-achieve-desc').textContent = nextA.desc;
  } else { nc.classList.add('hidden'); }

  const now = new Date();
  const nextR = RACES.filter(r => {
    const rd = cachedRaces[r.id];
    return !rd || !rd.completed;
  }).sort((a, b) => new Date(a.date) - new Date(b.date))[0];
  const rc = document.getElementById('next-race-card');
  if (nextR) {
    rc.classList.remove('hidden');
    document.getElementById('next-race-name').textContent = nextR.name;
    const days = daysUntil(nextR.date);
    document.getElementById('next-race-countdown').textContent = nextR.confirmed ? (days <= 0 ? 'Hoje!' : days + ' dias') : 'Data a confirmar';
  } else { rc.classList.add('hidden'); }
}

// ═══ Distances (Phases 4-5) ═══
function renderDistances() {
  const phase = getCurrentPhase();
  const section = document.getElementById('distance-section');
  if (!phase.targetDistances) { section.classList.add('hidden'); return; }
  section.classList.remove('hidden');
  const totals = calcDistances();
  const targets = phase.targetDistances;
  ['swim', 'bike', 'run'].forEach(type => {
    const val = totals[type];
    const target = targets[type] || 1;
    const pct = Math.min(100, Math.round((val / target) * 100));
    document.getElementById('dist-' + type + '-val').textContent = val.toFixed(1);
    document.getElementById('dist-' + type + '-target').textContent = '/ ' + target + ' km';
    document.getElementById('dist-' + type + '-fill').style.width = pct + '%';
  });
}

function calcDistances() {
  const t = { swim: 0, bike: 0, run: 0 };
  for (const w of Object.values(cachedWorkouts)) {
    if (!w.completed) continue;
    if (w.activities) {
      w.activities.forEach(a => {
        if (a.type === 'swim') t.swim += (a.distance || 0) / 1000;
        else if (a.type in t) t[a.type] += a.distance || 0;
      });
    } else if (w.type === 'swim') {
      t.swim += ((w.swimDistance || w.distance || 0) / 1000);
    } else if (w.type in t) {
      t[w.type] += w.distance || 0;
    }
  }
  return t;
}

// ═══ Phases Screen ═══
function renderPhases() {
  const cur = getCurrentPhase();
  const now = new Date();
  const container = document.getElementById('phases-list');
  const dayOrder = [1, 2, 3, 4, 5, 6, 0];
  container.innerHTML = PHASES.map(p => {
    const start = phaseStartDate(p), end = phaseEndDate(p);
    const isCur = p.id === cur.id;
    const isPast = end < now;
    const status = isCur ? 'current' : isPast ? 'past' : 'future';
    return '<div class="phase-card ' + status + '" style="--pc:' + p.color + '">' +
      '<div class="phase-top"><span class="phase-num" style="background:' + p.color + '">' + p.id + '</span>' +
      '<div><h3 class="phase-title">' + p.name + '</h3><p class="phase-sub">' + fmtShort(start) + ' → ' + fmtShort(end) + '</p></div>' +
      (isCur ? '<span class="phase-tag">ATUAL</span>' : '') + '</div>' +
      '<div class="phase-sched">' + dayOrder.map(d => {
        const s = p.schedule[d];
        return '<div class="phase-row"><span class="phase-day">' + DAY_NAMES[d] + '</span><span class="phase-act ' + s.type + '">' + s.icon + ' ' + s.name + (s.duration ? ' (' + s.duration + ')' : '') + '</span></div>';
      }).join('') + '</div>' +
      '<div class="phase-metas"><p class="phase-metas-h">Metas</p>' + p.metas.map(m => '<span class="phase-meta">• ' + m + '</span>').join('') + '</div></div>';
  }).join('');
}

// ═══ Achievements Screen ═══
function renderAchievements() {
  const cur = getCurrentPhase();
  const container = document.getElementById('achievements-list');
  container.innerHTML = '<h3 class="screen-title">\u{1F3C6} Conquistas</h3>' + ACHIEVEMENTS.map(a => {
    const data = cachedAchievements[a.id];
    const done = !!data;
    const available = !done && a.phase <= cur.id;
    const locked = !done && a.phase > cur.id;
    const cls = done ? 'completed' : available ? 'available' : 'locked';
    let dateStr = '';
    if (data && data.completedAt) {
      const dt = data.completedAt.toDate ? data.completedAt.toDate() : new Date(data.completedAt);
      dateStr = fmtShort(dt);
    }
    return '<div class="achieve-card ' + cls + '" data-id="' + a.id + '">' +
      '<span class="achieve-icon">' + (done ? '✓' : locked ? '\u{1F512}' : a.icon) + '</span>' +
      '<div class="achieve-info"><h4>' + a.name + '</h4><p class="achieve-desc">' + a.desc + '</p>' +
      '<span class="achieve-phase">Fase ' + a.phase + '</span>' +
      (dateStr ? '<span class="achieve-date">' + dateStr + '</span>' : '') +
      '</div></div>';
  }).join('');
}

function showAchieveModal(id) {
  const a = ACHIEVEMENTS.find(x => x.id === id);
  if (!a) return;
  pendingAchieveId = id;
  document.getElementById('am-icon').textContent = a.icon;
  document.getElementById('am-name').textContent = a.name;
  document.getElementById('am-desc').textContent = a.desc;
  document.getElementById('achieve-modal').classList.remove('hidden');
}

async function confirmAchievement() {
  const id = pendingAchieveId;
  document.getElementById('achieve-modal').classList.add('hidden');
  if (!id) return;
  const data = { completed: true, completedAt: firebase.firestore.FieldValue.serverTimestamp() };
  cachedAchievements[id] = { completed: true, completedAt: new Date() };
  renderAll();
  if (currentTab === 'achievements') renderAchievements();
  const a = ACHIEVEMENTS.find(x => x.id === id);
  celebrate(a.icon, a.name, 'Conquista desbloqueada!');
  await db.collection('users').doc(currentUser.uid).collection('achievements').doc(id).set(data);
}

// ═══ Races Screen ═══
function renderRacesScreen() {
  const now = new Date();
  const container = document.getElementById('races-list');
  container.innerHTML = '<h3 class="screen-title">\u{1F3C1} Próximas Provas</h3>' + RACES.map(r => {
    const rd = cachedRaces[r.id] || {};
    const rDate = new Date(r.date + 'T00:00:00');
    const days = daysUntil(r.date);
    const done = rd.completed;
    let countdown;
    if (done) countdown = 'Concluída';
    else if (r.confirmed) countdown = days <= 0 ? 'HOJE!' : days + ' dias';
    else countdown = 'A confirmar';

    return '<div class="race-card ' + (done ? 'completed' : '') + '" data-id="' + r.id + '">' +
      '<div class="race-top"><div><h4 class="race-name">' + r.name + '</h4>' +
      '<p class="race-loc">' + r.location + '</p></div>' +
      '<div class="race-countdown ' + (r.confirmed ? 'confirmed' : '') + '">' + countdown + '</div></div>' +
      '<div class="race-mid"><span class="race-dist">' + r.distances + '</span><span class="race-phase">Fase ' + r.phase + '</span>' +
      (r.note ? '<span class="race-note">' + r.note + '</span>' : '') + '</div>' +
      '<div class="race-actions">' +
      '<a href="' + r.link + '" target="_blank" rel="noopener" class="btn-race-link">Inscrever-se ↗</a>' +
      (!done && !r.confirmed ? '<button class="btn-race-notify ' + (rd.notify ? 'active' : '') + '" data-action="notify">' + (rd.notify ? '\u{1F514} Lembrete ativo' : '\u{1F515} Me avisar') + '</button>' : '') +
      (!done ? '<button class="btn-race-done" data-action="complete">Concluir prova</button>' : '') +
      (done ? '<div class="race-result">' + (rd.resultTime ? '<span>⏱ ' + rd.resultTime + '</span>' : '') + (rd.resultNotes ? '<span>' + rd.resultNotes + '</span>' : '') + '</div>' : '') +
      '</div></div>';
  }).join('');
}

function showRaceModal(id) {
  const r = RACES.find(x => x.id === id);
  if (!r) return;
  pendingRaceId = id;
  document.getElementById('rm-name').textContent = r.name;
  document.getElementById('race-time').value = '';
  document.getElementById('race-notes').value = '';
  document.getElementById('race-modal').classList.remove('hidden');
}

async function confirmRace() {
  const id = pendingRaceId;
  document.getElementById('race-modal').classList.add('hidden');
  if (!id) return;
  const resultTime = document.getElementById('race-time').value.trim();
  const resultNotes = document.getElementById('race-notes').value.trim();
  const data = { completed: true, completedAt: firebase.firestore.FieldValue.serverTimestamp(), resultTime, resultNotes };
  cachedRaces[id] = { ...data, completed: true, completedAt: new Date() };

  const r = RACES.find(x => x.id === id);
  if (r && r.achievementId && !cachedAchievements[r.achievementId]) {
    const aData = { completed: true, completedAt: firebase.firestore.FieldValue.serverTimestamp() };
    cachedAchievements[r.achievementId] = { completed: true, completedAt: new Date() };
    await db.collection('users').doc(currentUser.uid).collection('achievements').doc(r.achievementId).set(aData);
    const a = ACHIEVEMENTS.find(x => x.id === r.achievementId);
    if (a) celebrate(a.icon, a.name, 'Conquista desbloqueada!');
  }

  renderAll();
  renderRacesScreen();
  await db.collection('users').doc(currentUser.uid).collection('races').doc(id).set(data);
}

async function toggleNotify(id) {
  const rd = cachedRaces[id] || {};
  const notify = !rd.notify;
  cachedRaces[id] = { ...rd, notify };
  renderRacesScreen();
  await db.collection('users').doc(currentUser.uid).collection('races').doc(id).set({ notify }, { merge: true });
}

// ═══ Celebration ═══
function celebrate(icon, title, desc) {
  const el = document.getElementById('celebration');
  document.getElementById('celeb-icon').textContent = icon;
  document.getElementById('celeb-title').textContent = title;
  document.getElementById('celeb-desc').textContent = desc;
  el.classList.remove('hidden');
  if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
  setTimeout(() => el.classList.add('hidden'), 3000);
  el.addEventListener('click', () => el.classList.add('hidden'), { once: true });
}

// ═══ Helpers ═══
function fmtDate(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
function fmtDateDisplay(d) { return DAY_NAMES[d.getDay()] + ', ' + d.getDate() + ' de ' + MONTH_NAMES[d.getMonth()]; }
function fmtShort(d) { return d.getDate() + ' ' + MONTH_NAMES[d.getMonth()].slice(0, 3) + ' ' + d.getFullYear(); }
function getMonday(d) { const date = new Date(d); const day = date.getDay(); date.setDate(date.getDate() - day + (day === 0 ? -6 : 1)); date.setHours(0, 0, 0, 0); return date; }
function daysUntil(dateStr) { const d = new Date(dateStr + 'T00:00:00'); const now = new Date(); now.setHours(0, 0, 0, 0); return Math.ceil((d - now) / 86400000); }
