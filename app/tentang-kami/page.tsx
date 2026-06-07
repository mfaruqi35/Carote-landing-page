import type { Metadata } from "next";
import Image from "next/image";
import LandingLayout from "../components/LandingLayout";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const team = [
  {
    name: "Arifa",
    role: "Content Strategy",
    bio: "Menyusun arah konten agar tetap relevan untuk pencarian dan kebutuhan audiens Indonesia.",
    seed: "Arifa",
  },
  {
    name: "thahira",
    role: "Copywriting",
    bio: "Merangkai pesan singkat yang jelas, hangat, dan mudah dikonversi di halaman affiliate.",
    seed: "thahira",
  },
  {
    name: "Sifa",
    role: "SEO Research",
    bio: "Mencari keyword intent, struktur heading, dan peluang topik yang paling kuat untuk organic traffic.",
    seed: "Sifa",
  },
  {
    name: "yulli",
    role: "Social Media",
    bio: "Mengelola caption, hashtag, dan distribusi konten agar performa sosial lebih stabil.",
    seed: "yulli",
  },
  {
    name: "Mulia Andiki",
    role: "Founder",
    bio: "Menjaga arah produk, kualitas kurasi, dan pengalaman pengguna dari hulu ke hilir.",
    seed: "Mulia Andiki",
  },
  {
    name: "rahmatun Nisa",
    role: "Product Curator",
    bio: "Memastikan produk yang ditampilkan punya nilai, konteks, dan alasan rekomendasi yang kuat.",
    seed: "rahmatun Nisa",
  },
  {
    name: "muhammad faruqi",
    role: "Technical Support",
    bio: "Menjaga halaman, link, dan pengalaman teknis agar tetap cepat, stabil, dan mudah diakses.",
    seed: "muhammad faruqi",
  },
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Tentang Kami",
  description:
    "Kenali tim RYCH Affiliate Indonesia, platform kurasi produk dan rekomendasi belanja untuk kebutuhan dapur modern.",
  alternates: {
    canonical: "/tentang-kami",
  },
  openGraph: {
    title: "Tentang Kami | RYCH Affiliate Indonesia",
    description:
      "Kenali tim di balik RYCH Affiliate Indonesia dan fokus kami pada kurasi produk, SEO, dan konten affiliate.",
    url: "/tentang-kami",
    siteName: "RYCH Affiliate Indonesia",
    locale: "id_ID",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <LandingLayout>
      <main style={{ background: "var(--off-white)", color: "var(--charcoal)" }}>
        <section
          style={{
            padding: "120px 32px 80px",
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-ui)",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "var(--med-gray)",
              marginBottom: 20,
            }}
          >
            Tentang Kami
          </p>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 300,
              fontSize: "clamp(42px, 6vw, 72px)",
              lineHeight: 1.05,
              maxWidth: 760,
              marginBottom: 20,
            }}
          >
            Tim kecil yang fokus pada konten affiliate, SEO, dan kurasi produk
            yang berguna.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 18,
              lineHeight: 1.8,
              color: "var(--med-gray)",
              maxWidth: 820,
            }}
          >
            RYCH Affiliate Indonesia dibangun untuk membantu pengunjung menemukan
            produk yang tepat dengan lebih cepat. Kami menggabungkan SEO, preview
            product, link pembelian, serta optimasi caption dan hashtag agar
            konten bisa menjangkau audiens yang relevan.
          </p>
        </section>

        <section style={{ padding: "0 32px 120px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 300,
                fontSize: "clamp(32px, 4vw, 52px)",
                lineHeight: 1.1,
                marginBottom: 32,
              }}
            >
              Orang-orang di balik proyek ini
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
                gap: 20,
              }}
            >
              {team.map((member) => (
                <article
                  key={member.name}
                  style={{
                    background: "var(--white)",
                    border: "1px solid var(--light-gray)",
                    padding: 24,
                    boxShadow: "0px 2px 8px rgba(53,49,46,0.08)",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: 88,
                      height: 88,
                      marginBottom: 18,
                    }}
                  >
                    <Image
                      src={`https://api.dicebear.com/9.x/initials/png?seed=${encodeURIComponent(member.seed)}`}
                      alt={member.name}
                      fill
                      sizes="88px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontSize: 20,
                      marginBottom: 6,
                    }}
                  >
                    {member.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontSize: 13,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--terracotta)",
                      marginBottom: 14,
                    }}
                  >
                    {member.role}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 16,
                      lineHeight: 1.75,
                      color: "var(--med-gray)",
                      margin: 0,
                    }}
                  >
                    {member.bio}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </LandingLayout>
  );
}
