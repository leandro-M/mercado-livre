import { rem } from 'polished'
import colors from './colors'
import fonts from './fonts'

export default {
  grid: {
    container: rem(1200),
  },
  fonts,
  colors,
  spacings: (spacing: number) => rem(16 * spacing),
  layers: {
    base: 1,
    alwaysOnTop: 2
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
