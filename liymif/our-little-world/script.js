/* =====================================================================
   Our Little World — Mifzal & Aliyah
   Semua data di bawah bisa kamu edit sendiri.
   ===================================================================== */

const CONFIG = {
  names: ["Mifzal", "Aliyah"],

  // Tanggal mulai jadi pasangan (YYYY-MM-DD). Ganti dengan tanggal aslinya ya.
  startDate: "2026-09-21",

  // Foto: taruh file di folder photos/ dengan nama di bawah.
  // Kalau fotonya belum ada, otomatis muncul placeholder.
  heroPhoto: { src: "photos/hero.jpg", caption: "us, in our little world" },

  photos: [
  { src: "photos/1.jpg", caption: "first date, sajenak coffee" },
  { src: "photos/2.jpg", caption: "nonton lomba bareng" },
  { src: "photos/3.jpg", caption: "photobooth #1, sajenak coffee" },
  { src: "photos/4.jpg", caption: "photobooth #2, buaran plaza" },
  { src: "photos/5.jpg", caption: "sajenak coffee" },
  { src: "photos/6.jpg", caption: "kanvas & tangan kita" }
  ],

  // 5 sifat Aliyah — ini juga bahan soal quiz-nya
  traits: [
    { icon: "smile",   title: "Lucu",   text: "Bikin aku ketawa sampe nangis. Chat sama kamu tuh selalu ada lelucon baru tiap hari.", c: "#3d7bff", bgc: "rgba(61,123,255,.12)" },
    { icon: "blush",   title: "Imut",   text: "Yang bikin hati meleleh. Minimal, kalau lagi capek langsung mood naik.", c: "#5ea8ff", bgc: "rgba(94,168,255,.16)" },
    { icon: "twohearts", title: "Baik", text: "Sabar, perhatian, dan nggak pernah nyesel. Capek? Kamu yang nghibur duluan.", c: "#8f9bff", bgc: "rgba(143,155,255,.16)" },
    { icon: "crown",   title: "Gemess", text: "Begitu masuk room, semua langsung ikut ter-hype. Cewek yang bikin aku ngarang terus.", c: "#3fa9e0", bgc: "rgba(63,169,224,.16)" },
    { icon: "flower",  title: "Cantikk", text: "Inilah yang bikin aku speechless. Boleh banget, ya. Ampun deh.", c: "#2f7ff0", bgc: "rgba(47,127,240,.16)" }
  ],

  // Cerita kita, dari awal sampe sekarang
  timeline: [
    { no: "01", when: "Awalnya", title: "Kamu ngucapin “ultah” ke aku", text: "Kamu yang pertama kali ngucapin “ultah” ke aku — lewat Instagram. Bukan nyebut di belakang, tapi beneran nge chat gitu. Maaf ya sayang awal2 aku cuek ke kamuu :( ." },
    { no: "02", when: "Makin deket", title: "Saling Like", text: "Saling like instagram, saling nunggu chat. Lama-lama halaman IG-ku kayak nonton drak Korea: cuma nungguin notifikasi kamu muncul." },
    { no: "03", when: "Bulan 1", title: "First date — Sajenak Coffee", text: "Deg-deg tapi based. Kita masih canggung, tapi disitu lah rasa sayang kain muncul — dan aku sangat seneng." },
    { no: "04", when: "Bulan 1", title: "Photobooth pertama", text: "Masih di Sajenak Coffee, abis first date. Hasilnya: dua orang kaku, tapi senyumnya nggak ilang. Nggak ada fotoku yang lebih kece." },
    { no: "05", when: "Week 2", title: "Nonton lomba bareng", text: "Kita nonton lomba berdua. Kamu nggak ikut lomba, cuma nonton — tapi aku tetap seneng bisa nemenin kamu, deg-deg banget." },
    { no: "06", when: "Week 3", title: "Photobooth kedua — Buaran Plaza", text: "Pulang dari nonton lomba, mampir Buaran Plaza buat foto lagi. Kali ini lebih loosen up: property random, faces random,aku bahagia banget." },
    { no: "07", when: "Sering", title: "Sering main ke rumah kamu", text: "Aku udah sering ke sana. Nyaman, kayak punya rumah kedua. Sesekali ngobrol, cerita lucu, atau cuma diem sama-sama." },
    { no: "08", when: "Week 4", title: "Melukis cetakan tangan di kanvas", text: "Proyek bareng pertama kita: dua tangan dicat di satu kanvas. Nggak ada rencana, tapi hasilnya se-perfect mungkin." },
    { no: "09", when: "Sekarang", title: "Satu bulan, resmi", text: "Kita jadian, satu bulan, dan aku masih serious sayangnya sama kamu. Lanjut ke bulan kedua ya." }
  ],

  letter: {
    title: "dear, my favorite person ♡",
    body: [
      "hii, sayanggg 🤍",
      "i just want you to know how happy i am to have you in my life. sometimes i don't know how to explain how much you mean to me, but i hope you can feel it through the little things i do for you.",
      "thank you for staying, for listening to my random stories, for making me smile even on days when everything feels tiring, and for being someone i can always look forward to talking to.",
      "i know we're not perfect, and maybe there will be days when things aren't always easy. but i want you to know that i'll always try to understand you, listen to you, and make you feel loved. i don't promise to be perfect, but i promise to keep learning how to love you better.",
      "if someday you feel like you're not enough, please remember that you mean so much more to me than you realize. you don't have to do anything special to make me happy. sometimes, just having you around is already enough.",
      "i don't know exactly what our future will look like, but one thing i know is that i want to make more memories with you, laugh with you over the smallest things, celebrate your little achievements, and keep choosing you through all the different chapters of our lives.",
      "thank you for being my favorite person, my comfort, and one of the best parts of my days.",
      "i hope we get to look back at this someday and smile at how far we've come together.",
      "i love you so, so much, bby. always remember that, okay? ♡"
    ],
    sign: "always yours,\nyour boy, Mifzal 🤍"
  },

  // 10 soal, jawabannya diambil dari cerita kita
  quiz: [
    { q: "Kamu biasanya manggil Mifzal dengan julukan apa?", options: ["Kak", "Nggak pakai julukan, manggil nama aja", "Bang", "Kakel"], answer: 1, fb: "Betul, nggak ada julukan. Manggil nama aja yang bener, gitu saja." },
    { q: "Kenapa kalian bisa makin deket?", options: ["Saling like di Instagram", "Main game online bareng", "Kelas tambahan tiap malam", "Jalan bareng tiap pagi"], answer: 0, fb: "Nah, dari situ semua naik level." },
    { q: "First date kalian berdua di mana?", options: ["Buaran Plaza", "Sajenak Coffee", "Kafe random", "Taman kota"], answer: 1, fb: "Sajenak Coffee. Still the best, sih." },
    { q: "Pas first date, gimana cara bayarnya?", options: ["Split bill", "Bayar abis di tempat", "Mifzal minum,aliyah phtoboth", "Patahan tabungan"], answer: 2, fb: "No split bill, ya? Servis serba aku." },
    { q: "Photobooth pertama kalian ada di mana?", options: ["Sajenak Coffee", "Buaran Plaza", "Karaoke", "Bioskop"], answer: 0, fb: "Foto pertama kalian ada di sana." },
    { q: "Nonton lomba berdua, kamu ikut lombanya nggak?", options: ["Ikut lomba juga", "Nonton dari live", "Tidur di bangku belakang", "Cuma nonton, nggak ikut lomba"], answer: 3, fb: "Kamu cuma nonton, lho. Lomba bukan urusan kamu." },
    { q: "Photobooth kedua kalian ada di mana?", options: ["Sajenak Coffee", "Karaoke", "Buaran Plaza", "Bioskop"], answer: 2, fb: "Buaran Plaza, pas pulang dari nonton lomba." },
    { q: "Proyek pertama yang pernah kalian lakuin bareng?", options: ["Masak bareng", "Melukis cetakan tangan di kanvas", "Bikin playlist bareng", "Belanja souvenir"], answer: 1, fb: "Kanvas cetakan tangan. Masih ada di rumah, kan?" },
    { q: "Mifzal sering ke rumah kamu buat...", options: ["Nonton film", "Main game", "Tugas kelompok", "Ngomong lama bareng"], answer: 3, fb: "Ya, sering nongkrong di rumah kamu." },
    { q: "Kamu itu tipe yang...", options: ["Lucu, imut, baik, gemess, cantikk", "Cuma serious", "Kurang scalars", "Santai banget"], answer: 0, fb: "Semua itu kamu, sekaligus. 💙" }
  ],

  results: [
    { min: 0, msg: "Wkwk, baru 1 bulan tapi belum kenal? Gas lagi ya, yuk." },
    { min: 5, msg: "Lumayan lho. Tapi aku yakin kamu bisa lebih dari ini." },
    { min: 8, msg: "Fix, kamu beneran perhatian sama aku. Boleh banget." },
    { min: 10, msg: "Perfect score. Kamu fondasi aku banget, cuma itu." }
  ]
};
/* ======================= END EDIT DI SINI ======================= */

/* ---------------- helpers ---------------- */
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
const fmtDate = d => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(d)) return d;
  return new Date(d + "T00:00").toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
};

const PLACEHOLDER = "data:image/svg+xml;utf8," + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">' +
  '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#dbe9ff"/><stop offset="1" stop-color="#e6ecff"/></linearGradient></defs>' +
  '<rect width="300" height="300" fill="url(#g)"/>' +
  '<path d="M150 214s-52-32-52-68a28 28 0 0 1 52-14 28 28 0 0 1 52 14c0 36-52 68-52 68z" fill="none" stroke="#3d7bff" stroke-width="6" stroke-linejoin="round"/>' +
  '<text x="150" y="262" font-family="Georgia,serif" font-size="19" fill="#3f6bb5" text-anchor="middle" font-style="italic">our photo goes here</text>' +
  '</svg>'
);

/* ---------------- foto ----------------
   Cari fotonya di (berurutan):
   1) photos/nama.jpg            -> folder di sebelah index.html
   2) ../photos/nama.jpg         -> folder photos/ di folder induk
   3) our-little-world/photos/   -> folder salinan
   Kalau semuanya nggak ada -> placeholder heart (nggak error). */
function loadPhoto(img, src) {
  if (!img) return;
  const cands = [src, "../" + src, "our-little-world/" + src];
  let i = 0;
  img.onerror = () => {
    i++;
    if (i < cands.length) { img.src = cands[i]; }
    else { img.onerror = null; img.src = PLACEHOLDER; }
  };
  img.src = cands[0];
}
function setPhotoFallback(img) {
  if (!img) return;
  const cur = img.getAttribute("src") || "";
  loadPhoto(img, cur);
}

/* ---------------- traits ---------------- */
const traitWrap = $("#traits");
CONFIG.traits.forEach((t, i) => {
  const c = el("article", "trait reveal");
  c.style.setProperty("--c", t.c);
  c.style.setProperty("--bgc", t.bgc);
  c.style.transitionDelay = (i * 70) + "ms";
  c.innerHTML =
    `<span class="no">${String(i + 1).padStart(2, "0")}</span>
     <span class="trait-icon"><svg><use href="#i-${t.icon}"/></svg></span>
     <h3>${esc(t.title)}</h3>
     <p>${esc(t.text)}</p>`;
  traitWrap.append(c);
});

/* ---------------- timeline ---------------- */
const tl = $("#timeline");
CONFIG.timeline.forEach((t, i) => {
  const li = el("li", "tl-item reveal");
  li.style.transitionDelay = (i % 4) * 60 + "ms";
  li.innerHTML =
    `<div class="tl-card">
       <div class="tl-top"><span class="tl-no">CHAPTER ${esc(t.no)}</span><span class="tl-when">${esc(t.when)}</span></div>
       <h3>${esc(t.title)}</h3>
       <p>${esc(t.text)}</p>
     </div>`;
  tl.append(li);
});

/* ---------------- gallery ---------------- */
const gal = $("#galleryGrid");
const tilts = [-2.5, 2, -1.4, 2.6, -2, 1.6];
CONFIG.photos.forEach((p, i) => {
  const fig = el("figure", "polaroid");
  fig.innerHTML = `<img alt="${esc(p.caption)}" loading="lazy"><figcaption>${esc(p.caption)}</figcaption>`;
  loadPhoto(fig.querySelector("img"), p.src);

  const wrap = el("div", "g-item reveal");
  wrap.style.setProperty("--r", tilts[i % tilts.length] + "deg");
  wrap.style.transitionDelay = (i % 3) * 70 + "ms";
  wrap.append(
    el("span", "g-badge", String(i + 1).padStart(2, "0")),
    fig
  );
  gal.append(wrap);
});

/* ---------------- hero photo ---------------- */
const heroImg = $(".p-main img");
if (heroImg) {
  heroImg.alt = CONFIG.heroPhoto.caption;
  loadPhoto(heroImg, CONFIG.heroPhoto.src);
}
$(".p-main figcaption").textContent = CONFIG.heroPhoto.caption;
// foto kecil di kolase hero
const miniHero = [{ el: $(".p-a img"), src: "photos/3.jpg" }, { el: $(".p-b img"), src: "photos/5.jpg" }];
miniHero.forEach(m => loadPhoto(m.el, m.src));

/* ---------------- love letter ---------------- */
const dlg = $("#letterDlg"), env = $("#envBtn");
$("#letterTitle").textContent = CONFIG.letter.title;
$("#letterBody").innerHTML = CONFIG.letter.body.map(t => `<p>${esc(t)}</p>`).join("");
$("#letterSign").textContent = CONFIG.letter.sign;

const openLetter = () => {
  env.classList.add("open");
  setTimeout(() => { if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", ""); }, 620);
};
const closeLetter = () => {
  if (dlg.close) dlg.close(); else dlg.removeAttribute("open");
  env.classList.remove("open");
  env.focus();
};
env.addEventListener("click", openLetter);
$("#closeLetter").addEventListener("click", closeLetter);
dlg.addEventListener("click", e => { if (e.target === dlg) closeLetter(); });
dlg.addEventListener("cancel", () => env.classList.remove("open"));

/* ---------------- counter ---------------- */
const start = new Date(CONFIG.startDate + "T00:00:00");
const dayNum = $("#dayNum"), uH = $("#uH"), uM = $("#uM"), uS = $("#uS"), countNote = $("#countNote");
$("#sinceDate").textContent = fmtDate(CONFIG.startDate);

function pad(n) { return String(n).padStart(2, "0"); }
function tick() {
  const now = new Date();
  const elapsed = Math.max(0, now - start);
  const days = Math.floor(elapsed / 864e5);
  const rest = elapsed % 864e5;
  dayNum.textContent = days + 1;
  uH.textContent = pad(Math.floor(rest / 36e5));
  uM.textContent = pad(Math.floor(rest / 6e4) % 60);
  uS.textContent = pad(Math.floor(rest / 1e3) % 60);

  const months = Math.floor(days / 30) + 1;
  const lines = [
    "Masih fact: satu bulan, dan aku masih ngerasa kayak baru kemarin.",
    "Sudah sebulan, dan tiap hari aku ngerasa punya kabar baik buat cerita hari ini.",
    "Makin deket, aku makin yakin: aku bakal terus kece di rumah kamu.",
    "Kalau dihitung, aku udah lewat 900 jam bareng kamu. Nggak sia-sia.",
    "Pertama kali aku nulis 'aku sayang kamu' di website. Sekarang bukan cuma di website.",
    "Kita masih SMA, tapi hati sudah nelep. Dan itu enak."
  ];
  countNote.textContent = "Bulan ke-" + months + " · " + lines[days % lines.length];
}
tick();
setInterval(tick, 1000);

/* ---------------- quiz ---------------- */
const quiz = $("#quizBox");
let qi = 0, score = 0;

function showQ() {
  const q = CONFIG.quiz[qi], n = CONFIG.quiz.length;
  quiz.innerHTML =
    `<div class="q-head"><span>Soal ${qi + 1} dari ${n}</span><span>${score} benar</span></div>
     <div class="q-bar"><i style="width:${(qi / n) * 100}%"></i></div>
     <h3>${esc(q.q)}</h3>`;
  q.options.forEach((o, i) => {
    const b = el("button", "opt", esc(o));
    b.type = "button";
    b.addEventListener("click", () => answer(i));
    quiz.append(b);
  });
  const fb = el("p", "q-fb");
  fb.setAttribute("aria-live", "polite");
  quiz.append(fb);
}

function answer(i) {
  const q = CONFIG.quiz[qi];
  const ok = i === q.answer;
  quiz.querySelectorAll(".opt").forEach((b, j) => {
    b.disabled = true;
    if (j === q.answer) b.classList.add("ok");
    else if (j === i) b.classList.add("no");
  });
  if (ok) score++;
  const fb = quiz.querySelector(".q-fb");
  fb.textContent = ok
    ? (q.fb || ["Bener banget! Kamu beneran perhatian. ✦", "Nah gitu dong. Jelas, kan? ✦"][qi % 2])
    : "Hampir! Sebenernya gitu lho 😌";

  const nxt = el("button", "btn btn-primary", qi === CONFIG.quiz.length - 1 ? "Lihat hasilnya" : "Lanjut");
  nxt.type = "button";
  nxt.addEventListener("click", () => {
    qi++;
    if (qi < CONFIG.quiz.length) showQ(); else endQuiz();
  });
  quiz.append(nxt);
  nxt.focus();
}

function endQuiz() {
  const n = CONFIG.quiz.length;
  const r = [...CONFIG.results].reverse().find(x => score >= Math.min(x.min, n));
  quiz.innerHTML =
    `<div class="q-end">
       <div class="q-bar"><i style="width:100%"></i></div>
       <div class="q-score">${score} / ${n}</div>
       <h3>${esc(r.msg)}</h3>
       <p>Skor ini bukti, bahwa ada orang yang beneran memperhatikan. Yaitu aku. 💕</p>
       <button class="btn btn-primary" type="button" id="again">Main lagi</button>
     </div>`;
  $("#again").addEventListener("click", () => { qi = 0; score = 0; showQ(); });
  if (window.loveTrail) burstHearts(10);
}
showQ();

/* ---------------- nav: burger, scrollspy, progress ---------------- */
const nav = $("#nav"), burger = $("#burger"), navLinks = $("#navLinks");
burger.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  burger.setAttribute("aria-expanded", String(open));
  burger.innerHTML = `<svg><use href="#i-${open ? "close" : "menu"}"/></svg>`;
});
navLinks.addEventListener("click", e => {
  if (e.target.closest("a")) {
    navLinks.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
    burger.innerHTML = `<svg><use href="#i-menu"/></svg>`;
  }
});

const progress = $("#progress");
const sections = ["about", "story", "gallery", "canvas", "letter", "count", "quiz"].map(id => document.getElementById(id)).filter(Boolean);
const linkMap = new Map();
$$("#navLinks a").forEach(a => linkMap.set(a.getAttribute("href").slice(1), a));

function onScroll() {
  const y = window.scrollY;
  nav.classList.toggle("scrolled", y > 20);
  $("#toTop").classList.toggle("show", y > 600);

  const h = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";

  let current = "";
  sections.forEach(s => { if (s.getBoundingClientRect().top <= 140) current = s.id; });
  linkMap.forEach((a, id) => a.classList.toggle("active", id === current));
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

$("#toTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* ---------------- reveal on scroll ---------------- */
const io = "IntersectionObserver" in window
  ? new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" })
  : null;
$$(".reveal").forEach(e => { if (io) io.observe(e); else e.classList.add("in"); });

/* ---------------- mode hati (jejak hati) ---------------- */
const trail = $("#heartTrail");
const HEARTS = ["💗", "💕", "💖", "🩷", "💜", "✨"];
function burstHearts(n = 8) {
  for (let i = 0; i < n; i++) {
    const s = document.createElement("span");
    s.className = "trail-heart";
    s.textContent = HEARTS[Math.floor(Math.random() * HEARTS.length)];
    s.style.left = 20 + Math.random() * 60 + "vw";
    s.style.top = 40 + Math.random() * 30 + "vh";
    s.style.animationDelay = (i * 70) + "ms";
    trail.append(s);
    setTimeout(() => s.remove(), 1400);
  }
}
const loveBtn = $("#loveToggle");
loveBtn.addEventListener("click", () => {
  const on = loveBtn.getAttribute("aria-pressed") === "true";
  loveBtn.setAttribute("aria-pressed", String(!on));
  window.loveTrail = !on;
  if (!on) burstHearts(12);
});
if (window.matchMedia("(pointer:fine)").matches) {
  window.addEventListener("mousemove", e => {
    if (window.loveTrail !== true) return;
    const s = document.createElement("span");
    s.className = "trail-heart";
    s.textContent = HEARTS[Math.floor(Math.random() * HEARTS.length)];
    s.style.left = e.clientX + "px";
    s.style.top = e.clientY + "px";
    trail.append(s);
    setTimeout(() => s.remove(), 950);
  }, { passive: true });
}
