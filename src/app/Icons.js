const base = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" };

// Audit & Assurance — magnifying glass over a checked document
export function IconAudit() {
  return (
    <svg {...base}>
      <path d="M6 3.5h9.5L19 7v10.5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-13a1 1 0 0 1 1-1Z" />
      <path d="M8.5 9h5M8.5 12h3" />
      <circle cx="15.5" cy="16" r="3.5" />
      <path d="M18 18.5 20 20.5" />
    </svg>
  );
}

// Accounting & Bookkeeping — open ledger
export function IconLedger() {
  return (
    <svg {...base}>
      <path d="M4 5.5c2.2-1 4.8-1 6.5.3v13c-1.7-1.3-4.3-1.3-6.5-.3v-13Z" />
      <path d="M17.5 5.5c-2.2-1-4.8-1-6.5.3v13c1.7-1.3 4.3-1.3 6.5-.3v-13Z" />
      <path d="M7 9h3M7 12h3M14 9h3M14 12h3" />
    </svg>
  );
}

// Financial Management — dashboard bars
export function IconChart() {
  return (
    <svg {...base}>
      <path d="M4 20V10M10 20V4M16 20v-7M20 20H4" />
    </svg>
  );
}

// Performance Improvement — rising trend line
export function IconGrowth() {
  return (
    <svg {...base}>
      <path d="M4 17 9.5 11.2 13.2 14.5 20 6.5" />
      <path d="M14.5 6h5.5v5.5" />
    </svg>
  );
}

// VAT & Corporate Tax — receipt
export function IconInvoice() {
  return (
    <svg {...base}>
      <path d="M6 3.5h12v17l-2.2-1.4L13.6 20l-2.2-1.4L9.2 20 7 18.6 6 20V3.5Z" />
      <path d="M9 8h6M9 11.5h6M9 15h3.5" />
    </svg>
  );
}

// Paper plane — flight-path marker
export function IconPlane() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.5 3 2.8 10.6c-.8.3-.8 1.4 0 1.7l6.5 2.3 2.3 6.5c.3.8 1.4.8 1.7 0L21.5 3Z" />
      <path d="M21.5 3 9.3 14.6" />
    </svg>
  );
}

// Advisory & Due Diligence — balanced scales
export function IconScales() {
  return (
    <svg {...base}>
      <path d="M12 3.5v17M7 6.5h10M4 6.5l-2.5 5a2.6 2.6 0 0 0 5 0l-2.5-5ZM20 6.5l-2.5 5a2.6 2.6 0 0 0 5 0l-2.5-5Z" />
      <path d="M8.5 21h7" />
    </svg>
  );
}
