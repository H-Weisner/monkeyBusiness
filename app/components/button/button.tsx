import * as React from "react"
import { TouchableOpacity } from "react-native"
import { viewPresets } from "./button.presets"
import { ButtonProps } from "./button.props"

/**
 * For my text displaying needs.
 */
export function Button(props: ButtonProps) {
  // grab the props
  const {
    preset = "primary",
    text,
    style: styleOverride,
    textStyle: textStyleOverride,
    children,
    ...rest
  } = props

  const viewStyle = viewPresets[preset] || viewPresets.primary
  const viewStyles = [viewStyle, styleOverride]

  const content = children

  return (
    <TouchableOpacity style={viewStyles} {...rest}>
      {content}
    </TouchableOpacity>
  )
}
