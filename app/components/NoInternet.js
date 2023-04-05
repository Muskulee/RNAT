import {
  FlatList,
  Image,
  Linking,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import Ionicons from '../styles/icons/ionicons';
import MaterialIcons from '../styles/icons/MaterialIcons';
import styles from '../styles';
import {CONSTANTS} from '../styles/constants';
import {faqArray} from '../api/data';
import {ItemSeparatorComponent, renderItem} from './Separator';
import InViewButton from './smalls/inviewButton';
import Octicons from '../styles/icons/octicons';
import {openInbox} from 'react-native-email-link';
import {COLORS} from '../styles/colors';
import ContinueButton from './smalls/ContinueButton';

const NoInternet = ({onRefreshPress}) => {
  return (
    <>
      <SafeAreaView></SafeAreaView>
      <View
        style={[
          styles.container,
          {
            flex: 1,
            flexDirection: 'column',
            margin: 3,

            color: COLORS.background2,
          },
        ]}>
        <View
          style={{
            marginTop: 5,
            width: '100%',
            height: '100%',
            marginBottom: 10,
            borderRadius: 5,
            justifyContent: 'center',
            color: COLORS.background2,
            // flexDirection: 'row',
          }}>
          <View
            style={{
              paddingTop: CONSTANTS.statusBarHeight,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialIcons
              iconName={'portable-wifi-off'}
              color={COLORS.primary_500}
              size={50}
            />
            <Text
              style={[
                styles.intro_text_font,
                {textAlign: 'center', marginBottom: 10},
              ]}>
              No Internet Connection
            </Text>
            <ContinueButton
              bN={'Reload'}
              onPress={onRefreshPress}
              bI={
                <Ionicons
                  iconName={'reload-sharp'}
                  size={15}
                  color={COLORS.primary_500}
                />
              }
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default NoInternet;
