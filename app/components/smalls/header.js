import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../styles/colors';
import styles from '../../styles';

const TabHeader = ({
  Icon1,
  Icon2,
  onPress1,
  onPress2,
  middleText,
  middleImage,
  tabStyle,
}) => {
  return (
    <View
      style={[
        {
          backgroundColor: COLORS.primary_500,
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderRadius: 2,
          padding: 2,
        },
        tabStyle,
      ]}>
      <TouchableOpacity onPress={onPress1}>{Icon1}</TouchableOpacity>
      {middleText || middleImage}
      <TouchableOpacity onPress={onPress2}>{Icon2}</TouchableOpacity>
    </View>
  );
};

export default TabHeader;
