import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from '../../styles';

const ContinueButton = ({bS, bTS, onPress, bN, bI}) => {
  return (
    <View style={[styles.bottom, [bS]]}>
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.button_text, bTS]}>
          {' '}
          {bI ? <Text>{bI} </Text> : <></>}
          {bN}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContinueButton;
