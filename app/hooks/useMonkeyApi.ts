import { MonkeyType } from "../models/monkey";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
const axios = require("axios");
/**
* Where we round up those monkeys
*/
export const useMonkeyApi = () => {
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
  return monkeys;
};
