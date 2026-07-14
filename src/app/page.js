const services = [
  {
    ic: "◇",
    title: "Audit & Assurance",
    body: "Independent statutory and internal audits that give boards, banks and regulators confidence in your numbers — delivered to UAE and international standards.",
  },
  {
    ic: "▤",
    title: "Accounting & Bookkeeping",
    body: "Accurate, IFRS-compliant books, management accounts and reconciliations — outsourced or on-site — so your reporting is always audit-ready.",
  },
  {
    ic: "◈",
    title: "Financial Management",
    body: "Budgeting, cash-flow forecasting, controls and CFO-level advisory that turn financial data into decisions your leadership can act on.",
  },
  {
    ic: "↗",
    title: "Performance Improvement",
    body: "We diagnose margin leaks, cost structures and process gaps, then implement changes that measurably lift profitability and efficiency.",
  },
  {
    ic: "▣",
    title: "VAT & Corporate Tax",
    body: "Registration, filing and advisory across UAE VAT and Corporate Tax — keeping you compliant and free of avoidable penalties.",
  },
  {
    ic: "◉",
    title: "Advisory & Due Diligence",
    body: "Feasibility studies, valuations and transaction due diligence for owners planning to grow, restructure or exit with clarity.",
  },
];

const reasons = [
  ["Dubai-based, globally minded", "Local regulatory fluency paired with international reporting standards for cross-border businesses."],
  ["Partner-led engagements", "You work directly with senior professionals, not a rotating cast of juniors."],
  ["Independent & objective", "Assurance you — and your stakeholders — can genuinely rely on."],
  ["Outcomes, not just reports", "Every engagement ends with clear actions to strengthen your finances."],
];

export default function Home() {
  return (
    <>
      <nav className="nav">
        <div className="wrap">
          <div className="nav-inner glass">
            <a className="brand" href="#top">
              <span className="brand-mark">H</span>
              <span className="brand-name">Haven <span>Consultancy</span></span>
            </a>
            <div className="nav-links">
              <a href="#services">Services</a>
              <a href="#why">Why Haven</a>
              <a href="#about">About</a>
              <a className="btn btn-primary" href="#contact">Book a consultation</a>
            </div>
          </div>
        </div>
      </nav>

      <main id="top">
        <section className="hero secband secband-hero">
          <div className="wrap">
          <div className="hero-inner">
            <h1 className="hero-title">
              Let us handle the problems,<br />
              so you can keep being the <em>solution.</em>
            </h1>
            <p className="hero-brand">Haven Consultancy</p>
            <p className="hero-copy">
              Since 2018, Haven Consultancy has helped small and medium businesses across
              the UAE build stronger financial foundations, stay compliant with local
              regulation, and make decisions with clarity instead of guesswork.
            </p>
            <p className="hero-kicker">Dubai, UAE · Est. 2018</p>
            <div className="hero-actions">
              <a className="btn btn-light" href="#services">Explore Services →</a>
            </div>
          </div>
          </div>
        </section>

        <section id="services" className="secband secband-services">
          <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">What we do</p>
            <h2>A full finance function, in one trusted partner.</h2>
            <p className="lead">
              From the audit that satisfies your regulators to the day-to-day accounting
              that keeps you compliant, we cover the financial spine of your business.
            </p>
          </div>
          <div className="grid-3">
            {services.map((s) => (
              <div key={s.title} className="card glass">
                <div className="ic">{s.ic}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
          </div>
        </section>

        <section id="why" className="secband secband-why">
          <div className="wrap">
          <div className="split">
            <div>
              <p className="eyebrow">Why Haven</p>
              <h2>Assurance that moves your business forward.</h2>
              <p className="lead" style={{ marginTop: 16 }}>
                We do more than sign off accounts. We give you the financial clarity
                and controls to grow with confidence in a fast-moving market.
              </p>
              <ul className="check-list">
                {reasons.map(([t, d]) => (
                  <li key={t}>
                    <span className="tick">✓</span>
                    <span><b>{t}</b> — {d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass hero-card" id="about">
              <p className="eyebrow">About us</p>
              <h3 style={{ fontSize: 26, marginBottom: 14 }}>
                A Dubai financial consultancy built around your performance.
              </h3>
              <p style={{ color: "var(--ink-soft)", fontSize: 15.5 }}>
                Haven Consultancy LLC brings together auditors, accountants and financial
                managers under one roof. We serve SMEs, family businesses and growing
                enterprises across the Emirates — pairing meticulous compliance with a
                genuine focus on improving margins, cash flow and long-term value.
              </p>
              <p style={{ color: "var(--ink-soft)", fontSize: 15.5, marginTop: 14 }}>
                Every engagement is partner-led, confidential and measured by the results
                it delivers for your bottom line.
              </p>
            </div>
          </div>
          </div>
        </section>

        <section id="contact" className="secband secband-contact">
          <div className="wrap">
          <div className="glass cta">
            <p className="eyebrow">Let&apos;s talk</p>
            <h2>Ready to see your finances clearly?</h2>
            <p>
              Book a no-obligation consultation with our team in Dubai. We&apos;ll review
              where you stand and show you exactly where Haven can add value.
            </p>
            <a className="btn btn-primary" href="mailto:hello@havenconsultancy.ae">
              Book a consultation
            </a>
          </div>
          </div>
        </section>

        <footer>
          <div className="wrap foot">
            <div style={{ maxWidth: 300 }}>
              <a className="brand" href="#top">
                <span className="brand-mark">H</span>
                <span className="brand-name">Haven <span>Consultancy</span></span>
              </a>
              <p>
                Audit, accounting and financial management for ambitious businesses
                across the UAE.
              </p>
            </div>
            <div className="foot-col">
              <h4>Services</h4>
              <a href="#services">Audit &amp; Assurance</a>
              <a href="#services">Accounting</a>
              <a href="#services">Financial Management</a>
              <a href="#services">VAT &amp; Corporate Tax</a>
            </div>
            <div className="foot-col">
              <h4>Company</h4>
              <a href="#about">About</a>
              <a href="#why">Why Haven</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="foot-col">
              <h4>Get in touch</h4>
              <a href="mailto:hello@havenconsultancy.ae">hello@havenconsultancy.ae</a>
              <a href="#">Business Bay, Dubai, UAE</a>
            </div>
          </div>
          <div className="wrap copy">
            © {new Date().getFullYear()} Haven Consultancy LLC. All rights reserved.
          </div>
        </footer>
      </main>
    </>
  );
}
