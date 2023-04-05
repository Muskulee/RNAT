import  Icon from "react-native-vector-icons/Entypo";


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Entypo = ({iconName, size, color}) => {
  return (
    <Icon name={iconName} size={size} color={color}></Icon>
  )
}

export default Entypo

const styles = StyleSheet.create({})