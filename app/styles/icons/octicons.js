import Icon from 'react-native-vector-icons/Octicons';

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Octicons = ({iconName, size, color}) => {
  return <Icon name={iconName} size={size} color={color}></Icon>;
};

export default Octicons;

const styles = StyleSheet.create({});
