import  Icon from "react-native-vector-icons/MaterialIcons";


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MaterialIcons = ({iconName, size, color}) => {
  return (
    <Icon name={iconName} size={size} color={color}></Icon>
  )
}

export default MaterialIcons

const styles = StyleSheet.create({})