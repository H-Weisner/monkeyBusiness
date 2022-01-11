import { palette } from "./palette"
/**
 * Roles for colors.  Prefer using these over the palette.  It makes it easier
 * to change things.
 *
 * The only roles we need to place in here are the ones that span through the app.
 *
 * If you have a specific use-case, like a spinner color.  It makes more sense to
 * put that in the <Spinner /> component.
 */
export const color = {
  /**
   * The palette is available to use, but prefer using the name.
   */
  palette,
  /**
   * A helper for making something see-thru. Use sparingly to avoid slowing down app.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The screen background.
   */
  background: palette.white,
  /**
   * The main tinting colour.
   */
  primary: palette.monkeyBrown,
  /**
   * The contrasting tinting colour.
   */
  secondary: palette.bananaYellow,
  /**
   * A colour used for borders and lines.
   */
  line: palette.bananaYellow,
  /**
   * The default colour of text in many components.
   */
  text: palette.jungleGreen,
  /**
   * Secondary information.
   */
  dim: palette.grey,
  /**
   * Error messages and icons.
   */
  error: palette.monkeyBrown,

}