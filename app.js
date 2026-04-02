'use strict';

// === Data ===
const LETTERS = [
  { char: 'א', name: 'אָלֶף',   display: 'אלף',   words: [{ word: 'אַרְנָב', emoji: '🐰' }, { word: 'אֲרִי', emoji: '🦁' }, { word: 'אֶצְבַּע', emoji: '☝️' }] },
  { char: 'ב', name: 'בֵּית',   display: 'בית',   words: [{ word: 'בַּיִת', emoji: '🏠' }, { word: 'בֵּיצָה', emoji: '🥚' }, { word: 'בָּנָנָה', emoji: '🍌' }] },
  { char: 'ג', name: 'גִּימֶל', display: 'גימל',  words: [{ word: 'גֶּזֶר', emoji: '🥕' }, { word: 'גְּמַל', emoji: '🐪' }, { word: 'גַּבָּאי', emoji: '👨' }] },
  { char: 'ד', name: 'דָּלֶת',  display: 'דלת',   words: [{ word: 'דָּג', emoji: '🐟' }, { word: 'דּוּב', emoji: '🐻' }, { word: 'דֶּלֶת', emoji: '🚪' }] },
  { char: 'ה', name: 'הֵא',     display: 'הא',    words: [{ word: 'הַר', emoji: '⛰️' }, { word: 'הֶדְיוֹט', emoji: '🤷' }, { word: 'הִיפּוֹ', emoji: '🦛' }] },
  { char: 'ו', name: 'וָו',     display: 'וו',    words: [{ word: 'וֶרֶד', emoji: '🌹' }, { word: 'וָנִילָה', emoji: '🍦' }, { word: 'וִילוֹן', emoji: '🪟' }] },
  { char: 'ז', name: 'זַיִן',   display: 'זין',   words: [{ word: 'זְבוּב', emoji: '🪰' }, { word: 'זֵיתִים', emoji: '🫒' }, { word: 'זִרָּף', emoji: '🦒' }] },
  { char: 'ח', name: 'חֵית',    display: 'חית',   words: [{ word: 'חָתוּל', emoji: '🐱' }, { word: 'חֶמֶר', emoji: '🐴' }, { word: 'חֲמוֹר', emoji: '🫏' }] },
  { char: 'ט', name: 'טֵית',    display: 'טית',   words: [{ word: 'טִיל', emoji: '🚀' }, { word: 'טַבַּעַת', emoji: '💍' }, { word: 'טֵלֶפוֹן', emoji: '📞' }] },
  { char: 'י', name: 'יוֹד',    display: 'יוד',   words: [{ word: 'יֶלֶד', emoji: '👦' }, { word: 'יַלְדָּה', emoji: '👧' }, { word: 'יָם', emoji: '🌊' }] },
  { char: 'כ', name: 'כַּף',    display: 'כף',    words: [{ word: 'כֶּלֶב', emoji: '🐕' }, { word: 'כּוֹכָב', emoji: '⭐' }, { word: 'כַּדּוּר', emoji: '⚽' }] },
  { char: 'ל', name: 'לָמֶד',   display: 'למד',   words: [{ word: 'לֵב', emoji: '❤️' }, { word: 'לִימוֹן', emoji: '🍋' }, { word: 'לַיִל', emoji: '🌙' }] },
  { char: 'מ', name: 'מֵם',     display: 'מם',    words: [{ word: 'מְנוֹרָה', emoji: '🕎' }, { word: 'מַיִם', emoji: '💧' }, { word: 'מָנְגּוֹ', emoji: '🥭' }] },
  { char: 'נ', name: 'נוּן',    display: 'נון',   words: [{ word: 'נָחָשׁ', emoji: '🐍' }, { word: 'נֵר', emoji: '🕯️' }, { word: 'נָמֵר', emoji: '🐆' }] },
  { char: 'ס', name: 'סָמֶךְ',  display: 'סמך',   words: [{ word: 'סוּס', emoji: '🐎' }, { word: 'סִפְרִייָה', emoji: '📚' }, { word: 'סְנוּנִית', emoji: '🐦' }] },
  { char: 'ע', name: 'עַיִן',   display: 'עין',   words: [{ word: 'עֵץ', emoji: '🌳' }, { word: 'עַכָּבִישׁ', emoji: '🕷️' }, { word: 'עֵינַיִם', emoji: '👀' }] },
  { char: 'פ', name: 'פֵּא',    display: 'פא',    words: [{ word: 'פֶּרֶח', emoji: '🌸' }, { word: 'פִּיל', emoji: '🐘' }, { word: 'פָּרָה', emoji: '🐄' }] },
  { char: 'צ', name: 'צָדִי',   display: 'צדי',   words: [{ word: 'צִפּוֹר', emoji: '🐦' }, { word: 'צָב', emoji: '🐢' }, { word: 'צֶמֶח', emoji: '🌱' }] },
  { char: 'ק', name: 'קוֹף',    display: 'קוף',   words: [{ word: 'קוֹף', emoji: '🐒' }, { word: 'קַרְנָף', emoji: '🦏' }, { word: 'קִירוֹת', emoji: '🧱' }] },
  { char: 'ר', name: 'רֵישׁ',   display: 'ריש',   words: [{ word: 'רִמּוֹן', emoji: '💣' }, { word: 'רַגְלַיִם', emoji: '🦵' }, { word: 'רוּחַ', emoji: '💨' }] },
  { char: 'ש', name: 'שִׁין',   display: 'שין',   words: [{ word: 'שֶׁמֶשׁ', emoji: '☀️' }, { word: 'שָׁמַיִם', emoji: '🌤️' }, { word: 'שׁוּעָל', emoji: '🦊' }] },
  { char: 'ת', name: 'תָּו',    display: 'תו',    words: [{ word: 'תַּפּוּחַ', emoji: '🍎' }, { word: 'תֶּרֶן', emoji: '⛵' }, { word: 'תַּנִּין', emoji: '🐊' }] },
];

// === Speech Synthesis ===
function speak(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = 'he-IL';
  utt.rate = 0.85;
  utt.pitch = 1.1;
  window.speechSynthesis.speak(utt);
}

// === Tab Navigation ===
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    const target = tab.dataset.tab;
    document.getElementById(target).classList.add('active');
    if (target === 'quiz') initQuiz();
    if (target === 'match') initMatch();
    if (target === 'write') initWrite();
  });
});

// =====================
// === GALLERY TAB ===
// =====================
function buildGallery() {
  const grid = document.getElementById('lettersGrid');
  LETTERS.forEach((letter, i) => {
    const card = document.createElement('div');
    card.className = `letter-card color-${i % 7}`;
    card.innerHTML = `
      <span class="letter-char">${letter.char}</span>
      <span class="letter-name">${letter.display}</span>
    `;
    card.addEventListener('click', () => {
      document.querySelectorAll('.letter-card.playing').forEach(c => c.classList.remove('playing'));
      card.classList.add('playing');
      speak(letter.name);
      setTimeout(() => card.classList.remove('playing'), 1800);
    });
    grid.appendChild(card);
  });
}

// =====================
// === QUIZ TAB ===
// =====================
let quizState = {};

function initQuiz() {
  quizState = { score: 0, question: 0, total: 10, answered: false };
  document.getElementById('score').textContent = '0';
  document.getElementById('questionNum').textContent = '1';
  document.getElementById('quizResult').classList.add('hidden');
  document.getElementById('nextQuizBtn').classList.add('hidden');
  document.getElementById('quizFeedback').classList.add('hidden');
  loadQuizQuestion();
}

function loadQuizQuestion() {
  if (quizState.question >= quizState.total) {
    showQuizResult();
    return;
  }
  quizState.answered = false;
  document.getElementById('quizFeedback').classList.add('hidden');
  document.getElementById('nextQuizBtn').classList.add('hidden');

  const correct = LETTERS[Math.floor(Math.random() * LETTERS.length)];
  const quizType = Math.random() > 0.5 ? 'name' : 'letter';

  let wrongChoices = [];
  while (wrongChoices.length < 3) {
    const r = LETTERS[Math.floor(Math.random() * LETTERS.length)];
    if (r.char !== correct.char && !wrongChoices.find(w => w.char === r.char)) {
      wrongChoices.push(r);
    }
  }

  const choices = shuffle([correct, ...wrongChoices]);

  const qEl = document.getElementById('quizQuestion');
  if (quizType === 'name') {
    qEl.innerHTML = `
      <div class="quiz-letter">${correct.char}</div>
      <div class="quiz-prompt">מה שם האות?</div>
    `;
    const optsEl = document.getElementById('quizOptions');
    optsEl.innerHTML = '';
    choices.forEach(ch => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option';
      btn.textContent = ch.display;
      btn.addEventListener('click', () => answerQuiz(btn, ch.char === correct.char, correct, optsEl));
      optsEl.appendChild(btn);
    });
  } else {
    qEl.innerHTML = `
      <div class="quiz-prompt">לחץ על האות: <strong>${correct.display}</strong></div>
    `;
    const optsEl = document.getElementById('quizOptions');
    optsEl.innerHTML = '';
    choices.forEach(ch => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option';
      btn.textContent = ch.char;
      btn.style.fontSize = '2.5rem';
      btn.addEventListener('click', () => answerQuiz(btn, ch.char === correct.char, correct, optsEl));
      optsEl.appendChild(btn);
    });
  }
}

function answerQuiz(btn, isCorrect, correct, optsEl) {
  if (quizState.answered) return;
  quizState.answered = true;
  quizState.question++;
  document.getElementById('questionNum').textContent = quizState.question + 1;

  optsEl.querySelectorAll('.quiz-option').forEach(b => {
    b.disabled = true;
    const isThisCorrect = b.textContent === correct.display || b.textContent === correct.char;
    if (isThisCorrect) b.classList.add('correct');
  });

  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden', 'correct', 'wrong');

  if (isCorrect) {
    btn.classList.add('correct');
    quizState.score++;
    document.getElementById('score').textContent = quizState.score;
    feedback.textContent = '✅ כל הכבוד! נכון מאוד!';
    feedback.classList.add('correct');
    speak('כל הכבוד');
  } else {
    btn.classList.add('wrong');
    feedback.textContent = `❌ לא נכון. התשובה הנכונה היא: ${correct.display}`;
    feedback.classList.add('wrong');
    speak(correct.name);
  }

  if (quizState.question < quizState.total) {
    document.getElementById('nextQuizBtn').classList.remove('hidden');
  } else {
    setTimeout(showQuizResult, 1200);
  }
}

function showQuizResult() {
  document.getElementById('quizQuestion').innerHTML = '';
  document.getElementById('quizOptions').innerHTML = '';
  document.getElementById('quizFeedback').classList.add('hidden');
  document.getElementById('nextQuizBtn').classList.add('hidden');

  const s = quizState.score;
  const t = quizState.total;
  let msg = s === t ? '🌟 מושלם! 100 נקודות! 🌟' :
            s >= t * 0.8 ? '⭐ יפה מאוד! כמעט מושלם!' :
            s >= t * 0.6 ? '👍 טוב! אפשר עוד טוב יותר!' :
                           '💪 תרגל עוד קצת, אתה תצליח!';

  const resultEl = document.getElementById('quizResult');
  resultEl.innerHTML = `
    <h2>${msg}</h2>
    <p>ענית נכון על ${s} מתוך ${t} שאלות</p>
    <button class="btn-primary" onclick="initQuiz()">שחק שוב! 🔄</button>
  `;
  resultEl.classList.remove('hidden');
  speak(msg.replace(/[🌟⭐👍💪]/g, ''));
}

document.getElementById('nextQuizBtn').addEventListener('click', loadQuizQuestion);

// =====================
// === MATCH TAB ===
// =====================
let matchState = {};

function initMatch() {
  const pairs = shuffle(LETTERS).slice(0, 8);
  const cards = shuffle([
    ...pairs.map(l => ({ id: l.char, content: l.char, type: 'letter' })),
    ...pairs.map(l => ({ id: l.char, content: l.display, type: 'name' })),
  ]);

  matchState = { flipped: [], matched: 0, total: pairs.length, moves: 0, locked: false };
  document.getElementById('matchScore').textContent = '0';
  document.getElementById('matchTotal').textContent = pairs.length;
  document.getElementById('matchMoves').textContent = '0';
  document.getElementById('matchWin').classList.add('hidden');

  const grid = document.getElementById('matchGrid');
  grid.innerHTML = '';
  cards.forEach((card, i) => {
    const el = document.createElement('div');
    el.className = 'match-card';
    el.dataset.id = card.id;
    el.dataset.idx = i;
    el.innerHTML = `<span class="card-face" style="font-size:${card.type === 'letter' ? '2rem' : '1rem'}">${card.content}</span>`;
    el.addEventListener('click', () => flipCard(el));
    grid.appendChild(el);
  });
}

function flipCard(el) {
  if (matchState.locked) return;
  if (el.classList.contains('flipped') || el.classList.contains('matched')) return;
  if (matchState.flipped.length >= 2) return;

  el.classList.add('flipped');
  matchState.flipped.push(el);

  if (matchState.flipped.length === 2) {
    matchState.moves++;
    document.getElementById('matchMoves').textContent = matchState.moves;
    matchState.locked = true;
    const [a, b] = matchState.flipped;
    if (a.dataset.id === b.dataset.id) {
      a.classList.add('matched');
      b.classList.add('matched');
      matchState.matched++;
      document.getElementById('matchScore').textContent = matchState.matched;
      speak('מצוין');
      matchState.flipped = [];
      matchState.locked = false;
      if (matchState.matched === matchState.total) {
        setTimeout(() => {
          document.getElementById('matchFinalMoves').textContent = `השלמת ב-${matchState.moves} מהלכים!`;
          document.getElementById('matchWin').classList.remove('hidden');
          speak('כל הכבוד מצאת את כל הזוגות');
        }, 400);
      }
    } else {
      a.classList.add('shake');
      b.classList.add('shake');
      setTimeout(() => {
        a.classList.remove('flipped', 'shake');
        b.classList.remove('flipped', 'shake');
        matchState.flipped = [];
        matchState.locked = false;
      }, 900);
    }
  }
}

document.getElementById('newMatchBtn').addEventListener('click', initMatch);
document.getElementById('matchPlayAgain').addEventListener('click', initMatch);

// =====================
// === WRITE TAB ===
// =====================
let writeState = { idx: 0 };
let isDrawing = false;
let lastX = 0, lastY = 0;

function initWrite() {
  writeState.idx = 0;
  setupCanvas();
  updateWriteLetter();
}

function updateWriteLetter() {
  const letter = LETTERS[writeState.idx];
  document.getElementById('writeLetter').textContent = letter.char;
  document.getElementById('writeLetterName').textContent = letter.display;
  document.getElementById('writeLetterNameInline').textContent = letter.display;

  // Update guide
  const guide = document.getElementById('writeGuide');
  guide.innerHTML = `<div class="write-guide-letter">${letter.char}</div>`;

  // Words
  const wordsList = document.getElementById('wordsList');
  wordsList.innerHTML = letter.words.map(w =>
    `<div class="word-chip"><span class="word-emoji">${w.emoji}</span>${w.word}</div>`
  ).join('');

  clearWriteCanvas();
  speak(letter.name);
}

function setupCanvas() {
  const canvas = document.getElementById('writeCanvas');
  const ctx = canvas.getContext('2d');

  function getPos(e) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    if (e.touches) {
      return [
        (e.touches[0].clientX - rect.left) * scaleX,
        (e.touches[0].clientY - rect.top) * scaleY,
      ];
    }
    return [(e.clientX - rect.left) * scaleX, (e.clientY - rect.top) * scaleY];
  }

  function startDraw(e) {
    e.preventDefault();
    isDrawing = true;
    [lastX, lastY] = getPos(e);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
  }

  function draw(e) {
    if (!isDrawing) return;
    e.preventDefault();
    const [x, y] = getPos(e);
    ctx.strokeStyle = document.getElementById('penColor').value;
    ctx.lineWidth = parseInt(document.getElementById('penSize').value);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();
    [lastX, lastY] = [x, y];
  }

  function stopDraw() { isDrawing = false; }

  canvas.addEventListener('mousedown', startDraw);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDraw);
  canvas.addEventListener('mouseleave', stopDraw);
  canvas.addEventListener('touchstart', startDraw, { passive: false });
  canvas.addEventListener('touchmove', draw, { passive: false });
  canvas.addEventListener('touchend', stopDraw);
}

function clearWriteCanvas() {
  const canvas = document.getElementById('writeCanvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

document.getElementById('clearCanvas').addEventListener('click', clearWriteCanvas);

document.getElementById('writePrev').addEventListener('click', () => {
  writeState.idx = (writeState.idx + 1) % LETTERS.length;
  updateWriteLetter();
});

document.getElementById('writeNext').addEventListener('click', () => {
  writeState.idx = (writeState.idx - 1 + LETTERS.length) % LETTERS.length;
  updateWriteLetter();
});

// === Utils ===
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// === Init ===
buildGallery();
