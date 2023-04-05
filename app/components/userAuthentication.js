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

const UserAuth = ({navigation}) => {
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
            source={require('../assets/images/graphics/Investor-presentation-pana.png')}
            style={[
              styles.slideImage,
              {
                width: CONSTANTS.width,
                height: CONSTANTS.height - 600,
                resizeMode: 'contain',
              },
            ]}
          />
          <Text style={styles.intro_text_font}>
            Use This {CONSTANTS.appName}
          </Text>
          <View>
            <Text style={styles.intro_text_font_2}>
              {CONSTANTS.appDescription}
            </Text>
          </View>
          <ContinueButton
            onPress={() => {
              navigation.navigate('Signup');
            }}
            bN={'Sign Up'}
            bS={{
              fontSize: 120,
              backgroundColor: COLORS.white,
              height: 56,
              width: CONSTANTS.width - 65,
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
          <ContinueButton
            onPress={() => {
              navigation.navigate('Login');
            }}
            bN={'Login'}
            bS={{
              fontSize: 120,
              backgroundColor: COLORS.primary_500,
              height: 56,
              width: CONSTANTS.width - 65,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20,
              marginLeft: 25,
              marginRight: 25,
              borderRadius: 50,
              paddingTop: 16,
              paddingBottom: 16,
              padding: 8,
              borderColor: COLORS.white,
              borderWidth: 1,
            }}
            bTS={{
              color: COLORS.white,
            }}
            //   scrollTo={scrollTo}
          />
        </View>
        <View>
          <Text
            style={[
              styles.intro_text_font_2,
              {
                fontSize: 10,
                lineHeight: 16.3,
                textAlign: 'center',
                verticalAlign: 'top',
                margin: 10,
                marginBottom: 1,
              },
            ]}>
            {CONSTANTS.appPolicyTerms}
          </Text>
          <Text
            style={[
              styles.intro_text_font_2,
              {
                fontSize: 10,
                textAlign: 'center',
                verticalAlign: 'top',
                marginTop: 0.5,
                color: COLORS.white,
              },
            ]}>
            Terms of Service
            <Text
              style={[
                styles.intro_text_font_2,
                {
                  fontSize: 10,
                  textAlign: 'center',
                  verticalAlign: 'top',
                  marginTop: 0.5,
                },
              ]}>
              {' '}
              and
            </Text>
            <Text
              style={[
                styles.intro_text_font_2,
                {
                  fontSize: 10,
                  textAlign: 'center',
                  verticalAlign: 'top',
                  marginTop: 0.5,
                  color: COLORS.white,
                },
              ]}>
              {' '}
              Privacy Policy
            </Text>
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default UserAuth;
