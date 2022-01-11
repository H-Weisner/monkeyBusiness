import React, { FC } from "react"
//import React, { useEffect, FC } from "react"
// import { FlatList, TextStyle, Text, View, ViewStyle } from "react-native"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
//import { Screen } from "../components"
//import { color, spacing } from "../theme"
//import { useStores } from "../models/root"
import { NavigatorParamList } from "../navigators"

const FULL: ViewStyle = {
  flex: 1,
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
//**
//const IMAGE: ImageStyle = {
//  borderRadius: 35,
//  height: 65,
//  width: 65,
//}


const LIST_TEXT: TextStyle = {
  marginLeft: 10,
}
const FLAT_LIST: ViewStyle = {
  paddingHorizontal: spacing[4],
}
 */
export const MonkeyScreen: FC<StackScreenProps<NavigatorParamList, "Monkey">> = observer(({ navigation }) => {
    return (
      <View testID="DepartmentsScreen" style={FULL}>

      </View>
    )
  },
)