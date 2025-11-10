import React, { useEffect } from "react";
import { motion } from "framer-motion";
import aboutHeading from "./data/aboutUsHeading.png";
import paperBg from "./data/paperBg.png";

export default function AboutUsPage() {
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

  const stats = [
    { big: "50,000+", label: "FOOTWALL" },
    { big: "10,000+", label: "PARTICIPANTS" },
    { big: "200+", label: "INSTITUTES" },
  ];

  const paragraphVariant = {
    hidden: { opacity: 0, y: -40 },
    show: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } },
  };

  const growTogether = {
    hidden: { scale: 0.8, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.8,
        delay: 0.25,
      },
    },
  };

  const paragraphsContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.8 } },
  };

  return (
    <div
      className="w-full min-h-screen relative flex flex-col items-center overflow-y-auto pb-12 pt-6"
      style={{
        background: "#5F0F10",
        fontFamily: "'Cinzel Decorative', serif",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-center mb-0"
      >
        <img
          src={aboutHeading}
          alt="AboutUs"
          className="h-18 object-contain drop-shadow-[0_0_10px_rgba(255,215,0,0.35)]"
          style={{ height: "72px" }}
        />
      </motion.div>

      <div
        className="relative flex justify-center items-start"
        style={{
          width: "86vw",
          maxWidth: "1500px",
          height: "auto",
          overflow: "visible",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full rounded-xl"
          // added a masking because in the figma file.., the leaflet-image's corner ended abruptly, and didn't look that clean
          style={{
            zIndex: 0,
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%), linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%), linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
            overflow: "hidden",
          }}
        >
          <img
            src={paperBg}
            alt="paper background"
            className="w-full h-full object-fill rounded-xl"
            style={{ display: "block", filter: "brightness(0.9)" }}
          />
        </div>

        <div
          className="relative z-10 flex flex-col items-center w-[60vw] sm:w-[75%]"
          style={{
            boxSizing: "border-box",
            pointerEvents: "auto",
            paddingLeft: "2vw",
            paddingRight: "2vw",
            paddingTop: "120px",
            paddingBottom: "120px",
            wordBreak: "break-word",
            overflowWrap: "break-word",
          }}
        >
          <p
            className="text-center text-[15px] lg:text-[16px] leading-6 text-[#771013] max-w-4xl mx-auto font-bold"
            style={{ lineHeight: 1.15, margin: 0 }}
          >
            The Indian Institute of Technology (Indian School of Mines) Dhanbad
            is a premier institution of national importance, consistently ranked
            among India's top technical universities. Established in 1926, IIT
            (ISM) Dhanbad stands on the cusp of celebrating its centenary — a
            testament to its enduring legacy of academic excellence and
            innovation. Recognized globally, it continues to produce highly
            skilled professionals and thought leaders across diverse fields.
          </p>

          <motion.div
            className="mt-6 w-full flex flex-col lg:flex-row items-center justify-between gap-4 max-w-4xl"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            variants={growTogether}
          >
            {stats.map((s, idx) => (
              <div key={idx} className="flex-1 text-center px-2">
                <div
                  className="text-[36px] lg:text-[52px] font-extrabold text-black"
                  style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}
                >
                  {s.big}
                </div>
                {/* reduced top margin so label is closer to number */}
                <div
                  className="mt-0 text-[15px] lg:text-[18px] font-bold text-[#0b0b0b] tracking-wider"
                  style={{ letterSpacing: "1px" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="mt-8 space-y-4 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            variants={paragraphsContainer}
          >
            <motion.p
              className="text-center text-[15px] lg:text-[16px] leading-6 text-[#771013] font-bold"
              variants={paragraphVariant}
              style={{ lineHeight: 1.2 }}
            >
              Srijan, the annual cultural festival of IIT (ISM) Dhanbad, is a
              vibrant celebration of art, talent, and youth. Since its inception
              in 1977, Srijan has evolved into Eastern India's largest
              socio-cultural festival, attracting participants and audiences
              from across the nation. It serves as a dynamic platform where
              creativity flourishes and aspirations take flight.
            </motion.p>

            <motion.p
              className="text-center text-[15px] lg:text-[16px] leading-6 text-[#771013] font-bold"
              variants={paragraphVariant}
              style={{ lineHeight: 1.2 }}
            >
              This year's festival will feature an impressive lineup of events
              designed to captivate and engage — from high-energy music concerts
              and dazzling dance competitions to thought-provoking talks and
              theatrical performances. Srijan 2026 offers an unparalleled
              opportunity for attendees to connect with a dynamic and
              influential demographic, where the leaders and innovators of
              tomorrow can shine.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
