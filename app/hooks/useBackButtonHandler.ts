import { useEffect, useRef } from "react";
import { BackHandler } from "react-native";
import { navigationRef, getActiveRouteName } from "../navigators/navigation-utilites";
/**
 * Hook that handles Android back button presses and forwards those on to
 * the navigation or allows exiting the app.
 */
export function useBackButtonHandler(canExit: (routeName: string) => boolean) {
    const canExitRef = useRef(canExit);
  
    useEffect(() => {
      canExitRef.current = canExit;
    }, [canExit]);
  
    useEffect(() => {
      // We'll fire this when the back button is pressed on Android.
      const onBackPress = () => {
        if (!navigationRef.isReady()) {
          return false;
        }
  
        // grab the current route
        const routeName = getActiveRouteName(navigationRef.getRootState());
  
        // are we allowed to exit?
        if (canExitRef.current(routeName)) {
          // let the system know we've not handled this event
          return false;
        }
  
        // we can't exit, so let's turn this into a back action
        if (navigationRef.canGoBack()) {
          navigationRef.goBack();
          return true;
        }
  
        return false;
      };
  
      // Subscribe when we come to life
      BackHandler.addEventListener("hardwareBackPress", onBackPress);
  
      // Unsubscribe when we're done
      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, []);
  }
  