import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from '../styles';
import TabHeader from './smalls/header';
import AntDesign from '../styles/icons/antdesign';
import TextInputDesigned from './smalls/textInputDesigned';
import ContinueButton from './smalls/ContinueButton';
import {COLORS} from '../styles/colors';
import Feather from '../styles/icons/feather';
import Entypo from '../styles/icons/Entypo';
import error from './smalls/error';
import FontAwesome from '../styles/icons/fontawesome';
import {CONSTANTS} from '../styles/constants';
import FontAwesome5 from '../styles/icons/fontawesome5';
import Fontisto from '../styles/icons/fontisto';

const AboutUser = ({navigation}) => {
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          textAlign: 'center',
          margin: 2,
          padding: 10,
          backgroundColor: COLORS.slideBackground,
        }}>
        <ScrollView
          style={{
            flex: 1,
          }}>
          <TabHeader
            tabStyle={{margin: 32}}
            Icon1={
              <AntDesign iconName="close" size={25} color={COLORS.white} />
            }
            onPress1={() => {
              navigation.goBack();
            }}
          />
          <View style={{flex: 3, margin: 2, flexDirection: 'column'}}>
            <Text
              style={[
                styles.intro_text_font,
                {
                  textAlign: 'left',
                  fontSize: 22,
                  fontWeight: 700,
                  margin: 25,
                  marginLeft: 35,
                  marginBottom: 0.2,
                },
              ]}>
              {'Tell Us More About You'}
            </Text>
            <Text
              style={[
                styles.intro_text_font_2,
                {marginTop: 5, textAlign: 'left', marginLeft: 35, fontSize: 14},
              ]}>
              {'Please use your name as it appears on your ID'}
            </Text>
            <View
              style={{
                flex: 2,
                margin: 10,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TextInputDesigned
                name={'Legal First Name'}
                tStyle={{marginBottom: 30, width: CONSTANTS.width - 74}}
                icon={
                  <Entypo
                    iconName="user"
                    size={22}
                    color={COLORS.primary_500}
                  />
                }
              />

              <TextInputDesigned
                tStyle={{marginBottom: 30, width: CONSTANTS.width - 74}}
                name={'Legal Last Name'}
                icon={
                  <Entypo
                    iconName="user"
                    size={22}
                    color={COLORS.primary_500}
                  />
                }
                type="text"
              />
              <TextInputDesigned
                tStyle={{marginBottom: 30, width: CONSTANTS.width - 74}}
                name={'What should we call you?'}
                icon={
                  <FontAwesome5
                    iconName="user-tie"
                    size={22}
                    color={COLORS.primary_500}
                  />
                }
                type="text"
              />
              <TextInputDesigned
                tStyle={{marginBottom: 30, width: CONSTANTS.width - 74}}
                name={'Phone Number'}
                icon={
                  <Feather
                    iconName="smartphone"
                    size={22}
                    color={COLORS.primary_500}
                  />
                }
                type="text"
              />
              <TextInputDesigned
                tStyle={{marginBottom: 30, width: CONSTANTS.width - 74}}
                name={'Date of Birth'}
                icon={
                  <Fontisto
                    iconName="date"
                    size={22}
                    color={COLORS.primary_500}
                  />
                }
                type="text"
              />

              <TextInputDesigned
                tStyle={{marginBottom: 30, width: CONSTANTS.width - 74}}
                name={'Referrral Code (Optional)'}
                icon={
                  <FontAwesome5
                    iconName="network-wired"
                    size={22}
                    color={COLORS.primary_500}
                  />
                }
                type="text"
              />

              <ContinueButton
                onPress={() => {
                  navigation.navigate('Welcome');
                }}
                bN={'Continue'}
                bS={{
                  fontSize: 120,
                  backgroundColor: COLORS.white,
                  height: 56,
                  width: CONSTANTS.width - 74,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                  marginLeft: 25,
                  marginRight: 25,
                  borderRadius: 50,
                  paddingTop: 16,
                  paddingBottom: 16,
                  padding: 8,
                  margin: 10,
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
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default AboutUser;
