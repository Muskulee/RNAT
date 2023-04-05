import {StyleSheet, Text, View, Animated, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../styles/colors';
import {CONSTANTS} from '../../styles/constants';

const Paginator = ({data, scrollX}) => {
  //   console.log('data', data.length);
  return (
    <View style={{flexDirection: 'row', height: 64}}>
      {data.map((_, i) => {
        const inputRange = [
          (i - 1) * CONSTANTS.width,
          i * CONSTANTS.width,
          (i + 1) * CONSTANTS.width,
        ];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [20, 40, 20],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.6, 2, 0.6],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={[styles.dot, {width: dotWidth, opacity}]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 5,
    // backgroundColor: COLORS.primary,
    backgroundColor: '#ffffff',
    marginHorizontal: 6,
  },
});
