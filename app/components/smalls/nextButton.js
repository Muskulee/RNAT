import {Animated, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Svg, {G, Circle} from 'react-native-svg';
import styles from '../../styles';
import {COLORS} from '../../styles/colors';
import {TouchableOpacity} from 'react-native';
import AntDesign from '../../styles/icons/antdesign';

const NextButton = ({percentage, scrollTo, cI}) => {
  const size = 128;
  const strokeWidth = 3;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;

  const circumference = 2 * Math.PI * radius;

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);

  const animation = toValue => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(percentage);
  }, [percentage]);

  useEffect(() => {
    progressAnimation.addListener(
      value => {
        const strokeDashoffset =
          circumference - (circumference * value.value) / 100;

        if (progressRef?.current) {
          progressRef.current?.setNativeProps({
            strokeDashoffset,
          });
        }
      },
      [percentage],
    );

    return () => {
      progressAnimation.removeAllListeners();
    };
  }, []);

  return (
    <View
      style={[
        styles.container,
        {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          //   backgroundColor: 'white',
        },
      ]}>
      <Svg width={size} height={size}>
        <G rotation="-90" origin={center}>
          <Circle
            stroke={COLORS.svgIndicator}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth - 2}
            fill={'white'}
          />
          <Circle
            fill={COLORS.svgColor}
            ref={progressRef}
            stroke={COLORS.svgIndicator}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
          />
        </G>
      </Svg>

      <TouchableOpacity
        onPress={scrollTo}
        style={styles.nextButton}
        activeOpacity={0.6}>
        <AntDesign
          iconName={'arrowright'}
          size={32}
          color={COLORS.primary_500}
        />
      </TouchableOpacity>
    </View>
  );
};

export default NextButton;
