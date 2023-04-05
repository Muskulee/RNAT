import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../styles/colors";
import { SafeAreaView } from "react-native";

const Buy = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        margin: 2,
        padding: 10,
      }}
    >
      <Text style={[styles.intro_text_font, { color: COLORS.white }]}>
        I am YOUR Asset, USE ME!
      </Text>
    </SafeAreaView>
  );
};

export default Buy;

const styles = StyleSheet.create({});
