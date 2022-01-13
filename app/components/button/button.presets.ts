import { ViewStyle, TextStyle } from "react-native";
import { color, spacing } from "../../theme";

/**
 * All text will start off looking like this.
 */
const BASE_VIEW: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  borderRadius: 35,

  alignItems: "center",
};

const BASE_TEXT: TextStyle = {
  paddingHorizontal: spacing[3],
};

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const viewPresets: Record<string, ViewStyle> = {
  /**
   * A smaller piece of secondard information.
   */
  primary: {
    ...BASE_VIEW,
    backgroundColor: color.primary,
    justifyContent: "center",
  } as ViewStyle,
  /**
   * Back button.
   */
  back: {
    ...BASE_VIEW,

  } as ViewStyle,
};

export const textPresets: Record<ButtonPresetNames, TextStyle> = {
  primary: {
    ...BASE_TEXT,
    fontSize: 9,
    color: color.palette.white,
  } as TextStyle,
  back: {
    ...BASE_TEXT,
  } as TextStyle,
};

/**
 * A list of preset names.
 */
export type ButtonPresetNames = keyof typeof viewPresets;
