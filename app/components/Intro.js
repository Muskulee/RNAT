import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Platform,
  View,
  Text,
  SafeAreaView,
  FlatList,
  Animated,
} from "react-native";
import React, { useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import slide from "./smalls/slide";
import OnBoardingItem from "../components/smalls/onBoardingItem";

import { useDispatch, useSelector } from "react-redux";
import styles from "../styles";
import { COLORS } from "../styles/colors";
import { CONSTANTS } from "../styles/constants";
import Paginator from "./smalls/Paginator";
import ContinueButton from "./smalls/ContinueButton";

const Intro = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [currentIndex, setCurrentIndex] = useState(0);

  const slidesRef = useRef(null);

  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
    console.log("currentIndex", currentIndex);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = async () => {
    if (currentIndex < slide.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      try {
        await AsyncStorage.setItem("@storage_Key", "true");
        navigation.navigate("UserAuth");
      } catch (error) {
        console.log("11error", error);
      }
    }
  };

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          margin: 2,
          padding: 10,
          backgroundColor: COLORS.slideBackground,
        }}
      >
        <Text style={styles.btn_text}>{CONSTANTS.appName}</Text>
        <View style={{ flex: 3 }}>
          <FlatList
            data={slide}
            renderItem={({ item }) => <OnBoardingItem item={item} />}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            bounces={false}
            keyExtractor={(item) => item.id}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            ref={slidesRef}
          />
        </View>
        <Paginator data={slide} scrollX={scrollX} />
        {/* <NextButton
          scrollTo={scrollTo}
          percentage={(currentIndex + 1) * (100 / slide.length)}
          cI={currentIndex + 1}
        /> */}

        <ContinueButton
          onPress={scrollTo}
          bN={"Continue"}
          scrollTo={scrollTo}
        />
      </SafeAreaView>
    </>
  );
};

export default Intro;
