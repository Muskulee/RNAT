import  Icon from "react-native-vector-icons/Feather";


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Feather = ({iconName, size, color}) => {
  return (
    <Icon name={iconName} size={size} color={color}></Icon>
  )
}

export default Feather

const styles = StyleSheet.create({})