import { useEffect, useState } from "react";
import { links, profile, v3 } from "../data";
import "../v3.css";

const SECTIONS = [
  { label: "Home", id: "p-home" },
  { label: "FAQ", id: "p-faq" },
  { label: "Work", id: "p-work" },
  { label: "Writing", id: "p-writing" },
  { label: "Experience", id: "p-exp" },
  { label: "Contact", id: "p-contact" },
];

// 9×7 pixel cat, "X" = filled
// const CAT = [
//   "X.....X..",
//   "XX...XX..",
//   "XXXXXXX..",
//   "X.XXX.X.X",
//   "XXXXXXX.X",
//   ".XXXXXXX.",
//   ".X.X.X.X.",
// ];

const reducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function useTyped(words: string[]) {
  const [typed, setTyped] = useState(reducedMotion() ? words[0] : "");
  useEffect(() => {
    if (reducedMotion()) return;
    let r = 0,
      i = 0,
      del = false;
    const id = setInterval(() => {
      const word = words[r];
      if (!del) {
        i++;
        if (i > word.length + 8) del = true;
      } else {
        i--;
        if (i <= 0) {
          del = false;
          r = (r + 1) % words.length;
        }
      }
      setTyped(word.slice(0, Math.min(i, word.length)));
    }, 85);
    return () => clearInterval(id);
  }, [words]);
  return typed;
}

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 30;
  window.scrollTo({ top, behavior: reducedMotion() ? "auto" : "smooth" });
}

/** Pixel cat that lazily follows the cursor. Mutates style directly — no re-renders. */
// function Cat() {
//   const ref = useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     const s = { mx: 200, my: 300, cx: 200, cy: 300, face: 1 };
//     const onMove = (e: MouseEvent) => {
//       s.mx = e.clientX;
//       s.my = e.clientY;
//     };
//     let raf = 0;
//     const tick = () => {
//       const dx = s.mx - 30 - s.cx;
//       const dy = s.my - 34 - s.cy;
//       if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
//         s.cx += dx * 0.06;
//         s.cy += dy * 0.06;
//         s.face = dx < -2 ? -1 : dx > 2 ? 1 : s.face;
//         if (ref.current) {
//           ref.current.style.transform = `translate(${s.cx}px, ${s.cy}px) scaleX(${s.face})`;
//         }
//       }
//       raf = requestAnimationFrame(tick);
//     };
//     window.addEventListener("mousemove", onMove);
//     raf = requestAnimationFrame(tick);
//     return () => {
//       window.removeEventListener("mousemove", onMove);
//       cancelAnimationFrame(raf);
//     };
//   }, []);

//   return (
//     <div ref={ref} className="v3-cat" aria-hidden="true">
//       {CAT.join("")
//         .split("")
//         .map((ch, i) => (
//           <span
//             key={i}
//             style={{ background: ch === "X" ? "var(--fg)" : "transparent" }}
//           />
//         ))}
//     </div>
//   );
// }

function Marquee({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <div className={`v3-marquee ${className}`}>
      <div className="v3-marquee__track">
        {children}
        <div aria-hidden="true" className="v3-marquee__dup">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function PortfolioV3() {
  const typed = useTyped(v3.roles);
  // const [catOn, setCatOn] = useState(true);
  const tickerText = [...v3.ticker, ...v3.ticker].join(" ✦ ") + " ✦";

  return (
    <div className="v3">
      <Marquee className="v3-ticker">
        <span>{tickerText}</span>
      </Marquee>

      <section id="p-home" className="v3-wrap v3-hero">
        <div className="v3-banner">
          {v3.banner ? (
            <img src={v3.banner} alt="" />
          ) : (
            <div className="v3-banner__pattern" />
          )}
        </div>
        <div className="v3-hero__row">
          <div className="v3-avatar">
            <img src={v3.avatar} alt={profile.name} />
          </div>
          <div className="v3-hero__actions">
            <span className="v3-pill">
              <span className="v3-dot" />
              {v3.status}
            </span>
            <a
              className="v3-pill v3-pill--solid"
              href={links.resume.href}
              download="Priya_Anna_James_resume.pdf"
            >
              Résumé ↓
            </a>
          </div>
        </div>

        <div className="v3-hero__text">
          <h1 className="v3-name">{profile.name}</h1>
          <div className="v3-typed" aria-label={v3.roles.join(", ")}>
            <span aria-hidden="true">{typed}</span>
            <span className="v3-caret" aria-hidden="true">
              |
            </span>
          </div>
          <p className="v3-intro">{v3.intro}</p>
          <div className="v3-meta">
            <a href={`mailto:${v3.email}`}>{v3.email}</a>
            <a href={links.linkedin.href} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <span>{v3.location}</span>
          </div>
        </div>
      </section>

      <Marquee className="v3-stack">
        {v3.stack.map((s) => (
          <span key={s} className="v3-chip">
            {s}
          </span>
        ))}
      </Marquee>

      <section id="p-faq" className="v3-wrap v3-faq">
        <h2 className="v3-faq__title">Before you ask…</h2>
        <div className="v3-faq__grid">
          {v3.faq.map((f, i) => (
            <div key={f.q}>
              <div className="v3-faq__n">0{i + 1}</div>
              <h3 className="v3-faq__q">{f.q}</h3>
              <p className="v3-body">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="p-work" className="v3-wrap v3-wrap--wide v3-work">
        <h2 className="v3-work__title">
          Work I'm <span className="v3-accent">proud of.</span>
        </h2>
        <div className="v3-work__grid">
          {v3.work.map((w) => (
            <article
              key={w.title}
              className={`v3-card v3-card--${w.theme}`}
              style={{ "--rot": `${w.rot}deg` } as React.CSSProperties}
            >
              <div className="v3-card__meta">{w.meta}</div>
              <h3 className="v3-card__title">{w.title}</h3>
              <div className="v3-card__big">{w.big}</div>
              <div className="v3-card__biglabel">{w.bigLabel}</div>
              <p className="v3-card__body">{w.body}</p>
              <div className="v3-card__tags">{w.tags}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="p-writing" className="v3-wrap v3-writing">
        <h2 className="v3-exp__title">Writing</h2>
        <div className="v3-writing__list">
          {v3.writing.map((p) => (
            <a
              key={p.href}
              className="v3-post"
              href={p.href}
              target="_blank"
              rel="noreferrer"
            >
              <div className="v3-post__img">
                <img src={p.image} alt="" loading="lazy" />
              </div>
              <div className="v3-post__text">
                <div className="v3-card__meta">{p.meta}</div>
                <h3 className="v3-post__title">{p.title}</h3>
                <p className="v3-body">{p.blurb}</p>
                <span className="v3-post__cta">Read on Medium ↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="p-exp" className="v3-wrap v3-exp">
        <h2 className="v3-exp__title">Experience</h2>
        <div className="v3-timeline">
          {v3.timeline.map((t) => (
            <div key={t.title} className="v3-timeline__item">
              <span
                className={`v3-timeline__dot${t.current ? " is-current" : ""}`}
              />
              <div className="v3-timeline__head">
                <div>
                  <div className="v3-timeline__role">{t.title}</div>
                  <div className="v3-timeline__org">{t.org}</div>
                </div>
                <div className="v3-timeline__period">{t.period}</div>
              </div>
              {t.body && <p className="v3-body v3-timeline__body">{t.body}</p>}
            </div>
          ))}
        </div>
      </section>

      <section id="p-contact" className="v3-wrap v3-contact">
        <div className="v3-contact__kicker">HIRING FOR A SENIOR ROLE?</div>
        <div className="v3-contact__row">
          <a className="v3-contact__cta" href={`mailto:${v3.email}`}>
            Let's talk ↗
          </a>
          <div className="v3-contact__list">
            <a href={`mailto:${v3.email}`}>{v3.email}</a>
            <a href={`tel:${v3.phone.replace(/\s/g, "")}`}>{v3.phone}</a>
            <a href={links.linkedin.href} target="_blank" rel="noreferrer">
              {links.linkedin.label} ↗
            </a>
          </div>
        </div>
        <footer className="v3-footer">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>Tested more thoroughly than it looks.</span>
        </footer>
      </section>

      <nav className="v3-dock" aria-label="Sections">
        {SECTIONS.map((d) => (
          <button key={d.id} onClick={() => scrollToId(d.id)}>
            {d.label}
          </button>
        ))}
        {/* <button
          className="v3-dock__cat"
          aria-pressed={catOn}
          onClick={() => setCatOn((c) => !c)}
        >
          {catOn ? "Cat: on" : "Cat: off"}
        </button> */}
      </nav>

      {/* {catOn && <Cat />} */}
    </div>
  );
}
