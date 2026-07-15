import Nav from "./Nav";
import { IconAudit, IconLedger, IconChart, IconGrowth, IconInvoice, IconScales } from "./Icons";
import { RevenueChart, ExpenseDonut, Sparkline, expenseSegments } from "./Charts";

const services = [
  {
    Icon: IconAudit,
    title: "Audit & Assurance",
    body: "Independent statutory and internal audits that give boards, banks and regulators confidence in your numbers — delivered to UAE and international standards.",
  },
  {
    Icon: IconLedger,
    title: "Accounting & Bookkeeping",
    body: "Accurate, IFRS-compliant books, management accounts and reconciliations — outsourced or on-site — so your reporting is always audit-ready.",
  },
  {
    Icon: IconChart,
    title: "Financial Management",
    body: "Budgeting, cash-flow forecasting, controls and CFO-level advisory that turn financial data into decisions your leadership can act on.",
  },
  {
    Icon: IconGrowth,
    title: "Performance Improvement",
    body: "We diagnose margin leaks, cost structures and process gaps, then implement changes that measurably lift profitability and efficiency.",
  },
  {
    Icon: IconInvoice,
    title: "VAT & Corporate Tax",
    body: "Registration, filing and advisory across UAE VAT and Corporate Tax — keeping you compliant and free of avoidable penalties.",
  },
  {
    Icon: IconScales,
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

const metrics = [
  ["15+", "Years in practice"],
  ["300+", "Audits completed"],
  ["AED 2B+", "Assets reviewed"],
  ["98%", "Client retention"],
];

const journey = [
  ["Baseline", "Where you stand", "Assess & Diagnose", "We establish your true financial position — books, controls, obligations and risks."],
  ["Foundation", "Getting solid", "Structure & Comply", "Clean, IFRS-ready books and controls, fully compliant with UAE regulation."],
  ["Momentum", "Gaining ground", "Optimise & Advise", "We sharpen margins, cash flow and cost structure into real, measurable gains."],
  ["Growth", "Where you're headed", "Scale with Confidence", "Clear numbers and controls that let you grow, raise or expand without guesswork."],
];

const compliance = ["IFRS Compliant", "UAE VAT Registered", "ESR Compliant", "AML / CFT Adherent", "DED Licensed"];

const ledgerLines = [
  ["Statutory Audit — FY2025", "Reviewed"],
  ["VAT Return — Q2 2026", "Filed"],
  ["Management Accounts", "Reconciled"],
  ["Corporate Tax Return", "In progress"],
];

const sectors = [
  ["Real Estate & Property", "Developers, owners' associations and REITs — service-charge audits, IFRS 15 and escrow compliance."],
  ["Retail & F&B", "Multi-outlet retailers and restaurants — POS reconciliation, inventory controls and margin analysis."],
  ["Construction & Contracting", "Contractors and sub-contractors — WIP valuation, retention accounting and project P&L."],
  ["Trading & Logistics", "Import/export and distribution — landed-cost accounting, FX exposure and customs alignment."],
  ["Professional Services", "Agencies, clinics and consultancies — WIP billing, partner drawings and cash-flow discipline."],
  ["Technology & Startups", "Founders and SMEs — investor-ready reporting, runway modelling and cap-table clarity."],
];

const kpis = [
  { label: "Net Cash Position", value: "AED 1.24M", delta: "▲ 12% MoM", tone: "up", spark: [6, 8, 7, 9, 11, 13, 16] },
  { label: "Gross Margin", value: "41%", delta: "▲ 3 pts", tone: "up", spark: [30, 33, 34, 36, 38, 40, 41] },
  { label: "Cash Runway", value: "14 mo", delta: "Stable", tone: "flat", spark: [14, 14, 13, 14, 14, 15, 14] },
];

export default function Home() {
  return (
    <>
      <Nav />

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

        {/* ---- Services ---- */}
        <section id="services" className="secband secband-services">
          <div className="wrap">
            <div className="metrics-strip">
              {metrics.map(([n, l]) => (
                <div key={l} className="metric glass">
                  <b>{n}</b>
                  <small>{l}</small>
                </div>
              ))}
            </div>
            <div className="section-head">
              <p className="eyebrow">What we do</p>
              <h2>One partner for the entire financial spine of your business.</h2>
              <p className="lead">
                Audit that satisfies your regulators, accounting that keeps you compliant,
                and management insight that helps you grow — under one roof in Dubai.
              </p>
            </div>
            <div className="grid-3">
              {services.map((s, i) => (
                <div key={s.title} className="card glass">
                  <span className="card-index">{String(i + 1).padStart(2, "0")}</span>
                  <div className="ic"><s.Icon /></div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Signature: live management dashboard ---- */}
        <section id="dashboard" className="secband secband-dashboard">
          <div className="wrap dash-wrap">
            <div className="dash-intro">
              <p className="eyebrow">Clarity, not clutter</p>
              <h2>Your numbers, turned into a picture you can act on.</h2>
              <p className="lead">
                Every month we translate your books into a live view of the business —
                cash, margin, runway and obligations — so decisions stop being guesswork.
              </p>
              <ul className="dash-points">
                <li><span className="dot rev" /> Revenue &amp; expense tracked side by side</li>
                <li><span className="dot exp" /> Cash runway modelled 12 months ahead</li>
                <li><span className="dot grn" /> Every filing deadline flagged before it bites</li>
              </ul>
            </div>

            <div className="dashboard glass">
              <div className="dash-top">
                <span className="dash-title">Management Dashboard</span>
                <span className="dash-period">June 2026 · Live</span>
              </div>

              <div className="kpi-row">
                {kpis.map((k) => (
                  <div key={k.label} className="kpi">
                    <small>{k.label}</small>
                    <b>{k.value}</b>
                    <span className={`delta ${k.tone}`}>{k.delta}</span>
                    <Sparkline data={k.spark} />
                  </div>
                ))}
              </div>

              <div className="dash-charts">
                <div className="chart-card">
                  <div className="chart-card-head">
                    <span>Revenue vs Expenses</span>
                    <div className="chart-legend">
                      <span><i className="dot rev" />Revenue</span>
                      <span><i className="dot exp" />Expenses</span>
                    </div>
                  </div>
                  <RevenueChart />
                </div>
                <div className="chart-card">
                  <div className="chart-card-head"><span>Where the money goes</span></div>
                  <div className="donut-wrap">
                    <ExpenseDonut />
                    <ul className="donut-legend">
                      {expenseSegments.map(([name, pct, col]) => (
                        <li key={name}>
                          <i className="dot" style={{ background: col }} />
                          {name}<b>{pct}%</b>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---- Growth trajectory (the client journey) ---- */}
        <section id="process" className="secband secband-why">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">The Haven trajectory</p>
              <h2>From where you stand to where you&apos;re headed.</h2>
              <p className="lead">
                Every client follows the same path — we meet you at your baseline and
                build, step by step, toward sustainable growth.
              </p>
            </div>
            <div className="trajectory">
              <svg className="trajectory-line" viewBox="0 0 1000 240" preserveAspectRatio="none" aria-hidden="true">
                <path d="M20 220 C 320 220, 520 70, 985 24" fill="none"
                  stroke="var(--gold-soft)" strokeWidth="2" strokeDasharray="1 9"
                  strokeLinecap="round" opacity="0.55" />
              </svg>
              <span className="trajectory-peak"><IconGrowth /></span>
              <div className="waypoints">
                {journey.map(([phase, sub, title, body]) => (
                  <div key={title} className="waypoint glass">
                    <span className="wp-phase">{phase}<i>{sub}</i></span>
                    <h3>{title}</h3>
                    <p>{body}</p>
                    <span className="wp-dot" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---- Why Haven + statement ---- */}
        <section id="why" className="secband secband-contact">
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
              <div className="ledger glass" id="about">
                <div className="ledger-head">
                  <span>Client Statement</span>
                  <span>Haven Consultancy LLC</span>
                </div>
                <div className="ledger-lines">
                  {ledgerLines.map(([item, status]) => (
                    <div key={item} className="ledger-line">
                      <span>{item}</span>
                      <span className={`status status-${status.replace(/\s+/g, "-").toLowerCase()}`}>{status}</span>
                    </div>
                  ))}
                </div>
                <div className="ledger-foot">
                  <p>
                    Auditors, accountants and financial managers under one roof — serving
                    SMEs and growing enterprises across the Emirates with meticulous
                    compliance and a genuine focus on performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---- Sectors ---- */}
        <section id="sectors" className="secband secband-services">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Who we serve</p>
              <h2>Specialists in the sectors that power the Emirates.</h2>
              <p className="lead">
                We speak the language of your industry — its margins, its regulations and
                the numbers that actually move it.
              </p>
            </div>
            <div className="sector-grid">
              {sectors.map(([name, note], i) => (
                <div key={name} className="sector glass">
                  <span className="sector-num">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{name}</h3>
                  <p>{note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Contact ---- */}
        <section id="contact" className="secband secband-why">
          <div className="wrap">
            <div className="compliance-strip">
              {compliance.map((c) => (
                <span key={c} className="compliance-badge glass">{c}</span>
              ))}
            </div>
            <div className="glass cta">
              <p className="eyebrow">Start the conversation</p>
              <h2>Ready to see your finances clearly?</h2>
              <p>
                Book a no-obligation consultation with our team in Dubai. We&apos;ll review
                where you stand and show you exactly where Haven can add value.
              </p>
              <div className="cta-actions">
                <a className="btn btn-primary" href="mailto:hello@havenconsultancy.ae">
                  Book a consultation
                </a>
                <a className="btn btn-ghost" href="tel:+97140000000">+971 4 000 0000</a>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div className="wrap foot">
            <div style={{ maxWidth: 320 }}>
              <a className="brand" href="#top">
                <span className="brand-mark">H</span>
                <span className="brand-name">Haven <span>Consultancy</span></span>
              </a>
              <p>
                Audit, accounting and financial management for ambitious businesses
                across the UAE.
              </p>
              <div className="foot-badges">
                <span>IFRS</span><span>UAE VAT</span><span>ESR</span>
              </div>
            </div>
            <div className="foot-col">
              <h4>Services</h4>
              <a href="#services">Audit &amp; Assurance</a>
              <a href="#services">Accounting &amp; Bookkeeping</a>
              <a href="#services">Financial Management</a>
              <a href="#services">VAT &amp; Corporate Tax</a>
            </div>
            <div className="foot-col">
              <h4>Company</h4>
              <a href="#dashboard">Insights</a>
              <a href="#process">Our Process</a>
              <a href="#why">Why Haven</a>
              <a href="#sectors">Sectors</a>
            </div>
            <div className="foot-col">
              <h4>Get in touch</h4>
              <a href="mailto:hello@havenconsultancy.ae">hello@havenconsultancy.ae</a>
              <a href="tel:+97140000000">+971 4 000 0000</a>
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
