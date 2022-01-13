import React, { FC } from "react";
//import React, { useEffect, FC } from "react"
// import { FlatList, TextStyle, Text, View, ViewStyle } from "react-native"
import { View, ViewStyle, ImageStyle, Text } from "react-native";
import { Screen, AutoImage as Image } from "../components";
import { TextStyles } from ".";
import { StackScreenProps } from "@react-navigation/stack";
import { observer } from "mobx-react-lite";
//import { Screen } from "../components"
//import { color, spacing } from "../theme"
//import { useStores } from "../models/root"
import { NavigatorParamList } from "../navigators";
import { color } from "../theme";
import { TextStyle } from "react-native";

const FULL: ViewStyle = {
  flex: 1,
  alignItems: "flex-end",
};
const CONTAINER: ViewStyle ={
  marginTop: 100,
}

const IMAGE: ImageStyle = {
  borderTopLeftRadius: 35,
  borderBottomLeftRadius: 35,
  height: 190,
  width: 308,
};
const IMAGE_TEXT: TextStyle = {
  ...IMAGE,
  position: "absolute",
  color: color.monkey,
  paddingVertical: 12,
  paddingHorizontal: 20,
};

const INFO_BOX: ViewStyle = {
  marginTop: 15,
  width: 225,
  backgroundColor: color.background_secondary,
  paddingVertical:25,
  paddingHorizontal:15,
  borderTopLeftRadius: 15,
  borderBottomLeftRadius:15
}

/**
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
}

const LIST_CONTAINER: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
  padding: 10,
}
const LIST_TEXT: TextStyle = {
  marginLeft: 10,
}
const FLAT_LIST: ViewStyle = {
  paddingHorizontal: spacing[4],
}
 */
export const MonkeyScreen: FC<StackScreenProps<NavigatorParamList, "Monkey">> =
  observer(({ route, navigation }) => {
    const monkey = route.params;
    return (
      <View testID="DepartmentsScreen" style={FULL}>
        <View style={CONTAINER}>
          <Image source={{ uri: monkey.img }} style={IMAGE} />
          <Text style={IMAGE_TEXT}>{monkey.name}</Text>
        </View>          
          <View style={INFO_BOX}>
            <Text style = {TextStyles.dark}>Age:{monkey.age}</Text>
          </View>
          <View style={INFO_BOX}>
            <Text style = {TextStyles.banana}>Banana hoard:{monkey.bananas}</Text>
        </View>
      </View>
    );
  });
