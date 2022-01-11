import React, { useEffect, useState, FC } from "react";
import {
  FlatList,
  TextStyle,
  View,
  Text,
  ViewStyle,
  Button,
  Alert,
} from "react-native";
import { Monkey } from "../models/monkey";
import { StackScreenProps } from "@react-navigation/stack";
import { observer } from "mobx-react-lite";
import monkeyApi from "../services/api/monkey-api";
import { Screen, AutoImage as Image } from "../components";
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

const LIST_TEXT: TextStyle = {
  marginLeft: 10,
};
const FLAT_LIST: ViewStyle = {
  paddingHorizontal: spacing[4],
};

export const TroopScreen: FC<StackScreenProps<NavigatorParamList, "Troop">> =
  observer(({ navigation }) => {
    const [monkeys, setMonkeys] = useState<Monkey[]>([]);

    useEffect(() => {
      async function loadMonkeys(): Promise<void> {
        try {
          const response = await monkeyApi.get("/monkeys");
          setMonkeys(response.data);
        } catch (error) {
          Alert.alert(
            "There was an error while listing monkeys. Please, try to reload the screen",
          );
        }
      }
      loadMonkeys();
    }, []);
    const goMonkey = () => navigation.navigate("Monkey")

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
                <Button title={""} onPress={goMonkey}>
                  <Image source={item.image} />
                  <Text style={LIST_TEXT}>
                    {item.name} ({item.bananas})
                  </Text>
                </Button>
              </View>
            )}
          />
        </Screen>
      </View>
    );
  });
