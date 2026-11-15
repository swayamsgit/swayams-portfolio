// New components for portfolio v4, compiled with esbuild --jsx-factory=m.jsx --jsx-fragment=m.Fragment
// Injected into the bundle scope where m (jsx runtime) and N (React) exist.
const LinkC = Ot;
const NavLinkC = t0;
const SectionC = vt;

const LOGO_URL = "/assets/name-mark-transparent.png";

const railIcon = {
  home: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/></svg>,
  work: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>,
  video: <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg>,
  doodle: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7a2.1 2.1 0 0 0-3-3l-7 7-2 5z"/><path d="M15 6l3 3"/></svg>,
  play: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 21l1.5-4L7 14c0-3 1-4 2-6l3-4 3 4c1 2 2 3 2 6l-2.5 3L16 21"/><path d="M9.5 17h5"/></svg>,
  mail: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>,
  about: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 5-6 8-6s6.5 2 8 6"/></svg>
};

function SideRail() {
  N.useEffect(() => {
    const set = () => {
      const main = document.querySelector(".poster main") || document.querySelector(".poster");
      if (main) document.documentElement.style.setProperty("--bleed-l", main.getBoundingClientRect().left + "px");
    };
    set();
    window.addEventListener("resize", set);
    return () => window.removeEventListener("resize", set);
  }, []);
  const items = [
    { to: "/", label: "home", icon: railIcon.home, end: true },
    { to: "/about", label: "about me", icon: railIcon.about },
    { to: "/uiux", label: "ui/ux", icon: railIcon.work },
    { to: "/video", label: "video editing", icon: railIcon.video },
    { to: "/doodle", label: "artboard", icon: railIcon.doodle },
    { to: "/play", label: "play me", icon: railIcon.play },
    { to: "/contact", label: "say hi", icon: railIcon.mail }
  ];
  return (
    <aside className="side-rail" aria-label="quick navigation">
      <nav className="rail-pill">
        {items.map((i) => (
          <NavLinkC key={i.to} to={i.to} end={i.end} title={i.label} aria-label={i.label}
            className={({ isActive: a }) => "rail-ic" + (a ? " active" : "")}>
            {i.icon}
          </NavLinkC>
        ))}
      </nav>
    </aside>
  );
}

const GREETINGS = ["say hi", "say namaste", "say hello"];

function GreetBand() {
  const [i, setI] = N.useState(0);
  N.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setI((x) => (x + 1) % GREETINGS.length), 2400);
    return () => window.clearInterval(id);
  }, []);
  return (
    <section className="greet-band" aria-label="contact greeting">
      <div className="greet-rays" aria-hidden="true" />
      <h2 className="greet-word">
        <span key={i} className="greet-swap">{GREETINGS[i]}</span>
      </h2>
      <a className="greet-mail" href="mailto:swayamsdeep444@gmail.com">swayamsdeep444@gmail.com</a>
      <div className="greet-links">
        <a className="chip chip-link" href="https://www.instagram.com/auti__sm" target="_blank" rel="noreferrer">instagram - @auti__sm</a>
        <a className="chip chip-link" href="https://www.linkedin.com/in/swayamsmohanty042004" target="_blank" rel="noreferrer">linkedin</a>
        <LinkC className="chip chip-link" to="/contact">all contacts</LinkC>
      </div>
    </section>
  );
}

const ART_COLORS = ["#1a1a1a", "#c1272d", "#55631f", "#f4a7c3", "#4a6fd4", "#e0a62e", "#8a4b2d", "#7a3fa0", "#f8edcd"];
const ART_SIZES = [2, 4, 8, 16, 28];

function Artboard() {
  const canvasRef = N.useRef(null);
  const [color, setColor] = N.useState(ART_COLORS[0]);
  const [size, setSize] = N.useState(ART_SIZES[2]);
  const [tool, setTool] = N.useState("brush");
  const [opacity, setOpacity] = N.useState(100);
  const [fillShape, setFillShape] = N.useState(true);
  const [bg, setBg] = N.useState("#fdf6e0");
  const drawing = N.useRef(false);
  const start = N.useRef(null);
  const last = N.useRef(null);
  const snap = N.useRef(null);
  const undoStack = N.useRef([]);
  const [canUndo, setCanUndo] = N.useState(false);
  const [shared, setShared] = N.useState("");
  const toolRef = N.useRef("brush");
  const colorRef = N.useRef(ART_COLORS[0]);
  const sizeRef = N.useRef(ART_SIZES[2]);
  const opRef = N.useRef(1);
  const fillRef = N.useRef(true);
  toolRef.current = tool;
  colorRef.current = color;
  sizeRef.current = size;
  opRef.current = opacity / 100;
  fillRef.current = fillShape;

  N.useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    const fit = () => {
      const r = c.getBoundingClientRect();
      const d = Math.min(window.devicePixelRatio || 1, 2);
      const prev = c.width ? c.toDataURL() : null;
      c.width = Math.round(r.width * d);
      c.height = Math.round(r.height * d);
      ctx.setTransform(d, 0, 0, d, 0, 0);
      if (prev) {
        const im = new Image();
        im.onload = () => ctx.drawImage(im, 0, 0, r.width, r.height);
        im.src = prev;
      }
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  const pos = (e) => {
    const r = canvasRef.current.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  };
  const pushUndo = () => {
    try {
      undoStack.current.push(canvasRef.current.toDataURL());
      if (undoStack.current.length > 40) undoStack.current.shift();
      setCanUndo(true);
    } catch {}
  };
  const snapIn = () => {
    const c = canvasRef.current;
    const off = document.createElement("canvas");
    off.width = c.width; off.height = c.height;
    off.getContext("2d").drawImage(c, 0, 0);
    snap.current = off;
  };
  const snapOut = () => {
    const c = canvasRef.current, ctx = c.getContext("2d");
    const d = Math.min(window.devicePixelRatio || 1, 2);
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.drawImage(snap.current, 0, 0);
    ctx.restore();
  };
  const strokeStyle = (ctx) => {
    ctx.lineWidth = sizeRef.current;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.globalAlpha = opRef.current;
    ctx.globalCompositeOperation = "source-over";
    ctx.strokeStyle = colorRef.current;
    ctx.fillStyle = colorRef.current;
  };
  const drawShape = (ctx, a, b) => {
    strokeStyle(ctx);
    const t = toolRef.current;
    const x = Math.min(a.x, b.x), y = Math.min(a.y, b.y);
    const w = Math.abs(b.x - a.x), h = Math.abs(b.y - a.y);
    ctx.beginPath();
    if (t === "line") { ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
    else if (t === "rect") {
      if (fillRef.current) ctx.fillRect(x, y, w, h);
      else { ctx.lineWidth = Math.max(2, sizeRef.current / 2); ctx.strokeRect(x, y, w, h); }
    } else if (t === "ellipse") {
      ctx.ellipse(x + w / 2, y + h / 2, w / 2, h / 2, 0, 0, Math.PI * 2);
      if (fillRef.current) ctx.fill(); else { ctx.lineWidth = Math.max(2, sizeRef.current / 2); ctx.stroke(); }
    }
    ctx.globalAlpha = 1;
  };
  const floodFill = (pt) => {
    const c = canvasRef.current, ctx = c.getContext("2d");
    const d = Math.min(window.devicePixelRatio || 1, 2);
    const W = c.width, H = c.height;
    const img = ctx.getImageData(0, 0, W, H);
    const data = img.data;
    const hex = colorRef.current;
    const fr = parseInt(hex.slice(1, 3), 16), fg = parseInt(hex.slice(3, 5), 16), fb = parseInt(hex.slice(5, 7), 16);
    const x0 = Math.round(pt.x * d), y0 = Math.round(pt.y * d);
    if (x0 < 0 || y0 < 0 || x0 >= W || y0 >= H) return;
    const i0 = (y0 * W + x0) * 4;
    const tr = data[i0], tg = data[i0 + 1], tb = data[i0 + 2], ta = data[i0 + 3];
    if (tr === fr && tg === fg && tb === fb && ta === 255) return;
    const tol = 48;
    const match = (i) => Math.abs(data[i] - tr) <= tol && Math.abs(data[i + 1] - tg) <= tol && Math.abs(data[i + 2] - tb) <= tol && Math.abs(data[i + 3] - ta) <= tol;
    const stack = [[x0, y0]];
    const seen = new Uint8Array(W * H);
    while (stack.length) {
      const [x, y] = stack.pop();
      if (x < 0 || y < 0 || x >= W || y >= H) continue;
      const p = y * W + x;
      if (seen[p]) continue;
      const i = p * 4;
      if (!match(i)) continue;
      seen[p] = 1;
      data[i] = fr; data[i + 1] = fg; data[i + 2] = fb; data[i + 3] = 255;
      stack.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
    }
    ctx.putImageData(img, 0, 0);
  };
  const spray = (ctx, p) => {
    ctx.save();
    ctx.globalAlpha = opRef.current;
    ctx.fillStyle = colorRef.current;
    const r = sizeRef.current * 2;
    for (let k = 0; k < 14; k++) {
      const a = Math.random() * Math.PI * 2, rr = Math.random() * r;
      ctx.beginPath();
      ctx.arc(p.x + Math.cos(a) * rr, p.y + Math.sin(a) * rr, Math.max(0.6, sizeRef.current / 6), 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  };
  const down = (e) => {
    drawing.current = true;
    pushUndo();
    setShared("");
    try { e.target.setPointerCapture && e.target.setPointerCapture(e.pointerId); } catch {}
    const p = pos(e);
    start.current = p; last.current = p;
    const t = toolRef.current;
    const ctx = canvasRef.current.getContext("2d");
    if (t === "fill") { floodFill(p); drawing.current = false; return; }
    if (t === "line" || t === "rect" || t === "ellipse") { snapIn(); return; }
    if (t === "spray") { spray(ctx, p); return; }
    ctx.save();
    strokeStyle(ctx);
    if (t === "eraser") { ctx.globalCompositeOperation = "destination-out"; ctx.lineWidth = sizeRef.current * 2.5; ctx.globalAlpha = 1; }
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
    ctx.lineTo(p.x + 0.01, p.y + 0.01);
    ctx.stroke();
    ctx.restore();
  };
  const move = (e) => {
    if (!drawing.current) return;
    const ctx = canvasRef.current.getContext("2d");
    const p = pos(e);
    const t = toolRef.current;
    if (t === "line" || t === "rect" || t === "ellipse") {
      if (!snap.current) return;
      snapOut();
      drawShape(ctx, start.current, p);
      return;
    }
    if (t === "spray") { spray(ctx, p); last.current = p; return; }
    if (!last.current) return;
    ctx.save();
    strokeStyle(ctx);
    if (t === "eraser") { ctx.globalCompositeOperation = "destination-out"; ctx.lineWidth = sizeRef.current * 2.5; ctx.globalAlpha = 1; }
    ctx.beginPath();
    ctx.moveTo(last.current.x, last.current.y);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    ctx.restore();
    last.current = p;
  };
  const up = () => { drawing.current = false; last.current = null; snap.current = null; };
  const undo = () => {
    const prev = undoStack.current.pop();
    setCanUndo(undoStack.current.length > 0);
    if (!prev) return;
    const c = canvasRef.current, ctx = c.getContext("2d");
    const r = c.getBoundingClientRect();
    const im = new Image();
    im.onload = () => {
      ctx.clearRect(0, 0, r.width, r.height);
      ctx.drawImage(im, 0, 0, r.width, r.height);
    };
    im.src = prev;
  };
  const clear = () => {
    pushUndo();
    const c = canvasRef.current, ctx = c.getContext("2d");
    const r = c.getBoundingClientRect();
    ctx.clearRect(0, 0, r.width, r.height);
  };
  const composeBlob = (cb) => {
    const c = canvasRef.current;
    const out = document.createElement("canvas");
    out.width = c.width; out.height = c.height;
    const octx = out.getContext("2d");
    octx.fillStyle = bg;
    octx.fillRect(0, 0, out.width, out.height);
    octx.drawImage(c, 0, 0);
    out.toBlob(cb, "image/png");
  };
  const exportPng = () => {
    composeBlob((blob) => {
      if (!blob) return;
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "swayams-artboard.png";
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 4000);
      setShared("exported png - check your downloads.");
    });
  };
  const share = () => {
    composeBlob(async (blob) => {
      if (!blob) return;
      const file = new File([blob], "swayams-artboard.png", { type: "image/png" });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({ files: [file], title: "my artboard", text: "made on swayams' portfolio" });
          setShared("shared.");
        } catch {}
      } else {
        try {
          await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
          setShared("copied to clipboard - paste it anywhere.");
        } catch {
          exportPng();
          setShared("sharing not supported here - exported a png instead.");
        }
      }
    });
  };

  const TOOLS = [
    { id: "brush", label: "brush" },
    { id: "spray", label: "spray" },
    { id: "line", label: "line" },
    { id: "rect", label: "rect" },
    { id: "ellipse", label: "circle" },
    { id: "fill", label: "fill" },
    { id: "eraser", label: "eraser" }
  ];
  const BG_COLORS = ["#fdf6e0", "#ffffff", "#1a1a1a", "#f4a7c3", "#f3c85e", "#bcd3f7"];

  return (
    <div className="doodle-wrap artboard">
      <div className="doodle-tools" role="toolbar" aria-label="artboard tools">
        <div className="tool-row">
          {TOOLS.map((t) => (
            <button key={t.id} type="button" className={"chip tool-btn" + (tool === t.id ? " active" : "")}
              aria-pressed={tool === t.id} onClick={() => setTool(t.id)}>{t.label}</button>
          ))}
          <span className="tool-sep" aria-hidden="true" />
          <label className="chip tool-toggle">
            <input type="checkbox" checked={fillShape} onChange={(e) => setFillShape(e.target.checked)} /> fill
          </label>
          <label className="chip tool-range">
            opacity <input type="range" min="10" max="100" value={opacity} onChange={(e) => setOpacity(Number(e.target.value))} aria-label="opacity" />
          </label>
        </div>
        <div className="tool-row">
          <span className="tool-label">ink</span>
          {ART_COLORS.map((c) => (
            <button key={c} type="button" className={"swatch" + (color === c ? " active" : "")}
              style={{ background: c }} aria-label={"color " + c} onClick={() => { setColor(c); if (tool === "eraser") setTool("brush"); }} />
          ))}
          <span className="tool-sep" aria-hidden="true" />
          <span className="tool-label">size</span>
          {ART_SIZES.map((s) => (
            <button key={s} type="button" className={"size-dot" + (size === s ? " active" : "")}
              aria-label={"brush size " + s} onClick={() => setSize(s)}>
              <span style={{ width: Math.min(s * 2.2, 18), height: Math.min(s * 2.2, 18) }} />
            </button>
          ))}
          <span className="tool-sep" aria-hidden="true" />
          <span className="tool-label">paper</span>
          {BG_COLORS.map((c) => (
            <button key={c} type="button" className={"swatch paper" + (bg === c ? " active" : "")}
              style={{ background: c }} aria-label={"paper " + c} onClick={() => setBg(c)} />
          ))}
        </div>
        <div className="tool-row">
          <button type="button" className="chip" onClick={undo} disabled={!canUndo}>undo</button>
          <button type="button" className="chip" onClick={clear}>clear</button>
          <button type="button" className="chip chip-accent" onClick={exportPng}>export png</button>
          <button type="button" className="chip chip-accent" onClick={share}>share</button>
        </div>
      </div>
      <div className="artboard-paper" style={{ background: bg }}>
        <canvas ref={canvasRef} className="doodle-canvas artboard-canvas"
          onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerLeave={up}
          aria-label="drawing artboard" />
      </div>
      <p className="doodle-note">{shared || "your art stays on your device unless you export or share it - nothing is uploaded anywhere."}</p>
    </div>
  );
}

function RotCard() {
  const ref = N.useRef(null);
  N.useEffect(() => {
    const SUITS = [
      { sym: "♥", color: "#c1272d" },
      { sym: "♠", color: "#1a1a1a" },
      { sym: "♦", color: "#e0a62e" },
      { sym: "♣", color: "#4f772d" }
    ];
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let angle = 45, vel = 0, dragging = false, lastA = 0, curSuit = -1, raf = 0, cx = 0, cy = 0;
    const center = () => {
      const r = el.getBoundingClientRect();
      cx = r.left + r.width / 2;
      cy = r.top + r.height / 2;
    };
    const angOf = (e) => Math.atan2(e.clientY - cy, e.clientX - cx) * 180 / Math.PI;
    const paint = () => {
      const si = ((Math.floor(angle / 360) % 4) + 4) % 4;
      if (si !== curSuit) {
        curSuit = si;
        const suit = SUITS[si];
        el.style.setProperty("--fc", suit.color);
        el.querySelectorAll(".rot-suit").forEach((n) => { n.textContent = suit.sym; });
      }
      el.style.setProperty("--rz", angle + "deg");
    };
    const tick = () => {
      if (!dragging) { angle += 0.35 + vel; vel *= 0.95; if (Math.abs(vel) < 0.001) vel = 0; }
      paint();
      raf = requestAnimationFrame(tick);
    };
    const down = (e) => { dragging = true; center(); lastA = angOf(e); vel = 0; try { el.setPointerCapture(e.pointerId); } catch {} };
    const move = (e) => {
      if (!dragging) return;
      const a = angOf(e);
      let d = a - lastA;
      if (d > 180) d -= 360;
      if (d < -180) d += 360;
      lastA = a;
      angle += d;
      vel = d * 0.15;
      paint();
    };
    const up = () => { dragging = false; };
    el.addEventListener("pointerdown", down);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
    };
  }, []);
  return (
    <div className="rot-card rot-card-v3" ref={ref} style={{ "--rz": "45deg", "--fc": "#c1272d", touchAction: "pan-y" }} role="img" aria-label="spinning jack playing card - drag to turn">
      <div className="rot-face">
        <span className="rot-corner rot-tl">J <i className="rot-suit">♥</i></span>
        <span className="rot-big">J<i className="rot-suit">♥</i></span>
        <span className="rot-word">jack</span>
        <span className="rot-corner rot-br">J <i className="rot-suit">♥</i></span>
      </div>
    </div>
  );
}

function QuoteBand() {
  return (
    <section className="quote-band" aria-label="quote">
      <p className="quote-line">
        <span className="q-line q1">but often times</span>
        <span className="q-line q2">better than</span>
        <span className="q-line q3">master of one</span>
      </p>
    </section>
  );
}

function BookShelf() {
  const open = N.useContext(aa);
  const total = ln.length;
  const [pos, setPos] = N.useState(Math.floor(total / 2));
  const drag = N.useRef(null);
  const wrap = N.useRef(null);
  const clamp = (v) => Math.max(0, Math.min(total - 1, v));
  const wrapPos = (v) => ((v % total) + total) % total;
  const onDown = (e) => {
    bump();
    drag.current = { x: e.clientX, start: pos, moved: false };
    try { e.target.setPointerCapture(e.pointerId); } catch {}
  };
  const onMove = (e) => {
    if (!drag.current || !wrap.current) return;
    const w = wrap.current.offsetWidth;
    const dx = e.clientX - drag.current.x;
    if (Math.abs(dx) > 6) drag.current.moved = true;
    setPos(clamp(drag.current.start - dx / (w * 0.22)));
  };
  const onUp = () => {
    if (!drag.current) return;
    const wasMoved = drag.current.moved;
    drag.current = null;
    setPos((p) => Math.round(clamp(p)));
    return wasMoved;
  };
  const step = N.useCallback((d) => { bump(); setPos((p) => Math.round(clamp(p + d))); }, [total]);
  N.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step]);
  const idle = N.useRef(0);
  N.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => {
      if (document.hidden) return;
      if (Date.now() - idle.current < 5000) return;
      setPos((p) => {
        const nx = Math.round(p) + 1;
        return nx >= total ? 0 : nx;
      });
    }, 3400);
    return () => clearInterval(t);
  }, [total]);
  const bump = () => { idle.current = Date.now(); };
  const cur = Math.round(pos);
  return (
    <div className="shelf-wrap">
      <div
        className="shelf"
        ref={wrap}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        onPointerEnter={bump}
        role="region"
        aria-label="poster shelf - drag or use arrow keys to browse"
      >
        <div className="shelf-scene">
          {ln.map((it, i) => {
            const off = i - pos;
            const ab = Math.abs(off);
            if (ab > 3.4) return null;
            const st = {
              transform: `translate(-50%, -50%) translateX(${off * 88}%) translateZ(${-ab * 250}px) rotateY(${-off * 28}deg)`,
              filter: `brightness(${Math.max(.72, 1 - ab * .12)})`,
              zIndex: 100 - Math.round(ab * 10),
              opacity: ab > 2.8 ? 0 : 1
            };
            return (
              <figure
                key={it.src}
                className={`shelf-book${i === cur ? " cur" : ""}`}
                style={st}
                onClick={() => {
                  if (drag.current && drag.current.moved) return;
                  if (i === cur) open(ln.map((x) => ({ src: x.src, alt: x.alt })), i, "the gallery");
                  else setPos(i);
                }}
                aria-label={`${it.name} - ${i + 1} of ${total}`}
              >
                <div className="sb-inner">
                  <div className="sb-spine" aria-hidden="true"><span>{it.name}</span></div>
                  <div className="sb-pages" aria-hidden="true"></div>
                  <img className="sb-front" src={it.src} alt={it.alt} draggable="false" loading="lazy" />
                </div>
              </figure>
            );
          })}
        </div>
        <div className="shelf-plank" aria-hidden="true"></div>
      </div>
      <div className="shelf-bar">
        <button type="button" className="shelf-nav" onClick={() => step(-1)} disabled={cur <= 0} aria-label="previous poster">←</button>
        <p className="shelf-count">{String(cur + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</p>
        <button type="button" className="shelf-nav" onClick={() => step(1)} disabled={cur >= total - 1} aria-label="next poster">→</button>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <>
      <SectionC id="about" title="about me" sticker="that's me">
        <div className="about-grid">
          <div className="about-text">
            <p className="body-copy hero-bio">Posters, brands, interfaces और edits - काम बोलता है.</p>
            <p className="body-copy">Designer दिल से, engineer बन रहा हूँ. I study at OUTR, Bhubaneswar and spend the better half of college designing for it - lead designer at E-Cell OUTR, Letterman and Cetadel. Posters, brands, interfaces, edits, the occasional t-shirt. बाकी काम gallery में है.</p>
            <div className="fact-grid">
              <div className="fact-block">
                <h3>achievements</h3>
                <ul>
                  <li>Successfully led the entire branding of two editions of E-Summit</li>
                  <li>Helped lead and create three editions of Letterman, OUTR's own magazine</li>
                  <li>Selected for the top-10 DJX Lab residency programme, a design-oriented competition</li>
                  <li>2nd prize, poster making competition by IIC IIT Bombay</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="about-side">
            <div className="about-frame">
              <img className="cutout" src={_v} alt="Portrait of Swayams" />
              <span className="sticker about-sticker">it's giving designer</span>
            </div>
          </div>
        </div>
      </SectionC>
      <SectionC id="on-repeat" title="on repeat" sticker="my favorite songs">
        <OnRepeat />
      </SectionC>
      <GreetBand />
    </>
  );
}

function SectionF({ id: e, title: t, sticker: n, flat: fl, children: r }) {
  return (
    <section className="sec" id={e}>
      <div className="sec-head">
        <h2 className={fl ? "flat-h" : undefined}>{t}</h2>
        {n && <span className="sticker">{n}</span>}
      </div>
      {r}
    </section>
  );
}

function BrandingPage() {
  const folders = sa.filter((f) => f.id !== "posters");
  return (
    <SectionC id="branding" title="branding">
      <div className="cat-grid">
        {folders.map((f, i) => (
          <LinkC key={f.id} to={`/${f.id}`} className={`cat-card tilt-${i % 5}`}>
            <img src={f.items[f.cover || 0].src} alt={f.items[0].alt} loading="lazy" />
            <span className="cat-name">{f.title.toLowerCase()}</span>
            <span className="cat-count">{f.items.length} designs</span>
          </LinkC>
        ))}
      </div>
    </SectionC>
  );
}

function HomeV5() {
  const posters = sa.find((f) => f.id === "posters");
  const letterman = sa.find((f) => f.id === "letterman-25");
  const brandCount = sa.filter((f) => f.id !== "posters").length;
  return (
    <>
      <header className="hero hero-v5">
        <h1 className="hero-big"><span className="hb-hi">मैं</span><span className="hb-name">SWAYAMS</span></h1>
        <p className="hero-tag">i'm a jack of all trades, master of none</p>
        <RotCard />
      </header>
      <QuoteBand />
      <SectionF id="work" title={<><span className="hdev">मेरा</span> WORK:</>} sticker="pick a category" flat={true}>
        <div className="cat-grid">
          <LinkC to="/uiux" className="cat-card tilt-1">
            <img src={Pd[1].src} alt="Moneo UI screens" loading="lazy" />
            <span className="cat-name">ui/ux</span>
          </LinkC>
          <LinkC to="/posters" className="cat-card tilt-2">
            <img src={posters.items[posters.cover || 0].src} alt={posters.items[0].alt} loading="lazy" />
            <span className="cat-name">posters</span>
          </LinkC>
          <LinkC to="/branding" className="cat-card tilt-3">
            <img src={letterman.items[letterman.cover || 0].src} alt={letterman.items[0].alt} loading="lazy" />
            <span className="cat-name">branding</span>
          </LinkC>
          <LinkC to="/video" className="cat-card tilt-4">
            <img src={Ul[0]} alt="E-Summit reel still" loading="lazy" />
            <span className="cat-name">video editing</span>
          </LinkC>
        </div>
      </SectionF>
      <SectionC id="gallery" title="the gallery" sticker="walk the wall">
        <p className="body-copy">अपनी favourite चीज़ें, एक लंबी दीवार पे. drag to walk the wall - click a frame to step closer.</p>
        <BookShelf />
      </SectionC>
      <GreetBand />
    </>
  );
}

const CIcon = {
  phone: <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  mail: <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>,
  instagram: <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="2.5" width="19" height="19" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none"/></svg>,
  linkedin: <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z"/></svg>,
  github: <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>,
  file: <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
};

function ContactV5() {
  return (
    <SectionC id="contact" title="say hi" sticker="contact">
      <div className="contact-grid">
        <a className="chip chip-link contact-chip" href="tel:+917681001527">{CIcon.phone}<span>+91 76810 01527</span></a>
        <a className="chip chip-link contact-chip" href="mailto:swayamsdeep444@gmail.com">{CIcon.mail}<span>swayamsdeep444@gmail.com</span></a>
        <a className="chip chip-link contact-chip" href="https://www.instagram.com/auti__sm" target="_blank" rel="noreferrer">{CIcon.instagram}<span>instagram - @auti__sm</span></a>
        <a className="chip chip-link contact-chip" href="https://www.linkedin.com/in/swayamsmohanty042004" target="_blank" rel="noreferrer">{CIcon.linkedin}<span>linkedin - swayamsmohanty042004</span></a>
        <a className="chip chip-link contact-chip" href="https://github.com/swayamsgit" target="_blank" rel="noreferrer">{CIcon.github}<span>github - swayamsgit</span></a>
        <a className="chip chip-link contact-chip" href="/assets/swayams-mohanty-resume.pdf" download="swayams-mohanty-resume.pdf">{CIcon.file}<span>resume - pdf</span></a>
      </div>
    </SectionC>
  );
}

function WorkPageV5() {
  const open = N.useContext(aa);
  const posters = sa.find((f) => f.id === "posters");
  const brandFolders = sa.filter((f) => f.id !== "posters");
  return (
    <SectionF id="uiux" title={<><span className="hdev">मेरा</span> WORK</>} flat={true}>
      <div className="proj-grid">
        <article className="proj-card tilt-1">
          <h3>Moneo</h3>
          <p className="proj-sub">Finance app UI, designed in Figma.</p>
          <Rd items={Pd} title="Moneo" />
          <p className="proj-links"><a className="text-link" href="https://www.figma.com/design/XTq0YNNEhslGccjCsFW4zD/Swayams--Portfolio?node-id=3-4042&p=f&t=JPlvuSCvQaJ19fpJ-0" target="_blank" rel="noreferrer">Figma file</a></p>
        </article>
        <article className="proj-card tilt-3">
          <h3>Desypher</h3>
          <p className="proj-sub">Website design, live.</p>
          <button type="button" className="proj-shot" onClick={() => open([{ src: Du, alt: "Desypher landing page", name: "Desypher" }], 0, "Desypher")}>
            <img src={Du} alt="Desypher landing page" loading="lazy" />
          </button>
          <p className="proj-links">
            <a className="text-link" href="https://desypher.pages.dev/" target="_blank" rel="noreferrer">desypher.pages.dev</a>
            {" · "}
            <a className="text-link" href="https://github.com/swayamsgit/deSypher" target="_blank" rel="noreferrer">GitHub repo</a>
            {" · "}
            <a className="text-link" href="https://drive.google.com/file/d/1V7O10hUzhLmHSrKut1-nL3NgGkn2IJQo/view" target="_blank" rel="noreferrer">Demo video</a>
          </p>
        </article>
        <article className="proj-card tilt-4">
          <h3>Aura - Companion App</h3>
          <p className="proj-sub">Built at the Meta Global AI Developer Hackathon, October 2026.</p>
          <button type="button" className="proj-shot" onClick={() => open([{ src: Bu, alt: "Aura demo still", name: "Aura" }], 0, "Aura")}>
            <img src={Bu} alt="Aura demo still" loading="lazy" />
          </button>
          <p className="proj-links">
            <a className="text-link" href="https://aura-companion-5hf.pages.dev" target="_blank" rel="noreferrer">aura-companion-5hf.pages.dev</a>
            {" · "}
            <a className="text-link" href="https://github.com/swayamsgit/aura-context-companion" target="_blank" rel="noreferrer">GitHub repo</a>
            {" · "}
            <a className="text-link" href="https://youtu.be/Y4b9QXBKYXU" target="_blank" rel="noreferrer">Demo video</a>
          </p>
        </article>
        <article className="proj-card tilt-1">
          <h3>1voice</h3>
          <p className="proj-sub">Voice-first seller app - submitted at the PayPal AI Hackathon, November 2026.</p>
          <button type="button" className="proj-shot" onClick={() => open([{ src: "/assets/1voice.png", alt: "1voice app - voice-first seller dashboard", name: "1voice" }], 0, "1voice")}>
            <img src="/assets/1voice.png" alt="1voice app - voice-first seller dashboard" loading="lazy" />
          </button>
          <p className="proj-links">
            <a className="text-link" href="https://onevoice-v2.onrender.com" target="_blank" rel="noreferrer">Live demo</a>
            {" · "}
            <a className="text-link" href="https://github.com/swayamsgit/1voice" target="_blank" rel="noreferrer">GitHub repo</a>
          </p>
        </article>
      </div>
      <div className="cat-grid work-folders">
        <LinkC to="/posters" className="cat-card tilt-2">
          <img src={posters.items[posters.cover || 0].src} alt={posters.items[0].alt} loading="lazy" />
          <span className="cat-name">posters</span>
          <span className="cat-count">{posters.items.length} designs</span>
        </LinkC>
        {brandFolders.map((f, i) => (
          <LinkC key={f.id} to={`/${f.id}`} className={`cat-card tilt-${(i + 3) % 5}`}>
            <img src={f.items[f.cover || 0].src} alt={f.items[0].alt} loading="lazy" />
            <span className="cat-name">{f.title.toLowerCase()}</span>
            <span className="cat-count">{f.items.length} designs</span>
          </LinkC>
        ))}
        <LinkC to="/video" className="cat-card tilt-4">
          <img src={Ul[0]} alt="E-Summit reel still" loading="lazy" />
          <span className="cat-name">video editing</span>
          <span className="cat-count">3 reels</span>
        </LinkC>
      </div>
    </SectionF>
  );
}


const ON_REPEAT = [
  { id: "65krtHkaYLPr0mEbjL61UP", title: "Kiss of Life", artist: "Sade" },
  { id: "4IadxL6BUymXlh8RCJJu7T", title: "Too Sweet", artist: "Hozier" },
  { id: "4EcYqXGZ1MOl7gBLcRO9Ya", title: "still feel.", artist: "half•alive" },
  { id: "5iDaEbPX8Lq2evx3ZpAgQU", title: "A Little Messed Up", artist: "june" },
  { id: "0Qr61NXlyAeQaADO5xn3rI", title: "Cry", artist: "Cigarettes After Sex" },
  { id: "3hRV0jL3vUpRrcy398teAU", title: "The Night We Met", artist: "Lord Huron" },
  { id: "3QaPy1KgI7nu9FJEQUgn6h", title: "WILDFLOWER", artist: "Billie Eilish" },
  { id: "2I0MIQhICYnKHvaxUHYH49", title: "Shauq", artist: "Amit Trivedi, Varun Grover, Shahid Mallya, Sireesha Bhagavatula, Swanand Kirkire" },
  { id: "2mlNgAeIBnL78ZriXgrRHz", title: "Glimpse of Us", artist: "Joji" },
  { id: "1czB1wqK3Xyv2S56BrcKeE", title: "Loser", artist: "Tame Impala" },
  { id: "2OYfo8xz9nCqXVXqibLq2G", title: "Flaws", artist: "Vancouver Sleep Clinic" },
  { id: "2ajUl8lBLAXOXNpG4NEPMz", title: "Sway", artist: "Michael Bublé" },
  { id: "5ZDKPFRZC6QlJpf8bCIXTs", title: "The Abyss (feat. Lana Del Rey)", artist: "The Weeknd, Lana Del Rey" },
  { id: "5TXDeTFVRVY7Cvt0Dw4vWW", title: "Revenge", artist: "XXXTENTACION" }
];

function OnRepeat() {
  const [cur, setCur] = N.useState(0);
  const track = ON_REPEAT[cur];
  return (
    <div className="on-repeat">
      <div className="or-player">
        <iframe
          key={track.id}
          src={`https://open.spotify.com/embed/track/${track.id}?utm_source=generator`}
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title={`Spotify player - ${track.title} by ${track.artist}`}
        ></iframe>
      </div>
      <ol className="or-list">
        {ON_REPEAT.map((t, i) => (
          <li key={t.id}>
            <button
              type="button"
              className={`or-track${i === cur ? " cur" : ""}`}
              onClick={() => setCur(i)}
              aria-label={`play ${t.title} by ${t.artist}`}
            >
              <span className="or-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="or-name">{t.title}</span>
              <span className="or-artist">{t.artist}</span>
              <span className="or-play" aria-hidden="true">{i === cur ? "▶" : "·"}</span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
