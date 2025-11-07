import React from 'react'
import gallery from '../data/galleryData'

const GalleryPage = () => {
  // duplicate the list so the marquee can scroll seamlessly
  const items = [...gallery, ...gallery]

  return (
    <section className="py-8">
      <h2 className="text-2xl font-semibold mb-4 text-center">Gallery</h2>

      <div className="relative overflow-hidden">
        {/* marquee track */}
        <div className="flex items-center animate-marquee">
          {items.map((item, idx) => (
            <div key={`${item.id}-${idx}`} className="min-w-[260px] mx-3">
              <img
                src={item.src}
                alt={item.title}
                className={`${item.style} w-full h-48 object-cover rounded-md`}
              />
              <p className="text-sm mt-2 text-center">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GalleryPage