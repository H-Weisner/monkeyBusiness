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
  white: palette.white,
  /**
   * The main tinting colour.
   */
  background_primary: palette.darkGreen,
  /**
   * The contrasting tinting colour.
   */
  background_secondary: palette.grey,
  /**
   * A colour used for borders and lines.
   */
  banana: palette.bananaYellow,
  /**
   * The default colour of text in many components.
   */
  age: palette.lightGreen,
  /**
   * Secondary information.
   */
  monkey: palette.offWhite,
  /**
   * Error messages and icons.
   */
  error: palette.red,

}