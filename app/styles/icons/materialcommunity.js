import  Icon from "react-native-vector-icons/MaterialCommunityIcons";


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MaterialCommunityIcons = ({iconName, size, color}) => {
  return (
    <Icon name={iconName} size={size} color={color}></Icon>
  )
}

export default MaterialCommunityIcons

const styles = StyleSheet.create({})