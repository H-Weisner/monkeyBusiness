import React, { FC } from "react"
//import React, { useEffect, FC } from "react"
// import { FlatList, TextStyle, Text, View, ViewStyle } from "react-native"
import { View, ViewStyle, ImageStyle, Text } from "react-native"
import { Screen, AutoImage as Image } from "../components";
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
//import { Screen } from "../components"
//import { color, spacing } from "../theme"
//import { useStores } from "../models/root"
import { NavigatorParamList } from "../navigators"

const FULL: ViewStyle = {
  flex: 1,
  alignItems: "flex-end",
}
const IMAGE: ImageStyle = {
  borderTopLeftRadius: 35,
  borderBottomLeftRadius: 35,
  height: 190,
  width: 308,
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
export const MonkeyScreen: FC<StackScreenProps<NavigatorParamList, "Monkey">> = observer(({ route, navigation }) => {
  const monkey = route.params
    return (
      <View testID="DepartmentsScreen" style={FULL}>
          <Text>
            {monkey.name}
          </Text>
          <Image source={{uri: monkey.img}} style={IMAGE}/>
          <Text>
            Age:{monkey.age}
          </Text>
          <Text>
            Banana hoard:{monkey.bananas}
          </Text>
      </View>
    )
  },
)