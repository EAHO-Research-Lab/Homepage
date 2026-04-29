// ─── ICONS ───────────────────────────────────────────────────────────────────
function ExternalIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 9L9 2M9 2H4.5M9 2V6.5"/>
    </svg>
  );
}
function ScholarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82Z"/>
    </svg>
  );
}
function GithubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
    </svg>
  );
}
function WebsiteIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  );
}

// ─── NAV ─────────────────────────────────────────────────────────────────────
function Nav({ active }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <a href="index.html" className="nav-logo">
        <div className="nav-logo-badge">
          <span style={{ background: "var(--green)" }}></span>
          <span style={{ background: "var(--amber)" }}></span>
          <span style={{ background: "var(--coral)" }}></span>
        </div>
        YES Lab
      </a>
      <ul className="nav-links">
        {window.NAV_LINKS.map(n => (
          <li key={n.label}>
            <a href={n.href} className={active === n.id ? "active" : ""}>{n.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer>
      <div className="footer-logo">YES Lab · University of South Florida</div>
      <div className="footer-links">
        {window.NAV_LINKS.map(n => (
          <a key={n.label} href={n.href}>{n.label}</a>
        ))}
      </div>
      <div className="footer-copy">© 2026 YES Lab, USF. All rights reserved.</div>
    </footer>
  );
}

// ─── MARQUEE ─────────────────────────────────────────────────────────────────
function Marquee() {
  const items = [
    "Model Compression","·","Federated Learning","·","Continual Learning","·",
    "Edge AI","·","Neural Architecture Search","·","Knowledge Distillation","·",
    "Quantization","·","Efficient Transformers","·","Scalable Systems","·","Domain Applications","·",
  ];
  const doubled = [...items, ...items];
  return (
    <div className="marquee-bar">
      <div className="marquee-inner">
        {doubled.map((it, i) => (
          <span key={i} className={it === "·" ? "dot" : ""}>{it}</span>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { ExternalIcon, ScholarIcon, GithubIcon, WebsiteIcon, Nav, Footer, Marquee });
