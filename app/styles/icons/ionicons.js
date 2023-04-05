import  Icon from "react-native-vector-icons/Ionicons";


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Ionicons = ({iconName, size, color}) => {
  return (
    <Icon name={iconName} size={size} color={color}></Icon>
  )
}

export default Ionicons

const styles = StyleSheet.create({})