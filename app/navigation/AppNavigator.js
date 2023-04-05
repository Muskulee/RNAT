import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
// import {useNavigation} from '@react-navigation/native';
// import {COLORS} from '../styles/colors';
import InnerHome from '../components/InnerHome';
import Intro from '../components/Intro';
// import Policy from '../components/Policy';
// import CCounter from '../components/Counter';
import {useSelector} from 'react-redux';
import userAuthentication from '../components/userAuthentication';
import UserAuth from '../components/userAuthentication';
import {COLORS} from '../styles/colors';
import {useNavigation} from '@react-navigation/native';
import Ionicons from '../styles/icons/ionicons';
import Buy from '../components/Buy';
import Welcome from '../components/Welcome';
import Login from '../components/Login';
import Signup from '../components/Signup';
import AboutUser from '../components/AboutUser';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const {firstTimeUser, setFirstTimeUser} = useState('false');

  const navigation = useNavigation();

  const {loaded, connect, start} = useSelector(store => store.start);

  const loadSomething = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key');
      if (value !== null) {
        // value previously stored
      }
      console.log('firstTimeUser', value);
      setFirstTimeUser(value);
    } catch (error) {
      console.log('thiserror', error);
    }
  };

  // useEffect(() => {
  //   loadSomething();
  //   console.log('firstTimeUserA', firstTimeUser);
  // }, [start]);

  if (start == false) {
    return (
      <Stack.Navigator>
        {firstTimeUser !== 'true' && (
          <Stack.Screen
            options={{headerShown: false}}
            component={Intro}
            name="Intro"
          />
        )}

        <Stack.Screen
          options={{headerShown: false}}
          // options={{
          //   title: '',
          //   // cardShadowEnabled: true,
          //   // cardStyle:
          //   headerBackTitleVisible: false,
          //   headerBackVisible: true,
          //   // headerTransparent: true,
          //   // headerShadowVisible: false,
          //   // hideWhenScrolling: false,
          //   // headerBackTitle: 'tre',
          //   // headerBackButtonMenuEnabled: true,
          //   // back: true,
          //   // headerBackImageSource: <Ionicons name="arrow-back" size={24} color={COLORS.primary} />,
          //   headerLargeTitleStyle: {
          //     color: COLORS.swatch_5,
          //   },
          //   // headerLargeStyle: true,
          //   headerTintColor: COLORS.primary,

          //   headerIconColor: 'teal',
          //   headerLeft: props => {
          //     <View>
          //       <SafeAreaView></SafeAreaView>
          //       <TouchableWithoutFeedback {...props} onPress={navigation.goBack}>
          //         <View>
          //           <Ionicons
          //             name="arrow-back"
          //             size={24}
          //             color={COLORS.swatch_5}
          //           />
          //         </View>
          //       </TouchableWithoutFeedback>
          //     </View>;
          //   },
          // }}
          component={UserAuth}
          name="UserAuth"
        />

        <Stack.Screen
          options={{headerShown: false}}
          component={Welcome}
          name="Welcome"
        />

        <Stack.Screen
          options={{headerShown: false}}
          component={Login}
          name="Login"
        />

        <Stack.Screen
          options={{headerShown: false}}
          component={Signup}
          name="Signup"
        />

        <Stack.Screen
          options={{headerShown: false}}
          component={AboutUser}
          name="AboutUser"
        />

        {/* <Stack.Screen
          // name="mamam"
          options={{
            title: '',
            headerBackTitleVisible: false,
            headerBackVisible: false,
            headerTransparent: false,
            headerShadowVisible: false,
            hideWhenScrolling: false,
            headerBackButtonMenuEnabled: true,
            // headerBackImageSource: <Ionicons name="arrow-back" size={24} color={COLORS.primary} />,
            headerLargeTitleStyle: {
              color: 'teal',
            },
            headerBackTitle: 'ttta',
            // headerLargeStyle: true,
            headerTintColor: COLORS.primary_500,
  
            // headerIconColor: "teal",
            // headerLeft: props => {
            //   <TouchableWithoutFeedback {...props} onPress={() => {}}>
            //     <View>
            //       <Ionicons
            //         name="arrow-back"
            //         size={24}
            //         color={COLORS.primary_500}
            //       />
            //     </View>
            //   </TouchableWithoutFeedback>;
            // },
          }}
          component={UserAuth}
          name="UserAuth"
        /> */}

        {/* <Stack.Screen
          options={{headerShown: false}}
          component={Policy}
          name="Policy"
        /> */}
        {/* <Stack.Screen
          options={{headerShown: false}}
          component={CCounter}
          name="Counter"
        /> */}
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          component={InnerHome}
          name="HomeScreen"
        />
      </Stack.Navigator>
    );
  }
};

export default AppNavigator;
