import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"
import Github from "typography-theme-github"

Github.bodyColor = '#000000';

const typography = new Typography(Github)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
