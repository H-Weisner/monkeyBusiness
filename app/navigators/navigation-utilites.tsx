import {
  PartialState,
  NavigationState,
  createNavigationContainerRef,
} from "@react-navigation/native";
export const navigationRef = createNavigationContainerRef();

/**
 * Gets the current screen from any navigation state.
 */
export function getActiveRouteName(
  state: NavigationState | PartialState<NavigationState>
) {
  const route = state.routes[state.index];

  // Found the active route -- return the name
  if (!route.state) return route.name;

  // Recursive call to deal with nested routers
  return getActiveRouteName(route.state);
}
  /**
   * for a back button I didn't implement
   */
  export function goBack() {
    if (navigationRef.isReady() && navigationRef.canGoBack()) {
      navigationRef.goBack()
    }
  }
  
  