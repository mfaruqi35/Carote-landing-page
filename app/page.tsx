"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC6TqApskDz6VjuNhJ-FVhXmhTfrQ9lx6DDu7-0b-WxdBAST6SJxdIVLHh--iMnM08pxF3n1zbpsKdUpsdu3qwiJmOmYWh5TU1q6GTb4rMYtDuQP2s7Qh_8Qcq1eNcIRwOlgpcvbSm8ROJ_Da9spZ4qT1k24noLVkb6XuNx8c9UZ9SWQfVE39nacjHa3R-FVLTlUB9W7TgY9SHXDkwTfbC0_8YK4MXc_8wMSRf1NzVXVKXF2pGyVB7hj_B-Pq20VpE0Z7_shC3UQjI";
const FEATURE1_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA71c5LZmPlSwQxwrKxaj4Rg7MkYV582IbdVNM_vOg9VhpooWPgeHxP176R0VCvcSCUftig8PY3iJFEGrXSdrDMVrz6CpccMpivGZeTYlpO17RON7iDHcxpTEEnBTz03hQ9f0Qc56aCNrFwkjlqQ5cC7sCuNEtqvMHoARjIDV7OFgezE8kJJS8LbCkoiNslNTyvnaIiItafJU6B42awSutP05DhaXMLMfnNqXIM-VrvrJ57PQhx0B45cGgg9hQWWfULDnnK3pS6BKc";
const FEATURE2_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD9yckii_BoW-vxuoKsiMvcEy_JHUlrb_ELws0B01s5E7HL9-MM4xXk-ltXPR0h4nloxKVMX-pacIxLHY-ln3tjmWiAD_yJjGnp7479XPwcyS7bFOEuN1nSJbPjkbl47pW3NWJu_6sgFtAjFRvz-48pgFqVGO_w_Sx-7_-z9wjWz0135VTglDNjDNjgIiSsSnW6izE-3Gb0dthNO-j8sGDD7IZhbYxXActAPip_WwZaoOo35dPJuPewUt6tzByMiWyydnwrPHgsJgU";
const BENTO2_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCvRrWu1Qe96-Ijgv3xEeW7KLmN18jLEGZCbfJMEnyMNBnl59dKiyindhbDyXors8-3seAy0V8lApkb3eOH6J_-68MOcu5Gqf0cz28vHENUN3a9dIFClGCXXlLkoXsKn0fRtET48RqbCsLIdMFp-zdmJFYUBK0nFRwLfNZ1Fy1vKvcdQZxR1U6nW258XqTLt0GD4wJsb64C_guHZIMxTVpO_lYppD-QwHGjauXRLE1WffBYzAcdJaYHhPxd8Nkub6wAa1D4PfSqgRk";

/* ─── Shared design tokens ──────────────────────────────── */
const C = {
  charcoal: "#35312E",
  terracotta: "#AF5A3C",
  offWhite: "#FCFAF6",
  white: "#FFFFFF",
  lightGray: "#E6E6E6",
  medGray: "#60605E",
  cream: "#EBE5D4",
  darkGray: "#1C1A1A",
} as const;

const shadowCard = "0px 2px 8px rgba(53,49,46,0.08)";
const shadowHover = "0px 8px 16px rgba(53,49,46,0.12)";

/* ─── Font constants matching globals.css CSS variables ─── */
const HEADING_FONT = "var(--font-heading)";
const UI_FONT      = "var(--font-ui)";
const BODY_FONT    = "var(--font-body)";


export default function Home() {
  const heroSectionRef = useRef<HTMLElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const heroCtaRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    /* ── Lenis smooth scroll ── */
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    gsap.ticker.lagSmoothing(0);

    /* ── Hero entrance ── */
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    if (heroTitleRef.current)
      tl.from(heroTitleRef.current, { y: 60, opacity: 0, duration: 1.1 });
    if (heroImageRef.current)
      tl.from(
        heroImageRef.current,
        { y: 40, opacity: 0, scale: 0.97, duration: 1.2 },
        "-=0.7",
      );
    if (heroCtaRef.current)
      tl.from(
        heroCtaRef.current,
        { y: 24, opacity: 0, duration: 0.8 },
        "-=0.6",
      );

    /* ── Hero parallax ── */
    const heroImg = heroImageRef.current?.querySelector("img");
    if (heroImg) {
      gsap.to(heroImg, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: heroSectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    /* ── Scroll reveal: generic [data-reveal] ── */
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      const dir = el.dataset.reveal ?? "up";
      const delay = parseFloat(el.dataset.delay ?? "0");
      const from: gsap.TweenVars = {
        opacity: 0,
        duration: 0.85,
        delay,
        ease: "power3.out",
      };
      if (dir === "up") Object.assign(from, { y: 50 });
      if (dir === "left") Object.assign(from, { x: -40 });
      if (dir === "right") Object.assign(from, { x: 40 });
      if (dir === "scale") Object.assign(from, { scale: 0.93 });
      gsap.from(el, {
        ...from,
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
    });

    /* ── Stagger sections ── */
    document.querySelectorAll<HTMLElement>("[data-stagger]").forEach((sec) => {
      const kids = sec.querySelectorAll<HTMLElement>("[data-stagger-child]");
      gsap.from(kids, {
        y: 40,
        opacity: 0,
        duration: 0.85,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sec,
          start: "top 82%",
          toggleActions: "play none none none",
        },
      });
    });

    /* ── Bento cells ── */
    const bentoCells = document.querySelectorAll<HTMLElement>(".js-bento");
    gsap.from(bentoCells, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.08,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".js-bento-grid",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    /* ── Spec table rows ── */
    const rows = document.querySelectorAll<HTMLElement>(".js-spec-row");
    gsap.from(rows, {
      x: -30,
      opacity: 0,
      duration: 0.55,
      stagger: 0.07,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".js-spec-table",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    /* ── Divider lines ── */
    document.querySelectorAll<HTMLElement>(".js-divider").forEach((d) => {
      gsap.from(d, {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: d,
          start: "top 92%",
          toggleActions: "play none none none",
        },
      });
    });

    /* ── Mobile nav ── */
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
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      burger?.removeEventListener("click", onBurger);
    };
  }, []);

  /* ─── JSX ─────────────────────────────────────────────── */
  return (
    <>
      {/* ════════════ HEADER ════════════ */}
      <header
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
          <span
            style={{
              fontFamily: HEADING_FONT,
              fontSize: 22,
              fontWeight: 400,
              color: C.charcoal,
              letterSpacing: "-0.02em",
            }}
          >
            RYCH
          </span>

          {/* Desktop nav */}
          <nav
            style={{ display: "flex", alignItems: "center", gap: 40 }}
            className="desktop-nav"
          >
            {["Koleksi", "Resep", "Tentang Kami"].map((item) => (
              <a key={item} href="#" className="nav-link">
                {item}
              </a>
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
              onMouseEnter={(e) => (e.currentTarget.style.color = C.terracotta)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.charcoal)}
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
              onMouseEnter={(e) => (e.currentTarget.style.color = C.terracotta)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.charcoal)}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 22 }}
              >
                person
              </span>
            </button>
            <button
              className="btn-primary desktop-cta"
              style={{ padding: "12px 24px", fontSize: 13 }}
            >
              Beli Sekarang
            </button>
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
        {["Koleksi", "Resep", "Tentang Kami"].map((item) => (
          <a
            key={item}
            href="#"
            style={{
              fontFamily: UI_FONT,
              fontSize: 22,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: C.charcoal,
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = C.terracotta)}
            onMouseLeave={(e) => (e.currentTarget.style.color = C.charcoal)}
          >
            {item}
          </a>
        ))}
        <button
          className="btn-primary"
          style={{ width: "100%", marginTop: 16 }}
        >
          Beli Sekarang
        </button>
      </div>

      <main>
        {/* ════════════ HERO ════════════ */}
        <section
          ref={heroSectionRef}
          id="hero-section"
          style={{
            minHeight: "100vh",
            background: C.offWhite,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "148px 32px 80px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle glow */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              backgroundImage:
                "radial-gradient(circle at 50% 10%, rgba(175,90,60,0.06) 0%, transparent 55%)",
            }}
          />

          <h1
            ref={heroTitleRef}
            style={{
              fontFamily: HEADING_FONT,
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "clamp(38px, 5.5vw, 62px)",
              lineHeight: 1.1,
              color: C.charcoal,
              maxWidth: 800,
              margin: "0 auto 48px",
              position: "relative",
              zIndex: 1,
            }}
          >
            Kualitas Premium untuk Dapur Anda
          </h1>

          {/* Hero image */}
          <div
            ref={heroImageRef}
            style={{
              width: "100%",
              maxWidth: 960,
              margin: "0 auto",
              aspectRatio: "16/9",
              overflow: "hidden",
              boxShadow: shadowCard,
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_IMG}
              alt="RYCH Premium Cookware Collection"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                willChange: "transform",
              }}
            />
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: "auto 0 0",
                height: 80,
                pointerEvents: "none",
                background:
                  "linear-gradient(to top, rgba(53,49,46,0.18), transparent)",
              }}
            />
          </div>

          <div
            ref={heroCtaRef}
            style={{
              marginTop: 48,
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              justifyContent: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            <button className="btn-primary">Jelajahi Koleksi</button>
            <button className="btn-secondary">Pelajari Lebih Lanjut</button>
          </div>
        </section>

        {/* ════════════ FEATURE 1 — Minimalis ════════════ */}
        <section
          style={{ padding: "120px 0", background: C.white }}
          data-stagger
        >
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
            <div
              className="feature-row"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 64,
                alignItems: "center",
              }}
            >
              {/* Text */}
              <div
                data-stagger-child
                style={{ display: "flex", flexDirection: "column", gap: 24 }}
              >
                <div
                  className="js-divider"
                  style={{ width: 48, height: 2, background: C.terracotta }}
                />
                <h2
                  style={{
                    fontFamily: HEADING_FONT,
                    fontWeight: 300,
                    fontSize: "clamp(30px,3.5vw,46px)",
                    lineHeight: 1.1,
                    color: C.charcoal,
                    margin: 0,
                  }}
                >
                  Estetika Minimalis,
                  <br />
                  Fungsi Maksimal
                </h2>
                <p
                  style={{
                    fontFamily: BODY_FONT,
                    fontSize: 16,
                    lineHeight: 1.75,
                    color: C.medGray,
                    margin: 0,
                    maxWidth: 460,
                  }}
                >
                  Didesain dengan pendekatan minimalis yang mengutamakan fungsi
                  tanpa mengorbankan keindahan. Permukaan yang bersih dan
                  garis-garis tegas mencerminkan kualitas premium yang akan
                  bertahan lintas generasi di dapur Anda.
                </p>
                <div>
                  <button className="btn-secondary" style={{ marginTop: 8 }}>
                    Pelajari Lebih Lanjut
                  </button>
                </div>
              </div>

              {/* Image */}
              <div
                data-stagger-child
                className="hover-lift"
                style={{
                  aspectRatio: "4/3",
                  overflow: "hidden",
                  boxShadow: shadowCard,
                  cursor: "default",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.boxShadow =
                    shadowHover)
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.boxShadow =
                    shadowCard)
                }
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={FEATURE1_IMG}
                  alt="Minimalist RYCH Pan"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLImageElement).style.transform =
                      "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLImageElement).style.transform =
                      "scale(1)")
                  }
                />
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ FEATURE 2 — Distribusi Panas ════════════ */}
        <section
          style={{ padding: "120px 0", background: C.cream }}
          data-stagger
        >
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
            <div
              className="feature-row"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 64,
                alignItems: "center",
              }}
            >
              {/* Image */}
              <div
                data-stagger-child
                className="hover-lift"
                style={{
                  aspectRatio: "4/3",
                  overflow: "hidden",
                  boxShadow: shadowCard,
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.boxShadow =
                    shadowHover)
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.boxShadow =
                    shadowCard)
                }
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={FEATURE2_IMG}
                  alt="Cooking with RYCH"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLImageElement).style.transform =
                      "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLImageElement).style.transform =
                      "scale(1)")
                  }
                />
              </div>

              {/* Text */}
              <div
                data-stagger-child
                style={{ display: "flex", flexDirection: "column", gap: 24 }}
              >
                <div
                  className="js-divider"
                  style={{ width: 48, height: 2, background: C.terracotta }}
                />
                <h2
                  style={{
                    fontFamily: HEADING_FONT,
                    fontWeight: 300,
                    fontSize: "clamp(30px,3.5vw,46px)",
                    lineHeight: 1.1,
                    color: C.charcoal,
                    margin: 0,
                  }}
                >
                  Distribusi Panas
                  <br />
                  Sempurna
                </h2>
                <p
                  style={{
                    fontFamily: BODY_FONT,
                    fontSize: 16,
                    lineHeight: 1.75,
                    color: C.medGray,
                    margin: 0,
                    maxWidth: 460,
                  }}
                >
                  Material inti berkualitas tinggi memastikan panas menyebar
                  secara merata ke seluruh permukaan. Hasil masakan lebih
                  konsisten, hemat energi, dan menghadirkan pengalaman memasak
                  yang tak tertandingi setiap harinya.
                </p>
                <div>
                  <button className="btn-primary" style={{ marginTop: 8 }}>
                    Lihat Koleksi
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ BENTO GRID ════════════ */}
        <section style={{ padding: "120px 0", background: C.offWhite }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
            {/* Section title */}
            <div
              data-reveal="up"
              style={{ textAlign: "center", marginBottom: 64 }}
            >
              <div
                className="js-divider"
                style={{
                  width: 48,
                  height: 2,
                  background: C.terracotta,
                  margin: "0 auto 24px",
                }}
              />
              <h2
                style={{
                  fontFamily: HEADING_FONT,
                  fontWeight: 300,
                  fontSize: "clamp(30px,3.5vw,46px)",
                  lineHeight: 1.1,
                  color: C.charcoal,
                }}
              >
                Inovasi dalam Setiap Detail
              </h2>
            </div>

            {/* Grid */}
            <div
              className="js-bento-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 20,
              }}
            >
              {/* Cell 1 — Anti-stick (2 cols) */}
              <div
                className="js-bento"
                style={{
                  gridColumn: "span 2",
                  background: C.white,
                  border: `1px solid ${C.lightGray}`,
                  boxShadow: shadowCard,
                  padding: "40px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 32,
                  transition: "box-shadow 0.3s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.boxShadow =
                    shadowHover)
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.boxShadow =
                    shadowCard)
                }
              >
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 16 }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 36, color: C.terracotta }}
                  >
                    layers
                  </span>
                  <h3
                    style={{
                      fontFamily: HEADING_FONT,
                      fontWeight: 400,
                      fontSize: 26,
                      color: C.charcoal,
                      margin: 0,
                    }}
                  >
                    Teknologi Anti-Lengket
                  </h3>
                  <p
                    style={{
                      fontFamily: BODY_FONT,
                      fontSize: 16,
                      lineHeight: 1.7,
                      color: C.medGray,
                      margin: 0,
                    }}
                  >
                    Lapisan premium yang aman dan tahan lama, membuat proses
                    memasak dan membersihkan menjadi sangat mudah. Bebas PFOA
                    dan bahan kimia berbahaya lainnya.
                  </p>
                </div>
                <div style={{ height: 200, overflow: "hidden", flexShrink: 0 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={FEATURE1_IMG}
                    alt="Non-stick surface detail"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLImageElement).style.transform =
                        "scale(1.06)")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLImageElement).style.transform =
                        "scale(1)")
                    }
                  />
                </div>
              </div>

              {/* Cell 2 — Eco */}
              <div
                className="js-bento"
                style={{
                  background: C.white,
                  border: `1px solid ${C.lightGray}`,
                  boxShadow: shadowCard,
                  padding: "40px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  transition: "box-shadow 0.3s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.boxShadow =
                    shadowHover)
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.boxShadow =
                    shadowCard)
                }
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: 36, color: C.charcoal }}
                >
                  eco
                </span>
                <h3
                  style={{
                    fontFamily: HEADING_FONT,
                    fontWeight: 400,
                    fontSize: 26,
                    color: C.charcoal,
                    margin: 0,
                  }}
                >
                  Material Ramah Lingkungan
                </h3>
                <p
                  style={{
                    fontFamily: BODY_FONT,
                    fontSize: 16,
                    lineHeight: 1.7,
                    color: C.medGray,
                    margin: 0,
                  }}
                >
                  Komitmen kami pada keberlanjutan. Dibuat dengan material yang
                  dapat didaur ulang dan proses produksi yang efisien untuk
                  generasi mendatang.
                </p>
                <div
                  style={{
                    marginTop: "auto",
                    width: 48,
                    height: 48,
                    background: C.cream,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 22, color: "#6C674D" }}
                  >
                    recycling
                  </span>
                </div>
              </div>

              {/* Cell 3 — Durability */}
              <div
                className="js-bento"
                style={{
                  background: C.white,
                  border: `1px solid ${C.lightGray}`,
                  boxShadow: shadowCard,
                  padding: "40px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  transition: "box-shadow 0.3s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.boxShadow =
                    shadowHover)
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.boxShadow =
                    shadowCard)
                }
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: 36, color: C.charcoal }}
                >
                  local_fire_department
                </span>
                <h3
                  style={{
                    fontFamily: HEADING_FONT,
                    fontWeight: 400,
                    fontSize: 26,
                    color: C.charcoal,
                    margin: 0,
                  }}
                >
                  Tahan Lama
                </h3>
                <p
                  style={{
                    fontFamily: BODY_FONT,
                    fontSize: 16,
                    lineHeight: 1.7,
                    color: C.medGray,
                    margin: 0,
                  }}
                >
                  Konstruksi kokoh yang dirancang untuk penggunaan berat
                  sehari-hari tanpa kehilangan performa. Investasi terbaik untuk
                  dapur Anda.
                </p>
              </div>

              {/* Cell 4 — Ergonomic (2 cols) */}
              <div
                className="js-bento"
                style={{
                  gridColumn: "span 2",
                  background: C.white,
                  border: `1px solid ${C.lightGray}`,
                  boxShadow: shadowCard,
                  padding: "40px",
                  display: "flex",
                  flexDirection: "row",
                  gap: 40,
                  alignItems: "center",
                  transition: "box-shadow 0.3s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.boxShadow =
                    shadowHover)
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.boxShadow =
                    shadowCard)
                }
              >
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 36, color: C.terracotta }}
                  >
                    back_hand
                  </span>
                  <h3
                    style={{
                      fontFamily: HEADING_FONT,
                      fontWeight: 400,
                      fontSize: 26,
                      color: C.charcoal,
                      margin: 0,
                    }}
                  >
                    Desain Ergonomis
                  </h3>
                  <p
                    style={{
                      fontFamily: BODY_FONT,
                      fontSize: 16,
                      lineHeight: 1.7,
                      color: C.medGray,
                      margin: 0,
                    }}
                  >
                    Gagang yang dirancang khusus untuk kenyamanan maksimal dan
                    keseimbangan sempurna saat digunakan. Memasak terasa lebih
                    mudah dari sebelumnya.
                  </p>
                </div>
                <div
                  style={{
                    width: 300,
                    flexShrink: 0,
                    aspectRatio: "4/3",
                    overflow: "hidden",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={BENTO2_IMG}
                    alt="Ergonomic handle"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLImageElement).style.transform =
                        "scale(1.06)")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLImageElement).style.transform =
                        "scale(1)")
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ SPEC TABLE ════════════ */}
        <section style={{ padding: "120px 0", background: C.white }}>
          <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 32px" }}>
            <div data-reveal="up" style={{ marginBottom: 48 }}>
              <div
                className="js-divider"
                style={{
                  width: 48,
                  height: 2,
                  background: C.terracotta,
                  marginBottom: 24,
                }}
              />
              <h2
                style={{
                  fontFamily: HEADING_FONT,
                  fontWeight: 300,
                  fontSize: "clamp(30px,3.5vw,46px)",
                  lineHeight: 1.1,
                  color: C.charcoal,
                }}
              >
                Spesifikasi Teknis
              </h2>
            </div>

            <table
              className="js-spec-table"
              style={{ width: "100%", borderCollapse: "collapse" }}
            >
              <tbody>
                {[
                  ["Material Inti", "Aluminium Die-Cast Premium"],
                  [
                    "Lapisan Permukaan",
                    "Swiss ILAG Non-stick Coating (Bebas PFOA)",
                  ],
                  [
                    "Kompatibilitas Kompor",
                    "Gas, Listrik, Induksi, Keramik, Halogen",
                  ],
                  ["Ketahanan Suhu", "Hingga 250°C (Oven safe tanpa penutup)"],
                  [
                    "Perawatan",
                    "Disarankan cuci tangan; aman untuk mesin pencuci piring",
                  ],
                ].map(([label, value]) => (
                  <tr
                    key={label}
                    className="js-spec-row"
                    style={{ borderBottom: `1px solid ${C.lightGray}` }}
                  >
                    <td
                      style={{
                        padding: "20px 0",
                        fontFamily: BODY_FONT,
                        fontSize: 16,
                        lineHeight: 1.7,
                        color: C.charcoal,
                        fontWeight: 600,
                        width: "34%",
                        paddingRight: 32,
                      }}
                    >
                      {label}
                    </td>
                    <td
                      style={{
                        padding: "20px 0",
                        fontFamily: BODY_FONT,
                        fontSize: 16,
                        lineHeight: 1.7,
                        color: C.medGray,
                      }}
                    >
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div
              data-reveal="up"
              data-delay="0.15"
              style={{
                marginTop: 56,
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
              }}
            >
              <button className="btn-primary">Beli Sekarang</button>
              <button className="btn-secondary">Lihat Semua Produk</button>
            </div>
          </div>
        </section>

        {/* ════════════ BRAND QUOTE BANNER ════════════ */}
        <section
          data-reveal="scale"
          style={{
            padding: "120px 32px",
            background: C.charcoal,
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              backgroundImage:
                "radial-gradient(ellipse at center, rgba(175,90,60,0.18) 0%, transparent 65%)",
            }}
          />
          <p
            style={{
              fontFamily: UI_FONT,
              fontSize: 13,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: C.cream,
              marginBottom: 24,
              position: "relative",
              zIndex: 1,
            }}
          >
            Sejak 2026
          </p>
          <h2
            style={{
              fontFamily: HEADING_FONT,
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "clamp(32px,4.5vw,54px)",
              lineHeight: 1.15,
              color: C.white,
              maxWidth: 760,
              margin: "0 auto 40px",
              position: "relative",
              zIndex: 1,
            }}
          >
            Memasak adalah seni.
            <br />
            Peralatan Anda adalah kanvasnya.
          </h2>
          <button
            className="btn-primary"
            style={{
              position: "relative",
              zIndex: 1,
              background: C.terracotta,
              borderColor: C.terracotta,
            }}
          >
            Temukan Koleksi
          </button>
        </section>
      </main>

      {/* ════════════ FOOTER ════════════ */}
      <footer style={{ padding: "80px 32px", background: "#efeeea" }}>
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
          <span
            style={{
              fontFamily: HEADING_FONT,
              fontSize: 28,
              fontWeight: 300,
              color: C.charcoal,
            }}
          >
            RYCH
          </span>
          <nav
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 32,
            }}
          >
            {[
              "Kebijakan Privasi",
              "Syarat & Ketentuan",
              "Hubungi Kami",
              "Affiliate Disclosure",
            ].map((link) => (
              <a key={link} href="#" className="footer-link">
                {link}
              </a>
            ))}
          </nav>
          <p style={{ fontFamily: BODY_FONT, fontSize: 15, color: C.medGray }}>
            © 2026 RYCH. Kualitas premium untuk dapur modern Indonesia.
          </p>
        </div>
      </footer>

      {/* ════════════ RESPONSIVE STYLES ════════════ */}
      <style>{`
        /* Hide hamburger on desktop, show desktop-nav and cta */
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: inline-flex !important; }
          .hamburger   { display: none !important; }
        }
        /* On mobile, hide desktop nav + cta, show hamburger */
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .hamburger   { display: flex !important; }
          /* Stack feature rows */
          .feature-row {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          /* Stack bento grid */
          .js-bento-grid {
            grid-template-columns: 1fr !important;
          }
          .js-bento {
            grid-column: span 1 !important;
          }
          /* Stack ergonomic card */
          .js-bento:last-child {
            flex-direction: column !important;
          }
          .js-bento:last-child > div:last-child {
            width: 100% !important;
          }
          /* Narrower padding */
          section > div,
          footer > div,
          header > div {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
        }
      `}</style>
    </>
  );
}
