import {
  Image,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import styles from "../styles";
import { COLORS } from "../styles/colors";

const InnerHome = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  console.log("first", modalVisible);

  const onPress = () => {
    navigation.navigate("Policy");
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
          // backgroundColor: COLORS.slideBackground,
        }}
      >
        <Text style={[styles.intro_text_font, { color: COLORS.white }]}>
          I am YOUR OWN, USE ME!
        </Text>
      </SafeAreaView>
    </>
  );
};

export default InnerHome;
