import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../styles/colors';
import styles from '../styles';

const Transactions = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        margin: 2,
        padding: 10,
        // backgroundColor: COLORS.slideBackground,
      }}>
      <Text style={[styles.intro_text_font, {color: COLORS.white}]}>
        I am FREE, Don't abuse ME!
      </Text>
    </SafeAreaView>
  );
};

export default Transactions;
