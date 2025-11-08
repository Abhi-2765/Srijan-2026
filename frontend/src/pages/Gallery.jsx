import React, { useEffect, useRef } from 'react'
import { gallery, gallery2 } from '../data/galleryData'

const GalleryPage = () => {
  // duplicate the list so the marquee can scroll seamlessly
  const items = [...gallery, ...gallery]
  // for the opposite-direction track we reverse the base order then duplicate it
  const base2 = [...gallery2].slice().reverse()
  const items2 = [...base2, ...base2]

  const track1Ref = useRef(null)
  const track2Ref = useRef(null)
  const rafRef = useRef(null)
  const lastTimeRef = useRef(null)
  const pos1 = useRef(0)
  const pos2 = useRef(0)
  const width1 = useRef(0)
  const width2 = useRef(0)
  const paused1 = useRef(false)
  const paused2 = useRef(false)
  const keyState = useRef({ left: false, right: false })

  // pixels per second (base)
  const speed1 = 120
  const speed2 = 80
  // boost applied while arrow key is pressed (pixels/sec)
  const boost = 300

  useEffect(() => {
    const track1 = track1Ref.current
    const track2 = track2Ref.current
    if (!track1 || !track2) return

    const computeWidths = () => {
      // full scrollable width divided by 2 (because we duplicated)
      width1.current = track1.scrollWidth / 2
      width2.current = track2.scrollWidth / 2
      // ensure transforms are clamped to new widths to avoid jumps
      pos1.current = pos1.current % width1.current
      pos2.current = pos2.current % width2.current
      track1.style.transform = `translate3d(${-pos1.current}px,0,0)`
      track2.style.transform = `translate3d(${-pos2.current}px,0,0)`
    }

    // wait for images to load before measuring widths (avoids wrong scrollWidth causing jumps)
    const imgs = Array.from(track1.querySelectorAll('img')).concat(Array.from(track2.querySelectorAll('img')))
    let imgsLoaded = 0
    const onImgLoad = () => {
      imgsLoaded += 1
      if (imgsLoaded >= imgs.length) {
        computeWidths()
      }
    }

    if (imgs.length === 0) {
      computeWidths()
    } else {
      imgs.forEach((img) => {
        if (img.complete) onImgLoad()
        else img.addEventListener('load', onImgLoad, { once: true })
      })
      // fallback: compute after short timeout in case some images never fire
      setTimeout(computeWidths, 1500)
    }

    window.addEventListener('resize', computeWidths)

    const step = (time) => {
      if (!lastTimeRef.current) lastTimeRef.current = time
      const dt = (time - lastTimeRef.current) / 1000
      lastTimeRef.current = time

      if (!paused1.current && width1.current > 0) {
        // apply keyboard modifiers: left -> faster left, right -> faster right (right subtracts)
        const ks = keyState.current
        const delta1 = (ks.left ? boost : 0) - (ks.right ? boost : 0)
        const v1 = speed1 + delta1
        pos1.current += v1 * dt
        if (pos1.current >= width1.current) pos1.current -= width1.current
        if (pos1.current < 0) pos1.current += width1.current
        track1.style.transform = `translate3d(${-pos1.current}px,0,0)`
      }

      if (!paused2.current && width2.current > 0) {
        const ks = keyState.current
        const delta2 = (ks.left ? boost : 0) - (ks.right ? boost : 0)
        const v2 = speed2 + delta2
        pos2.current += v2 * dt
        if (pos2.current >= width2.current) pos2.current -= width2.current
        if (pos2.current < 0) pos2.current += width2.current
        track2.style.transform = `translate3d(${-pos2.current}px,0,0)`
      }

      rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', computeWidths)
    }
  }, [])

  // register key handlers to update keyState
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        keyState.current.left = true
        e.preventDefault()
      } else if (e.key === 'ArrowRight') {
        keyState.current.right = true
        e.preventDefault()
      }
    }
    const onKeyUp = (e) => {
      if (e.key === 'ArrowLeft') keyState.current.left = false
      else if (e.key === 'ArrowRight') keyState.current.right = false
    }
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
    }
  }, [])

  // use the dedicated background image placed at `src/data/GalleryBG.png`
  const bgUrl = new URL('../data/GalleryBG.png', import.meta.url).href
  // only set the background image here; sizing/positioning handled by Tailwind classes
  const sectionStyle = {
    backgroundImage: `url(${bgUrl})`,
  }

  return (
  <section className="py-8 relative min-h-screen bg-center bg-cover bg-no-repeat" style={sectionStyle}>
      {/* subtle overlay so text and tracks remain readable */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      {/* heading image */}
      <div className="flex justify-center mb-10 relative">
        <img
          src={new URL('../data/GalleryText.png', import.meta.url).href}
          alt="Gallery"
          className="h-14 object-contain"
        />
      </div>

      <div className="relative overflow-hidden" onMouseEnter={() => (paused1.current = true)} onMouseLeave={() => (paused1.current = false)}>
        {/* marquee track (left) */}
        <div ref={track1Ref} className="flex items-center flex-nowrap will-change-transform">
          {items.map((item, idx) => {
            const shapeVariants = [
              'rounded-md',
              'rounded-full',
              'rounded-tl-3xl',
              'rounded-tr-3xl',
              'rounded-bl-3xl',
              'rounded-br-3xl',
              'rounded-lg',
            ]
            const shape = shapeVariants[idx % shapeVariants.length]
            return (
              <div key={`${item.id}-${idx}`} className="mx-3 mt-4 flex-shrink-0" aria-hidden={idx >= gallery.length}>
                <div className={``}>
                  <img src={item.src} alt={item.title} className={`w-full h-40 object-cover`} />
                </div>
                {/* <p className="text-sm mt-2 text-center text-white">{item.title}</p> */}
              </div>
            )
          })}
        </div>
      </div>

      <div className="relative overflow-hidden mt-20" onMouseEnter={() => (paused2.current = true)} onMouseLeave={() => (paused2.current = false)}>
        {/* marquee track (left slow) */}
        <div ref={track2Ref} className="flex items-center flex-nowrap will-change-transform">
          {items2.map((item, idx) => {
            const shapeVariants = [
              'rounded-md',
              'rounded-full',
              'rounded-tl-3xl',
              'rounded-tr-3xl',
              'rounded-bl-3xl',
              'rounded-br-3xl',
              'rounded-lg',
            ]
            const shape = shapeVariants[idx % shapeVariants.length]
            return (
              <div key={`${item.id}-${idx}`} className=" mx-3 flex-shrink-0" aria-hidden={idx >= gallery2.length}>
                <div className={''}>
                  <img src={item.src} alt={item.title} className={`w-full h-40 object-cover`} />
                </div>
                {/* <p className="text-sm mt-2 text-center text-white">{item.title}</p> */}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default GalleryPage