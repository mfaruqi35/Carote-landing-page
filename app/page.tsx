"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import LandingLayout from "./components/LandingLayout";
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
const UI_FONT = "var(--font-ui)";
const BODY_FONT = "var(--font-body)";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const SHOPEE_URL = "https://shopee.co.id/dewbracelets";

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "RYCH x Carote Cookware Premium",
  description:
    "Rekomendasi cookware premium untuk dapur modern Indonesia dengan lapisan anti-lengket, distribusi panas merata, dan material aman.",
  brand: {
    "@type": "Brand",
    name: "Carote",
  },
  image: [HERO_IMG, FEATURE1_IMG, FEATURE2_IMG],
  category: "Cookware",
  url: `${SITE_URL}/#koleksi`,
  offers: {
    "@type": "AggregateOffer",
    offerCount: "3",
    priceCurrency: "IDR",
    lowPrice: "299000",
    highPrice: "2499000",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/#koleksi`,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RYCH Affiliate Indonesia",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.ico`,
  description:
    "Platform affiliate Indonesia untuk rekomendasi alat masak premium dengan kurasi produk, panduan, dan perbandingan harga merchant terpercaya.",
  sameAs: [],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["Indonesian"],
      url: `${SITE_URL}/#hubungi-kami`,
    },
  ],
};

export default function Home() {
  const heroSectionRef = useRef<HTMLElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const heroCtaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Kill stale ScrollTrigger instances from previous mounts (client-side nav)
    ScrollTrigger.getAll().forEach((t) => t.kill());

    // Clear only GSAP animation properties — NOT 'all', which would strip
    // React's layout styles (position, display, flex, grid-column, etc.)
    const gsapProps = "opacity,transform,visibility";
    const animatedRefs = [
      heroTitleRef.current,
      heroImageRef.current,
      heroCtaRef.current,
    ].filter(Boolean);
    gsap.set(animatedRefs, { clearProps: gsapProps });
    document
      .querySelectorAll<HTMLElement>(
        "[data-reveal],[data-stagger-child],.js-bento,.js-spec-row,.js-divider",
      )
      .forEach((el) => gsap.set(el, { clearProps: gsapProps }));

    const ctx = gsap.context(() => {
      /* ── Hero entrance ── */
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      if (heroTitleRef.current)
        tl.fromTo(
          heroTitleRef.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.1 },
        );
      if (heroImageRef.current)
        tl.fromTo(
          heroImageRef.current,
          { y: 40, opacity: 0, scale: 0.97 },
          { y: 0, opacity: 1, scale: 1, duration: 1.2 },
          "-=0.7",
        );
      if (heroCtaRef.current)
        tl.fromTo(
          heroCtaRef.current,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
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
        const fromVars: gsap.TweenVars = { opacity: 0 };
        const toVars: gsap.TweenVars = {
          opacity: 1,
          duration: 0.85,
          delay,
          ease: "power3.out",
        };
        if (dir === "up") {
          fromVars.y = 50;
          toVars.y = 0;
        }
        if (dir === "left") {
          fromVars.x = -40;
          toVars.x = 0;
        }
        if (dir === "right") {
          fromVars.x = 40;
          toVars.x = 0;
        }
        if (dir === "scale") {
          fromVars.scale = 0.93;
          toVars.scale = 1;
        }
        gsap.fromTo(el, fromVars, {
          ...toVars,
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });

      /* ── Stagger sections ── */
      document
        .querySelectorAll<HTMLElement>("[data-stagger]")
        .forEach((sec) => {
          const kids = sec.querySelectorAll<HTMLElement>("[data-stagger-child]");
          gsap.fromTo(
            kids,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.85,
              stagger: 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sec,
                start: "top 82%",
                toggleActions: "play none none none",
              },
            },
          );
        });

      /* ── Bento cells ── */
      const bentoCells = document.querySelectorAll<HTMLElement>(".js-bento");
      gsap.fromTo(
        bentoCells,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".js-bento-grid",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      /* ── Spec table rows ── */
      const rows = document.querySelectorAll<HTMLElement>(".js-spec-row");
      gsap.fromTo(
        rows,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.07,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".js-spec-table",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      /* ── Divider lines ── */
      document.querySelectorAll<HTMLElement>(".js-divider").forEach((d) => {
        gsap.fromTo(
          d,
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: "left center",
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: d,
              start: "top 92%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    });

    // Recalculate all ScrollTrigger positions after setup
    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
    };
  }, []);

  /* ─── JSX ─────────────────────────────────────────────── */
  return (
    <LandingLayout>
      <main>
        {/* ════════════ HERO ════════════ */}
        <section
          ref={heroSectionRef}
          id="beranda"
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

          <p
            style={{
              fontFamily: BODY_FONT,
              fontSize: 18,
              lineHeight: 1.7,
              color: C.medGray,
              maxWidth: 760,
              margin: "0 auto 40px",
              position: "relative",
              zIndex: 1,
            }}
          >
            Platform affiliate Indonesia untuk rekomendasi alat masak premium,
            review cookware anti lengket, dan panduan memilih wajan terbaik
            untuk dapur modern. Jelajahi{" "}
            <a href="#koleksi" className="footer-link">
              koleksi terkurasi
            </a>{" "}
            dan baca{" "}
            <a href="#faq" className="footer-link">
              FAQ pembelian
            </a>{" "}
            sebelum checkout.
          </p>

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
            <Image
              src={HERO_IMG}
              alt="Koleksi cookware premium untuk dapur modern Indonesia"
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, 960px"
              style={{
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
            <a className="btn-primary" href="#koleksi">
              Jelajahi Koleksi
            </a>
            <a className="btn-secondary" href="#panduan-memasak">
              Pelajari Lebih Lanjut
            </a>
          </div>
        </section>

        {/* ════════════ FEATURE 1 — Minimalis ════════════ */}
        <section
          id="koleksi"
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
                  <a
                    href="#faq"
                    className="btn-secondary"
                    style={{ marginTop: 8 }}
                  >
                    Pelajari Lebih Lanjut
                  </a>
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
                  loading="lazy"
                  decoding="async"
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
          id="panduan-memasak"
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
                  loading="lazy"
                  decoding="async"
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
                  <a
                    href="#koleksi"
                    className="btn-primary"
                    style={{ marginTop: 8 }}
                  >
                    Lihat Koleksi
                  </a>
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
                    loading="lazy"
                    decoding="async"
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
                    loading="lazy"
                    decoding="async"
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
        <section
          id="spesifikasi"
          style={{ padding: "120px 0", background: C.white }}
        >
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
              <a className="btn-primary" href="#koleksi">
                Beli Sekarang
              </a>
              <a className="btn-secondary" href="#beranda">
                Lihat Semua Produk
              </a>
            </div>
          </div>
        </section>

        {/* ════════════ SEO FAQ + AFFILIATE DISCLOSURE ════════════ */}
        <section
          id="faq"
          style={{ padding: "120px 0", background: C.offWhite }}
        >
          <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 32px" }}>
            <div data-reveal="up" style={{ marginBottom: 40 }}>
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
                  marginBottom: 20,
                }}
              >
                FAQ Affiliate Alat Masak Premium
              </h2>
              <p
                style={{
                  fontFamily: BODY_FONT,
                  fontSize: 17,
                  lineHeight: 1.75,
                  color: C.medGray,
                  margin: 0,
                }}
              >
                RYCH adalah platform affiliate yang membantu Anda membandingkan
                rekomendasi produk cookware premium dari merchant partner. Untuk
                detail material, lihat{" "}
                <a href="#spesifikasi" className="footer-link">
                  spesifikasi teknis
                </a>{" "}
                dan langsung{" "}
                <a href="#koleksi" className="footer-link">
                  jelajahi koleksi
                </a>
                .
              </p>
            </div>

            <div style={{ display: "grid", gap: 16 }}>
              {[
                {
                  q: "Apa itu platform affiliate cookware?",
                  a: "Platform affiliate menghubungkan Anda ke merchant partner terpercaya. Kami mengkurasi produk, menulis panduan, lalu Anda bisa membeli dari tautan partner yang tersedia.",
                },
                {
                  q: "Bagaimana memilih wajan anti lengket terbaik?",
                  a: "Perhatikan material inti, kualitas lapisan non-stick, kompatibilitas kompor, dan ketahanan suhu. Anda bisa mulai dari section Panduan lalu cocokkan kebutuhan memasak harian Anda.",
                },
                {
                  q: "Apakah harga di RYCH selalu paling murah?",
                  a: "Kami berupaya menampilkan penawaran kompetitif dari partner, namun harga dapat berubah sewaktu-waktu mengikuti promo merchant masing-masing.",
                },
                {
                  q: "Apakah RYCH mendapat komisi affiliate?",
                  a: "Ya. Kami dapat menerima komisi dari transaksi melalui tautan affiliate, tanpa biaya tambahan bagi Anda.",
                },
              ].map((item) => (
                <details
                  key={item.q}
                  data-reveal="up"
                  style={{
                    background: C.white,
                    border: `1px solid ${C.lightGray}`,
                    padding: "20px 24px",
                  }}
                >
                  <summary
                    style={{
                      fontFamily: UI_FONT,
                      fontSize: 18,
                      color: C.charcoal,
                      cursor: "pointer",
                      fontWeight: 500,
                    }}
                  >
                    {item.q}
                  </summary>
                  <p
                    style={{
                      marginTop: 12,
                      fontFamily: BODY_FONT,
                      fontSize: 16,
                      lineHeight: 1.75,
                      color: C.medGray,
                    }}
                  >
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ SEO AFFILIATE CONTENT ════════════ */}
        <section
          id="seo-affiliate"
          style={{ padding: "120px 0", background: C.white }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
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
                  maxWidth: 760,
                }}
              >
                SEO (Search Engine Optimization) untuk Affiliate
              </h2>
              <p
                style={{
                  fontFamily: BODY_FONT,
                  fontSize: 17,
                  lineHeight: 1.75,
                  color: C.medGray,
                  marginTop: 16,
                  maxWidth: 760,
                }}
              >
                Kami menyusun konten affiliate agar lebih mudah ditemukan di
                Google, dengan preview product yang jelas, link pembelian yang
                langsung ke marketplace, serta optimasi caption dan hashtag
                untuk sosial media.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: 20,
              }}
            >
              {[
                {
                  title: "SEO",
                  text: "Struktur judul, deskripsi, dan internal link dibuat untuk intent pencarian Indonesia yang lebih relevan.",
                },
                {
                  title: "Preview Product",
                  text: "Menampilkan ringkasan produk agar pengunjung cepat memahami value sebelum klik ke marketplace.",
                },
                {
                  title: "Link Pembelian",
                  text: "Tautan pembelian diarahkan ke marketplace partner supaya proses checkout lebih cepat dan terukur.",
                },
                {
                  title: "Optimasi caption dan hashtag",
                  text: "Caption dan hashtag dirapikan untuk mendukung jangkauan konten di TikTok dan Instagram.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  data-reveal="up"
                  style={{
                    background: C.offWhite,
                    border: `1px solid ${C.lightGray}`,
                    padding: "28px",
                    boxShadow: shadowCard,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: UI_FONT,
                      fontSize: 18,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: C.charcoal,
                      marginBottom: 12,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: BODY_FONT,
                      fontSize: 16,
                      lineHeight: 1.75,
                      color: C.medGray,
                      margin: 0,
                    }}
                  >
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ BRAND QUOTE BANNER ════════════ */}
        <section
          id="tentang-kami"
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
          <a
            className="btn-primary"
            href="#koleksi"
            style={{
              position: "relative",
              zIndex: 1,
              background: C.terracotta,
              borderColor: C.terracotta,
            }}
          >
            Temukan Koleksi
          </a>
        </section>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
    </LandingLayout>
  );
}
