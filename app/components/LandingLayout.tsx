import Header from "./Header";
import Footer from "./Footer";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />

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
