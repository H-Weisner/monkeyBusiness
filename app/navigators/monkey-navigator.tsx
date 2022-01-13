/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import React from "react";
import { useColorScheme } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  createNavigationContainerRef,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MonkeyScreen, TroopScreen } from "../screens";
import { MonkeyType } from "../models/monkey";
const navigationRef = createNavigationContainerRef();
/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * I could use MobX-State-Tree or redux rather than pass this MonkeyType.
 */
export type NavigatorParamList = {
  Splash: undefined;
  Troop: undefined;
  Monkey: MonkeyType;
};
/**
 * Our Stack navigator
 */
const Stack = createNativeStackNavigator<NavigatorParamList>();
const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Troop"
    >
      <Stack.Screen name="Troop" component={TroopScreen} />
      <Stack.Screen name="Monkey" component={MonkeyScreen} />
    </Stack.Navigator>
  );
};

interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

//default navigator by expo
export const AppNavigator = (props: NavigationProps) => {
  const colorScheme = useColorScheme();
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  );
};

AppNavigator.displayName = "AppNavigator";

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ["welcome"];
export const canExit = (routeName: string) => exitRoutes.includes(routeName);
