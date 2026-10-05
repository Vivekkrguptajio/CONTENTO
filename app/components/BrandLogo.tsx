/* The Pomera logo lockup shared by the navbar and the footer:
   wordmark image (ink or white) + the "alternative ad platform" descriptor as real text. */
export default function BrandLogo({
  isDark = false,
  className = "",
}: {
  isDark?: boolean;
  className?: string;
}) {
  return (
    <span className={`nav-logo-box ${isDark ? "nav-logo-box--dark" : ""}`} aria-label="Pomera, alternative ad platform">
      <img
        src={isDark ? "/assets/logo/pomera-logo-nav-white.png" : "/assets/logo/pomera-logo-nav.png"}
        alt=""
        width={180}
        height={48}
        className={`nav-brand-img logo ${className}`}
      />
      <span className="nav-logo-tag" aria-hidden="true">
        <span className="nav-logo-tag__text">alternative ad platform</span>
      </span>
    </span>
  );
}
