import AsyncStorage from "@react-native-async-storage/async-storage";

import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import TabNavigator from "./app/navigation/TabNavigator";
import { COLORS } from "./app/styles/colors";
import { WithSplashScreen } from "./app/components/splash";
import AppNavigator from "./app/navigation/AppNavigator";
import { useDispatch, useSelector } from "react-redux";
import { setSplash } from "./app/redux/actions/onBoardingAction";

const MyTheme = {
  ...DefaultTheme,

  colors: {
    ...DefaultTheme.colors,
    card: COLORS.background2,
    background: COLORS.background2,
    text: COLORS.primary,
    border: "#1e8c05",
  },
};

const Entry = () => {
  const dispatch = useDispatch();

  const { loaded, connect, start } = useSelector((store) => store.start);

  const [firstTimeUser, setFirstTimeUser] = useState(true);

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem("@firstTimeUser");
      if (value !== undefined) {
        setFirstTimeUser(false);
      }
      if (value !== null) {
        setFirstTimeUser(false);
      }
    } catch (error) {
      console.log("Thiserror", error);
    }
  };

  useEffect(() => {
    checkOnboarding();
    if (loaded === false) {
      dispatch(setSplash());
    }
  }, [loaded]);

  return (
    <WithSplashScreen isAppReady={loaded}>
      <NavigationContainer theme={MyTheme}>
        {start === false ? <AppNavigator /> : <TabNavigator />}
      </NavigationContainer>
    </WithSplashScreen>
  );
};

export default Entry;

const styles = StyleSheet.create({});
