import { useEffect } from "react";

export default function Card({ img, title1, title2, desc }) {
  // Ensure font is loaded once
  useEffect(() => {
    const id = "cinzel-decorative-google-font";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  // Styles
  const containerStyle = {
    height: "280px",
    boxSizing: "border-box",
    border: "2px solid #ffcc33",
  };

  const iconStyle = {
    height: 80,
    width: 80,
    marginBottom: 12,
    objectFit: "contain",
  };

  const titlePrimaryStyle = {
    color: "var(--gold, #ffcc33)",
    fontFamily: '"Cinzel Decorative", serif',
    fontWeight: 700,
    fontSize: 36,
    letterSpacing: "0.02em",
    lineHeight: 1.02,
    textTransform: "uppercase",
    margin: 0,
    textAlign: "center",
  };

  const titleSecondaryStyle = {
    color: "var(--gold, #ffcc33)",
    fontFamily: '"Cinzel Decorative", serif',
    fontWeight: 700,
    fontSize: 18,
    letterSpacing: "0.03em",
    lineHeight: 1.1,
    textTransform: "uppercase",
    margin: "6px 0 0 0",
    textAlign: "center",
  };

  const descStyle = {
    color: "white",
    fontFamily: "Cinzel Decorative, serif",
    fontSize: 13,
    fontWeight: 600,
    padding: "0 12px",
    margin: 0,
    textAlign: "center",
  };

  return (
    <div
      className="bg-gradient-to-b from-[#a0420c] to-[#6d2505] border border-[#ffb000] rounded-2xl p-6 flex flex-col justify-around items-center text-center transition-transform duration-300 hover:scale-105"
      style={containerStyle}
    >
      <div className="flex flex-col items-center">
        <img src={img} alt="icon" style={iconStyle} />

        <div style={titlePrimaryStyle}>{title1}</div>

        <div style={titleSecondaryStyle}>{title2}</div>
      </div>

      <p style={descStyle}>{desc}</p>
    </div>
  );
}
