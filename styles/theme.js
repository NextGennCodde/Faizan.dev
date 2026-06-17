import { theme as chakraTheme } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

// ─── FAIZAN KHALID PERSONAL BRAND DESIGN TOKENS ─────────────────────────────
// Palette: Obsidian Black / Luxury Rose / Warm Neutral
// Aligned with LinkedIn banner branding

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const fluidType = (minFont, maxFont) => {
  let XX = 768 / 100
  let YY = (100 * (maxFont - minFont)) / (1920 - 768)
  let ZZ = minFont / 16
  return `calc(${ZZ}rem + ((1vw - ${XX}px) * ${YY}))`
}

const colors = {
  // Core surfaces
  background:    '#141414',   // Primary Obsidian - matches banner bg
  secondary:     '#1C1C1E',   // Raised card surface
  tertiary:      '#232428',   // Badge / pill surface (exact banner token)

  // Accent system - single accent only (skill.md rule)
  accent:        '#D78D83',   // Luxury Rose - exact banner token
  accentMuted:   '#C4746A',   // Pressed / active state

  // Text hierarchy
  displayColor:  '#E7E7E8',   // Near-white for headlines (banner bg color used as text)
  textPrimary:   '#C8C4BE',   // Body copy - warm neutral
  textSecondary: '#7A7370',   // Muted secondary text
  warmNeutral:   '#E9E2D8',   // Warm paper / pill text

  // UI Chrome
  borderColor:   '#2A2825',   // Subtle border
  borderAccent:  '#D78D83',   // Accent border on hover

  // Legacy aliases kept so Chakra component refs don't break
  complement:    '#D78D83',
  button1:       '#D78D83',
  button2:       '#C4746A',
  button3:       '#D78D83',
  logoGrey:      '#7A7370',
}

const fonts = {
  ...chakraTheme.fonts,
  // Outfit: clean geometric humanist sans - closest to Geist/Cabinet Grotesk available on Google Fonts
  body:    `'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif`,
  heading: `'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif`,
  mono:    `'JetBrains Mono', 'Fira Code', 'Courier New', monospace`,
}

const breakpoints = createBreakpoints({
  base: '0em',
  sm:   '30em',
  md:   '48em',
  lg:   '80em',
  xl:   '80em',
})

const Link = {
  baseStyle: {
    color: '#D78D83',
    _hover:  { textDecoration: 'none', color: '#E9E2D8' },
    _focus:  { boxShadow: 'none' },
  },
}

const Button = {
  baseStyle: {
    fontWeight: '500',
    borderRadius: '8px',
    _focus: { boxShadow: '0 0 0 2px #D78D83' },
  },
  variants: {
    solid: {
      bg: '#1C1C1E',
      color: '#E9E2D8',
      border: '1px solid #2A2825',
      _hover: {
        bg: '#232428',
        borderColor: '#D78D83',
      },
      _active: { bg: '#2A2825' },
    },
    ghost: {
      color: '#C8C4BE',
      _hover: { bg: 'rgba(215,141,131,0.08)', color: '#E9E2D8' },
    },
  },
  defaultProps: { variant: 'solid' },
}

const overrides = {
  ...chakraTheme,
  components: { Link, Button },
  config,
  colors,
  fonts,
  breakpoints,
  fontWeights: {
    normal: 300,
    medium: 500,
    bold:   700,
  },
  fontSizes: {
    display:  fluidType(80, 128),
    display2: fluidType(24, 36),
    display3: fluidType(16, 22),
  },
  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth',
      },
      body: {
        bg: '#141414',
        color: '#C8C4BE',
      },
      '::selection': {
        background: 'rgba(215,141,131,0.25)',
        color: '#E9E2D8',
      },
      // Smooth scrollbar
      '::-webkit-scrollbar': { width: '6px' },
      '::-webkit-scrollbar-track': { bg: '#141414' },
      '::-webkit-scrollbar-thumb': { bg: '#2A2825', borderRadius: '3px' },
      '::-webkit-scrollbar-thumb:hover': { bg: '#D78D83' },
    },
  },
}

const customTheme = extendTheme(overrides)
export default customTheme
