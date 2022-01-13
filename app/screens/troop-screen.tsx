import React, { useEffect, useState, FC } from "react";
import {
  FlatList,
  View,
  ViewStyle,
  TextStyle,
  Text,
  Alert,
  StyleSheet,
} from "react-native";
import { MonkeyType } from "../models/monkey";
import { StackScreenProps } from "@react-navigation/stack";
import { observer } from "mobx-react-lite";
import { axios } from "../services/api/monkey-api";
import { Button, Wallpaper } from "../components";
import { color, spacing } from "../theme";
import { NavigatorParamList } from "../navigators";

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
  });
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
    backgroundColor: color.background_primary,
    width: "85%",
  };
  
  const BUTTONINNERROOT: ViewStyle = {};
  const LHS_BUTTON: ViewStyle = {
    ...BUTTONINNERROOT,
    flex: 1,
    padding: spacing["medium"],
    justifyContent:"center"
  };
  const RHS_BUTTON: ViewStyle = {
    ...BUTTONINNERROOT,
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
  };
  const TEXT_ROOT: TextStyle ={
  fontSize:20,
  
  }
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
      color: color.background_primary,
    },
  });
  