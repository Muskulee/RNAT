import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  StatusBar,
  Image,
} from 'react-native';
import React from 'react';
import styles from '../styles';
import TabHeader from './smalls/header';
import Ionicons from '../styles/icons/ionicons';
import {COLORS} from '../styles/colors';
import MaterialIcons from '../styles/icons/MaterialIcons';
import Feather from '../styles/icons/feather';
import {CONSTANTS} from '../styles/constants';
import ContinueButton from './smalls/ContinueButton';
import Paginator from './smalls/Paginator';
import {useDispatch} from 'react-redux';
import {setLogin} from '../redux/actions/onBoardingAction';

const Welcome = ({navigation}) => {
  //   console.log('see', true);
  const dispatch = useDispatch();

  console.log('CONSTANTS.width - 60', CONSTANTS.width - 65);
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          //   justifyContent: 'center',
          //   alignItems: 'center',

          textAlign: 'center',
          margin: 2,
          padding: 10,
          backgroundColor: COLORS.slideBackground,
        }}>
        <TabHeader
          tabStyle={{margin: 32}}
          middleImage={
            <Image
              source={require('../assets/images/graphics/logo2.png')}
              style={[
                styles.slideImage,
                {
                  width: CONSTANTS.width - 300,
                  //   height: CONSTANTS.height - 500,
                  resizeMode: 'contain',
                },
              ]}
            />
          }
          Icon1={
            <Ionicons iconName="chevron-back" size={33} color={COLORS.white} />
          }
          onPress1={() => {
            // setModalVisible(true);
            navigation.goBack();
          }}
        />
        <View style={{flex: 3, margin: 2}}>
          <Image
            source={require('../assets/images/graphics/welcome.png')}
            style={[
              styles.slideImage,
              {
                width: CONSTANTS.width,
                height: CONSTANTS.height - 500,
                resizeMode: 'contain',
              },
            ]}
          />
          <Text style={styles.intro_text_font}> {CONSTANTS.appWelcome}</Text>
          <View>
            <Text style={styles.intro_text_font_2}>
              {CONSTANTS.appWelcome2}
            </Text>
          </View>
        </View>
        <ContinueButton
          onPress={() => {
            dispatch(setLogin());
          }}
          bN={'Continue'}
          bS={{
            fontSize: 120,
            backgroundColor: COLORS.white,
            height: 56,
            width: CONSTANTS.width - 55,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
            marginLeft: 25,
            marginRight: 25,
            borderRadius: 50,
            paddingTop: 16,
            paddingBottom: 16,
            padding: 8,
          }}
          //   scrollTo={scrollTo}
        />
      </SafeAreaView>
    </>
  );
};

export default Welcome;
