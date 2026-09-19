(() => {
  const PURPOSES = [
    { id: "size", label: "صغر الحجم", place: "يمين الفصل" },
    { id: "few", label: "قلة العدد", place: "يسار الفصل" },
    { id: "time", label: "قرب الزمان", place: "أمام الفصل" },
    { id: "place", label: "قرب المكان", place: "خلف الفصل" },
    { id: "love", label: "العطف والتحبب", place: "منتصف الفصل" },
    { id: "scorn", label: "التحقير", place: "بجانب السبورة" },
  ];
  const SCREENS = [
    { id: "intro", label: "الافتتاح", phase: "تهيئة", minutes: 2 },
    { id: "recall", label: "الاسترجاع", phase: "تهيئة", minutes: 5 },
    { id: "goals", label: "الأهداف", phase: "تهيئة", minutes: 1 },
    { id: "board", label: "انتبه للشرح", phase: "تهيئة", minutes: 3 },
    { id: "discover", label: "الاكتشاف", phase: "اكتشاف", minutes: 8 },
    { id: "move", label: "قف عند الغرض", phase: "اكتشاف", minutes: 6 },
    { id: "match", label: "المطابقة", phase: "تطبيق", minutes: 5 },
    { id: "worksheet", label: "ورقة العمل", phase: "تطبيق", minutes: 6 },
    { id: "photos", label: "تحدي الصور", phase: "إبداع", minutes: 4 },
    { id: "create", label: "كن مبدعًا", phase: "إبداع", minutes: 5 },
    { id: "quiz", label: "تقويم بنائي", phase: "غلق", minutes: 3 },
    { id: "close", label: "الغلق", phase: "غلق", minutes: 2 },
  ];
  const WEIGHTS = [
    { big: "نهر", small: "نُهَيْر", w: "فُعَيْل" },
    { big: "مسجد", small: "مُسَيْجِد", w: "فُعَيْعِل" },
    { big: "مفتاح", small: "مُفَيْتِيح", w: "فُعَيْعِيل" },
  ];
  const DIMIN = [
    { big: "أسد", answer: "أُسَيْد", weight: "فُعَيْل", options: ["أُسَيْد", "أُسَيْجِد", "أُسَيْفِير"] },
    { big: "مسجد", answer: "مُسَيْجِد", weight: "فُعَيْعِل", options: ["مُسَيْجِد", "مُسَيْجدِيل", "مُسَيْد"] },
    { big: "عصفور", answer: "عُصَيْفِير", weight: "فُعَيْعِيل", options: ["عُصَيْفِير", "عُصَيْفِر", "عُصَيْد"] },
  ];
  const OBJECTIVES = [
    "يحدد أوزان التصغير تحديدًا صحيحًا.",
    "يستنتج أغراض التصغير بشكل صحيح.",
    "يوظف أوزان التصغير للدلالة على أغراض معينة في سياقات مناسبة.",
  ];
  const BOOK = [
    { sentence: "قد يبدو بيتي أمام الأبراج صنيديقًا، لكنه يمتلئ سعادة وحبورًا.", small: "صنيديقًا", big: "صندوق", purpose: "size", why: "البيت يبدو صغير الحجم أمام الأبراج، فالتصغير هنا لصغر الحجم.", bigOptions: ["صندوق", "صديق", "فندق"] },
    { sentence: "قضينا على شاطئ الدوحة سويعات جميلة.", small: "سويعات", big: "ساعات", purpose: "few", why: "سويعات تدل على عدد قليل من الساعات.", bigOptions: ["ساعات", "أسابيع", "سنوات"] },
    { sentence: "يعود الصيادون إلى بيوتهم قبيل المغرب.", small: "قبيل", big: "قبل", purpose: "time", why: "قبيل المغرب تعني قرب الزمان من المغرب.", bigOptions: ["قبل", "قبر", "قبول"] },
    { sentence: "يقع سوق واقف قريب كورنيش الدوحة.", small: "قريب", big: "قرب", purpose: "place", why: "قريب كورنيش الدوحة تدل على قرب المكان.", bigOptions: ["قرب", "قريبون", "قرية"] },
    { sentence: "قالت الأم لابنتها: يا بنيتي، كوني قوية شجاعة.", small: "بنيتي", big: "بنت", purpose: "love", why: "يا بنيتي أسلوب نداء فيه عطف وتحبب.", bigOptions: ["بنت", "بيت", "بناية"] },
    { sentence: "دويلة معتدية.", small: "دويلة", big: "دولة", purpose: "scorn", why: "دويلة هنا للتحقير من شأن الدولة المعتدية.", bigOptions: ["دولة", "دورة", "دالية"] },
  ];
  const MATCH = [
    { id: "m1", sentence: "هذا منيزل جميل.", purpose: "size", why: "منيزل تصغير منزل لصغر الحجم." },
    { id: "m2", sentence: "أكلت تميرات.", purpose: "few", why: "تميرات تدل على قلة العدد." },
    { id: "m3", sentence: "تعود الطيور قبيل الغروب.", purpose: "time", why: "قبيل الغروب قرب زمان." },
    { id: "m4", sentence: "مدينة الشمال بعيد الخور.", purpose: "place", why: "بعيد الخور تدل على قرب المكان." },
    { id: "m5", sentence: "يا بنيتي لا تجزعي.", purpose: "love", why: "يا بنيتي للعطف والتحبب." },
    { id: "m6", sentence: "دويلة معتدية.", purpose: "scorn", why: "دويلة معتدية للتحقير." },
  ];
  const WORKSHEET = [
    { sentence: "في الطريق إلى مكة جبيل وهضيبة.", small: "جبيل وهضيبة", purpose: "size", why: "جبيل وهضيبة لصغر حجم الجبل والهضبة." },
    { sentence: "نصلي الضحى بعيد طلوع الشمس.", small: "بعيد", purpose: "time", why: "بعيد طلوع الشمس قرب زمان من الطلوع." },
    { sentence: "يا بني، حافظ على صلاة الجماعة.", small: "بني", purpose: "love", why: "يا بني نداء للعطف والتحبب." },
    { sentence: "يا رجيل، اسلك مسالك الرجال.", small: "رجيل", purpose: "scorn", why: "يا رجيل للتحقير." },
    { sentence: "تفتحت زهيرات في حديقتنا.", small: "زهيرات", purpose: "few", why: "زهيرات تدل على قلة العدد." },
  ];
  const PHOTOS = [
    { img: "media/boy.jpg", hint: "ولد", allow: ["love"] },
    { img: "media/flowers.jpg", hint: "زهرات", allow: ["few", "size"] },
    { img: "media/bird.jpg", hint: "عصفور / شجرة", allow: ["size", "few"] },
  ];
  const CREATE = [
    { id: "scorn", label: "التحقير" },
    { id: "time", label: "قرب الزمان" },
    { id: "place", label: "قرب المكان" },
  ];
  const QUIZ = [
    { q: 'الغرض من "سويعات"', a: "few" },
    { q: 'الغرض من "قبيل المغرب"', a: "time" },
    { q: 'الغرض من "قريب كورنيش الدوحة"', a: "place" },
    { q: 'الغرض من "يا بنيتي"', a: "love" },
    { q: 'الغرض من "صنيديقًا"', a: "size" },
  ];
  const CLOSE_LEARN = {
    stem: "ما سنتعلمه في درسنا اليوم",
    answer: "أغراض التصغير",
    full: "ما سنتعلمه في درسنا اليوم أغراض التصغير، وأن السياق هو مفتاح معرفة الغرض.",
    options: ["أغراض التصغير", "صغر الحجم فقط", "أوزان الفعل"],
  };
  const PRAISE = ["أحسنت يا بني.", "أجدت.", "أنت متميز.", "أحسنت.", "ممتاز يا فتى.", "نعم، هذا هو المراد.", "أصبت.", "إجابة متميزة.", "نعم يا بني.", "فكرت تفكير العلماء.", "أنت بارع.", "أحسنت الفهم.", "رائع، أصبت.", "نعم يا بطل.", "وفقت."];
  const RETRY = ["حاول مرة أخرى.", "تأمل السياق يا بني.", "راجع المثال.", "فكر في دلالة الكلمة.", "اقترب، أعد المحاولة.", "انظر إلى الجملة كاملة."];

  const S = {
    screen: "intro",
    score: 0,
    started: false,
    heard: false,
    i: 0,
    wPick: {},
    dPick: {},
    big: null,
    pur: null,
    pick: null,
    map: {},
    sel: null,
    why: "",
    open: false,
    text: "",
    saved: false,
    created: {},
    quiz: {},
    learn: null,
    bag: null,
    used: {},
    lastPraise: "",
    left: 120,
  };

  const $ = (id) => document.getElementById(id);
  const lesson = $("lesson");
  let tick = null;

  function labelOf(id) {
    return PURPOSES.find((p) => p.id === id)?.label || id;
  }
  function mark(sentence, word) {
    const i = sentence.indexOf(word);
    if (i < 0) return sentence;
    return sentence.slice(0, i) + '<mark>' + word + "</mark>" + sentence.slice(i + word.length);
  }
  function btn(label, extra, cls) {
    return `<button type="button" class="b ${cls || ""}" ${extra}>${label}</button>`;
  }
  function nextBtn(label, extra, disabled) {
    return `<button type="button" class="next" ${extra} ${disabled ? "disabled" : ""}>${label}</button>`;
  }
  function navRow(nextHtml) {
    return `<div class="nav"><button type="button" class="back" data-act="back">رجوع</button>${nextHtml || ""}</div>`;
  }
  const TIPS = {
    recall: "اسأل الوزن بصوت واحد. من وافق يبقى جالسًا، ومن خالف يقف. لا ترفع الأيدي.",
    goals: "اقرأ الأهداف حرفيًا. اسأل: أي هدف يبدو أصعب؟ ثم افتح صفحة الشرح.",
    board: "اشرح على السبورة البيضاء. الطلاب ينظرون إليك بلا رفع أيد. بعد الشرح انتقل للاكتشاف.",
    discover: "اقرأ الجملة جهرًا. اسأل أولًا عن المكبر ثم عن الغرض من السياق.",
    move: "حدّد مناطق الفصل قبل الجملة. يتحرك الصف ثم تثبّت الإجابة على الشاشة.",
    match: "اضغطوا المثال أولًا ثم الغرض. صحّح الخطأ من السياق لا من التخمين.",
    worksheet: "طالب واحد لكل مثال. اطلب التعليل بجملة قصيرة قبل التالي.",
    photos: "جملة تامة فيها مصغّر + غرض واضح. لا تُقبل جملة بلا غرض.",
    create: "دقيقة تفكير ثم جملة شفهية. سجّل أفضل جملة للصف.",
    quiz: "سؤالًا سؤالًا بلا سرعة. النقاط للفصل كله.",
    close: "أكمل الجملة جماعيًا ثم أغلق بالفكرة: السياق مفتاح الغرض.",
  };
  function tip() {
    const t = TIPS[S.screen];
    return t ? `<p class="tip"><b>إرشاد المعلم:</b> ${t}</p>` : "";
  }
  function goBack() {
    const stepped = ["discover", "move", "worksheet", "photos", "create"];
    if (stepped.includes(S.screen) && S.i > 0) {
      S.i -= 1;
      S.big = null; S.pur = null; S.pick = null; S.why = ""; S.open = false; S.text = ""; S.saved = false; S.sel = null;
      window.scrollTo(0, 0);
      paint();
      return;
    }
    const i = SCREENS.findIndex((s) => s.id === S.screen);
    if (i > 0) go(SCREENS[i - 1].id);
  }
  function fb(ok, html) {
    const t = S.lastPraise || (ok ? "أحسنت يا بني." : "حاول مرة أخرى.");
    return `<div class="fb ${ok ? "ok" : "bad"}"><p class="t">${t}</p><div>${html}</div></div>`;
  }
  function play(ok) {
    const list = ok ? PRAISE : RETRY;
    const files = ok
      ? list.map((_, i) => "media/praise/p" + String(i).padStart(2, "0") + ".mp3?v=10")
      : list.map((_, i) => "media/praise/r" + String(i).padStart(2, "0") + ".mp3?v=10");
    const i = Math.floor(Math.random() * list.length);
    S.lastPraise = list[i];
    const a = new Audio(files[i]);
    a.play().catch(() => {});
  }
  function scored(ok) {
    play(ok);
    if (ok) S.score += 1;
  }
  function go(id, resetStep) {
    S.screen = id;
    if (resetStep !== false) {
      S.i = 0;
      S.big = null;
      S.pur = null;
      S.pick = null;
      S.why = "";
      S.open = false;
      S.text = "";
      S.saved = false;
      S.sel = null;
    }
    const meta = SCREENS.find((s) => s.id === id);
    S.left = (meta?.minutes || 2) * 60;
    window.scrollTo(0, 0);
    paint();
  }
  function nextScreen() {
    const i = SCREENS.findIndex((s) => s.id === S.screen);
    if (SCREENS[i + 1]) go(SCREENS[i + 1].id);
  }

  function header() {
    const meta = SCREENS.find((s) => s.id === S.screen);
    if (!meta) return;
    const idx = SCREENS.findIndex((s) => s.id === S.screen);
    const mm = String(Math.floor(S.left / 60)).padStart(2, "0");
    const ss = String(S.left % 60).padStart(2, "0");
    const pb = $("phasebar");
    if (pb) {
      pb.innerHTML = ["تهيئة", "اكتشاف", "تطبيق", "إبداع", "غلق"]
        .map((p) => `<span class="ph ${p === meta.phase ? "on" : ""}">${p}</span>`)
        .join("");
    }
    const k = $("kicker");
    if (k) k.textContent = meta.phase + " · " + meta.label;
    const sc = $("score");
    if (sc) sc.textContent = "نقاط الصف " + S.score;
    const tm = $("timer");
    if (tm) tm.textContent = mm + ":" + ss;
    const pr = $("prog");
    if (pr) pr.style.width = ((idx + 1) / SCREENS.length) * 100 + "%";
    const bb = $("backbtn");
    if (bb) bb.hidden = S.screen === "intro";
  }

  function intro() {
    return `
      <p class="kicker">اللغة العربية · الصف العاشر</p>
      <h1>أغراض التصغير</h1>
      <p class="lead">درس تفاعلي: نكتشف أغراض التصغير من السياق، لا من الحجم وحده.</p>
      <div class="stage">
        <video id="v" poster="media/open.jpg?v=32" playsinline preload="none" src="media/tahyia.mp4?v=32" ${S.started ? "controls" : ""}></video>
        ${S.started ? "" : `<button class="play" type="button" data-act="play"><span>تشغيل التهيئة بالصوت<small>دقيقة ونصف · أغراض التصغير</small></span></button>`}
      </div>
      ${nextBtn("إلى الاسترجاع", 'data-act="next"', !S.started)}
    `;
  }

  function recall() {
    const wDone = WEIGHTS.every((w) => S.wPick[w.big]);
    const dDone = DIMIN.every((d) => S.dPick[d.big]);
    const weights = WEIGHTS.map((w) => {
      const picked = S.wPick[w.big];
      return `<div class="card">
        <p class="h">${w.big} ← ${w.small}</p>
        <div class="grid3">${["فُعَيْل", "فُعَيْعِل", "فُعَيْعِيل"].map((opt) =>
          btn(opt, `data-act="w" data-big="${w.big}" data-opt="${opt}"`, picked === opt ? (opt === w.w ? "ok" : "bad") : picked && opt === w.w ? "ok" : "")
        ).join("")}</div>
        ${picked ? fb(picked === w.w, "الوزن: " + w.w) : ""}
      </div>`;
    }).join("");
    const dimin = !wDone ? "" : `<h3>نُصَغِّرُ: أسد — مسجد — عصفور</h3>` + DIMIN.map((d) => {
      const picked = S.dPick[d.big];
      return `<div class="card">
        <p class="q">نُصَغِّرُ: ${d.big}</p>
        <div class="grid3">${d.options.map((opt) =>
          btn(opt, `data-act="d" data-big="${d.big}" data-opt="${opt}"`, picked === opt ? (opt === d.answer ? "ok" : "bad") : picked && opt === d.answer ? "ok" : "")
        ).join("")}</div>
        ${picked ? fb(picked === d.answer, d.answer + " على وزن " + d.weight) : ""}
      </div>`;
    }).join("");
    return `<h2>ما أوزان التصغير؟</h2>
      ${tip()}
      <p class="q">ما وزن تصغير كل كلمة؟</p>
      ${weights}${dimin}
      ${navRow(nextBtn("إلى الأهداف", 'data-act="next"', !wDone || !dDone))}`;
  }

  function goals() {
    return `<h2>أهداف الدرس</h2>
      ${tip()}
      <ol>${OBJECTIVES.map((o, i) => `<li class="card h">${i + 1}. ${o}</li>`).join("")}</ol>
      <p class="muted">تفكير ثنائي: أي هدف يبدو أصعب؟ ثم ننطلق لاكتشاف المعنى من أمثلة الكتاب.</p>
      ${navRow(nextBtn("إلى الشرح", 'data-act="next"'))}`;
  }

  function board() {
    return `<div class="boardpage">
      <p class="boardtitle">انتبه للشرح</p>
      <div class="boardspace"></div>
      ${navRow(nextBtn("اكتشاف الأمثلة", 'data-act="next"'))}
    </div>`;
  }

  function discover() {
    const item = BOOK[S.i];
    return `<h2>اكتشاف المعنى من أمثلة الكتاب</h2>
      ${tip()}
      <p class="muted">مثال ${S.i + 1} من ${BOOK.length}</p>
      <p class="quote">${mark(item.sentence, item.small)}</p>
      <p class="q">ما مكبر <b>${item.small}</b>؟</p>
      <div class="grid3">${item.bigOptions.map((opt) =>
        btn(opt, `data-act="big" data-opt="${opt}"`, S.big === opt ? (opt === item.big ? "ok" : "bad") : S.big && opt === item.big ? "ok" : "")
      ).join("")}</div>
      <p class="q">ما الغرض من التصغير؟</p>
      <div class="grid2">${PURPOSES.map((p) =>
        btn(p.label, `data-act="pur" data-opt="${p.id}"`, S.pur === p.id ? (p.id === item.purpose ? "ok" : "bad") : S.pur && p.id === item.purpose ? "ok" : "")
      ).join("")}</div>
      ${S.big && S.pur ? fb(S.big === item.big && S.pur === item.purpose, item.why) : ""}
      ${navRow(nextBtn(S.i + 1 < BOOK.length ? "المثال التالي" : "نشاط قف عند الغرض", 'data-act="step"', !S.big || !S.pur))}`;
  }

  function move() {
    const item = BOOK[S.i];
    return `<h2>قف عند الغرض</h2>
      ${tip()}
      <p class="muted">يتحرك الصف إلى المنطقة، ثم يثبّت الطالب الإجابة.</p>
      <div class="grid3">${PURPOSES.map((p) => `<div class="card c"><p class="muted">${p.place}</p><p>${p.label}</p></div>`).join("")}</div>
      <p class="quote">${mark(item.sentence, item.small)}</p>
      <div class="grid2">${PURPOSES.map((p) =>
        btn(p.place + " · " + p.label, `data-act="pick" data-opt="${p.id}"`, S.pick === p.id ? (p.id === item.purpose ? "ok" : "bad") : S.pick && p.id === item.purpose ? "ok" : "")
      ).join("")}</div>
      ${S.pick ? fb(S.pick === item.purpose, item.why) : ""}
      ${navRow(nextBtn(S.i + 1 < BOOK.length ? "المثال التالي" : "جدول المطابقة", 'data-act="step"', !S.pick))}`;
  }

  function match() {
    const done = MATCH.every((m) => S.map[m.id]);
    return `<h2>جدول المطابقة</h2>
      ${tip()}
      <p class="muted">اضغطوا المثال ثم الغرض.</p>
      <div class="cols">
        <div>${MATCH.map((m) =>
          btn(m.sentence + (S.map[m.id] ? " · " + labelOf(S.map[m.id]) : ""), `data-act="sel" data-opt="${m.id}" ${S.map[m.id] ? "disabled" : ""}`, S.sel === m.id ? "on" : S.map[m.id] ? "ok" : "")
        ).join("")}</div>
        <div>${PURPOSES.map((p) => btn(p.label, `data-act="assign" data-opt="${p.id}"`)).join("")}</div>
      </div>
      ${S.why ? fb(!S.why.startsWith("راجعوا"), S.why) : ""}
      ${navRow(nextBtn("ورقة العمل", 'data-act="next"', !done))}`;
  }

  function worksheet() {
    const item = WORKSHEET[S.i];
    return `<h2>ورقة العمل</h2>
      ${tip()}
      <p class="q">ما المعنى الذي أفاده التصغير في الكلمات بين القوسين؟</p>
      <p class="muted">يخرج طالب واحد لكل مثال · ${S.i + 1} / ${WORKSHEET.length}</p>
      <p class="quote">${mark(item.sentence, item.small)}</p>
      <div class="grid2">${PURPOSES.map((p) =>
        btn(p.label, `data-act="pick" data-opt="${p.id}"`, S.pick === p.id ? (p.id === item.purpose ? "ok" : "bad") : S.pick && p.id === item.purpose ? "ok" : "")
      ).join("")}</div>
      ${S.pick && !S.open ? `<button class="link" data-act="why">شرح المعلم</button>` : ""}
      ${S.open ? fb(S.pick === item.purpose, item.why) : ""}
      ${navRow(nextBtn(S.i + 1 < WORKSHEET.length ? "الطالب التالي" : "تحدي الصور", 'data-act="step"', !S.pick))}`;
  }

  function photos() {
    const item = PHOTOS[S.i];
    const ok = S.pur && item.allow.includes(S.pur);
    return `<h2>تحدي الصور</h2>
      ${tip()}
      <p class="muted">جملة مفيدة + غرض واضح. لا تُقبل جملة بلا غرض.</p>
      <img src="${item.img}" alt="${item.hint}" />
      <p class="muted">رمز: ${item.hint}</p>
      <textarea id="sent" rows="2" placeholder="اكتبوا جملة فيها اسم مصغّر">${S.text}</textarea>
      <div class="grid2">${PURPOSES.map((p) => btn(p.label, `data-act="pur" data-opt="${p.id}"`, S.pur === p.id ? "on" : "")).join("")}</div>
      ${S.saved ? fb(true, ok ? "الغرض مناسب للصورة." : "الجملة سُجّلت. راجعوا الغرض إن لزم.") : nextBtn("حفظ جملة الصف", 'data-act="save"', !S.pur)}
      ${navRow(S.saved ? nextBtn(S.i + 1 < PHOTOS.length ? "الصورة التالية" : "كن مبدعًا", 'data-act="step"') : "")}`;
  }

  function create() {
    const item = CREATE[S.i];
    return `<h2>كن مبدعًا</h2>
      ${tip()}
      <p class="q">أنشئوا جملة للغرض: <b>${item.label}</b></p>
      <textarea id="sent" rows="2" placeholder="جملة تامة فيها مصغّر">${S.created[item.id] || S.text}</textarea>
      ${S.saved ? fb(true, "سُجّلت جملة الصف.") : nextBtn("حفظ الجملة", 'data-act="csave"')}
      ${navRow(S.saved ? nextBtn(S.i + 1 < CREATE.length ? "الغرض التالي" : "التقويم البنائي", 'data-act="step"') : "")}`;
  }

  function quiz() {
    const done = QUIZ.every((_, i) => S.quiz[i] !== undefined);
    return `<h2>تقويم بنائي سريع</h2>
      ${tip()}
      <p class="muted">النقاط للفصل كله. الآن: ${S.score}</p>
      ${QUIZ.map((q, i) => {
        const picked = S.quiz[i];
        return `<div class="card"><p class="q">${i + 1}. ${q.q}</p>
          <div class="grid2">${PURPOSES.map((p) =>
            btn(p.label, `data-act="quiz" data-i="${i}" data-opt="${p.id}"`, picked === p.id ? (p.id === q.a ? "ok" : "bad") : picked !== undefined && p.id === q.a ? "ok" : "")
          ).join("")}</div></div>`;
      }).join("")}
      ${done ? fb(true, "نتيجة الفصل: " + S.score + " نقطة.") : ""}
      ${navRow(nextBtn("الغلق الختامي", 'data-act="next"', !done))}`;
  }

  function close() {
    return `<h2>أكمل</h2>
      ${tip()}
      <p class="quote">${CLOSE_LEARN.stem} <span class="gap">........</span></p>
      <div class="grid3">${CLOSE_LEARN.options.map((opt) =>
        btn(opt, `data-act="learn" data-opt="${opt}"`, S.learn === opt ? (opt === CLOSE_LEARN.answer ? "ok" : "bad") : S.learn && opt === CLOSE_LEARN.answer ? "ok" : "")
      ).join("")}</div>
      ${S.learn ? fb(S.learn === CLOSE_LEARN.answer, CLOSE_LEARN.full) : ""}
      <h2>ماذا تعلمت اليوم؟</h2>
      <p class="quote">الحقيبة دوين الرف.</p>
      <p class="q">ما غرض التصغير في «دوين»؟</p>
      <div class="grid2">${PURPOSES.map((p) =>
        btn(p.label, `data-act="bag" data-opt="${p.id}"`, S.bag === p.id ? (p.id === "place" ? "ok" : "bad") : S.bag && p.id === "place" ? "ok" : "")
      ).join("")}</div>
      ${S.bag ? fb(S.bag === "place", "دوين الرف تدل على قرب المكان.") : ""}
      <h3>وظّف مصغّر الكلمات بحسب الدلالة</h3>
      <div class="card"><p>هرة · المطلوب: صغر الحجم</p>
        ${S.used.h ? `<p>رأيت هُرَيْرَةً صغيرة.</p>` : btn("إظهار جملة الصف", 'data-act="use" data-opt="h"')}</div>
      <div class="card"><p>ورقة / زهرات · المطلوب: قلة العدد</p>
        ${S.used.z ? `<p>قطفت زُهَيْرَاتٍ قليلة.</p>` : btn("إظهار جملة الصف", 'data-act="use" data-opt="z"')}</div>
      <p class="credit">إعداد المعلم محمد المعصراوي</p>
      ${navRow(S.learn && S.bag && S.used.h && S.used.z ? nextBtn("إعادة الدرس", 'data-act="reset"') : "")}`;
  }

  const views = { recall, goals, board, discover, move, match, worksheet, photos, create, quiz, close };

  function paint() {
    header();
    document.body.classList.toggle("onboard", S.screen === "board");
    const introEl = $("intro");
    if (S.screen === "intro") {
      if (introEl) introEl.hidden = false;
      if (lesson) lesson.hidden = true;
      return;
    }
    if (introEl) introEl.hidden = true;
    if (!lesson) return;
    lesson.hidden = false;
    const view = views[S.screen];
    lesson.innerHTML = view ? view() : "";
    const ta = $("sent");
    if (ta) ta.addEventListener("input", () => { S.text = ta.value; });
  }

  function onAct(act, el) {
    const opt = el.dataset.opt;
    if (act === "next") { nextScreen(); return; }
    if (act === "back") { goBack(); return; }
    if (act === "reset") {
      Object.assign(S, { screen: "intro", score: 0, started: false, i: 0, wPick: {}, dPick: {}, map: {}, quiz: {}, created: {}, used: {}, learn: null, bag: null, pick: null, big: null, pur: null, text: "", saved: false });
      const v = $("v");
      if (v) { v.pause(); v.removeAttribute("src"); v.load(); }
      go("intro");
      return;
    }
    if (act === "w") {
      if (S.wPick[el.dataset.big]) return;
      S.wPick[el.dataset.big] = opt;
      scored(opt === WEIGHTS.find((w) => w.big === el.dataset.big).w);
      paint();
      return;
    }
    if (act === "d") {
      if (S.dPick[el.dataset.big]) return;
      S.dPick[el.dataset.big] = opt;
      scored(opt === DIMIN.find((d) => d.big === el.dataset.big).answer);
      paint();
      return;
    }
    if (act === "big") {
      if (S.big) return;
      S.big = opt;
      scored(opt === BOOK[S.i].big);
      paint();
      return;
    }
    if (act === "pur") {
      if (S.screen === "photos") { S.pur = opt; S.saved = false; paint(); return; }
      if (S.pur) return;
      S.pur = opt;
      scored(opt === BOOK[S.i].purpose);
      paint();
      return;
    }
    if (act === "pick") {
      if (S.pick) return;
      S.pick = opt;
      const item = S.screen === "worksheet" ? WORKSHEET[S.i] : BOOK[S.i];
      scored(opt === item.purpose);
      paint();
      return;
    }
    if (act === "step") {
      const len = S.screen === "discover" || S.screen === "move" ? BOOK.length : S.screen === "worksheet" ? WORKSHEET.length : S.screen === "photos" ? PHOTOS.length : CREATE.length;
      if (S.i + 1 < len) {
        S.i += 1;
        S.big = null; S.pur = null; S.pick = null; S.why = ""; S.open = false; S.text = ""; S.saved = false;
        paint();
      } else nextScreen();
      return;
    }
    if (act === "sel") { S.sel = opt; paint(); return; }
    if (act === "assign") {
      if (!S.sel || S.map[S.sel]) return;
      const item = MATCH.find((m) => m.id === S.sel);
      if (item.purpose === opt) {
        S.map[S.sel] = opt;
        S.why = item.why;
        S.sel = null;
        scored(true);
      } else {
        S.why = "راجعوا السياق ثم حاولوا غرضًا آخر.";
        play(false);
      }
      paint();
      return;
    }
    if (act === "why") { S.open = true; paint(); return; }
    if (act === "save") {
      const ta = $("sent");
      S.text = ta ? ta.value : S.text;
      if (!S.pur || !S.text.trim()) return;
      S.saved = true;
      play(true);
      S.score += 1;
      paint();
      return;
    }
    if (act === "csave") {
      const ta = $("sent");
      S.text = ta ? ta.value : S.text;
      if (!S.text.trim()) return;
      S.created[CREATE[S.i].id] = S.text.trim();
      S.saved = true;
      play(true);
      S.score += 1;
      paint();
      return;
    }
    if (act === "quiz") {
      const i = Number(el.dataset.i);
      if (S.quiz[i] !== undefined) return;
      S.quiz[i] = opt;
      scored(opt === QUIZ[i].a);
      paint();
      return;
    }
    if (act === "learn") {
      if (S.learn) return;
      S.learn = opt;
      scored(opt === CLOSE_LEARN.answer);
      paint();
      return;
    }
    if (act === "bag") {
      if (S.bag) return;
      S.bag = opt;
      scored(opt === "place");
      paint();
      return;
    }
    if (act === "use") {
      S.used[opt] = true;
      paint();
    }
  }

  document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-act]");
    if (!el) return;
    onAct(el.dataset.act, el);
  });
  const home = $("home");
  if (home) home.addEventListener("click", () => go("intro"));
  const backbtn = $("backbtn");
  if (backbtn) backbtn.addEventListener("click", goBack);
  window.goScreen = go;

  tick = setInterval(() => {
    S.left = Math.max(0, S.left - 1);
    const mm = String(Math.floor(S.left / 60)).padStart(2, "0");
    const ss = String(S.left % 60).padStart(2, "0");
    const t = $("timer");
    if (t) t.textContent = mm + ":" + ss;
  }, 1000);

  paint();
})();
