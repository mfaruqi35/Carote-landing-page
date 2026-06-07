import type { Metadata } from "next";
import Link from "next/link";
import LandingLayout from "../components/LandingLayout";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

/* ─── Design tokens (matching globals.css) ─── */
const C = {
  charcoal: "#35312E",
  terracotta: "#AF5A3C",
  offWhite: "#FCFAF6",
  white: "#FFFFFF",
  lightGray: "#E6E6E6",
  medGray: "#60605E",
  cream: "#EBE5D4",
} as const;

const shadowCard = "0px 2px 8px rgba(53,49,46,0.08)";
const HEADING_FONT = "var(--font-heading)";
const UI_FONT = "var(--font-ui)";
const BODY_FONT = "var(--font-body)";

/* ─── Guide data ─── */
const guides = [
  {
    icon: "skillet",
    title: "Cara Memilih Wajan Anti Lengket",
    summary:
      "Panduan lengkap faktor-faktor utama yang perlu diperhatikan sebelum membeli wajan anti lengket untuk dapur modern Anda.",
    steps: [
      "Periksa material inti — aluminium die-cast memberikan distribusi panas paling merata.",
      "Pastikan lapisan non-stick bebas PFOA untuk keamanan kesehatan keluarga.",
      "Cek kompatibilitas kompor — pilih yang support induksi jika Anda menggunakan kompor induksi.",
      "Perhatikan ketebalan dasar — minimal 3mm untuk stabilitas dan daya tahan.",
    ],
  },
  {
    icon: "local_fire_department",
    title: "Tips Memasak Anti Gosong",
    summary:
      "Teknik dasar yang sering diabaikan untuk menjaga makanan tidak gosong dan coating wajan tetap awet.",
    steps: [
      "Panaskan wajan dengan api sedang selama 1–2 menit sebelum memasak.",
      "Gunakan minyak secukupnya — anti lengket bukan berarti tanpa minyak sama sekali.",
      "Hindari api besar secara terus-menerus; api sedang sudah cukup untuk sebagian besar masakan.",
      "Aduk makanan secara berkala untuk menghindari titik gosong.",
    ],
  },
  {
    icon: "cleaning_services",
    title: "Perawatan Cookware Premium",
    summary:
      "Memperpanjang umur peralatan masak premium Anda dengan perawatan yang tepat dan kebiasaan harian.",
    steps: [
      "Biarkan wajan dingin secara alami sebelum mencuci — jangan siram air dingin ke wajan panas.",
      "Cuci dengan spons lembut dan sabun ringan, hindari scrub kasar atau steel wool.",
      "Keringkan sepenuhnya sebelum menyimpan untuk mencegah noda air.",
      "Simpan dengan tisu atau kain lembut di antara tumpukan wajan untuk melindungi coating.",
    ],
  },
  {
    icon: "restaurant",
    title: "Panduan Ukuran Wajan",
    summary:
      "Memilih diameter wajan yang tepat berdasarkan jumlah porsi dan jenis masakan.",
    steps: [
      "20 cm — cocok untuk telur dadar, tumis sayur 1 porsi, atau saus kecil.",
      "24 cm — ukuran serbaguna untuk 2–3 porsi, paling banyak digunakan sehari-hari.",
      "28 cm — ideal untuk nasi goreng keluarga, daging panggang, atau masakan besar.",
      "32 cm — untuk masakan pesta atau memasak dalam jumlah besar sekaligus.",
    ],
  },
];

const materialComparison = [
  {
    material: "Aluminium Die-Cast",
    pros: "Ringan, distribusi panas merata, cepat panas",
    cons: "Perlu lapisan non-stick, tidak bisa induksi (tanpa base plate)",
    best: "Masakan sehari-hari, tumis, goreng",
  },
  {
    material: "Stainless Steel",
    pros: "Sangat tahan lama, oven safe, tidak bereaksi dengan makanan asam",
    cons: "Makanan mudah menempel, perlu teknik preheating",
    best: "Searing daging, saus, caramel",
  },
  {
    material: "Cast Iron",
    pros: "Retensi panas luar biasa, semakin baik seiring pemakaian",
    cons: "Sangat berat, perlu seasoning berkala, mudah berkarat",
    best: "Pemanggangan, masakan slow-cook",
  },
  {
    material: "Keramik",
    pros: "Bebas bahan kimia sintetis, warna menarik, mudah dibersihkan",
    cons: "Lapisan lebih cepat aus, sensitif suhu tinggi",
    best: "Masakan ringan, pancake, telur",
  },
];

const cookingMistakes = [
  {
    icon: "warning",
    mistake: "Memasak dengan api terlalu besar",
    fix: "Gunakan api sedang. Wajan anti-lengket premium sudah didesain untuk distribusi panas optimal di api sedang.",
  },
  {
    icon: "water_drop",
    mistake: "Mencuci wajan panas dengan air dingin",
    fix: "Tunggu wajan dingin secara alami 5–10 menit, baru cuci dengan air biasa. Perubahan suhu mendadak bisa merusak lapisan.",
  },
  {
    icon: "blender",
    mistake: "Menggunakan spatula logam",
    fix: "Gunakan spatula silikon, kayu, atau nilon. Spatula logam bisa menggores dan merusak lapisan anti-lengket.",
  },
  {
    icon: "stacked_line_chart",
    mistake: "Menumpuk wajan tanpa pelindung",
    fix: "Selalu letakkan kain lembut, tisu, atau felt pad di antara tumpukan untuk melindungi permukaan coating.",
  },
  {
    icon: "local_laundry_service",
    mistake: "Mencuci dengan mesin pencuci piring terlalu sering",
    fix: "Meskipun dishwasher-safe, cuci tangan dengan spons lembut akan memperpanjang umur lapisan anti-lengket secara signifikan.",
  },
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Panduan Memasak & Perawatan Cookware",
  description:
    "Panduan lengkap memilih wajan anti lengket, tips memasak, perawatan cookware premium, dan perbandingan material. Dari RYCH Affiliate Indonesia.",
  alternates: {
    canonical: "/panduan",
  },
  openGraph: {
    title: "Panduan Memasak & Perawatan Cookware | RYCH Affiliate Indonesia",
    description:
      "Tips memilih, memasak, dan merawat peralatan masak premium. Panduan lengkap dari RYCH Affiliate Indonesia.",
    url: "/panduan",
    siteName: "RYCH Affiliate Indonesia",
    locale: "id_ID",
    type: "website",
  },
};

export default function PanduanPage() {
  return (
    <LandingLayout>
      <main
        style={{ background: C.offWhite, color: C.charcoal }}
      >
        {/* ════════════ HERO ════════════ */}
        <section
          style={{
            padding: "120px 32px 80px",
            maxWidth: 1200,
            margin: "0 auto",
            position: "relative",
          }}
        >
          <p
            style={{
              fontFamily: UI_FONT,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: C.medGray,
              marginBottom: 20,
              fontSize: 13,
            }}
          >
            Panduan Lengkap
          </p>
          <h1
            style={{
              fontFamily: HEADING_FONT,
              fontWeight: 300,
              fontSize: "clamp(42px, 6vw, 72px)",
              lineHeight: 1.05,
              maxWidth: 760,
              marginBottom: 20,
            }}
          >
            Panduan Memasak &amp; Perawatan Cookware Premium
          </h1>
          <p
            style={{
              fontFamily: BODY_FONT,
              fontSize: 18,
              lineHeight: 1.8,
              color: C.medGray,
              maxWidth: 820,
            }}
          >
            Dari memilih wajan yang tepat hingga teknik memasak dan perawatan
            harian — semua yang Anda butuhkan untuk memaksimalkan pengalaman
            memasak di dapur modern.
          </p>
        </section>

        {/* ════════════ GUIDE CARDS ════════════ */}
        <section style={{ padding: "0 32px 120px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div
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
                fontSize: "clamp(32px, 4vw, 52px)",
                lineHeight: 1.1,
                marginBottom: 48,
              }}
            >
              Panduan Praktis
            </h2>

            <div
              className="panduan-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 24,
              }}
            >
              {guides.map((guide) => (
                <article
                  key={guide.title}
                  style={{
                    background: C.white,
                    border: `1px solid ${C.lightGray}`,
                    padding: 32,
                    boxShadow: shadowCard,
                    display: "flex",
                    flexDirection: "column",
                    gap: 20,
                    transition: "box-shadow 0.3s ease",
                  }}
                >
                  {/* Icon + title */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                    }}
                  >
                    <div
                      style={{
                        width: 52,
                        height: 52,
                        flexShrink: 0,
                        background: C.cream,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 24, color: C.terracotta }}
                      >
                        {guide.icon}
                      </span>
                    </div>
                    <h3
                      style={{
                        fontFamily: HEADING_FONT,
                        fontWeight: 400,
                        fontSize: "clamp(20px, 2.5vw, 26px)",
                        lineHeight: 1.2,
                        margin: 0,
                      }}
                    >
                      {guide.title}
                    </h3>
                  </div>

                  {/* Summary */}
                  <p
                    style={{
                      fontFamily: BODY_FONT,
                      fontSize: 16,
                      lineHeight: 1.75,
                      color: C.medGray,
                      margin: 0,
                    }}
                  >
                    {guide.summary}
                  </p>

                  {/* Steps */}
                  <ol
                    style={{
                      fontFamily: BODY_FONT,
                      fontSize: 15,
                      lineHeight: 1.75,
                      color: C.charcoal,
                      margin: 0,
                      paddingLeft: 20,
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    {guide.steps.map((step, i) => (
                      <li key={i}>
                        <span style={{ color: C.medGray }}>{step}</span>
                      </li>
                    ))}
                  </ol>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ MATERIAL COMPARISON TABLE ════════════ */}
        <section style={{ padding: "120px 0", background: C.white }}>
          <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ marginBottom: 48 }}>
              <div
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
                  fontSize: "clamp(30px, 3.5vw, 46px)",
                  lineHeight: 1.1,
                  marginBottom: 16,
                }}
              >
                Perbandingan Material Cookware
              </h2>
              <p
                style={{
                  fontFamily: BODY_FONT,
                  fontSize: 17,
                  lineHeight: 1.75,
                  color: C.medGray,
                  maxWidth: 660,
                }}
              >
                Setiap material memiliki keunggulan dan keterbatasan.
                Kenali perbedaannya agar Anda bisa memilih yang paling sesuai
                dengan gaya memasak Anda.
              </p>
            </div>

            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  minWidth: 600,
                }}
              >
                <thead>
                  <tr
                    style={{
                      borderBottom: `2px solid ${C.charcoal}`,
                    }}
                  >
                    {["Material", "Kelebihan", "Kekurangan", "Terbaik Untuk"].map(
                      (h) => (
                        <th
                          key={h}
                          style={{
                            fontFamily: UI_FONT,
                            fontSize: 13,
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            color: C.charcoal,
                            padding: "16px 16px 16px 0",
                            textAlign: "left",
                          }}
                        >
                          {h}
                        </th>
                      ),
                    )}
                  </tr>
                </thead>
                <tbody>
                  {materialComparison.map((row) => (
                    <tr
                      key={row.material}
                      style={{
                        borderBottom: `1px solid ${C.lightGray}`,
                      }}
                    >
                      <td
                        style={{
                          padding: "20px 16px 20px 0",
                          fontFamily: BODY_FONT,
                          fontSize: 16,
                          lineHeight: 1.6,
                          fontWeight: 600,
                          color: C.charcoal,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {row.material}
                      </td>
                      <td
                        style={{
                          padding: "20px 16px 20px 0",
                          fontFamily: BODY_FONT,
                          fontSize: 15,
                          lineHeight: 1.7,
                          color: C.medGray,
                        }}
                      >
                        {row.pros}
                      </td>
                      <td
                        style={{
                          padding: "20px 16px 20px 0",
                          fontFamily: BODY_FONT,
                          fontSize: 15,
                          lineHeight: 1.7,
                          color: C.medGray,
                        }}
                      >
                        {row.cons}
                      </td>
                      <td
                        style={{
                          padding: "20px 0",
                          fontFamily: BODY_FONT,
                          fontSize: 15,
                          lineHeight: 1.7,
                          color: C.terracotta,
                          fontWeight: 500,
                        }}
                      >
                        {row.best}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ════════════ COMMON MISTAKES ════════════ */}
        <section style={{ padding: "120px 0", background: C.offWhite }}>
          <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ marginBottom: 48 }}>
              <div
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
                  fontSize: "clamp(30px, 3.5vw, 46px)",
                  lineHeight: 1.1,
                  marginBottom: 16,
                }}
              >
                Kesalahan Umum yang Harus Dihindari
              </h2>
              <p
                style={{
                  fontFamily: BODY_FONT,
                  fontSize: 17,
                  lineHeight: 1.75,
                  color: C.medGray,
                  maxWidth: 660,
                }}
              >
                Kebiasaan kecil ini bisa merusak cookware premium Anda lebih
                cepat dari yang dibayangkan.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {cookingMistakes.map((item) => (
                <article
                  key={item.mistake}
                  style={{
                    background: C.white,
                    border: `1px solid ${C.lightGray}`,
                    padding: "24px 28px",
                    boxShadow: shadowCard,
                    display: "flex",
                    gap: 20,
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      flexShrink: 0,
                      background: C.cream,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: 2,
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 22, color: C.terracotta }}
                    >
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: UI_FONT,
                        fontSize: 17,
                        fontWeight: 600,
                        color: C.charcoal,
                        marginBottom: 6,
                      }}
                    >
                      {item.mistake}
                    </h3>
                    <p
                      style={{
                        fontFamily: BODY_FONT,
                        fontSize: 15,
                        lineHeight: 1.75,
                        color: C.medGray,
                        margin: 0,
                      }}
                    >
                      <strong style={{ color: C.charcoal }}>Solusi:</strong>{" "}
                      {item.fix}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ CTA BANNER ════════════ */}
        <section
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
            Siap memasak lebih baik?
          </p>
          <h2
            style={{
              fontFamily: HEADING_FONT,
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "clamp(32px, 4.5vw, 54px)",
              lineHeight: 1.15,
              color: C.white,
              maxWidth: 760,
              margin: "0 auto 40px",
              position: "relative",
              zIndex: 1,
            }}
          >
            Temukan cookware premium
            <br />
            yang tepat untuk dapur Anda.
          </h2>
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
              position: "relative",
              zIndex: 1,
            }}
          >
            <Link
              className="btn-primary"
              href="/"
              style={{
                background: C.terracotta,
                borderColor: C.terracotta,
                textDecoration: "none",
              }}
            >
              Jelajahi Koleksi
            </Link>
            <Link
              className="btn-secondary"
              href="/tentang-kami"
              style={{
                color: C.white,
                borderColor: C.white,
                textDecoration: "none",
              }}
            >
              Tentang Kami
            </Link>
          </div>
        </section>
      </main>

      {/* Responsive override for panduan grid */}
      <style>{`
        @media (max-width: 767px) {
          .panduan-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </LandingLayout>
  );
}
