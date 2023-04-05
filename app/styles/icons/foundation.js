import  Icon from "react-native-vector-icons/Foundation";


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Foundation = ({iconName, size, color}) => {
  return (
    <Icon name={iconName} size={size} color={color}></Icon>
  )
}

export default Foundation

const styles = StyleSheet.create({})