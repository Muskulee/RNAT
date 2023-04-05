import  Icon from "react-native-vector-icons/Fontisto";


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Fontisto = ({iconName, size, color}) => {
  return (
    <Icon name={iconName} size={size} color={color}></Icon>
  )
}

export default Fontisto

const styles = StyleSheet.create({})