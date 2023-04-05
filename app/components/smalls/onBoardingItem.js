import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CONSTANTS} from '../../styles/constants';
import styles from '../../styles';

const OnBoardingItem = ({item}) => {
  return (
    <View style={[styles.container, {width: CONSTANTS.width}]}>
      <Image
        source={item.image}
        style={[
          styles.slideImage,
          {
            width: CONSTANTS.width,
            height: CONSTANTS.height - 500,
            resizeMode: 'contain',
          },
        ]}
      />

      <View style={{flex: 0.3}}>
        <Text style={styles.slideTitle}>{item.title}</Text>
        <Text style={styles.slideDescription}>{item.description}</Text>
      </View>
    </View>
  );
};

export default OnBoardingItem;
