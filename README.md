# IronFit — Treino & Evolução

PWA single-page (`index.html` + `app.js` + `style.css`) para 3 usuários (Rafael, esposa, cunhado), unificando treino de força (estilo Anatoly), plano Ironman 2027 (só modo Ironman), bioimpedância e gamificação. Firebase (Auth + Firestore) como backend, sem build step.

## 1. Configurar o Firebase

O projeto já usa o Firebase existente **ironman-rafael** (config em `app.js`, topo do arquivo, bloco `firebaseConfig`). Se precisar trocar de projeto, substitua esse bloco pelas credenciais do seu projeto (Console Firebase → Configurações do projeto → SDK do app da Web).

No Console Firebase:

1. **Authentication** → Sign-in method → habilite **Email/senha**.
2. **Firestore Database** → crie o banco (modo produção).
3. **Regras do Firestore** → cole o conteúdo de [`firestore.rules`](firestore.rules):

   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /users/{userId}/{document=**} {
         allow read, write: if request.auth != null && request.auth.uid == userId;
       }
     }
   }
   ```

   Isso garante que cada usuário só leia/escreva os próprios dados em `users/{uid}/...`.

## 2. Estrutura de dados (criada automaticamente no primeiro login)

```
users/{uid}/profile/data          perfil (nome, objetivo, modoIronman, peso, altura, idade, sexo)
users/{uid}/bioimpedancia/{id}     registros de bioimpedância
users/{uid}/exercicios/{id}        biblioteca de exercícios (padrão + customizados)
users/{uid}/sessoes/{id}           treinos (campo tipo: forca|corrida|natacao|bike|brick|t25)
users/{uid}/planos/{id}            planos (forca-anatoly, ironman-2027) em JSON editável
users/{uid}/provas/{id}            calendário de provas (só modo Ironman)
users/{uid}/gamificacao/estado     xp, nível, streak, ranks, conquistas
```

Ao criar a conta, o app já popula:
- Plano de força **Anatoly** (todos os usuários) — 6 semanas, Seg/Qua/Sex.
- Se o usuário escolher **Modo Ironman** no cadastro: plano Ironman de 5 fases (Base → Full Ironman), calendário de provas e a baseline de corrida do Rafael (5 km em 45:06).

## 3. Rodar localmente

Não há build. Basta servir os arquivos estáticos, por exemplo:

```
python -m http.server 3000
```

E abrir `http://localhost:3000`.

## 4. Publicar no GitHub Pages

1. Commit e push dos arquivos (`index.html`, `app.js`, `style.css`, `manifest.json`, `sw.js`, `icons/`, `firestore.rules`) para o repositório.
2. No GitHub: **Settings → Pages → Source: branch `main` (ou `master`), pasta `/root`**.
3. Aguarde o deploy (alguns minutos) e acesse a URL gerada (`https://<usuario>.github.io/<repo>/`).
4. No Console Firebase → Authentication → Settings → **Domínios autorizados**, adicione o domínio do GitHub Pages.

### Atualizações futuras

O app é um PWA com service worker (`sw.js`) cache-first. Sempre que publicar uma nova versão, **incremente a constante `CACHE`** no topo de `sw.js` (ex.: `ironfit-v2`) — isso força o navegador a buscar os arquivos novos e descartar o cache antigo. Sem isso, quem já instalou o app pode ficar preso numa versão antiga.

## 5. Fluxo de exportar/revisar/importar planos

Na aba **Mais**:
- **Exportar plano (JSON)** baixa o plano de força e o plano Ironman atuais.
- Cole o JSON numa conversa com IA para revisão/ajuste, peça o plano atualizado de volta.
- **Importar plano (JSON)** valida e salva o novo plano (aceita um objeto com chave `forca` e/ou `ironman`, ou um objeto único com `tipo: "forca"` / `tipo: "ironman"`).

Formato mínimo esperado:

```jsonc
// Força
{ "tipo": "forca", "nome": "...", "duracaoSemanas": 6, "diasSemana": [1,3,5], "sequencia": [ { "nome": "...", "exercicios": [...], "mobilidade": [...] } ] }

// Ironman
{ "tipo": "ironman", "nome": "...", "inicio": "2026-04-27", "fases": [ { "id": 1, "nome": "...", "inicioMes": 0, "fimMes": 3, "cor": "#4facfe", "forcaDias": [1,4], "schedule": { "0": {...}, "1": {...} }, "metas": [...] } ] }
```

## 6. Decisões e simplificações assumidas

- **Modo Ironman** é uma opção de objetivo que qualquer usuário pode escolher no perfil (não há trava por e-mail) — na prática, apenas o Rafael deve selecioná-la.
- **Dias de força no híbrido Ironman**: cada fase define `forcaDias` (dias da semana em que a sessão de força Anatoly é somada ao treino da fase). Ajustável editando o plano Ironman.
- **Ranks por disciplina** (natação/bike/corrida) usam distância acumulada como critério principal; o pace/ritmo aparece nos gráficos e no card do rank como reforço motivacional, mas não altera o tier diretamente.
- **Streak**: quebra apenas se um dia *prescrito* (força ou fase Ironman) for perdido sem usar a proteção semanal de 1 descanso extra. Sessões registradas com data retroativa (diferente de hoje) não recalculam o streak.
- **Undo** (5s após registrar) remove a sessão do Firestore, mas não reverte XP/ranks/streak já aplicados — pensado para desfazer toques duplos, não para estorno contábil.
