import React, { useEffect, useState, FC } from "react";
import {
  FlatList,
  View,
  ViewStyle,
  Text,
  Alert,
  TextStyle,
  StyleSheet,
} from "react-native";
import { MonkeyType } from "../models/monkey";
import { StackScreenProps } from "@react-navigation/stack";
import { observer } from "mobx-react-lite";
import { axios } from "../services/api/monkey-api";
import { Screen, Button } from "../components";
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
  justifyContent: "center",
  height: 75,
  marginVertical: 15,
};
//**
//const IMAGE: ImageStyle = {
//  borderRadius: 35,
//  height: 65,
//  width: 65,
//}
const BUTTON: ViewStyle = {
  ...LIST_CONTAINER,
  borderRadius: 25,
  backgroundColor: color.background_primary,
  width: "85%",
};

const BUTTONINNERROOT: ViewStyle = {};
const LHS_BUTTON: ViewStyle = {
  ...BUTTONINNERROOT,
  flex: 1,
  padding: 15,
};
const RHS_BUTTON: ViewStyle = {
  ...BUTTONINNERROOT,
  flex: 2,
  flexDirection: "column",
  alignItems: "flex-start",
};
const FLAT_LIST: ViewStyle = {
  paddingHorizontal: spacing[4],
  paddingVertical: 100,
};

export const TextStyles = StyleSheet.create({
  light: {
    color: color.age,
  },
  banana: {
    color: color.banana,
  },
  ultraLight: {
    color: color.monkey,
  },
  dark: {
    color: color.background_primary,
  },
});

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
            "There was an error while listing monkeys. Please, try to reload the screen"
          );
        }
      }
      loadMonkeys();
    }, []);
    const goMonkey = (monkey: MonkeyType) =>
      navigation.navigate("Monkey", monkey);

    return (
      <View testID="DepartmentsScreen" style={FULL}>
        <Screen style={CONTAINER} preset="fixed" backgroundColor={color.white}>
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
                    <Text style={TextStyles.banana}>
                      {item.bananas} bananas
                    </Text>
                    <Text style={TextStyles.light}>
                      {item.age} years old
                    </Text>
                  </View>
                </Button>
              </View>
            )}
          />
        </Screen>
      </View>
    );
  });
