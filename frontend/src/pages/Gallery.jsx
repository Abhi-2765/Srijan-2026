import React, { useState } from "react";

const IMAGE_COUNT = 35;

// for default images, to be removed when actual images are to be set
const IDS = [1011, 1025, 103, 1043, 1052, 106, 1074, 1084, 109, 110, 111, 112, 113, 114];

const LAYOUT = [
  { c: 1, r: 2, ar: "4:3" },    { c: 1, r: 2, ar: "3:4" },    { c: 1, r: 1, ar: "1:1" },
  { c: 1, r: 1, ar: "4:3" },    { c: 1, r: 2, ar: "3:4" },    { c: 1, r: 1, ar: "1:1" },
  { c: 1, r: 1, ar: "4:3" },    { c: 1, r: 2, ar: "3:4" },    { c: 1, r: 1, ar: "1:1" },
  { c: 1, r: 1, ar: "4:3" },    { c: 1, r: 1, ar: "3:4" },    { c: 1, r: 1, ar: "1:1" },
  { c: 2, r: 1, ar: "4:3" },    { c: 1, r: 2, ar: "3:4" },    { c: 1, r: 1, ar: "1:1" },
  { c: 1, r: 1, ar: "3:4" },    { c: 1, r: 1, ar: "4:3" },    { c: 1, r: 1, ar: "1:1" },
  { c: 1, r: 1, ar: "3:4" },    { c: 1, r: 2, ar: "4:3" },    { c: 1, r: 1, ar: "1:1" },
  { c: 1, r: 1, ar: "3:4" },    { c: 2, r: 1, ar: "4:3" },    { c: 1, r: 1, ar: "1:1" }
];

const getRowSpan = (colSpan, aspectRatio, rowConfig) => {
  const baseHeight = 12;
  
  const heightMultiplier = (colSpan >= 3 || rowConfig >= 2) ? 0.7 : 1;
  
  if (aspectRatio === "1:1") {
    return Math.round(colSpan * baseHeight * heightMultiplier);
  } else if (aspectRatio === "4:3") {
    return Math.round((colSpan * baseHeight * 3) / 4 * heightMultiplier);
  } else if (aspectRatio === "3:4") {
    return Math.round((colSpan * baseHeight * 4) / 3 * heightMultiplier);
  }
  
  return Math.round(colSpan * baseHeight * heightMultiplier);
};

export default function GalleryCollage({ images }) {

  const defaultImages = Array.from({ length: IMAGE_COUNT }).map((_, i) => {
    const id = IDS[i % IDS.length] + Math.floor(i / IDS.length) * 2;
    return `https://picsum.photos/id/${id-5}/900/400`;
  });


  const imgs = images && images.length ? images.slice(0, IMAGE_COUNT) : defaultImages;

  const [hovered, setHovered] = useState(null);




  return (
    <div className="w-full  min-h-screen bg-[radial-gradient(ellipse_at_center,black_0%,#5F0410_100%)] py-4 px-0 pt-10 pb-20">
      <div className="max-w-7xl mx-auto mb-6 text-center">
      

        <div className="flex justify-center mb-10 relative">
        <img
          src={new URL('../data/GalleryText.png', import.meta.url).href}
          alt="Gallery"
          className="h-14 object-contain"
        />
      </div>
       
      </div>

      <div className="w-full px-0">
        <div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 auto-rows-[6px] gap-2 max-w-7xl mx-auto"
          style={{ alignItems: "stretch" }}
        >
          {imgs.map((src, idx) => {
            const layout = LAYOUT[idx % LAYOUT.length];
            const colSpan = layout.c;
            const aspectRatio = layout.ar;
            const rowConfig = layout.r;
            const rowSpan = getRowSpan(colSpan, aspectRatio, rowConfig);

            const isOtherDimmed = hovered !== null && hovered !== idx;
            
            return (
              <div
                key={idx}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                className={`
                  relative overflow-hidden
                  transition-all duration-300 ease-out
                  cursor-pointer
                  border-2 border-[#FFDF49]
                  ${hovered === idx 
                    ? "transform scale-[1.02] z-30 shadow-lg border-[#FFDF49]" 
                    : "transform scale-100 border-[#FFDF49]"
                  }
                  ${isOtherDimmed 
                    ? "opacity-100 scale-[0.99] brightness-50" 
                    : "opacity-100 brightness-100"
                  }
                  hover:shadow-lg hover:border-[#FFDF49]
                `}
                style={{
                  gridColumn: `span ${colSpan}`,
                  gridRow: `span ${rowSpan}`,
                }}
              >
                <img
                  src={src}
                  alt={`Gallery image ${idx + 1}`}
                  draggable={false}
                  className={`
                    w-full h-full object-cover
                    transition-transform duration-400 ease-out
                    ${hovered === idx ? "scale-108" : "scale-100"}
                  `}
                />
                
                <div className={`
                  absolute inset-0 bg-black 
                  transition-opacity duration-250
                  ${hovered === idx ? "opacity-10" : "opacity-0"}
                `} />
                
                
                {/* <div className={`
                  absolute top-1 right-1 bg-black/80 text-[#FFDF49] text-[10px] px-1.5 py-0.5 rounded
                  backdrop-blur-sm transition-opacity duration-200 border border-[#FFDF49]
                  ${hovered === idx ? "opacity-100" : "opacity-0"}
                `}>
                  {idx + 1}
                </div> */}
              </div>
            );
          })}
        </div>
      </div>

     
    </div>
  );
}