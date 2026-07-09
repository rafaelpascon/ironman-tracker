// ╔══════════════════════════════════════════════════════════════╗
// ║  FIREBASE CONFIG                                                ║
// ╚══════════════════════════════════════════════════════════════╝
const firebaseConfig = {
  apiKey: "AIzaSyCQ9RamZQVUeiGxZjB_wgCfUEqKGGP2wkk",
  authDomain: "ironman-rafael.firebaseapp.com",
  projectId: "ironman-rafael",
  storageBucket: "ironman-rafael.firebasestorage.app",
  messagingSenderId: "33909938476",
  appId: "1:33909938476:web:b5d0401464438dd47f3489"
};

// ═══ Grupos musculares & Ranks ═══
const GRUPOS_MUSCULARES = [
  { id: 'peito', nome: 'Peito', icon: '\u{1F3CB}\u{FE0F}' },
  { id: 'costas', nome: 'Costas', icon: '\u{1F9BE}' },
  { id: 'pernas', nome: 'Pernas', icon: '\u{1F9B5}' },
  { id: 'ombros', nome: 'Ombros', icon: '\u{1F938}' },
  { id: 'bracos', nome: 'Braços', icon: '\u{1F4AA}' },
  { id: 'core', nome: 'Core', icon: '\u{1F525}' }
];

const RANK_TIERS = [
  { id: 'bronze', nome: 'Bronze', min: 0, color: 'var(--bronze)' },
  { id: 'prata', nome: 'Prata', min: 400, color: 'var(--prata)' },
  { id: 'ouro', nome: 'Ouro', min: 1200, color: 'var(--ouro)' },
  { id: 'platina', nome: 'Platina', min: 3000, color: 'var(--platina)' },
  { id: 'diamante', nome: 'Diamante', min: 6000, color: 'var(--diamante)' },
  { id: 'lenda', nome: 'Lenda', min: 12000, color: 'var(--lenda)' }
];

const DISCIPLINE_RANK_KM = {
  natacao: [0, 5, 15, 40, 80, 150],
  bike: [0, 50, 150, 400, 800, 1500],
  corrida: [0, 20, 60, 150, 300, 600]
};

// ═══ Biblioteca de exercícios padrão ═══
const EXERCICIOS_DEFAULT = [
  { id: 'agachamento-livre', nome: 'Agachamento livre', grupo: 'pernas', tipo: 'composto' },
  { id: 'supino-reto', nome: 'Supino reto', grupo: 'peito', tipo: 'composto' },
  { id: 'levantamento-terra', nome: 'Levantamento terra', grupo: 'costas', tipo: 'composto' },
  { id: 'barra-fixa', nome: 'Barra fixa', grupo: 'costas', tipo: 'composto' },
  { id: 'desenvolvimento-militar', nome: 'Desenvolvimento militar', grupo: 'ombros', tipo: 'composto' },
  { id: 'remada-curvada', nome: 'Remada curvada', grupo: 'costas', tipo: 'composto' },
  { id: 'afundo', nome: 'Afundo (passada)', grupo: 'pernas', tipo: 'composto' },
  { id: 'elevacao-pelvica', nome: 'Elevação pélvica', grupo: 'pernas', tipo: 'composto' },
  { id: 'supino-inclinado', nome: 'Supino inclinado', grupo: 'peito', tipo: 'composto' },
  { id: 'paralelas', nome: 'Paralelas (dips)', grupo: 'peito', tipo: 'composto' },
  { id: 'rosca-direta', nome: 'Rosca direta', grupo: 'bracos', tipo: 'isolado' },
  { id: 'triceps-testa', nome: 'Tríceps testa', grupo: 'bracos', tipo: 'isolado' },
  { id: 'elevacao-lateral', nome: 'Elevação lateral', grupo: 'ombros', tipo: 'isolado' },
  { id: 'prancha', nome: 'Prancha', grupo: 'core', tipo: 'isolado' },
  { id: 'abdominal-remador', nome: 'Abdominal remador', grupo: 'core', tipo: 'isolado' },
  { id: 'panturrilha-em-pe', nome: 'Panturrilha em pé', grupo: 'pernas', tipo: 'isolado' },
  { id: 'face-pull', nome: 'Face pull', grupo: 'ombros', tipo: 'isolado' }
];

// ═══ Plano de Força — estilo Anatoly (todos os usuários) ═══
const PLANO_FORCA_ANATOLY = {
  nome: 'Anatoly — Base de Força',
  descricao: 'Foco em técnica e progressão de carga nos básicos (agachamento, supino, terra). Sem volume de hipertrofia — força relativa ao peso corporal.',
  duracaoSemanas: 6,
  diasSemana: [1, 3, 5],
  sequencia: [
    {
      nome: 'Dia A — Agachamento & Push',
      exercicios: [
        { exercicioId: 'agachamento-livre', series: 5, repsMin: 3, repsMax: 5 },
        { exercicioId: 'supino-reto', series: 5, repsMin: 3, repsMax: 5 },
        { exercicioId: 'barra-fixa', series: 4, repsMin: 5, repsMax: 8 },
        { exercicioId: 'prancha', series: 3, repsMin: 30, repsMax: 60 }
      ],
      mobilidade: ['Mobilidade de quadril — 10 min', 'Alongamento de peitoral e ombro — 5 min']
    },
    {
      nome: 'Dia B — Terra & Pull',
      exercicios: [
        { exercicioId: 'levantamento-terra', series: 5, repsMin: 3, repsMax: 5 },
        { exercicioId: 'remada-curvada', series: 4, repsMin: 6, repsMax: 8 },
        { exercicioId: 'desenvolvimento-militar', series: 4, repsMin: 5, repsMax: 8 },
        { exercicioId: 'abdominal-remador', series: 3, repsMin: 10, repsMax: 15 }
      ],
      mobilidade: ['Mobilidade de tornozelo — 10 min', 'Mobilidade torácica (cat-cow) — 5 min']
    },
    {
      nome: 'Dia A — Agachamento & Push (variação)',
      exercicios: [
        { exercicioId: 'agachamento-livre', series: 5, repsMin: 3, repsMax: 5 },
        { exercicioId: 'supino-inclinado', series: 4, repsMin: 5, repsMax: 8 },
        { exercicioId: 'afundo', series: 3, repsMin: 8, repsMax: 10 },
        { exercicioId: 'elevacao-lateral', series: 3, repsMin: 10, repsMax: 15 }
      ],
      mobilidade: ['Mobilidade de quadril — 10 min']
    }
  ]
};

// ═══ Plano Ironman — 5 fases (só modo Ironman) ═══
const PLANO_IRONMAN_SEED = {
  nome: 'Plano Ironman 2027',
  inicio: '2026-04-27',
  fases: [
    {
      id: 1, nome: 'Base', subtitulo: 'Meses 1–3', inicioMes: 0, fimMes: 3, cor: '#4facfe', forcaDias: [1, 4],
      schedule: {
        1: { nome: 'T25 Cardio', duracao: '25 min', tipo: 't25', icon: '\u{1F3CB}\u{FE0F}' },
        2: { nome: 'T25 Speed 1.0', duracao: '25 min', tipo: 't25', icon: '\u{26A1}' },
        3: { nome: 'Natação — Técnica', duracao: '45–60 min', tipo: 'natacao', icon: '\u{1F3CA}' },
        4: { nome: 'T25 Total Body Circuit', duracao: '25 min', tipo: 't25', icon: '\u{1F4AA}' },
        5: { nome: 'Natação — Resistência', duracao: '45–60 min', tipo: 'natacao', icon: '\u{1F30A}' },
        6: { nome: 'T25 Ab Intervals + Lower Focus', duracao: '50 min', tipo: 't25', icon: '\u{1F525}' },
        0: { nome: 'Descanso + Alongamento', duracao: null, tipo: 'rest', icon: '\u{1F634}' }
      },
      metas: ['Completar T25 Alpha', 'Nadar 1 km sem parar', 'Streak de 30 dias']
    },
    {
      id: 2, nome: 'Expansão', subtitulo: 'Meses 4–6', inicioMes: 3, fimMes: 6, cor: '#00e676', forcaDias: [1, 4],
      schedule: {
        1: { nome: 'Corrida 20–30 min', duracao: '20–30 min', tipo: 'corrida', icon: '\u{1F3C3}' },
        2: { nome: 'Natação 1,5 km', duracao: null, tipo: 'natacao', icon: '\u{1F3CA}' },
        3: { nome: 'Spinning 45 min', duracao: '45 min', tipo: 'bike', icon: '\u{1F6B4}' },
        4: { nome: 'Corrida intervalado', duracao: null, tipo: 'corrida', icon: '\u{26A1}' },
        5: { nome: 'Natação técnica', duracao: null, tipo: 'natacao', icon: '\u{1F3CA}' },
        6: { nome: 'Spinning 60 min', duracao: '60 min', tipo: 'bike', icon: '\u{1F6B4}' },
        0: { nome: 'Descanso', duracao: null, tipo: 'rest', icon: '\u{1F634}' }
      },
      metas: ['Correr 5 km', 'Nadar 2 km', '45 min de bike sem parar', 'Comprar bike usada']
    },
    {
      id: 3, nome: 'Preparação 70.3', subtitulo: 'Meses 7–10', inicioMes: 6, fimMes: 10, cor: '#ff9800', forcaDias: [2, 5],
      schedule: {
        1: { nome: 'Corrida 40 min', duracao: '40 min', tipo: 'corrida', icon: '\u{1F3C3}' },
        2: { nome: 'Natação 2,5 km', duracao: null, tipo: 'natacao', icon: '\u{1F3CA}' },
        3: { nome: 'Bike 1h30', duracao: '1h30', tipo: 'bike', icon: '\u{1F6B4}' },
        4: { nome: 'Brick — Natação + corrida', duracao: null, tipo: 'brick', icon: '\u{1F504}', subs: ['natacao', 'corrida'] },
        5: { nome: 'Descanso', duracao: null, tipo: 'rest', icon: '\u{1F634}' },
        6: { nome: 'Brick — Bike + corrida', duracao: null, tipo: 'brick', icon: '\u{1F504}', subs: ['bike', 'corrida'] },
        0: { nome: 'Long run 60–75 min', duracao: '60–75 min', tipo: 'corrida', icon: '\u{1F3C3}' }
      },
      metas: ['Nadar 2 km', 'Bike 60 km', 'Correr 15 km', 'Sprint triathlon']
    },
    {
      id: 4, nome: 'Ironman 70.3', subtitulo: 'Meses 10–12', inicioMes: 10, fimMes: 12, cor: '#e040fb', forcaDias: [4],
      schedule: {
        1: { nome: 'Natação 1,9 km', duracao: null, tipo: 'natacao', icon: '\u{1F3CA}' },
        2: { nome: 'Bike 60–90 km', duracao: null, tipo: 'bike', icon: '\u{1F6B4}' },
        3: { nome: 'Corrida 45 min', duracao: '45 min', tipo: 'corrida', icon: '\u{1F3C3}' },
        4: { nome: 'Brick — Natação + corrida', duracao: null, tipo: 'brick', icon: '\u{1F504}', subs: ['natacao', 'corrida'] },
        5: { nome: 'Descanso', duracao: null, tipo: 'rest', icon: '\u{1F634}' },
        6: { nome: 'Brick — Bike + corrida', duracao: null, tipo: 'brick', icon: '\u{1F504}', subs: ['bike', 'corrida'] },
        0: { nome: 'Long run 90 min', duracao: '90 min', tipo: 'corrida', icon: '\u{1F3C3}' }
      },
      metas: ['Nadar 1,9 km', 'Bike 90 km', 'Correr 21 km'],
      targetDistances: { natacao: 1.9, bike: 90, corrida: 21 }
    },
    {
      id: 5, nome: 'Full Ironman', subtitulo: 'Meses 13–18', inicioMes: 12, fimMes: 18, cor: '#ffd700', forcaDias: [4],
      schedule: {
        1: { nome: 'Natação 3 km', duracao: null, tipo: 'natacao', icon: '\u{1F3CA}' },
        2: { nome: 'Bike 100 km', duracao: null, tipo: 'bike', icon: '\u{1F6B4}' },
        3: { nome: 'Corrida 60 min', duracao: '60 min', tipo: 'corrida', icon: '\u{1F3C3}' },
        4: { nome: 'Brick — Natação + corrida', duracao: null, tipo: 'brick', icon: '\u{1F504}', subs: ['natacao', 'corrida'] },
        5: { nome: 'Descanso', duracao: null, tipo: 'rest', icon: '\u{1F634}' },
        6: { nome: 'Brick — Bike + corrida longa', duracao: null, tipo: 'brick', icon: '\u{1F504}', subs: ['bike', 'corrida'] },
        0: { nome: 'Long run 2h', duracao: '2h', tipo: 'corrida', icon: '\u{1F3C3}' }
      },
      metas: ['Nadar 3,86 km', 'Bike 180 km', 'Correr 42 km'],
      targetDistances: { natacao: 3.86, bike: 180, corrida: 42 }
    }
  ]
};

// ═══ Calendário de provas (modo Ironman) ═══
const RACES_SEED = [
  { id: 'circuito-inverno-2026', nome: 'Circuito das Estações — Inverno SP', data: '2026-06-28', confirmada: true, distancias: '5 km, 10 km ou 15 km', local: 'Praça Charles Miller, Pacaembu — SP', link: 'https://circuitodasestacoes.com.br', achievementId: null },
  { id: 'circuito-primavera-2026', nome: 'Circuito das Estações — Primavera SP', data: '2026-09-01', confirmada: false, distancias: '5 km', local: 'Praça Charles Miller, Pacaembu — SP', link: 'https://circuitodasestacoes.com.br', achievementId: 'primeira-corrida-5k' },
  { id: 'circuito-verao-2026', nome: 'Circuito das Estações — Verão SP', data: '2026-12-01', confirmada: false, distancias: '10 km', local: 'São Paulo', link: 'https://circuitodasestacoes.com.br', achievementId: 'dois-digitos' },
  { id: 'meia-sp-2027', nome: 'Meia Maratona Internacional de SP', data: '2027-04-15', confirmada: false, distancias: '21 km', local: 'SP — Ibirapuera → Pacaembu', link: 'https://meiamaratonasaopaulo.com.br', achievementId: 'meia-maratona' },
  { id: 'ironman-70-3', nome: 'Ironman 70.3', data: '2027-10-15', confirmada: false, distancias: '1,9 km + 90 km + 21,1 km', local: 'Maceió ou Florianópolis', link: 'https://ironman.com/im703-brazil', achievementId: 'setenta-e-tres' },
  { id: 'ironman-full', nome: 'Full Ironman Brasil', data: '2027-12-01', confirmada: false, distancias: '3,86 km + 180 km + 42,2 km', local: 'Brasil', link: 'https://ironman.com/triathlon/ironman-brazil', achievementId: 'iron-man' }
];

// ═══ Conquistas ═══
const ACHIEVEMENTS_DEFS = [
  { id: 'primeira-corrida-5k', nome: 'Primeira Largada', desc: 'Correr 5 km contínuos', icon: '\u{1F3C1}' },
  { id: 'primeiro-brick', nome: 'Primeiro Brick', desc: 'Completar seu primeiro treino brick', icon: '\u{1F504}' },
  { id: 'dez-treinos-mes', nome: 'Ritmo Forte', desc: '10 treinos completados em um mês', icon: '\u{1F4C5}' },
  { id: 'recorde-carga', nome: 'Novo Recorde', desc: 'Bater recorde de carga em um exercício', icon: '\u{1F4C8}' },
  { id: 'pace-sub-8', nome: 'Sub-8', desc: 'Correr com pace abaixo de 8:00/km', icon: '\u{26A1}' },
  { id: 'streak-30', nome: '30 Dias Sem Parar', desc: 'Streak de 30 dias consecutivos', icon: '\u{1F525}' },
  { id: 'dois-digitos', nome: 'Dois Dígitos', desc: 'Completar uma corrida de 10 km', icon: '\u{1F51F}' },
  { id: 'meia-maratona', nome: 'Meia Maratona', desc: 'Completar 21 km correndo', icon: '\u{1F396}\u{FE0F}' },
  { id: 'setenta-e-tres', nome: '70.3', desc: 'Cruzar a linha de chegada do Ironman 70.3', icon: '\u{1F947}' },
  { id: 'iron-man', nome: 'Iron Man', desc: 'Cruzar a linha de chegada do Full Ironman', icon: '\u{1F3C6}' }
];

const DAY_NAMES = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const MONTH_NAMES = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
const TIPO_ICONS = { forca: '\u{1F4AA}', corrida: '\u{1F3C3}', natacao: '\u{1F3CA}', bike: '\u{1F6B4}', brick: '\u{1F504}', t25: '\u{1F3CB}\u{FE0F}', rest: '\u{1F634}' };
const TIPO_LABELS = { forca: 'Força', corrida: 'Corrida', natacao: 'Natação', bike: 'Bike', brick: 'Brick', t25: 'T25', rest: 'Descanso' };
const TIPO_UNIDADE_DIST = { corrida: 'km', natacao: 'm', bike: 'km' };

// ═══ Estado global ═══
let db, auth, currentUser, profile;
let cachedSessoes = {};
let cachedBio = {};
let cachedProvas = {};
let cachedExercicios = {};
let gamificacao = null;
let planoForca = null;
let planoIronman = null;
let currentTab = 'hoje';
let isSignUp = false;
let undoTimeout = null;
let lastSavedSessionId = null;
let smTipo = null, smSubs = null, smOrigem = null;
let smForcaExercicios = [];
let editingBioId = null;
let editingProvaId = null;
let importMode = null;
let treinosFiltro = 'todos';
let chartInstances = {};

// ═══ Init ═══
document.addEventListener('DOMContentLoaded', () => {
  firebase.initializeApp(firebaseConfig);
  db = firebase.firestore();
  auth = firebase.auth();
  db.enablePersistence({ synchronizeTabs: true }).catch(() => {});

  auth.onAuthStateChanged(async user => {
    currentUser = user;
    document.getElementById('loading-screen').classList.add('hidden');
    if (user) {
      await boot();
    } else {
      document.getElementById('app').classList.add('hidden');
      document.getElementById('profile-screen').classList.add('hidden');
      document.getElementById('login-screen').classList.remove('hidden');
    }
  });

  setupEvents();
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(() => {});
});

async function boot() {
  const uid = currentUser.uid;
  const profSnap = await db.collection('users').doc(uid).collection('profile').doc('data').get();
  document.getElementById('login-screen').classList.add('hidden');
  if (!profSnap.exists) {
    document.getElementById('profile-screen').classList.remove('hidden');
    return;
  }
  profile = profSnap.data();
  document.getElementById('profile-screen').classList.add('hidden');
  await loadAllData();
  document.getElementById('app').classList.remove('hidden');
  applyModeVisibility();
  switchTab('hoje');
}

async function loadAllData() {
  const uid = currentUser.uid;
  const [sessSnap, bioSnap, exSnap, planSnap, provaSnap, gamifSnap] = await Promise.all([
    db.collection('users').doc(uid).collection('sessoes').get(),
    db.collection('users').doc(uid).collection('bioimpedancia').get(),
    db.collection('users').doc(uid).collection('exercicios').get(),
    db.collection('users').doc(uid).collection('planos').get(),
    db.collection('users').doc(uid).collection('provas').get(),
    db.collection('users').doc(uid).collection('gamificacao').doc('estado').get()
  ]);
  cachedSessoes = {}; sessSnap.forEach(d => cachedSessoes[d.id] = d.data());
  cachedBio = {}; bioSnap.forEach(d => cachedBio[d.id] = d.data());
  cachedExercicios = {};
  EXERCICIOS_DEFAULT.forEach(e => cachedExercicios[e.id] = e);
  exSnap.forEach(d => cachedExercicios[d.id] = { id: d.id, ...d.data() });
  cachedProvas = {}; provaSnap.forEach(d => cachedProvas[d.id] = d.data());
  planoForca = null; planoIronman = null;
  planSnap.forEach(d => {
    const data = d.data();
    if (data.tipo === 'forca') planoForca = { id: d.id, ...data };
    else if (data.tipo === 'ironman') planoIronman = { id: d.id, ...data };
  });
  gamificacao = gamifSnap.exists ? gamifSnap.data() : defaultGamificacao();
}

function defaultGamificacao() {
  return { xp: 0, nivel: 1, streak: 0, ultimoDia: null, descansoSemana: {}, ranksMusculares: {}, ranksDisciplinas: {}, conquistas: {}, proximoIndiceForca: 0 };
}

function applyModeVisibility() {
  const modo = !!profile.modoIronman;
  document.getElementById('distance-section').classList.toggle('hidden', !modo);
  document.getElementById('ironman-journey-section').classList.toggle('hidden', !modo);
  document.getElementById('ranks-disciplinas-section').classList.toggle('hidden', !modo);
  document.getElementById('races-section').classList.toggle('hidden', !modo);
  document.getElementById('provas-manage-section').classList.toggle('hidden', !modo);
  document.getElementById('chart-natacao-card').classList.toggle('hidden', !modo);
  document.getElementById('chart-bike-card').classList.toggle('hidden', !modo);
}

// ═══ Setup de eventos ═══
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
  document.getElementById('logout-btn-2').addEventListener('click', () => auth.signOut());

  // Profile wizard
  document.getElementById('pf-objetivo').addEventListener('click', e => {
    const btn = e.target.closest('.option-btn');
    if (!btn) return;
    document.querySelectorAll('#pf-objetivo .option-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
  });
  document.getElementById('profile-form').addEventListener('submit', handleCreateProfile);

  // Bottom nav
  document.querySelectorAll('.nav-tab').forEach(btn => btn.addEventListener('click', () => switchTab(btn.dataset.tab)));

  document.getElementById('undo-btn').addEventListener('click', handleUndo);

  // Treinos tab
  document.getElementById('fab-treino').addEventListener('click', () => showTipoModal());
  document.getElementById('treinos-filtro').addEventListener('click', e => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    treinosFiltro = chip.dataset.val;
    renderTreinosTab();
  });
  document.getElementById('treinos-list').addEventListener('click', e => {
    const del = e.target.closest('[data-del]');
    const dup = e.target.closest('[data-dup]');
    if (del) deleteSessao(del.dataset.del);
    else if (dup) { const s = cachedSessoes[dup.dataset.dup]; openSessionModal(s.tipo, s.subs || null, 'manual', s); }
  });

  // Tipo modal
  document.getElementById('tipo-options').addEventListener('click', e => {
    const btn = e.target.closest('.option-btn');
    if (!btn) return;
    hideModal('tipo-modal');
    openSessionModal(btn.dataset.val, btn.dataset.val === 'brick' ? ['bike', 'corrida'] : null, 'manual', null);
  });
  document.getElementById('tipo-cancel').addEventListener('click', () => hideModal('tipo-modal'));

  // Session modal
  document.getElementById('sm-save').addEventListener('click', handleSessionSave);
  document.getElementById('sm-cancel').addEventListener('click', () => hideModal('session-modal'));
  document.getElementById('sm-duplicate').addEventListener('click', duplicateLastSession);
  document.getElementById('sm-body').addEventListener('click', handleSmBodyClick);
  document.getElementById('sm-body').addEventListener('change', handleSmBodyChange);

  // Exercicio modal
  document.getElementById('ex-save').addEventListener('click', handleExercicioSave);
  document.getElementById('ex-cancel').addEventListener('click', () => hideModal('exercicio-modal'));

  // Bio
  document.getElementById('btn-add-bio').addEventListener('click', () => showBioModal(null));
  document.getElementById('bio-save').addEventListener('click', handleBioSave);
  document.getElementById('bio-delete').addEventListener('click', handleBioDelete);
  document.getElementById('bio-cancel').addEventListener('click', () => hideModal('bio-modal'));
  document.getElementById('bio-table').addEventListener('click', e => {
    const row = e.target.closest('.bio-row');
    if (row) showBioModal(row.dataset.id);
  });

  // Provas
  document.getElementById('btn-add-prova').addEventListener('click', () => showProvaModal(null));
  document.getElementById('prova-save').addEventListener('click', handleProvaSave);
  document.getElementById('prova-delete').addEventListener('click', handleProvaDelete);
  document.getElementById('prova-cancel').addEventListener('click', () => hideModal('prova-modal'));
  document.getElementById('races-list').addEventListener('click', e => {
    const card = e.target.closest('.race-card');
    if (card) showProvaModal(card.dataset.id);
  });
  document.getElementById('provas-manage-list').addEventListener('click', e => {
    const card = e.target.closest('.race-card');
    if (card) showProvaModal(card.dataset.id);
  });

  // Mais tab
  document.getElementById('cfg-objetivo').addEventListener('click', e => {
    const btn = e.target.closest('.option-btn');
    if (!btn) return;
    document.querySelectorAll('#cfg-objetivo .option-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
  });
  document.getElementById('cfg-save').addEventListener('click', handleProfileUpdate);
  document.getElementById('btn-plan-export').addEventListener('click', exportPlanos);
  document.getElementById('btn-plan-import').addEventListener('click', () => showImportModal('plano'));
  document.getElementById('btn-export-json').addEventListener('click', exportAllJSON);
  document.getElementById('btn-export-csv').addEventListener('click', exportSessoesCSV);
  document.getElementById('import-validate').addEventListener('click', handleImportValidate);
  document.getElementById('import-cancel').addEventListener('click', () => hideModal('import-modal'));

  document.getElementById('achievements-list').addEventListener('click', () => {});
}

function hideModal(id) { document.getElementById(id).classList.add('hidden'); }

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
    const msgs = { 'auth/wrong-password': 'Senha incorreta', 'auth/user-not-found': 'Usuário não encontrado', 'auth/invalid-email': 'Email inválido', 'auth/email-already-in-use': 'Email já cadastrado', 'auth/weak-password': 'Senha fraca (mín. 6)', 'auth/invalid-credential': 'Email ou senha incorretos' };
    errEl.textContent = msgs[err.code] || 'Erro ao autenticar';
    btn.disabled = false;
    btn.textContent = isSignUp ? 'Criar conta' : 'Entrar';
  }
}

// ═══ Perfil (wizard inicial) ═══
async function handleCreateProfile(e) {
  e.preventDefault();
  const errEl = document.getElementById('profile-error');
  const sel = document.querySelector('#pf-objetivo .option-btn.selected');
  if (!sel) { errEl.textContent = 'Escolha um objetivo'; return; }
  const nome = document.getElementById('pf-nome').value.trim();
  if (!nome) { errEl.textContent = 'Informe seu nome'; return; }
  const objetivo = sel.dataset.val;
  const modoIronman = objetivo === 'ironman';
  const prof = {
    nome, objetivo, modoIronman,
    peso: parseFloat(document.getElementById('pf-peso').value) || null,
    altura: parseFloat(document.getElementById('pf-altura').value) || null,
    idade: parseInt(document.getElementById('pf-idade').value) || null,
    sexo: document.getElementById('pf-sexo').value,
    criadoEm: firebase.firestore.FieldValue.serverTimestamp()
  };
  errEl.textContent = '';
  try {
    await seedNewUser(currentUser.uid, prof, modoIronman);
    profile = prof;
    await loadAllData();
    document.getElementById('profile-screen').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');
    applyModeVisibility();
    switchTab('hoje');
  } catch (err) {
    errEl.textContent = 'Erro ao salvar perfil: ' + err.message;
  }
}

async function seedNewUser(uid, prof, modoIronman) {
  const userRef = db.collection('users').doc(uid);
  const batch = db.batch();
  batch.set(userRef.collection('profile').doc('data'), prof);
  batch.set(userRef.collection('planos').doc('forca-anatoly'), { tipo: 'forca', ...PLANO_FORCA_ANATOLY });
  batch.set(userRef.collection('gamificacao').doc('estado'), defaultGamificacao());
  if (modoIronman) {
    batch.set(userRef.collection('planos').doc('ironman-2027'), { tipo: 'ironman', ...PLANO_IRONMAN_SEED });
    RACES_SEED.forEach(r => batch.set(userRef.collection('provas').doc(r.id), r));
    batch.set(userRef.collection('sessoes').doc('baseline-corrida'), {
      tipo: 'corrida', data: '2026-07-01', distancia: 5, tempoMin: 45.1, tempoDisplay: '45:06', pace: '8:57',
      tipoTreino: 'rodagem-leve', obs: 'Baseline inicial', criadoEm: firebase.firestore.FieldValue.serverTimestamp()
    });
  }
  await batch.commit();
}

async function handleProfileUpdate() {
  const sel = document.querySelector('#cfg-objetivo .option-btn.selected');
  const objetivo = sel ? sel.dataset.val : profile.objetivo;
  const modoIronmanNovo = objetivo === 'ironman';
  const ativandoIronman = modoIronmanNovo && !profile.modoIronman;
  profile = {
    ...profile,
    nome: document.getElementById('cfg-nome').value.trim() || profile.nome,
    objetivo,
    modoIronman: modoIronmanNovo,
    peso: parseFloat(document.getElementById('cfg-peso').value) || profile.peso,
    altura: parseFloat(document.getElementById('cfg-altura').value) || profile.altura
  };
  await db.collection('users').doc(currentUser.uid).collection('profile').doc('data').set(profile, { merge: true });
  if (ativandoIronman && !planoIronman) {
    const userRef = db.collection('users').doc(currentUser.uid);
    const batch = db.batch();
    batch.set(userRef.collection('planos').doc('ironman-2027'), { tipo: 'ironman', ...PLANO_IRONMAN_SEED });
    RACES_SEED.forEach(r => batch.set(userRef.collection('provas').doc(r.id), r));
    await batch.commit();
    await loadAllData();
  }
  applyModeVisibility();
  const msg = document.getElementById('cfg-saved-msg');
  msg.classList.remove('hidden');
  setTimeout(() => msg.classList.add('hidden'), 2000);
  renderAll();
}

// ═══ Navegação ═══
function switchTab(tab) {
  currentTab = tab;
  document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.nav-tab').forEach(el => el.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.remove('hidden');
  document.querySelector('[data-tab="' + tab + '"]').classList.add('active');
  document.getElementById('fab-treino').classList.toggle('hidden', tab !== 'treinos');
  if (tab === 'hoje') renderAll();
  else if (tab === 'treinos') renderTreinosTab();
  else if (tab === 'saude') renderSaudeTab();
  else if (tab === 'evolucao') renderEvolucaoTab();
  else if (tab === 'mais') renderMaisTab();
}

function renderAll() {
  renderHeaderBadges();
  renderTodayTab();
  renderWeek();
  renderMonthSummary();
  renderNextCards();
  renderDistances();
}

function renderHeaderBadges() {
  document.getElementById('streak-count').textContent = gamificacao.streak || 0;
  document.getElementById('xp-level').textContent = gamificacao.nivel || 1;
}

// ═══ Fases Ironman & dia de força ═══
function getFaseInicio(fase) { const d = new Date(planoIronman.inicio + 'T00:00:00'); d.setMonth(d.getMonth() + fase.inicioMes); return d; }
function getFaseFim(fase) { const d = new Date(planoIronman.inicio + 'T00:00:00'); d.setMonth(d.getMonth() + fase.fimMes); d.setDate(d.getDate() - 1); return d; }
function getFaseParaData(date) {
  for (const f of planoIronman.fases) { if (date >= getFaseInicio(f) && date <= getFaseFim(f)) return f; }
  const inicio = new Date(planoIronman.inicio + 'T00:00:00');
  return date < inicio ? planoIronman.fases[0] : planoIronman.fases[planoIronman.fases.length - 1];
}
function getFaseAtual() { return getFaseParaData(new Date()); }

function getProximoDiaForca() {
  const idx = (gamificacao.proximoIndiceForca || 0) % planoForca.sequencia.length;
  return planoForca.sequencia[idx];
}

function isDiaPrescrito(date) {
  const weekday = date.getDay();
  if (profile.modoIronman && planoIronman) {
    const fase = getFaseParaData(date);
    if (fase.schedule[weekday].tipo !== 'rest') return true;
    if (fase.forcaDias && fase.forcaDias.includes(weekday)) return true;
    return false;
  }
  return !!(planoForca && planoForca.diasSemana.includes(weekday));
}
function isRestDay(date) { return !isDiaPrescrito(date); }

function getDiaForcaParaBloco(dateStr) {
  const sessaoHoje = Object.values(cachedSessoes).find(s => s.tipo === 'forca' && s.data === dateStr);
  if (sessaoHoje) return { nome: sessaoHoje.planoDia || 'Força', exercicios: [], mobilidade: [] };
  return getProximoDiaForca();
}

function computeTodayBlocks(date) {
  const blocks = [];
  const weekday = date.getDay();
  const dateStr = fmtDate(date);
  if (profile.modoIronman && planoIronman) {
    const fase = getFaseParaData(date);
    const sched = fase.schedule[weekday];
    blocks.push({ tipo: sched.tipo, nome: sched.nome, duracao: sched.duracao, icon: sched.icon, subs: sched.subs || null, diaForca: null });
    if (fase.forcaDias && fase.forcaDias.includes(weekday) && planoForca) {
      const dia = getDiaForcaParaBloco(dateStr);
      blocks.push({ tipo: 'forca', nome: dia.nome, duracao: null, icon: '\u{1F4AA}', subs: null, diaForca: dia });
    }
  } else if (planoForca && planoForca.diasSemana.includes(weekday)) {
    const dia = getDiaForcaParaBloco(dateStr);
    blocks.push({ tipo: 'forca', nome: dia.nome, duracao: null, icon: '\u{1F4AA}', subs: null, diaForca: dia });
  } else {
    blocks.push({ tipo: 'rest', nome: 'Descanso', duracao: null, icon: '\u{1F634}', subs: null, diaForca: null });
  }
  return blocks;
}

// ═══ Tab: Hoje ═══
let todayBlocksCache = [];
function renderTodayTab() {
  const today = new Date();
  document.getElementById('today-date').textContent = fmtDateDisplay(today);
  const phaseEl = document.getElementById('today-phase');
  if (profile.modoIronman && planoIronman) {
    const fase = getFaseParaData(today);
    phaseEl.textContent = 'Fase ' + fase.id + ' — ' + fase.nome;
    phaseEl.style.color = fase.cor;
  } else {
    const labels = { forca: 'Plano de Força', corrida: 'Plano de Corrida', emagrecimento: 'Plano de Emagrecimento' };
    phaseEl.textContent = labels[profile.objetivo] || 'Seu plano';
    phaseEl.style.color = 'var(--accent)';
  }
  todayBlocksCache = computeTodayBlocks(today);
  const dateStr = fmtDate(today);
  const container = document.getElementById('today-blocks');
  container.innerHTML = todayBlocksCache.map((b, idx) => renderTodayBlockCard(b, idx, dateStr)).join('');
  container.querySelectorAll('[data-complete-block]').forEach(btn => {
    btn.addEventListener('click', () => handleBlockComplete(todayBlocksCache[parseInt(btn.dataset.completeBlock)]));
  });
  container.querySelectorAll('[data-extra-rest]').forEach(btn => btn.addEventListener('click', () => showTipoModal()));
}

function isBlockDone(tipo, dateStr) {
  return Object.values(cachedSessoes).some(s => s.data === dateStr && s.tipo === tipo);
}

function renderTodayBlockCard(b, idx, dateStr) {
  const done = b.tipo !== 'rest' && isBlockDone(b.tipo, dateStr);
  let html = '<div class="today-card ' + b.tipo + (done ? ' done' : '') + '">';
  html += '<div class="today-icon">' + b.icon + '</div>';
  html += '<h2 class="today-name">' + b.nome + '</h2>';
  if (b.duracao) html += '<p class="today-duration">' + b.duracao + '</p>';
  if (b.tipo === 'rest') {
    html += '<p class="today-rest-msg">Aproveite o descanso! \u{1F634}</p>';
    html += '<button class="btn-secondary" data-extra-rest="1">+ Registrar treino extra</button>';
  } else if (done) {
    html += '<button class="btn-complete done-btn">✓ Concluído!</button>';
  } else {
    html += '<button class="btn-complete ' + b.tipo + '-btn" data-complete-block="' + idx + '">CONCLUIR ✓</button>';
  }
  html += '</div>';
  return html;
}

function handleBlockComplete(block) {
  if (!block || block.tipo === 'rest') return;
  if (block.tipo === 't25') {
    saveSessaoAndCelebrate({ tipo: 't25', data: fmtDate(new Date()), nome: block.nome, duracao: block.duracao, criadoEm: firebase.firestore.FieldValue.serverTimestamp() });
    return;
  }
  openSessionModal(block.tipo, block.subs, 'hoje', null, block.diaForca);
}

// ═══ Semana / Mês ═══
function renderWeek() {
  const today = new Date();
  const monday = getMonday(today);
  let html = '';
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday); d.setDate(d.getDate() + i);
    const dateStr = fmtDate(d);
    const isToday = dateStr === fmtDate(today);
    const prescrito = isDiaPrescrito(d);
    const done = Object.values(cachedSessoes).some(s => s.data === dateStr);
    const cls = ['day-card', prescrito ? 'active-day' : 'rest'];
    if (isToday) cls.push('is-today');
    if (done) cls.push('completed');
    html += '<div class="' + cls.join(' ') + '"><span class="day-label">' + DAY_NAMES[d.getDay()] + '</span><span class="day-number">' + d.getDate() + '</span><span class="day-status">' + (done ? '✓' : (prescrito ? '○' : '—')) + '</span></div>';
  }
  document.getElementById('week-days').innerHTML = html;
}

function renderMonthSummary() {
  const today = new Date();
  const year = today.getFullYear(), month = today.getMonth();
  let total = 0, done = 0;
  for (let day = 1; day <= today.getDate(); day++) {
    const d = new Date(year, month, day);
    if (!isDiaPrescrito(d)) continue;
    total++;
    const ds = fmtDate(d);
    if (Object.values(cachedSessoes).some(s => s.data === ds)) done++;
  }
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  document.getElementById('month-name').textContent = MONTH_NAMES[month] + ' ' + year;
  document.getElementById('month-count').textContent = done + '/' + total + ' treinos';
  document.getElementById('month-percentage').textContent = pct + '%';
  requestAnimationFrame(() => { document.getElementById('month-bar-fill').style.width = pct + '%'; });
}

function renderNextCards() {
  let html = '';
  const proximaConquista = ACHIEVEMENTS_DEFS.find(a => !(gamificacao.conquistas || {})[a.id]);
  if (proximaConquista) {
    html += '<div class="next-card" data-tab="evolucao"><span class="next-icon">' + proximaConquista.icon + '</span><div class="next-info"><p class="next-label">Próximo marco</p><p class="next-name">' + proximaConquista.nome + '</p><p class="next-desc">' + proximaConquista.desc + '</p></div><span class="next-arrow">→</span></div>';
  }
  if (profile.modoIronman) {
    const lista = Object.entries(cachedProvas).map(([id, r]) => ({ id, ...r })).filter(r => !r.resultado).sort((a, b) => new Date(a.data) - new Date(b.data));
    const proximaProva = lista[0];
    if (proximaProva) {
      const dias = daysUntil(proximaProva.data);
      html += '<div class="next-card" data-tab="evolucao"><span class="next-icon">\u{1F3C1}</span><div class="next-info"><p class="next-label">Próxima prova</p><p class="next-name">' + proximaProva.nome + '</p><p class="next-countdown">' + (dias < 0 ? 'Aguardando resultado' : dias === 0 ? 'Hoje!' : dias + ' dias') + '</p></div><span class="next-arrow">→</span></div>';
    }
  }
  const container = document.getElementById('next-cards-section');
  container.innerHTML = html;
  container.querySelectorAll('.next-card').forEach(c => c.addEventListener('click', () => switchTab(c.dataset.tab)));
}

function calcDistanciasAcumuladas() {
  const t = { natacao: 0, bike: 0, corrida: 0 };
  Object.values(cachedSessoes).forEach(s => {
    if (s.tipo === 'natacao') t.natacao += (s.distancia || 0) / 1000;
    else if (s.tipo === 'bike') t.bike += s.distancia || 0;
    else if (s.tipo === 'corrida') t.corrida += s.distancia || 0;
    else if (s.tipo === 'brick' && s.activities) {
      s.activities.forEach(a => {
        if (a.tipo === 'natacao') t.natacao += (a.distancia || 0) / 1000;
        else if (a.tipo === 'bike') t.bike += a.distancia || 0;
        else if (a.tipo === 'corrida') t.corrida += a.distancia || 0;
      });
    }
  });
  return t;
}

function renderDistances() {
  if (!profile.modoIronman || !planoIronman) return;
  const fase = getFaseAtual();
  const totals = calcDistanciasAcumuladas();
  const targets = fase.targetDistances || { natacao: 3.86, bike: 180, corrida: 42 };
  ['natacao', 'bike', 'corrida'].forEach(tipo => {
    const val = totals[tipo];
    const target = targets[tipo] || 1;
    const pct = Math.min(100, Math.round((val / target) * 100));
    document.getElementById('dist-' + tipo + '-val').textContent = val.toFixed(1);
    document.getElementById('dist-' + tipo + '-target').textContent = '/ ' + target + ' km';
    document.getElementById('dist-' + tipo + '-fill').style.width = pct + '%';
  });
}

// ═══ Modal: escolher tipo (registro manual) ═══
function showTipoModal() { document.getElementById('tipo-modal').classList.remove('hidden'); }

// ═══ Modal de sessão (força / corrida / natação / bike / brick) ═══
let smDiaPrescrito = null;
let pendingExerciseBlockIdx = null;

function openSessionModal(tipo, subs, origem, prefillSessao, diaPrescrito) {
  smTipo = tipo; smSubs = subs || null; smOrigem = origem; smDiaPrescrito = diaPrescrito || null;
  buildSessionForm(tipo, prefillSessao);
  document.getElementById('sm-error').textContent = '';
  const hasHistorico = Object.values(cachedSessoes).some(s => s.tipo === tipo);
  document.getElementById('sm-duplicate').classList.toggle('hidden', !hasHistorico);
  document.getElementById('session-modal').classList.remove('hidden');
}

function buildSessionForm(tipo, prefill) {
  document.getElementById('sm-title').textContent = (TIPO_ICONS[tipo] || '') + ' Registrar ' + TIPO_LABELS[tipo];
  if (tipo === 'forca') {
    if (prefill && prefill.exercicios) {
      smForcaExercicios = prefill.exercicios.map(e => ({ exercicioId: e.exercicioId, series: e.series.map(s => ({ reps: s.reps, carga: s.carga, rpe: s.rpe })) }));
    } else if (smDiaPrescrito) {
      smForcaExercicios = smDiaPrescrito.exercicios.map(e => ({ exercicioId: e.exercicioId, series: Array.from({ length: e.series }, () => ({ reps: '', carga: '', rpe: '' })) }));
    } else {
      smForcaExercicios = [];
    }
    buildForcaFormHTML(prefill);
  } else if (tipo === 'brick') {
    smSubs = smSubs || (prefill && prefill.subs) || ['bike', 'corrida'];
    document.getElementById('sm-body').innerHTML = buildBrickFormHTML(smSubs, prefill);
  } else {
    document.getElementById('sm-body').innerHTML = buildCardioFormHTML(tipo, prefill);
  }
}

function buildForcaFormHTML(prefill) {
  let html = '';
  if (smDiaPrescrito) html += '<p class="wm-section-label">' + smDiaPrescrito.nome + '</p>';
  html += '<div id="sm-forca-exercicios"></div>';
  html += '<button type="button" id="btn-add-exercicio" class="btn-add-exercicio">+ Adicionar exercício</button>';
  if (smDiaPrescrito && smDiaPrescrito.mobilidade && smDiaPrescrito.mobilidade.length) {
    html += '<div class="mobilidade-list">\u{1F9D8} Mobilidade: ' + smDiaPrescrito.mobilidade.join(' · ') + '</div>';
  }
  html += '<div class="modal-field"><label>Observações da sessão</label><input type="text" id="sm-forca-obs" value="' + escapeAttr((prefill && prefill.obs) || '') + '"></div>';
  document.getElementById('sm-body').innerHTML = html;
  renderForcaExercicios();
}

function buildExercicioOptions(selectedId) {
  let html = '<option value="">Selecione...</option>';
  GRUPOS_MUSCULARES.forEach(g => {
    const exs = Object.values(cachedExercicios).filter(e => e.grupo === g.id);
    if (!exs.length) return;
    html += '<optgroup label="' + g.nome + '">';
    exs.forEach(e => { html += '<option value="' + e.id + '"' + (e.id === selectedId ? ' selected' : '') + '>' + e.nome + '</option>'; });
    html += '</optgroup>';
  });
  html += '<option value="__novo__">+ Novo exercício...</option>';
  return html;
}

function renderForcaExercicios() {
  const container = document.getElementById('sm-forca-exercicios');
  if (!container) return;
  container.innerHTML = smForcaExercicios.map((ex, idx) => {
    const hint = ex.exercicioId ? sugestaoProgressao(ex.exercicioId) : null;
    const seriesRows = ex.series.map((s, si) => (
      '<div class="serie-row" data-serie-idx="' + si + '">' +
      '<span>' + (si + 1) + '</span>' +
      '<input class="inp-reps" type="number" inputmode="numeric" value="' + (s.reps !== undefined && s.reps !== null ? s.reps : '') + '">' +
      '<input class="inp-carga" type="number" inputmode="decimal" step="any" value="' + (s.carga !== undefined && s.carga !== null ? s.carga : '') + '">' +
      '<input class="inp-rpe" type="number" inputmode="numeric" min="1" max="10" value="' + (s.rpe !== undefined && s.rpe !== null ? s.rpe : '') + '">' +
      '<button type="button" class="btn-remove-serie" data-remove-serie="' + idx + ':' + si + '">✕</button>' +
      '</div>'
    )).join('');
    return '<div class="exercise-block" data-idx="' + idx + '">' +
      '<div class="exercise-block-top"><select class="ex-select" data-idx="' + idx + '">' + buildExercicioOptions(ex.exercicioId) + '</select>' +
      '<button type="button" class="btn-remove-serie" data-remove-ex="' + idx + '">✕</button></div>' +
      (hint ? '<p class="progressao-hint">\u{1F4C8} ' + hint + '</p>' : '') +
      '<div class="serie-row serie-row-head"><span>Nº</span><span>Reps</span><span>Carga</span><span>RPE</span><span></span></div>' +
      seriesRows +
      '<button type="button" class="btn-add-serie" data-add-serie="' + idx + '">+ Série</button>' +
      '</div>';
  }).join('') || '<p class="empty-state">Nenhum exercício ainda. Adicione um acima.</p>';
}

function syncForcaFromDOM() {
  document.querySelectorAll('#sm-forca-exercicios .exercise-block').forEach(block => {
    const idx = parseInt(block.dataset.idx);
    const ex = smForcaExercicios[idx];
    if (!ex) return;
    ex.series.forEach((s, si) => {
      const row = block.querySelector('[data-serie-idx="' + si + '"]');
      if (!row) return;
      s.reps = row.querySelector('.inp-reps').value;
      s.carga = row.querySelector('.inp-carga').value;
      s.rpe = row.querySelector('.inp-rpe').value;
    });
  });
}

function handleSmBodyClick(e) {
  const addEx = e.target.closest('#btn-add-exercicio');
  const addSerie = e.target.closest('[data-add-serie]');
  const remSerie = e.target.closest('[data-remove-serie]');
  const remEx = e.target.closest('[data-remove-ex]');
  if (addEx) {
    syncForcaFromDOM();
    smForcaExercicios.push({ exercicioId: '', series: [{ reps: '', carga: '', rpe: '' }] });
    renderForcaExercicios();
  } else if (addSerie) {
    syncForcaFromDOM();
    smForcaExercicios[parseInt(addSerie.dataset.addSerie)].series.push({ reps: '', carga: '', rpe: '' });
    renderForcaExercicios();
  } else if (remSerie) {
    syncForcaFromDOM();
    const [idx, si] = remSerie.dataset.removeSerie.split(':').map(Number);
    smForcaExercicios[idx].series.splice(si, 1);
    if (!smForcaExercicios[idx].series.length) smForcaExercicios[idx].series.push({ reps: '', carga: '', rpe: '' });
    renderForcaExercicios();
  } else if (remEx) {
    syncForcaFromDOM();
    smForcaExercicios.splice(parseInt(remEx.dataset.removeEx), 1);
    renderForcaExercicios();
  }
}

function handleSmBodyChange(e) {
  const sel = e.target.closest('.ex-select');
  if (!sel) return;
  const idx = parseInt(sel.dataset.idx);
  if (sel.value === '__novo__') {
    pendingExerciseBlockIdx = idx;
    document.getElementById('ex-nome').value = '';
    document.getElementById('exercicio-modal').classList.remove('hidden');
    sel.value = smForcaExercicios[idx].exercicioId || '';
    return;
  }
  syncForcaFromDOM();
  smForcaExercicios[idx].exercicioId = sel.value;
  renderForcaExercicios();
}

async function handleExercicioSave() {
  const nome = document.getElementById('ex-nome').value.trim();
  if (!nome) return;
  const grupo = document.getElementById('ex-grupo').value;
  const tipo = document.getElementById('ex-tipo').value;
  const id = 'custom-' + Date.now();
  const data = { nome, grupo, tipo };
  cachedExercicios[id] = { id, ...data };
  hideModal('exercicio-modal');
  if (pendingExerciseBlockIdx !== null) {
    smForcaExercicios[pendingExerciseBlockIdx].exercicioId = id;
    renderForcaExercicios();
    pendingExerciseBlockIdx = null;
  }
  await db.collection('users').doc(currentUser.uid).collection('exercicios').doc(id).set(data);
}

function sugestaoProgressao(exercicioId) {
  if (!planoForca) return null;
  let repsMax = null;
  for (const dia of planoForca.sequencia) {
    const found = dia.exercicios.find(e => e.exercicioId === exercicioId);
    if (found) { repsMax = found.repsMax; break; }
  }
  if (!repsMax) return null;
  const historico = Object.values(cachedSessoes)
    .filter(s => s.tipo === 'forca' && s.exercicios)
    .flatMap(s => s.exercicios.filter(e => e.exercicioId === exercicioId).map(e => ({ data: s.data, series: e.series })))
    .sort((a, b) => new Date(b.data) - new Date(a.data))
    .slice(0, 2);
  if (historico.length < 2) return null;
  const bothHit = historico.every(h => h.series.length && h.series.every(s => parseFloat(s.reps) >= repsMax));
  return bothHit ? ('+2,5 kg sugerido (bateu ' + repsMax + ' reps nas últimas 2 sessões)') : null;
}

// ═══ Formulários cardio (corrida / natação / bike) e brick ═══
function field(id, label, type, value, inputmode) {
  return '<div class="modal-field"><label>' + label + '</label><input type="' + type + '" id="' + id + '" value="' + (value !== undefined && value !== null ? value : '') + '"' + (inputmode ? ' inputmode="' + inputmode + '"' : '') + (type === 'number' ? ' step="any"' : '') + '></div>';
}
function selectField(id, label, options, selected) {
  const opts = options.map(([v, l]) => '<option value="' + v + '"' + (String(v) === String(selected) ? ' selected' : '') + '>' + l + '</option>').join('');
  return '<div class="modal-field"><label>' + label + '</label><select id="' + id + '">' + opts + '</select></div>';
}

function buildCardioFormHTML(tipo, prefill) {
  const p = prefill || {};
  const unidade = TIPO_UNIDADE_DIST[tipo];
  let html = '';
  html += field('sm-c-distancia', 'Distância (' + unidade + ')', 'number', p.distancia, 'decimal');
  html += field('sm-c-tempo', 'Tempo (min)', 'number', p.tempoMin, 'decimal');
  if (tipo === 'corrida') {
    html += selectField('sm-c-tipotreino', 'Tipo', [['rodagem-leve', 'Rodagem leve'], ['intervalado', 'Intervalado'], ['longao', 'Longão'], ['tiro', 'Tiro']], p.tipoTreino);
    html += field('sm-c-fc', 'FC média (opcional)', 'number', p.fcMedia, 'numeric');
  } else if (tipo === 'natacao') {
    html += selectField('sm-c-tipotreino', 'Tipo', [['tecnica', 'Técnica'], ['resistencia', 'Resistência'], ['intervalado', 'Intervalado']], p.tipoTreino);
  } else if (tipo === 'bike') {
    html += selectField('sm-c-tipotreino', 'Tipo', [['spinning', 'Spinning indoor'], ['rodagem', 'Rodagem'], ['longao', 'Longão']], p.tipoTreino);
    html += selectField('sm-c-esforco', 'Percepção de esforço (RPE)', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => [n, String(n)]), p.esforco);
  }
  html += field('sm-c-obs', tipo === 'natacao' ? 'Observações da aula' : 'Observações', 'text', p.obs);
  return html;
}

function buildBrickFormHTML(subs, prefill) {
  const acts = (prefill && prefill.activities) || [{}, {}];
  let html = '';
  subs.forEach((sub, i) => {
    const unidade = TIPO_UNIDADE_DIST[sub];
    html += '<p class="wm-section-label">' + TIPO_ICONS[sub] + ' ' + TIPO_LABELS[sub] + '</p>';
    html += field('sm-brick-d' + i, 'Distância (' + unidade + ')', 'number', acts[i] ? acts[i].distancia : '', 'decimal');
    html += field('sm-brick-t' + i, 'Tempo (min)', 'number', acts[i] ? acts[i].tempoMin : '', 'decimal');
  });
  html += field('sm-brick-obs', 'Observações', 'text', (prefill && prefill.obs) || '');
  return html;
}

function calcPace(distanciaKm, tempoMin) {
  if (!distanciaKm) return null;
  const paceMin = tempoMin / distanciaKm;
  return { min: paceMin, display: formatMinutes(paceMin) + '/km' };
}
function calcRitmo100(distanciaM, tempoMin) {
  if (!distanciaM) return null;
  const ritmoMin = tempoMin / (distanciaM / 100);
  return { min: ritmoMin, display: formatMinutes(ritmoMin) + '/100m' };
}
function formatMinutes(min) {
  const m = Math.floor(min);
  const s = Math.round((min - m) * 60);
  return m + ':' + String(s).padStart(2, '0');
}

function collectSessionForm(tipo) {
  const dataStr = fmtDate(new Date());
  if (tipo === 'forca') {
    syncForcaFromDOM();
    const exercicios = smForcaExercicios.filter(e => e.exercicioId).map(e => ({
      exercicioId: e.exercicioId,
      series: e.series.filter(s => s.reps !== '' && s.reps !== undefined && s.reps !== null).map(s => ({ reps: parseFloat(s.reps) || 0, carga: parseFloat(s.carga) || 0, rpe: s.rpe ? parseFloat(s.rpe) : null }))
    })).filter(e => e.series.length);
    return { tipo, data: dataStr, exercicios, obs: document.getElementById('sm-forca-obs').value.trim(), planoDia: smDiaPrescrito ? smDiaPrescrito.nome : null };
  }
  if (tipo === 'brick') {
    const subs = smSubs;
    const activities = subs.map((sub, i) => {
      const distancia = parseFloat(document.getElementById('sm-brick-d' + i).value) || 0;
      const tempoMin = parseFloat(document.getElementById('sm-brick-t' + i).value) || 0;
      const a = { tipo: sub, distancia, tempoMin };
      if (sub === 'corrida' && distancia) a.pace = calcPace(distancia, tempoMin);
      else if (sub === 'natacao' && distancia) a.ritmo100 = calcRitmo100(distancia, tempoMin);
      else if (sub === 'bike' && tempoMin) a.velocidadeMedia = distancia / (tempoMin / 60);
      return a;
    });
    return { tipo, data: dataStr, subs, activities, obs: document.getElementById('sm-brick-obs').value.trim() };
  }
  const distancia = parseFloat(document.getElementById('sm-c-distancia').value) || 0;
  const tempoMin = parseFloat(document.getElementById('sm-c-tempo').value) || 0;
  const sessao = { tipo, data: dataStr, distancia, tempoMin, obs: document.getElementById('sm-c-obs').value.trim() };
  const tipoTreinoEl = document.getElementById('sm-c-tipotreino');
  if (tipoTreinoEl) sessao.tipoTreino = tipoTreinoEl.value;
  if (tipo === 'corrida') {
    const fc = document.getElementById('sm-c-fc').value;
    if (fc) sessao.fcMedia = parseFloat(fc);
    if (distancia > 0) sessao.pace = calcPace(distancia, tempoMin);
  } else if (tipo === 'natacao') {
    if (distancia > 0) sessao.ritmo100 = calcRitmo100(distancia, tempoMin);
  } else if (tipo === 'bike') {
    const esforcoEl = document.getElementById('sm-c-esforco');
    if (esforcoEl) sessao.esforco = parseInt(esforcoEl.value);
    if (tempoMin > 0) sessao.velocidadeMedia = distancia / (tempoMin / 60);
  }
  return sessao;
}

function duplicateLastSession() {
  const last = Object.values(cachedSessoes).filter(s => s.tipo === smTipo && s.data !== fmtDate(new Date())).sort((a, b) => new Date(b.data) - new Date(a.data))[0];
  if (!last) return;
  if (smTipo === 'brick' && last.subs) smSubs = last.subs;
  buildSessionForm(smTipo, last);
}

function validarSessao(sessao) {
  if (sessao.tipo === 'forca') return sessao.exercicios.length > 0 ? null : 'Adicione pelo menos um exercício com uma série preenchida.';
  if (sessao.tipo === 'brick') return sessao.activities.some(a => a.distancia > 0 || a.tempoMin > 0) ? null : 'Preencha distância ou tempo de ao menos um trecho.';
  return (sessao.distancia > 0 || sessao.tempoMin > 0) ? null : 'Preencha distância ou tempo.';
}

async function handleSessionSave() {
  const sessao = collectSessionForm(smTipo);
  const erro = validarSessao(sessao);
  if (erro) { document.getElementById('sm-error').textContent = erro; return; }
  document.getElementById('sm-error').textContent = '';
  sessao.criadoEm = firebase.firestore.FieldValue.serverTimestamp();
  hideModal('session-modal');
  await saveSessaoAndCelebrate(sessao);
}

async function saveSessaoAndCelebrate(sessao) {
  const ref = db.collection('users').doc(currentUser.uid).collection('sessoes').doc();
  const id = ref.id;
  cachedSessoes[id] = sessao;
  const isToday = sessao.data === fmtDate(new Date());
  const resultado = updateGamificacaoAfterSessao(sessao, isToday);
  renderAll();
  if (currentTab === 'treinos') renderTreinosTab();
  animateFeedback();
  showUndoToast(id, 'Treino registrado! +' + resultado.xpGanho + ' XP');
  await ref.set(sessao);
  await saveGamificacao();
  resultado.novasConquistas.forEach(a => celebrate(a.icon, a.nome, 'Conquista desbloqueada!'));
  if (!resultado.novasConquistas.length && resultado.subiuNivel) celebrate('\u{2B50}', 'Nível ' + gamificacao.nivel + '!', 'Continue assim!');
  else if (!resultado.novasConquistas.length && resultado.novoRank) celebrate('\u{1F3C5}', resultado.novoRank.grupoNome + ': ' + resultado.novoRank.tierNome, 'Novo rank alcançado!');
}

// ═══ Undo ═══
function showUndoToast(id, msg) {
  const toast = document.getElementById('undo-toast');
  document.getElementById('undo-msg').textContent = msg;
  toast.classList.remove('hidden');
  toast.dataset.id = id;
  if (undoTimeout) clearTimeout(undoTimeout);
  undoTimeout = setTimeout(() => { toast.classList.add('hidden'); undoTimeout = null; }, 5000);
}
async function handleUndo() {
  const toast = document.getElementById('undo-toast');
  const id = toast.dataset.id;
  if (undoTimeout) clearTimeout(undoTimeout);
  toast.classList.add('hidden');
  delete cachedSessoes[id];
  renderAll();
  if (currentTab === 'treinos') renderTreinosTab();
  await db.collection('users').doc(currentUser.uid).collection('sessoes').doc(id).delete();
}

function animateFeedback() {
  const el = document.querySelector('.streak-badge');
  el.classList.add('pulse');
  setTimeout(() => el.classList.remove('pulse'), 500);
}

// ═══ Celebração (fila) ═══
let celebQueue = [];
let celebActive = false;
function celebrate(icon, title, desc) {
  celebQueue.push({ icon, title, desc });
  if (!celebActive) processCelebQueue();
}
function processCelebQueue() {
  const next = celebQueue.shift();
  if (!next) { celebActive = false; return; }
  celebActive = true;
  const el = document.getElementById('celebration');
  document.getElementById('celeb-icon').textContent = next.icon;
  document.getElementById('celeb-title').textContent = next.title;
  document.getElementById('celeb-desc').textContent = next.desc;
  el.classList.remove('hidden');
  if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
  const advance = () => { el.classList.add('hidden'); el.removeEventListener('click', advance); setTimeout(processCelebQueue, 200); };
  const timer = setTimeout(advance, 2600);
  el.addEventListener('click', () => { clearTimeout(timer); advance(); }, { once: true });
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  GAMIFICAÇÃO — XP, ranks, streak, conquistas                   ║
// ╚══════════════════════════════════════════════════════════════╝
function getTierForPoints(pontos) {
  let tier = RANK_TIERS[0];
  for (const t of RANK_TIERS) if (pontos >= t.min) tier = t;
  return tier;
}

function atualizarStreak(dataStr) {
  if (gamificacao.ultimoDia === dataStr) return;
  const today = new Date(dataStr + 'T00:00:00');
  if (!gamificacao.ultimoDia) {
    gamificacao.streak = 1;
  } else {
    const last = new Date(gamificacao.ultimoDia + 'T00:00:00');
    const diffDays = Math.round((today - last) / 86400000);
    if (diffDays < 0) return;
    if (diffDays === 1) {
      gamificacao.streak = (gamificacao.streak || 0) + 1;
    } else {
      let gapOk = true;
      for (let i = 1; i < diffDays; i++) {
        const d = new Date(last); d.setDate(d.getDate() + i);
        if (!isRestDay(d)) {
          const wk = fmtDate(getMonday(d));
          gamificacao.descansoSemana = gamificacao.descansoSemana || {};
          if (!gamificacao.descansoSemana[wk]) gamificacao.descansoSemana[wk] = true;
          else { gapOk = false; break; }
        }
      }
      gamificacao.streak = gapOk ? (gamificacao.streak || 0) + 1 : 1;
    }
  }
  gamificacao.ultimoDia = dataStr;
}

function updateGamificacaoAfterSessao(sessao, isToday) {
  const resultado = { xpGanho: 0, novasConquistas: [], subiuNivel: false, novoRank: null };
  let xp = 0;
  if (sessao.tipo === 'forca') xp = 20;
  else if (sessao.tipo === 'corrida') xp = 15 + Math.round((sessao.distancia || 0) * 2);
  else if (sessao.tipo === 'natacao') xp = 15 + Math.round(((sessao.distancia || 0) / 1000) * 30);
  else if (sessao.tipo === 'bike') xp = 15 + Math.round((sessao.distancia || 0) * 1);
  else if (sessao.tipo === 'brick') xp = 30;
  else if (sessao.tipo === 't25') xp = 15;
  resultado.xpGanho = xp;

  const nivelAntes = gamificacao.nivel || 1;
  gamificacao.xp = (gamificacao.xp || 0) + xp;
  gamificacao.nivel = Math.floor(gamificacao.xp / 100) + 1;
  if (gamificacao.nivel > nivelAntes) resultado.subiuNivel = true;

  if (isToday) atualizarStreak(sessao.data);

  if (sessao.tipo === 'forca' && sessao.exercicios && sessao.exercicios.length) {
    gamificacao.ranksMusculares = gamificacao.ranksMusculares || {};
    const gruposTocados = new Set();
    sessao.exercicios.forEach(ex => {
      const info = cachedExercicios[ex.exercicioId];
      if (!info) return;
      gruposTocados.add(info.grupo);
      const volume = ex.series.reduce((sum, s) => sum + (s.reps * s.carga), 0);
      const maxCarga = Math.max(0, ...ex.series.map(s => s.carga));
      const r = gamificacao.ranksMusculares[info.grupo] || { pontos: 0 };
      const pontosAntes = r.pontos || 0;
      r.pontos = pontosAntes + volume + maxCarga * 5;
      gamificacao.ranksMusculares[info.grupo] = r;
      if (!resultado.novoRank && getTierForPoints(pontosAntes).id !== getTierForPoints(r.pontos).id) {
        const grupoInfo = GRUPOS_MUSCULARES.find(x => x.id === info.grupo);
        resultado.novoRank = { grupoNome: grupoInfo.nome, tierNome: getTierForPoints(r.pontos).nome };
      }
    });
    gamificacao.proximoIndiceForca = ((gamificacao.proximoIndiceForca || 0) + 1) % planoForca.sequencia.length;
  }

  if (['corrida', 'natacao', 'bike', 'brick'].includes(sessao.tipo)) {
    gamificacao.ranksDisciplinas = gamificacao.ranksDisciplinas || {};
    const addDist = (disc, km) => {
      const r = gamificacao.ranksDisciplinas[disc] || { km: 0 };
      const antes = r.km || 0;
      r.km = antes + km;
      gamificacao.ranksDisciplinas[disc] = r;
      if (!resultado.novoRank && getTierForPoints(antes * 10).id !== getTierForPoints(r.km * 10).id) {
        resultado.novoRank = { grupoNome: TIPO_LABELS[disc], tierNome: getTierRankDisciplina(disc, r.km).nome };
      }
    };
    if (sessao.tipo === 'corrida') addDist('corrida', sessao.distancia || 0);
    else if (sessao.tipo === 'bike') addDist('bike', sessao.distancia || 0);
    else if (sessao.tipo === 'natacao') addDist('natacao', (sessao.distancia || 0) / 1000);
    else if (sessao.tipo === 'brick' && sessao.activities) {
      sessao.activities.forEach(a => {
        if (a.tipo === 'corrida') addDist('corrida', a.distancia || 0);
        else if (a.tipo === 'bike') addDist('bike', a.distancia || 0);
        else if (a.tipo === 'natacao') addDist('natacao', (a.distancia || 0) / 1000);
      });
    }
  }

  resultado.novasConquistas = checkAchievements();
  return resultado;
}

function getTierRankDisciplina(disciplina, km) {
  const thresholds = DISCIPLINE_RANK_KM[disciplina];
  let idx = 0;
  thresholds.forEach((min, i) => { if (km >= min) idx = i; });
  return RANK_TIERS[idx];
}

function checkAchievements() {
  gamificacao.conquistas = gamificacao.conquistas || {};
  const novas = [];
  const sessoesArr = Object.values(cachedSessoes);
  const unlock = (id) => {
    if (gamificacao.conquistas[id]) return;
    gamificacao.conquistas[id] = { desbloqueadaEm: new Date().toISOString() };
    const def = ACHIEVEMENTS_DEFS.find(a => a.id === id);
    if (def) novas.push(def);
  };
  if (sessoesArr.some(s => s.tipo === 'corrida' && s.distancia >= 5 && s.tipoTreino !== 'intervalado')) unlock('primeira-corrida-5k');
  if (sessoesArr.some(s => s.tipo === 'corrida' && s.distancia >= 10)) unlock('dois-digitos');
  if (sessoesArr.some(s => s.tipo === 'corrida' && s.distancia >= 21)) unlock('meia-maratona');
  if (sessoesArr.some(s => s.tipo === 'brick')) unlock('primeiro-brick');
  if (sessoesArr.some(s => s.tipo === 'corrida' && s.pace && s.pace.min < 8)) unlock('pace-sub-8');
  if ((gamificacao.streak || 0) >= 30) unlock('streak-30');
  const hoje = new Date();
  const mesAtual = sessoesArr.filter(s => { const d = new Date(s.data + 'T00:00:00'); return d.getFullYear() === hoje.getFullYear() && d.getMonth() === hoje.getMonth(); });
  if (mesAtual.length >= 10) unlock('dez-treinos-mes');
  const cargasPorExercicio = {};
  let novoRecorde = false;
  sessoesArr.filter(s => s.tipo === 'forca' && s.exercicios).sort((a, b) => new Date(a.data) - new Date(b.data)).forEach(s => {
    s.exercicios.forEach(ex => {
      const maxSessao = Math.max(0, ...ex.series.map(x => x.carga));
      const atual = cargasPorExercicio[ex.exercicioId] || 0;
      if (maxSessao > atual) { if (atual > 0) novoRecorde = true; cargasPorExercicio[ex.exercicioId] = maxSessao; }
    });
  });
  if (novoRecorde) unlock('recorde-carga');
  return novas;
}

async function saveGamificacao() {
  await db.collection('users').doc(currentUser.uid).collection('gamificacao').doc('estado').set(gamificacao);
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  TAB: Treinos (histórico)                                       ║
// ╚══════════════════════════════════════════════════════════════╝
function renderTreinosTab() {
  const tipos = ['todos', 'forca', 'corrida', 'natacao', 'bike', 'brick'];
  document.getElementById('treinos-filtro').innerHTML = tipos.map(t =>
    '<button class="chip' + (treinosFiltro === t ? ' active' : '') + '" data-val="' + t + '">' + (t === 'todos' ? 'Todos' : TIPO_ICONS[t] + ' ' + TIPO_LABELS[t]) + '</button>'
  ).join('');

  const list = Object.entries(cachedSessoes)
    .filter(([id, s]) => s.tipo !== 't25')
    .filter(([id, s]) => treinosFiltro === 'todos' || s.tipo === treinosFiltro)
    .sort((a, b) => new Date(b[1].data) - new Date(a[1].data));

  const container = document.getElementById('treinos-list');
  if (!list.length) { container.innerHTML = '<p class="empty-state">Nenhum treino registrado ainda. Toque no ✓ para começar.</p>'; return; }
  container.innerHTML = list.map(([id, s]) => renderTreinoCard(id, s)).join('');
}

function renderTreinoCard(id, s) {
  let desc = '';
  if (s.tipo === 'forca') {
    const n = (s.exercicios || []).length;
    desc = n + ' exercício' + (n === 1 ? '' : 's');
  } else if (s.tipo === 'brick' && s.activities) {
    desc = s.activities.map(a => TIPO_ICONS[a.tipo] + ' ' + a.distancia + (TIPO_UNIDADE_DIST[a.tipo] || '')).join(' + ');
  } else {
    const unidade = TIPO_UNIDADE_DIST[s.tipo] || '';
    desc = (s.distancia || 0) + unidade + ' · ' + (s.tempoMin || 0) + ' min';
    if (s.pace) desc += ' · ' + s.pace.display;
    if (s.ritmo100) desc += ' · ' + s.ritmo100.display;
    if (s.velocidadeMedia) desc += ' · ' + s.velocidadeMedia.toFixed(1) + ' km/h';
  }
  return '<div class="treino-card ' + s.tipo + '">' +
    '<span class="treino-icon">' + TIPO_ICONS[s.tipo] + '</span>' +
    '<div class="treino-info"><h4>' + TIPO_LABELS[s.tipo] + '</h4><p>' + desc + '</p>' + (s.obs ? '<p>' + escapeHtml(s.obs) + '</p>' : '') + '</div>' +
    '<div class="treino-actions"><span class="treino-date">' + fmtShort(new Date(s.data + 'T00:00:00')) + '</span>' +
    '<button class="btn-icon-sm" data-dup="' + id + '" title="Duplicar">↻</button>' +
    '<button class="btn-icon-sm" data-del="' + id + '" title="Excluir">\u{1F5D1}\u{FE0F}</button></div></div>';
}

async function deleteSessao(id) {
  if (!confirm('Excluir este treino? Isso não pode ser desfeito.')) return;
  delete cachedSessoes[id];
  renderTreinosTab();
  renderAll();
  await db.collection('users').doc(currentUser.uid).collection('sessoes').doc(id).delete();
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  TAB: Saúde (bioimpedância)                                     ║
// ╚══════════════════════════════════════════════════════════════╝
function getBioOrdenado() {
  return Object.entries(cachedBio).map(([id, b]) => ({ id, ...b })).sort((a, b) => new Date(a.data) - new Date(b.data));
}

function renderSaudeTab() {
  renderSemaforos();
  renderBioCharts();
  renderBioTable();
}

function semaforoCard(cor, titulo, valor, desc) {
  return '<div class="semaforo-card ' + cor + '"><span class="semaforo-dot"></span><div class="semaforo-info"><h4>' + titulo + '</h4><p>' + desc + '</p></div><span class="semaforo-val">' + valor + '</span></div>';
}

function renderSemaforos() {
  const container = document.getElementById('semaforo-grid');
  const ordered = getBioOrdenado();
  if (!ordered.length) { container.innerHTML = '<p class="empty-state">Registre sua primeira bioimpedância para ver os indicadores.</p>'; return; }
  const last = ordered[ordered.length - 1];
  const prev = ordered.length > 1 ? ordered[ordered.length - 2] : null;
  let html = '';
  if (last.agua != null) {
    const cor = last.agua >= 55 ? 'verde' : last.agua >= 45 ? 'amarelo' : 'vermelho';
    html += semaforoCard(cor, '\u{1F4A7} Hidratação', last.agua.toFixed(1) + '%', cor === 'verde' ? 'Bom nível de água corporal' : cor === 'amarelo' ? 'Beba mais água hoje' : 'Atenção: hidratação baixa');
  }
  if (last.visceral != null) {
    const cor = last.visceral < 10 ? 'verde' : last.visceral < 15 ? 'amarelo' : 'vermelho';
    html += semaforoCard(cor, '\u{1F3AF} Gordura Visceral', String(last.visceral), cor === 'verde' ? 'Nível normal' : cor === 'amarelo' ? 'Um pouco elevado' : 'Alto — foco em cardio e dieta');
  }
  if (last.massaMuscular != null) {
    const subiu = !prev || prev.massaMuscular == null || last.massaMuscular >= prev.massaMuscular;
    html += semaforoCard(subiu ? 'verde' : 'amarelo', '\u{1F4AA} Massa Muscular', last.massaMuscular.toFixed(1) + ' kg', subiu ? 'Subindo — continue assim!' : 'Caiu desde o último registro');
  }
  container.innerHTML = html || '<p class="empty-state">Preencha peso, água, visceral e massa muscular para ver os indicadores.</p>';
}

function renderBioTable() {
  const ordered = getBioOrdenado().slice().reverse();
  const container = document.getElementById('bio-table');
  if (!ordered.length) { container.innerHTML = '<p class="empty-state">Nenhum registro ainda.</p>'; return; }
  container.innerHTML = ordered.map(b => (
    '<div class="bio-row" data-id="' + b.id + '">' +
    '<span class="bio-row-date">' + fmtShort(new Date(b.data + 'T00:00:00')) + '</span>' +
    '<div class="bio-row-vals">' +
    '<span><b>' + (b.peso != null ? b.peso : '—') + '</b> kg</span>' +
    (b.gordura != null ? '<span><b>' + b.gordura + '</b>% gord</span>' : '') +
    (b.massaMuscular != null ? '<span><b>' + b.massaMuscular + '</b> kg músc</span>' : '') +
    (b.agua != null ? '<span><b>' + b.agua + '</b>% água</span>' : '') +
    (b.visceral != null ? '<span>visc <b>' + b.visceral + '</b></span>' : '') +
    '</div></div>'
  )).join('');
}

function showBioModal(id) {
  editingBioId = id;
  const b = id ? cachedBio[id] : null;
  document.getElementById('bio-modal-title').textContent = id ? 'Editar Registro' : 'Registrar Bioimpedância';
  document.getElementById('bio-data').value = b ? b.data : fmtDate(new Date());
  document.getElementById('bio-peso').value = b && b.peso != null ? b.peso : '';
  document.getElementById('bio-gordura').value = b && b.gordura != null ? b.gordura : '';
  document.getElementById('bio-massa').value = b && b.massaMuscular != null ? b.massaMuscular : '';
  document.getElementById('bio-agua').value = b && b.agua != null ? b.agua : '';
  document.getElementById('bio-visceral').value = b && b.visceral != null ? b.visceral : '';
  document.getElementById('bio-obs').value = b && b.obs ? b.obs : '';
  document.getElementById('bio-delete').classList.toggle('hidden', !id);
  document.getElementById('bio-modal').classList.remove('hidden');
}

async function handleBioSave() {
  const data = document.getElementById('bio-data').value || fmtDate(new Date());
  const rec = {
    data,
    peso: parseFloat(document.getElementById('bio-peso').value) || null,
    gordura: parseFloat(document.getElementById('bio-gordura').value) || null,
    massaMuscular: parseFloat(document.getElementById('bio-massa').value) || null,
    agua: parseFloat(document.getElementById('bio-agua').value) || null,
    visceral: parseFloat(document.getElementById('bio-visceral').value) || null,
    obs: document.getElementById('bio-obs').value.trim()
  };
  const id = editingBioId || db.collection('users').doc(currentUser.uid).collection('bioimpedancia').doc().id;
  cachedBio[id] = rec;
  hideModal('bio-modal');
  renderSaudeTab();
  await db.collection('users').doc(currentUser.uid).collection('bioimpedancia').doc(id).set(rec);
}

async function handleBioDelete() {
  if (!editingBioId) return;
  if (!confirm('Excluir este registro?')) return;
  const id = editingBioId;
  delete cachedBio[id];
  hideModal('bio-modal');
  renderSaudeTab();
  await db.collection('users').doc(currentUser.uid).collection('bioimpedancia').doc(id).delete();
}

// ═══ Chart.js helpers ═══
function destroyChart(id) { if (chartInstances[id]) { chartInstances[id].destroy(); delete chartInstances[id]; } }
function chartBaseOptions(extra) {
  return Object.assign({
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { labels: { color: '#9898b8', boxWidth: 12, font: { size: 11 } } } },
    scales: {
      x: { ticks: { color: '#585878', font: { size: 10 } }, grid: { color: 'rgba(255,255,255,0.05)' } },
      y: { ticks: { color: '#585878', font: { size: 10 } }, grid: { color: 'rgba(255,255,255,0.05)' } }
    }
  }, extra || {});
}
function makeLineChart(canvasId, labels, datasets, extraOpts) {
  destroyChart(canvasId);
  const el = document.getElementById(canvasId);
  if (!el) return;
  chartInstances[canvasId] = new Chart(el.getContext('2d'), { type: 'line', data: { labels, datasets }, options: chartBaseOptions(extraOpts) });
}
function makeBarChart(canvasId, labels, datasets, extraOpts) {
  destroyChart(canvasId);
  const el = document.getElementById(canvasId);
  if (!el) return;
  chartInstances[canvasId] = new Chart(el.getContext('2d'), { type: 'bar', data: { labels, datasets }, options: chartBaseOptions(extraOpts) });
}

function renderBioCharts() {
  const ordered = getBioOrdenado();
  const labels = ordered.map(b => fmtShort(new Date(b.data + 'T00:00:00')));
  makeLineChart('chart-peso', labels, [
    { label: 'Peso (kg)', data: ordered.map(b => b.peso), borderColor: '#ff6b35', backgroundColor: 'rgba(255,107,53,0.15)', tension: 0.3, fill: true }
  ]);
  makeLineChart('chart-composicao', labels, [
    { label: '% Gordura', data: ordered.map(b => b.gordura), borderColor: '#ff5252', tension: 0.3 },
    { label: 'Massa Muscular (kg)', data: ordered.map(b => b.massaMuscular), borderColor: '#00e676', tension: 0.3 },
    { label: 'Água (%)', data: ordered.map(b => b.agua), borderColor: '#4facfe', tension: 0.3 },
    { label: 'Visceral', data: ordered.map(b => b.visceral), borderColor: '#ffca28', tension: 0.3 }
  ]);
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  TAB: Evolução (XP, ranks, conquistas, provas, gráficos)        ║
// ╚══════════════════════════════════════════════════════════════╝
function renderEvolucaoTab() {
  document.getElementById('ev-nivel').textContent = gamificacao.nivel || 1;
  const xpNoNivel = (gamificacao.xp || 0) % 100;
  document.getElementById('ev-xp-text').textContent = xpNoNivel + ' / 100 XP';
  requestAnimationFrame(() => { document.getElementById('ev-xp-fill').style.width = xpNoNivel + '%'; });

  if (profile.modoIronman && planoIronman) {
    const totals = calcDistanciasAcumuladas();
    const totalKm = totals.natacao + totals.bike + totals.corrida;
    const metaFinal = 3.86 + 180 + 42;
    const pct = Math.min(100, Math.round((totalKm / metaFinal) * 100));
    document.getElementById('journey-fill').style.width = pct + '%';
    document.getElementById('journey-text').textContent = totalKm.toFixed(1) + ' km acumulados rumo aos ' + metaFinal.toFixed(0) + ' km do Full Ironman (' + pct + '%)';
  }

  renderRanksMusculares();
  if (profile.modoIronman) renderRanksDisciplinas();
  renderAchievements();
  if (profile.modoIronman) renderRacesScreen();
  renderEvolucaoCharts();
}

function renderRanksMusculares() {
  const container = document.getElementById('ranks-musculares');
  container.innerHTML = GRUPOS_MUSCULARES.map(g => {
    const pontos = (gamificacao.ranksMusculares && gamificacao.ranksMusculares[g.id] && gamificacao.ranksMusculares[g.id].pontos) || 0;
    const tier = getTierForPoints(pontos);
    const tierIdx = RANK_TIERS.findIndex(t => t.id === tier.id);
    const proximo = RANK_TIERS[tierIdx + 1];
    const pct = proximo ? Math.min(100, Math.round(((pontos - tier.min) / (proximo.min - tier.min)) * 100)) : 100;
    return '<div class="rank-card"><div class="rank-icon">' + g.icon + '</div><div class="rank-group-name">' + g.nome + '</div>' +
      '<div class="rank-tier-name" style="color:' + tier.color + '">' + tier.nome + '</div>' +
      '<div class="rank-bar-bg"><div class="rank-bar-fill" style="width:' + pct + '%;background:' + tier.color + '"></div></div></div>';
  }).join('');
}

function getTierRankDisciplina(disciplina, km) {
  const thresholds = DISCIPLINE_RANK_KM[disciplina];
  let idx = 0;
  thresholds.forEach((min, i) => { if (km >= min) idx = i; });
  return RANK_TIERS[idx];
}

function renderRanksDisciplinas() {
  const discs = ['natacao', 'bike', 'corrida'];
  const container = document.getElementById('ranks-disciplinas');
  container.innerHTML = discs.map(d => {
    const km = (gamificacao.ranksDisciplinas && gamificacao.ranksDisciplinas[d] && gamificacao.ranksDisciplinas[d].km) || 0;
    const tier = getTierRankDisciplina(d, km);
    const thresholds = DISCIPLINE_RANK_KM[d];
    const tierIdx = RANK_TIERS.findIndex(t => t.id === tier.id);
    const proximoMin = thresholds[tierIdx + 1];
    const pct = proximoMin ? Math.min(100, Math.round(((km - thresholds[tierIdx]) / (proximoMin - thresholds[tierIdx])) * 100)) : 100;
    return '<div class="rank-card"><div class="rank-icon">' + TIPO_ICONS[d] + '</div><div class="rank-group-name">' + TIPO_LABELS[d] + '</div>' +
      '<div class="rank-tier-name" style="color:' + tier.color + '">' + tier.nome + '</div>' +
      '<div class="rank-bar-bg"><div class="rank-bar-fill" style="width:' + pct + '%;background:' + tier.color + '"></div></div>' +
      '<p style="font-size:11px;color:var(--text-muted);margin-top:6px">' + km.toFixed(1) + ' km acumulados</p></div>';
  }).join('');
}

function renderAchievements() {
  const container = document.getElementById('achievements-list');
  container.innerHTML = ACHIEVEMENTS_DEFS.map(a => {
    const data = (gamificacao.conquistas || {})[a.id];
    const done = !!data;
    return '<div class="achieve-card ' + (done ? 'completed' : 'available') + '">' +
      '<span class="achieve-icon">' + (done ? '✓' : a.icon) + '</span>' +
      '<div class="achieve-info"><h4>' + a.nome + '</h4><p class="achieve-desc">' + a.desc + '</p>' +
      (done && data.desbloqueadaEm ? '<span class="achieve-date">' + fmtShort(new Date(data.desbloqueadaEm)) + '</span>' : '') +
      '</div></div>';
  }).join('');
}

function buildProvaCardHTML(id, r) {
  const done = !!r.resultado;
  const dias = daysUntil(r.data);
  let countdown;
  if (done) countdown = 'Concluída';
  else if (r.confirmada) countdown = dias < 0 ? 'Aguardando resultado' : dias === 0 ? 'HOJE!' : dias + ' dias';
  else countdown = 'A confirmar';
  return '<div class="race-card ' + (done ? 'completed' : '') + '" data-id="' + id + '">' +
    '<div class="race-top"><div><h4 class="race-name">' + r.nome + '</h4><p class="race-loc">' + (r.local || '') + '</p></div>' +
    '<div class="race-countdown ' + (r.confirmada ? 'confirmed' : '') + '">' + countdown + '</div></div>' +
    '<div class="race-mid"><span class="race-dist">' + (r.distancias || '') + '</span></div>' +
    (r.link ? '<div class="race-actions"><a href="' + r.link + '" target="_blank" rel="noopener" class="btn-race-link">Inscrever-se ↗</a></div>' : '') +
    (done ? '<div class="race-result">' + (r.resultado.tempo ? '<span>⏱ ' + r.resultado.tempo + '</span>' : '') + (r.resultado.pace ? '<span>' + r.resultado.pace + '</span>' : '') + (r.resultado.colocacao ? '<span>\u{1F3C5} ' + r.resultado.colocacao + '</span>' : '') + '</div>' : '') +
    '</div>';
}

function renderRacesScreen() {
  const container = document.getElementById('races-list');
  const lista = Object.entries(cachedProvas).sort((a, b) => new Date(a[1].data) - new Date(b[1].data));
  container.innerHTML = lista.map(([id, r]) => buildProvaCardHTML(id, r)).join('') || '<p class="empty-state">Nenhuma prova cadastrada.</p>';
}

function renderProvasManage() {
  const container = document.getElementById('provas-manage-list');
  const lista = Object.entries(cachedProvas).sort((a, b) => new Date(a[1].data) - new Date(b[1].data));
  container.innerHTML = lista.map(([id, r]) => buildProvaCardHTML(id, r)).join('') || '<p class="empty-state">Nenhuma prova cadastrada.</p>';
}

function showProvaModal(id) {
  editingProvaId = id;
  const r = id ? cachedProvas[id] : null;
  document.getElementById('prova-modal-title').textContent = id ? 'Editar Prova' : 'Nova Prova';
  document.getElementById('prova-nome').value = r ? r.nome : '';
  document.getElementById('prova-data').value = r ? r.data : '';
  document.getElementById('prova-distancias').value = r ? (r.distancias || '') : '';
  document.getElementById('prova-local').value = r ? (r.local || '') : '';
  document.getElementById('prova-tempo').value = r && r.resultado ? (r.resultado.tempo || '') : '';
  document.getElementById('prova-pace').value = r && r.resultado ? (r.resultado.pace || '') : '';
  document.getElementById('prova-colocacao').value = r && r.resultado ? (r.resultado.colocacao || '') : '';
  document.getElementById('prova-sensacao').value = r && r.resultado ? (r.resultado.sensacao || '') : '';
  document.getElementById('prova-delete').classList.toggle('hidden', !id);
  document.getElementById('prova-modal').classList.remove('hidden');
}

async function handleProvaSave() {
  const nome = document.getElementById('prova-nome').value.trim();
  if (!nome) return;
  const tempo = document.getElementById('prova-tempo').value.trim();
  const pace = document.getElementById('prova-pace').value.trim();
  const colocacao = document.getElementById('prova-colocacao').value.trim();
  const sensacao = document.getElementById('prova-sensacao').value.trim();
  const temResultado = !!(tempo || pace || colocacao || sensacao);
  const existente = editingProvaId ? cachedProvas[editingProvaId] : null;
  const rec = {
    nome,
    data: document.getElementById('prova-data').value || (existente && existente.data) || fmtDate(new Date()),
    distancias: document.getElementById('prova-distancias').value.trim(),
    local: document.getElementById('prova-local').value.trim(),
    confirmada: existente ? existente.confirmada !== false : true,
    link: existente ? (existente.link || null) : null,
    achievementId: existente ? (existente.achievementId || null) : null,
    resultado: temResultado ? { tempo, pace, colocacao, sensacao } : null
  };
  const id = editingProvaId || db.collection('users').doc(currentUser.uid).collection('provas').doc().id;
  cachedProvas[id] = rec;
  hideModal('prova-modal');
  if (temResultado && rec.achievementId && !(gamificacao.conquistas || {})[rec.achievementId]) {
    gamificacao.conquistas = gamificacao.conquistas || {};
    gamificacao.conquistas[rec.achievementId] = { desbloqueadaEm: new Date().toISOString() };
    const def = ACHIEVEMENTS_DEFS.find(a => a.id === rec.achievementId);
    if (def) celebrate(def.icon, def.nome, 'Conquista desbloqueada!');
    await saveGamificacao();
  }
  renderRacesScreen();
  renderProvasManage();
  renderNextCards();
  await db.collection('users').doc(currentUser.uid).collection('provas').doc(id).set(rec);
}

async function handleProvaDelete() {
  if (!editingProvaId) return;
  if (!confirm('Excluir esta prova?')) return;
  const id = editingProvaId;
  delete cachedProvas[id];
  hideModal('prova-modal');
  renderRacesScreen();
  renderProvasManage();
  renderNextCards();
  await db.collection('users').doc(currentUser.uid).collection('provas').doc(id).delete();
}

function renderEvolucaoCharts() {
  renderVolumeChart();
  renderCorridaChart();
  if (profile.modoIronman) { renderNatacaoChart(); renderBikeChart(); }
  renderExercicioSelect();
  renderCargaChart();
}

function renderVolumeChart() {
  const semanas = [];
  const hoje = new Date();
  const monday = getMonday(hoje);
  for (let i = 7; i >= 0; i--) {
    const inicio = new Date(monday); inicio.setDate(inicio.getDate() - i * 7);
    const fim = new Date(inicio); fim.setDate(fim.getDate() + 6);
    semanas.push({ inicio, fim, volume: 0 });
  }
  Object.values(cachedSessoes).forEach(s => {
    if (s.tipo !== 'forca' || !s.exercicios) return;
    const d = new Date(s.data + 'T00:00:00');
    const semana = semanas.find(sem => d >= sem.inicio && d <= sem.fim);
    if (!semana) return;
    s.exercicios.forEach(ex => { semana.volume += ex.series.reduce((sum, x) => sum + (x.reps * x.carga), 0); });
  });
  makeBarChart('chart-volume', semanas.map(s => fmtShort(s.inicio)), [
    { label: 'Volume semanal de força (kg)', data: semanas.map(s => Math.round(s.volume)), backgroundColor: '#ab47ff' }
  ]);
}

function renderCorridaChart() {
  const corridas = Object.values(cachedSessoes).filter(s => s.tipo === 'corrida' && s.pace).sort((a, b) => new Date(a.data) - new Date(b.data));
  makeLineChart('chart-corrida', corridas.map(s => fmtShort(new Date(s.data + 'T00:00:00'))), [
    { label: 'Pace (min/km)', data: corridas.map(s => +s.pace.min.toFixed(2)), borderColor: '#ff9800', tension: 0.3 },
    { label: 'Distância (km)', data: corridas.map(s => s.distancia), borderColor: '#4facfe', tension: 0.3, yAxisID: 'y1' }
  ], { scales: { y1: { position: 'right', ticks: { color: '#585878' }, grid: { drawOnChartArea: false } } } });
}

function renderNatacaoChart() {
  const sessoes = Object.values(cachedSessoes).filter(s => s.tipo === 'natacao' && s.ritmo100).sort((a, b) => new Date(a.data) - new Date(b.data));
  makeLineChart('chart-natacao', sessoes.map(s => fmtShort(new Date(s.data + 'T00:00:00'))), [
    { label: 'Ritmo /100m (min)', data: sessoes.map(s => +s.ritmo100.min.toFixed(2)), borderColor: '#00e676', tension: 0.3 },
    { label: 'Distância (m)', data: sessoes.map(s => s.distancia), borderColor: '#4facfe', tension: 0.3, yAxisID: 'y1' }
  ], { scales: { y1: { position: 'right', ticks: { color: '#585878' }, grid: { drawOnChartArea: false } } } });
}

function renderBikeChart() {
  const sessoes = Object.values(cachedSessoes).filter(s => s.tipo === 'bike' && s.velocidadeMedia).sort((a, b) => new Date(a.data) - new Date(b.data));
  makeLineChart('chart-bike', sessoes.map(s => fmtShort(new Date(s.data + 'T00:00:00'))), [
    { label: 'Velocidade média (km/h)', data: sessoes.map(s => +s.velocidadeMedia.toFixed(1)), borderColor: '#e040fb', tension: 0.3 },
    { label: 'Distância (km)', data: sessoes.map(s => s.distancia), borderColor: '#4facfe', tension: 0.3, yAxisID: 'y1' }
  ], { scales: { y1: { position: 'right', ticks: { color: '#585878' }, grid: { drawOnChartArea: false } } } });
}

function renderExercicioSelect() {
  const sel = document.getElementById('chart-exercicio-select');
  const idsUsados = new Set();
  Object.values(cachedSessoes).forEach(s => { if (s.tipo === 'forca' && s.exercicios) s.exercicios.forEach(e => idsUsados.add(e.exercicioId)); });
  const anterior = sel.value;
  sel.innerHTML = Array.from(idsUsados).map(id => '<option value="' + id + '">' + (cachedExercicios[id] ? cachedExercicios[id].nome : id) + '</option>').join('') || '<option value="">Nenhum dado ainda</option>';
  if (anterior && idsUsados.has(anterior)) sel.value = anterior;
  if (!sel.dataset.bound) { sel.addEventListener('change', renderCargaChart); sel.dataset.bound = '1'; }
}

function renderCargaChart() {
  const sel = document.getElementById('chart-exercicio-select');
  const id = sel.value;
  if (!id) { destroyChart('chart-carga'); return; }
  const historico = Object.values(cachedSessoes)
    .filter(s => s.tipo === 'forca' && s.exercicios)
    .map(s => { const ex = s.exercicios.find(e => e.exercicioId === id); if (!ex) return null; return { data: s.data, maxCarga: Math.max(0, ...ex.series.map(x => x.carga)) }; })
    .filter(Boolean).sort((a, b) => new Date(a.data) - new Date(b.data));
  makeLineChart('chart-carga', historico.map(h => fmtShort(new Date(h.data + 'T00:00:00'))), [
    { label: 'Carga máxima (kg)', data: historico.map(h => h.maxCarga), borderColor: '#ffd700', tension: 0.3, fill: true, backgroundColor: 'rgba(255,215,0,0.1)' }
  ]);
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  TAB: Mais (perfil, planos, export/import)                      ║
// ╚══════════════════════════════════════════════════════════════╝
function renderMaisTab() {
  document.getElementById('cfg-nome').value = profile.nome || '';
  document.querySelectorAll('#cfg-objetivo .option-btn').forEach(b => b.classList.toggle('selected', b.dataset.val === profile.objetivo));
  document.getElementById('cfg-peso').value = profile.peso || '';
  document.getElementById('cfg-altura').value = profile.altura || '';
  document.getElementById('plan-forca-info').textContent = planoForca ? ('\u{1F4AA} ' + planoForca.nome + ' — ' + planoForca.duracaoSemanas + ' semanas, dias: ' + planoForca.diasSemana.map(d => DAY_NAMES[d]).join('/')) : 'Nenhum plano de força carregado.';
  document.getElementById('plan-ironman-info').textContent = planoIronman ? ('\u{1F3C6} ' + planoIronman.nome + ' — início em ' + fmtShort(new Date(planoIronman.inicio + 'T00:00:00'))) : '';
  if (profile.modoIronman) renderProvasManage();
}

// ═══ Exportação / Importação ═══
function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function exportAllJSON() {
  const data = { profile, bioimpedancia: cachedBio, exercicios: cachedExercicios, sessoes: cachedSessoes, planos: { forca: planoForca, ironman: planoIronman }, provas: cachedProvas, gamificacao };
  downloadFile('ironfit-dados-' + fmtDate(new Date()) + '.json', JSON.stringify(data, null, 2), 'application/json');
}

function exportSessoesCSV() {
  const rows = [['tipo', 'data', 'distancia', 'tempoMin', 'metrica', 'exercicios', 'obs']];
  Object.values(cachedSessoes).forEach(s => {
    let metrica = '';
    if (s.pace) metrica = s.pace.display; else if (s.ritmo100) metrica = s.ritmo100.display; else if (s.velocidadeMedia) metrica = s.velocidadeMedia.toFixed(1) + ' km/h';
    let exDesc = '';
    if (s.tipo === 'forca' && s.exercicios) exDesc = s.exercicios.map(e => (cachedExercicios[e.exercicioId] ? cachedExercicios[e.exercicioId].nome : e.exercicioId) + ':' + e.series.map(x => x.reps + 'x' + x.carga + 'kg').join('/')).join(' | ');
    rows.push([s.tipo, s.data, s.distancia || '', s.tempoMin || '', metrica, exDesc, (s.obs || '').replace(/\n/g, ' ')]);
  });
  const csv = rows.map(r => r.map(v => '"' + String(v).replace(/"/g, '""') + '"').join(',')).join('\n');
  downloadFile('ironfit-sessoes-' + fmtDate(new Date()) + '.csv', csv, 'text/csv');
}

function exportPlanos() {
  const data = { forca: planoForca, ironman: planoIronman };
  downloadFile('ironfit-planos-' + fmtDate(new Date()) + '.json', JSON.stringify(data, null, 2), 'application/json');
}

function showImportModal() {
  document.getElementById('import-modal-title').textContent = 'Importar Plano (JSON)';
  document.getElementById('import-textarea').value = '';
  document.getElementById('import-error').textContent = '';
  document.getElementById('import-modal').classList.remove('hidden');
}

async function handleImportValidate() {
  const raw = document.getElementById('import-textarea').value.trim();
  const errEl = document.getElementById('import-error');
  let data;
  try { data = JSON.parse(raw); } catch (e) { errEl.textContent = 'JSON inválido: ' + e.message; return; }
  try {
    let importou = false;
    if (data.forca || data.tipo === 'forca') {
      const plano = data.forca || data;
      if (!plano.nome || !plano.diasSemana || !plano.sequencia) throw new Error('Plano de força precisa de nome, diasSemana e sequencia');
      const rec = { tipo: 'forca', ...plano };
      await db.collection('users').doc(currentUser.uid).collection('planos').doc('forca-anatoly').set(rec);
      planoForca = { id: 'forca-anatoly', ...rec };
      importou = true;
    }
    if (data.ironman || data.tipo === 'ironman') {
      const plano = data.ironman || data;
      if (!plano.nome || !plano.inicio || !plano.fases) throw new Error('Plano Ironman precisa de nome, inicio e fases');
      const rec = { tipo: 'ironman', ...plano };
      await db.collection('users').doc(currentUser.uid).collection('planos').doc('ironman-2027').set(rec);
      planoIronman = { id: 'ironman-2027', ...rec };
      importou = true;
    }
    if (!importou) throw new Error('JSON precisa ter tipo "forca" ou "ironman" (ou chaves forca/ironman)');
    hideModal('import-modal');
    renderMaisTab();
  } catch (e) {
    errEl.textContent = e.message;
  }
}

// ═══ Helpers ═══
function escapeHtml(str) { const d = document.createElement('div'); d.textContent = str == null ? '' : str; return d.innerHTML; }
function escapeAttr(str) { return String(str == null ? '' : str).replace(/"/g, '&quot;'); }
function fmtDate(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
function fmtDateDisplay(d) { return DAY_NAMES[d.getDay()] + ', ' + d.getDate() + ' de ' + MONTH_NAMES[d.getMonth()]; }
function fmtShort(d) { return d.getDate() + ' ' + MONTH_NAMES[d.getMonth()].slice(0, 3) + ' ' + d.getFullYear(); }
function getMonday(d) { const date = new Date(d); const day = date.getDay(); date.setDate(date.getDate() - day + (day === 0 ? -6 : 1)); date.setHours(0, 0, 0, 0); return date; }
function daysUntil(dateStr) { const target = new Date(dateStr + 'T00:00:00'); const today = new Date(); today.setHours(0, 0, 0, 0); return Math.round((target - today) / 86400000); }
