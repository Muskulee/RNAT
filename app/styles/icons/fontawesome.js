import  Icon from "react-native-vector-icons/FontAwesome";


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FontAwesome = ({iconName, size, color}) => {
  return (
    <Icon name={iconName} size={size} color={color}></Icon>
  )
}

export default FontAwesome

const styles = StyleSheet.create({})