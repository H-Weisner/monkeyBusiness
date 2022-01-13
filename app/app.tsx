import React, { useEffect } from "react"
import { SafeAreaProvider, initialWindowMetrics } from "react-native-safe-area-context"
import { initFonts } from "./theme/fonts" // expo
import { AppNavigator, canExit } from "./navigators"
import { useBackButtonHandler } from "./hooks"
import { ErrorBoundary } from "./screens/error/error-boundary"
export default function App() {
  useBackButtonHandler(canExit)

  // Kick off initial async loading actions, like loading fonts and RootStore
  useEffect(() => {
    ;(async () => {
      await initFonts() // expo
    })()
  }, [])


  // otherwise, we're ready to render the app
  return (
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <AppNavigator/>
        </SafeAreaProvider>
  )
}
