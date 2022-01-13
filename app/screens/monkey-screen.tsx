import React, { FC } from "react";
import { View, ViewStyle, ImageStyle, Text } from "react-native";
import { AutoImage as Image, Wallpaper } from "../components";
import { TextStyles } from "./troop-screen";
import { StackScreenProps } from "@react-navigation/stack";
import { NavigatorParamList } from "../navigators";
import { color } from "../theme";
import { TextStyle } from "react-native";

export const MonkeyScreen: FC<StackScreenProps<NavigatorParamList, "Monkey">>
 = ({ route,navigation }) => {
  const monkey = route.params;
  /**
   * Plurality checkers
   */
  let years = "years old";
  if (monkey.age == 1) {
    years = "year old";
  }
  let bananas = "juicy bananas";
  if (monkey.bananas == 1) {
    bananas = "juicy banana";
  }
  return (
    <View testID="DepartmentsScreen" style={FULL}>
      <Wallpaper backgroundImage={require("./backgroundMonkey.png")} />
      <View style={CONTAINER}>
        <Image source={{ uri: monkey.img }} style={IMAGE} />
        <Text style={IMAGE_TEXT}>{monkey.name}</Text>
      </View>
      <View style={INFO_BOX}>
        <Text style={TextStyles.dark}>
          🐒 {monkey.age} {years}
        </Text>
      </View>
      <View style={INFO_BOX}>
        <Text style={TextStyles.banana}>
          🍌 {monkey.bananas} {bananas}
        </Text>
      </View>
    </View>
  );
};

const FULL: ViewStyle = {
  flex: 1,
  alignItems: "flex-end",
};
const CONTAINER: ViewStyle = {
  marginTop: 100,
};

const IMAGE: ImageStyle = {
  borderTopLeftRadius: 35,
  borderBottomLeftRadius: 35,
  height: 190,
  width: 308,
};
const IMAGE_TEXT: TextStyle = {
  ...IMAGE,
  ...TextStyles.ultraLight,
  position: "absolute",
  paddingVertical: 12,
  paddingHorizontal: 20,
};

const INFO_BOX: ViewStyle = {
  marginTop: 15,
  width: 225,
  backgroundColor: color.grey,
  paddingVertical: 25,
  paddingHorizontal: 15,
  borderTopLeftRadius: 15,
  borderBottomLeftRadius: 15,
};
