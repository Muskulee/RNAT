import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AppNavigator from './AppNavigator';
import {COLORS, PRIMARY_COLOR} from '../styles/colors';
import Transactions from '../components/Transactions';
// import { FontAwesome } from 'react-native-vector-icons';

import FontAwesome5 from '../styles/icons/fontawesome5';
import Foundation from '../styles/icons/foundation';
import Support from '../components/Support';
import MaterialIcons from '../styles/icons/MaterialIcons';
import Buy from '../components/Buy';
import Entypo from '../styles/icons/Entypo';
import Ionicons from '../styles/icons/ionicons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIconStyle: {paddingg: 10},
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Foundation
                iconName="home"
                size={24}
                color={COLORS.background_white}
              />
            );
          },
          tabBarActiveTintColor: COLORS.swatch_3,
          tabBarActiveBackgroundColor: COLORS.primary_500,
        }}
        name="Home"
        component={AppNavigator}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Entypo
                iconName={'wallet'}
                size={24}
                color={COLORS.background_white}
              />
            );
          },
          headerShown: false,
          tabBarActiveTintColor: COLORS.swatch_3,
          tabBarActiveBackgroundColor: COLORS.primary_500,
          tabBarInactiveTintColor: '',
          // tabBarBadgeStyle:COLORS.primary,
          // tabBarBackground: "green",
          // tabBarBadge: 3,
        }}
        name="Search"
        component={Buy}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              // <AntDesign name="search1" size={24} color={COLORS.primary} />
              <Ionicons
                iconName="timer"
                size={24}
                color={COLORS.background_white}
              />
            );
          },
          headerShown: false,
          tabBarActiveTintColor: COLORS.swatch_3,
          tabBarActiveBackgroundColor: COLORS.primary_500,

          tabBarInactiveTintColor: '',
          // tabBarBadgeStyle:COLORS.primary,
          // tabBarBackground: "green",
          // tabBarBadge: 3,
        }}
        name="Transaction"
        component={Transactions}
      />
      {/* <Tab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              // <AntDesign name="search1" size={24} color={COLORS.primary} />
              <MaterialIcons
                iconName="contact-support"
                size={24}
                color={COLORS.background_white}
              />
            );
          },
          headerShown: false,
          tabBarActiveTintColor: COLORS.swatch_3,
          tabBarActiveBackgroundColor: COLORS.swatch_4,
          tabBarInactiveTintColor: '',
          // tabBarBadgeStyle:COLORS.primary,
          // tabBarBackground: "green",
          // tabBarBadge: 3,
        }}
        name="Support"
        component={Support}
      /> */}
    </Tab.Navigator>
  );
};

export default TabNavigator;
