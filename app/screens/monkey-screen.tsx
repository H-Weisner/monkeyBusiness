import React, { FC } from "react";
import { View, ViewStyle, ImageStyle, Text } from "react-native";
import { AutoImage as Image, Wallpaper, Button } from "../components";
import { TextStyles } from "./troop-screen";
import { StackScreenProps } from "@react-navigation/stack";
import { observer } from "mobx-react-lite";
import { NavigatorParamList } from "../navigators";
import { color } from "../theme";
import { TextStyle } from "react-native";

export const MonkeyScreen: FC<StackScreenProps<NavigatorParamList, "Monkey">> =
  observer(({ route, navigation }) => {
    const goBack = () => navigation.goBack()
    const monkey = route.params;
    return (
      <View testID="DepartmentsScreen" style={FULL}>
        <Wallpaper backgroundImage={require("./backgroundMonkey.png")} />
        <Button preset={"back"} onPress={goBack}>
          <Image style= {BACK_ARROW} source={require("./backArrow.png")}/>
        </Button>
        <View style={CONTAINER}>
          <Image source={{ uri: monkey.img }} style={IMAGE} />
          <Text style={IMAGE_TEXT}>{monkey.name}</Text>
        </View>
        <View style={INFO_BOX}>
          <Text style={TextStyles.dark}>🐒 {monkey.age} years old</Text>
        </View>
        <View style={INFO_BOX}>
          <Text style={TextStyles.banana}>🍌: {monkey.bananas}</Text>
        </View>
      </View>
    );
  });

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
    backgroundColor: color.background_secondary,
    paddingVertical: 25,
    paddingHorizontal: 15,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  };
    
  const BACK_ARROW: ImageStyle = {
    width: 64,
    height: 46,
    position: "absolute",
    padding:15
  };
