import  Icon from "react-native-vector-icons/FontAwesome5";


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FontAwesome5 = ({iconName, size, color}) => {
  return (
    <Icon name={iconName} size={size} color={color}></Icon>
  )
}

export default FontAwesome5

const styles = StyleSheet.create({})