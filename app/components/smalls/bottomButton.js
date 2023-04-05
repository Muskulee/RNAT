import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from '../../styles';

const BottonButton = ({onPress, bN, bS}) => {
  return (
    <View style={[styles.bottom, [bS]]}>
      <Pressable
        style={[styles.intro_button, {marginTop: 20}]}
        onPress={onPress}>
        <Text style={styles.button_text}>{bN}</Text>
      </Pressable>
    </View>
  );
};

export default BottonButton;

