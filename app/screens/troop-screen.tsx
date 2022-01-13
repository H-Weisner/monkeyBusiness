import React, { FC } from "react";
import {
  FlatList,
  View,
  ViewStyle,
  TextStyle,
  Text,
  StyleSheet,
} from "react-native";
import { MonkeyType } from "../models/monkey";
import { StackScreenProps } from "@react-navigation/stack";
import { useMonkeyApi } from "../hooks/useMonkeyApi";
import { Button, Wallpaper } from "../components";
import { color, spacing } from "../theme";
import { NavigatorParamList } from "../navigators";

export const TroopScreen: FC<StackScreenProps<NavigatorParamList, "Troop">>
= ({navigation}) => {
  //get the monkeys
  const monkeys = useMonkeyApi();
  //navigate to the monkey's profile screen
  const goMonkey = (monkey: MonkeyType) =>
    navigation.navigate("Monkey", monkey);

  return (
    <View testID="DepartmentsScreen" style={FULL}>
      <Wallpaper />
      <FlatList
        contentContainerStyle={FLAT_LIST}
        data={[...monkeys]}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={LIST_CONTAINER}>
            <Button onPress={() => goMonkey(item)} style={BUTTON}>
              <View style={LHS_BUTTON}>
                <Text style={TextStyles.ultraLight}>{item.name}</Text>
              </View>
              <View style={RHS_BUTTON}>
                <Text style={TextStyles.banana}>{item.bananas} bananas</Text>
                <Text style={TextStyles.light}>{item.age} years old</Text>
              </View>
            </Button>
          </View>
        )}
      />
    </View>
  );
};
/**
 * Stylings
 */

const FULL: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
};
const FLAT_LIST: ViewStyle = {
  marginTop: spacing["top"],
};
const LIST_CONTAINER: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
  height: 75,
  marginVertical: spacing["medium"],
};

const BUTTON: ViewStyle = {
  ...LIST_CONTAINER,
  borderRadius: 25,
  backgroundColor: color.primary,
  width: "85%",
};

const BUTTONINNERROOT: ViewStyle = {};
const LHS_BUTTON: ViewStyle = {
  ...BUTTONINNERROOT,
  flex: 1,
  padding: spacing["medium"],
  justifyContent: "center",
};
const RHS_BUTTON: ViewStyle = {
  ...BUTTONINNERROOT,
  flex: 1,
  flexDirection: "column",
  alignItems: "flex-start",
};
const TEXT_ROOT: TextStyle = {
  fontSize: 20,
};

/**
 * Non typescript stylesheet for laziness
 */
export const TextStyles = StyleSheet.create({
  light: {
    ...TEXT_ROOT,
    color: color.age,
  },
  banana: {
    ...TEXT_ROOT,
    color: color.banana,
  },
  ultraLight: {
    ...TEXT_ROOT,
    color: color.monkey,
  },
  dark: {
    ...TEXT_ROOT,
    color: color.primary,
  },
  brown: {
    ...TEXT_ROOT,
    color: color.secondary,
  },
});
