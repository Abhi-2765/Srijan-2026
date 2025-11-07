// galleryData.js
// Dynamically imports gallery assets and splits them into two arrays (half / half).
// Uses Vite's `import.meta.glob` so you don't need to list files manually.

// use Vite's modern glob options: query to request the resolved URL and import default
const modules = import.meta.glob('../Assets/Gallery/*.{png,jpg,jpeg}', { eager: true, query: '?url', import: 'default' })

// Turn into an array and sort by filename so order is predictable.
const images = Object.entries(modules)
  .map(([path, mod]) => {
    // `mod` may be a string (eager ?url) or an object with `default` property depending on Vite version/options
    const url = typeof mod === 'string' ? mod : (mod && mod.default) ? mod.default : ''
    return { path, url, name: path.split('/').pop() }
  })
  .filter((i) => i.url) // drop any entries that failed to resolve
  .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }))

// helper to create a title from filename
const titleFrom = (name) => name.replace(/\.[^/.]+$/, '').replace(/[_\-]/g, ' ')

// small cycle of styles to give visual variety
const styles = [
  'rounded-md shadow-lg',
  'rounded-md ring-2 ring-indigo-300',
  'rounded-md opacity-95',
  'rounded-full shadow-sm',
  'rounded-md shadow',
]

const half = Math.ceil(images.length / 2)

const gallery = images.slice(0, half).map((img, i) => ({
  id: i + 1,
  title: titleFrom(img.name),
  src: img.url,
  style: styles[i % styles.length],
}))

const gallery2 = images.slice(half).map((img, i) => ({
  id: half + i + 1,
  title: titleFrom(img.name),
  src: img.url,
  style: styles[(half + i) % styles.length],
}))

export { gallery, gallery2 }
