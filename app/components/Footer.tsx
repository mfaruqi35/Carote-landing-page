import Link from "next/link";

/* ─── Design tokens ─── */
const C = {
  charcoal: "#35312E",
  terracotta: "#AF5A3C",
  medGray: "#60605E",
} as const;

const HEADING_FONT = "var(--font-heading)";
const BODY_FONT = "var(--font-body)";
const SHOPEE_URL = "https://shopee.co.id/dewbracelets";

const FOOTER_NAV = [
  { label: "Kebijakan Privasi", href: "#" },
  { label: "Syarat & Ketentuan", href: "#" },
  { label: "Panduan", href: "/panduan" },
  { label: "Hubungi Kami", href: "/#hubungi-kami" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Affiliate Disclosure", href: "/#faq" },
];

const SOCIAL_LINKS = [
  { label: "Shopee", href: SHOPEE_URL, external: true },
  { label: "TikTok", href: "#", external: false },
  { label: "Instagram", href: "#", external: false },
];

export default function Footer() {
  return (
    <footer
      id="hubungi-kami"
      style={{ padding: "80px 32px", background: "#efeeea" }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 32,
          textAlign: "center",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: HEADING_FONT,
            fontSize: 28,
            fontWeight: 300,
            color: C.charcoal,
            textDecoration: "none",
          }}
        >
          RYCH
        </Link>

        <a
          href={SHOPEE_URL}
          target="_blank"
          rel="noreferrer"
          className="btn-primary"
          style={{ textDecoration: "none" }}
        >
          Link Pembelian Shopee
        </a>

        <nav
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 32,
          }}
        >
          {FOOTER_NAV.map((link) => (
            <Link key={link.label} href={link.href} className="footer-link">
              {link.label}
            </Link>
          ))}
        </nav>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 20,
          }}
        >
          {SOCIAL_LINKS.map((social, i) => (
            <span key={social.label} style={{ display: "inline-flex", gap: 20, alignItems: "center" }}>
              {i > 0 && (
                <span className="footer-link" aria-hidden="true">
                  |
                </span>
              )}
              <a
                href={social.href}
                {...(social.external
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
                className="footer-link"
              >
                {social.label}
              </a>
            </span>
          ))}
        </div>

        <p style={{ fontFamily: BODY_FONT, fontSize: 15, color: C.medGray }}>
          © 2026 RYCH. Kualitas premium untuk dapur modern Indonesia.
        </p>
      </div>
    </footer>
  );
}
