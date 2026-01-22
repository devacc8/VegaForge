import { Resvg } from '@resvg/resvg-js'
import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '../public')

// Convert OG image (1200x630)
console.log('Converting og-image.svg → og-image.png...')
const ogSvg = readFileSync(join(publicDir, 'og-image.svg'), 'utf8')
const ogResvg = new Resvg(ogSvg, {
  fitTo: { mode: 'width', value: 1200 },
})
const ogPng = ogResvg.render().asPng()
writeFileSync(join(publicDir, 'og-image.png'), ogPng)
console.log('✓ og-image.png created (1200x630)')

// Convert apple-touch-icon (180x180)
console.log('Converting apple-touch-icon.svg → apple-touch-icon.png...')
const appleSvg = readFileSync(join(publicDir, 'apple-touch-icon.svg'), 'utf8')
const appleResvg = new Resvg(appleSvg, {
  fitTo: { mode: 'width', value: 180 },
})
const applePng = appleResvg.render().asPng()
writeFileSync(join(publicDir, 'apple-touch-icon.png'), applePng)
console.log('✓ apple-touch-icon.png created (180x180)')

// Convert favicon (32x32)
console.log('Converting icon.svg → favicon.png...')
const iconSvg = readFileSync(join(__dirname, '../app/icon.svg'), 'utf8')
const iconResvg = new Resvg(iconSvg, {
  fitTo: { mode: 'width', value: 32 },
})
const iconPng = iconResvg.render().asPng()
writeFileSync(join(publicDir, 'favicon.png'), iconPng)
console.log('✓ favicon.png created (32x32)')

console.log('\nDone! All images generated.')
