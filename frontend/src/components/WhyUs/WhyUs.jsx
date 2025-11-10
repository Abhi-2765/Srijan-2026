import { motion } from "framer-motion";
import Card from "./Card";
import whyUsHeading from "./data/whyUs.png";
import icon1 from "./data/icon1.png";
import icon2 from "./data/icon2.png";
import icon3 from "./data/icon3.png";
import icon4 from "./data/icon4.png";
import icon5 from "./data/icon5.png";
import icon6 from "./data/icon6.png";

export default function WhyUsPage() {
  const cards = [
    {
      img: icon1,
      title1: "",
      title2: "LARGEST SOCIO-CULTURAL FEST IN EASTERN INDIA",
      desc: "Leading the region’s most vibrant cultural celebration blending tradition, art, music, and innovation.",
    },
    {
      img: icon2,
      title1: "50K+",
      title2: "FOOTWALL",
      desc: "Massive participation from across the country – from students, artists, and cultural enthusiasts.",
    },
    {
      img: icon3,
      title1: "100+",
      title2: "EVENTS",
      desc: "A diverse range of cultural, literary, fine-arts, and performing arts competitions and showcases.",
    },
    {
      img: icon4,
      title1: "200+",
      title2: "INSTITUTES REPRESENTED",
      desc: "Students and performers from over 200 institutions nationwide contribute to Srijan’s vibrant energy.",
    },
    {
      img: icon5,
      title1: "10K+",
      title2: "PARTICIPANTS",
      desc: "Active involvement in individual and group performances across all event categories.",
    },
    {
      img: icon6,
      title1: "300K+",
      title2: "SOCIAL MEDIA REACH",
      desc: "Extensive digital presence and engagement across multiple platforms, celebrating creativity and youth energy.",
    },
  ];

  return (
    <div
      className="w-full min-h-screen relative overflow-hidden pt-[40px] pb-16"
      style={{
        background: "radial-gradient(circle, #9D3601 0%, #5F0F10 45%)",
      }}
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center mb-12"
      >
        <img
          src={whyUsHeading}
          alt="WhyUs"
          className="h-16 object-contain drop-shadow-[0_0_10px_rgba(255,215,0,0.3)]"
        />
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-8 md:px-20">
        {cards.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Card
              img={c.img}
              title1={c.title1}
              title2={c.title2}
              desc={c.desc}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
