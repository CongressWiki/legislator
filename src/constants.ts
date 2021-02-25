export const COLORS = {
  text: {
    light: 'hsl(0deg, 0%, 10%)', // White
    dark: 'hsl(0deg, 0%, 100%)' // Near-black
  },
  background: {
    light: 'hsl(0deg, 0%, 100%)', // White
    dark: 'hsl(229deg, 88%, 13%)' // Navy navy blue
  },
  backgroundLite: {
    light: 'hsl(0deg, 0%, 97%)',
    dark: 'hsl(229deg, 88%, 16%)'
  },
  primary: {
    light: 'hsl(214deg, 20%, 80%)', // Pinkish-red
    dark: 'hsl(229deg, 88%, 13%)' // Yellow
  },
  secondary: {
    light: 'hsl(343deg, 100%, 53%)', // Purplish-blue
    dark: 'hsl(45deg, 81%, 53%)' // Cyan
  },
  // Grays, scaling from least-noticeable to most-noticeable
  gray300: {
    light: 'hsl(0deg, 0%, 70%)',
    dark: 'hsl(0deg, 0%, 30%)'
  },
  gray500: {
    light: 'hsl(0deg, 0%, 50%)',
    dark: 'hsl(0deg, 0%, 50%)'
  },
  gray700: {
    light: 'hsl(0deg, 0%, 30%)',
    dark: 'hsl(0deg, 0%, 70%)'
  }
};

export const COLOR_MODE_KEY = 'color-mode';
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode';
