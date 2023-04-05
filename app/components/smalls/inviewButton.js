import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from '../../styles';

const InViewButton = ({bN, bS, bI, onPress}) => {
  return (
    <Pressable style={[styles.intro_button, bS]} onPress={onPress}>
      <Text style={styles.button_text}>
        {bI} {bN}
      </Text>
    </Pressable>
  );
};

export default InViewButton;
