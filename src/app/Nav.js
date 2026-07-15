"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#dashboard", label: "Insights" },
  { href: "#process", label: "Process" },
  { href: "#sectors", label: "Sectors" },
  { href: "#why", label: "Why Haven" },
];

export default function Nav() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive("#" + entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="nav">
      <div className="wrap">
        <div className="nav-inner glass">
          <a className="brand" href="#top" onClick={() => setOpen(false)}>
            <span className="brand-mark">H</span>
            <span className="brand-name">Haven <span>Consultancy</span></span>
          </a>

          <div className="nav-links">
            {links.map((l) => (
              <a key={l.href} href={l.href} className={active === l.href ? "is-active" : ""}>
                {l.label}
              </a>
            ))}
            <a className="btn btn-primary" href="#contact">Book a consultation</a>
          </div>

          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>

        {open && (
          <div className="nav-mobile glass">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a className="btn btn-primary" href="#contact" onClick={() => setOpen(false)}>
              Book a consultation
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
