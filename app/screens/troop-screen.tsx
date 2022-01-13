import React, { useEffect, useState, FC } from "react";
import {
  FlatList,
  View,
  ViewStyle,
  Button,
  Alert,
} from "react-native";
import { MonkeyType } from "../models/monkey";
import { StackScreenProps } from "@react-navigation/stack";
import { observer } from "mobx-react-lite";
import { axios } from "../services/api/monkey-api";
import { Screen } from "../components";
import { color, spacing } from "../theme";
import { NavigatorParamList } from "../navigators";
const FULL: ViewStyle = {
  flex: 1,
};
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
};

const LIST_CONTAINER: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
  padding: 10,
};
//**
//const IMAGE: ImageStyle = {
//  borderRadius: 35,
//  height: 65,
//  width: 65,
//}


const FLAT_LIST: ViewStyle = {
  paddingHorizontal: spacing[4],
};

export const TroopScreen: FC<StackScreenProps<NavigatorParamList, "Troop">> =
  observer(({ navigation }) => {
    const [monkeys, setMonkeys] = useState<MonkeyType[]>([]);
    useEffect(() => {
      async function loadMonkeys(): Promise<void> {
        try {
          const response = await axios.get("http://dev-cloud.cc/api/");
          setMonkeys(response.data.monkeys);
        } catch (error) {
          Alert.alert(
            "There was an error while listing monkeys. Please, try to reload the screen",
          );
        }
      }
      loadMonkeys();
    }, []);
    const goMonkey = (monkey:MonkeyType) => navigation.navigate("Monkey", monkey)

    return (
      <View testID="DepartmentsScreen" style={FULL}>
        <Screen
          style={CONTAINER}
          preset="fixed"
          backgroundColor={color.background}
        >
          <FlatList
            contentContainerStyle={FLAT_LIST}
            data={[...monkeys]}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <View style={LIST_CONTAINER}>
                <Button title={item.name} onPress={()=>goMonkey(item)}>
                </Button>
              </View>
            )}
          />
        </Screen>
      </View>
    );
  });
