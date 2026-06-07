"use client";

import { useRef, useEffect, useCallback } from "react";
import Link from "next/link";

/* ─── Design tokens ─── */
const C = {
  charcoal: "#35312E",
  terracotta: "#AF5A3C",
  white: "#FFFFFF",
  lightGray: "#E6E6E6",
} as const;

const HEADING_FONT = "var(--font-heading)";
const UI_FONT = "var(--font-ui)";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Panduan", href: "/panduan" },
  { label: "Tentang Kami", href: "/tentang-kami" },
];

export default function Header() {
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const closeMobileNav = useCallback(() => {
    hamburgerRef.current?.classList.remove("open");
    mobileNavRef.current?.classList.remove("open");
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    const burger = hamburgerRef.current;
    const mNav = mobileNavRef.current;

    const onBurger = () => {
      burger?.classList.toggle("open");
      mNav?.classList.toggle("open");
      document.body.style.overflow = mNav?.classList.contains("open")
        ? "hidden"
        : "";
    };

    burger?.addEventListener("click", onBurger);
    return () => {
      burger?.removeEventListener("click", onBurger);
    };
  }, []);

  return (
    <>
      <header
        id="site-header"
        style={{
          position: "sticky",
          top: 0,
          width: "100%",
          height: 65,
          zIndex: 50,
          background: C.white,
          borderBottom: `1px solid ${C.lightGray}`,
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 32px",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: HEADING_FONT,
              fontSize: 22,
              fontWeight: 400,
              color: C.charcoal,
              letterSpacing: "-0.02em",
              textDecoration: "none",
            }}
          >
            RYCH
          </Link>

          {/* Desktop nav */}
          <nav
            style={{ display: "flex", alignItems: "center", gap: 40 }}
            className="desktop-nav"
          >
            {NAV_ITEMS.map((item) => (
              <Link key={item.label} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <button
              aria-label="Cart"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: C.charcoal,
                display: "flex",
                alignItems: "center",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = C.terracotta)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = C.charcoal)
              }
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 22 }}
              >
                shopping_bag
              </span>
            </button>
            <button
              aria-label="Account"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: C.charcoal,
                display: "flex",
                alignItems: "center",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = C.terracotta)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = C.charcoal)
              }
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 22 }}
              >
                person
              </span>
            </button>
            <Link
              className="btn-primary desktop-cta"
              href="/#koleksi"
              style={{ padding: "12px 24px", fontSize: 13, textDecoration: "none" }}
            >
              Beli Sekarang
            </Link>
            {/* Hamburger */}
            <button
              ref={hamburgerRef}
              className="hamburger"
              aria-label="Menu"
              style={{
                display: "none",
                flexDirection: "column",
                gap: 5,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px 4px",
              }}
            >
              <span className="hamburger-line" />
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav drawer */}
      <div
        ref={mobileNavRef}
        className="mobile-nav"
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "40px 32px",
          gap: 32,
        }}
      >
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={closeMobileNav}
            style={{
              fontFamily: UI_FONT,
              fontSize: 22,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: C.charcoal,
              textDecoration: "none",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = C.terracotta)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = C.charcoal)
            }
          >
            {item.label}
          </Link>
        ))}
        <Link
          className="btn-primary"
          href="/#koleksi"
          onClick={closeMobileNav}
          style={{ width: "100%", marginTop: 16, textDecoration: "none", textAlign: "center" }}
        >
          Beli Sekarang
        </Link>
      </div>
    </>
  );
}
