import Icon from 'react-native-vector-icons/AntDesign';

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AntDesign = ({iconName, size, color}) => {
  return <Icon name={iconName} size={size} color={color}></Icon>;
};

export default AntDesign;

const styles = StyleSheet.create({});
