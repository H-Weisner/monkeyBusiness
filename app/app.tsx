import React from "react"
import { SafeAreaProvider, initialWindowMetrics } from "react-native-safe-area-context"
import { AppNavigator, canExit } from "./navigators"
import { useBackButtonHandler } from "./hooks"
export default function App() {
  useBackButtonHandler(canExit)
  // otherwise, we're ready to render the app
  return (
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <AppNavigator/>
        </SafeAreaProvider>
  )
}
