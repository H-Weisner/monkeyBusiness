import React, { ErrorInfo } from "react"
import { TextStyle, View, ViewStyle, ScrollView, ImageStyle, Button, Text } from "react-native"
import { color } from "../../theme"

const CONTAINER: ViewStyle = {
  alignItems: "center",
  flex: 1,
  padding: 16,
  paddingVertical: 50,
  backgroundColor: color.background,
}

const ERROR_DETAILS_CONTAINER: ViewStyle = {
  width: "100%",
  maxHeight: "60%",
  backgroundColor: color.line,
  marginVertical: 15,
  paddingHorizontal: 10,
  paddingBottom: 15,
  borderRadius: 6,
}

const TITLE_ERROR: TextStyle = {
  color: color.error,
  fontWeight: "bold",
  paddingVertical: 15,
}

const FRIENDLY_SUBTITLE: TextStyle = {
  color: color.dim,
  fontWeight: "normal",
  paddingVertical: 15,
}

const CONTENT_ERROR: TextStyle = {
  color: color.error,
  fontWeight: "bold",
  paddingVertical: 15,
}

// Uncomment this and the Text component in the ErrorComponent if
// you want to see a backtrace in your error reporting screen.
// const CONTENT_BACKTRACE: TextStyle = {
//   color: color.dim,
// }


export interface ErrorComponentProps {
  error: Error
  errorInfo: ErrorInfo
  onReset(): void
}

/**
 * Describe your component here
 */
export const ErrorComponent = (props: ErrorComponentProps) => {
  return (
    <View style={CONTAINER}>
      <Text style={TITLE_ERROR}>Error Screen </Text>
      <Text style={FRIENDLY_SUBTITLE}>Screen that user will see in production when an error is thrown </Text>
      <View style={ERROR_DETAILS_CONTAINER}>
        <ScrollView>
          <Text selectable style={CONTENT_ERROR}/>{props.error}
          {/* <Text selectable style={CONTENT_BACKTRACE} text={`${props.errorInfo.componentStack}`} /> */}
        </ScrollView>
      </View>
      <Button color={color.primary} onPress={props.onReset} title="RESET APP" />
    </View>
  )
}
