import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../styles/colors';
import TabHeader from './smalls/header';
import {Image} from 'react-native-svg';
import Ionicons from '../styles/icons/ionicons';
import {CONSTANTS} from '../styles/constants';
import AntDesign from '../styles/icons/antdesign';
import TextInputDesigned from './smalls/textInputDesigned';
import Entypo from '../styles/icons/Entypo';
import Feather from '../styles/icons/feather';
import styles from '../styles';
import ContinueButton from './smalls/ContinueButton';
import FontAwesome from '../styles/icons/fontawesome';
import error from './smalls/error';

const Signup = ({navigation}) => {
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
        <ScrollView
          style={{
            flex: 1,
            // width: CONSTANTS.width - 50,
            // justifyContent: 'center',
          }}>
          <TabHeader
            tabStyle={{margin: 32}}
            Icon1={
              <AntDesign iconName="close" size={25} color={COLORS.white} />
            }
            onPress1={() => {
              // setModalVisible(true);
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
              {'Create Account'}
            </Text>
            <Text
              style={[
                styles.intro_text_font_2,
                {marginTop: 5, textAlign: 'left', marginLeft: 35, fontSize: 14},
              ]}>
              {'Create a free account'}
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
                name={'Email address'}
                tStyle={{marginBottom: 30}}
                icon={
                  <Entypo
                    iconName="email"
                    size={22}
                    color={COLORS.primary_500}
                  />
                }
              />
              <TextInputDesigned
                name={'**********'}
                icon={
                  <Feather
                    iconName="eye-off"
                    size={22}
                    color={COLORS.primary_500}
                  />
                }
                type="password"
              />

              <View
                style={{
                  marginTop: 40,
                  flex: 1,
                  flexDirection: 'column',
                }}>
                {error.map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={{
                        // marginTop: 5,
                        marginBottom: 5,
                        flex: 0.1,
                      }}>
                      <View
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                          marginLeft: 25,
                          marginRight: 25,
                          // padding: 2,
                          // backgroundColor: 'red',
                        }}>
                        <View
                          iew
                          style={{
                            marginRight: 25,
                            marginLeft: 2,
                            // padding: 2,
                            // backgroundColor: 'red',
                          }}>
                          <FontAwesome
                            iconName={'circle-thin'}
                            color={COLORS.white}
                            size={12}
                          />
                        </View>
                        <Text
                          style={{
                            fontSize: 10,
                            textAlign: 'center',
                            color: COLORS.white,
                            // color: COLORS.error,
                            // fontFamily: 'Montserrat',
                            fontFamily: CONSTANTS.fontName,
                            lineHeight: 12.19,
                            // fontWeight: 300,
                          }}>
                          {item.title}
                        </Text>
                      </View>
                    </View>
                  );
                })}

                <ContinueButton
                  onPress={() => {
                    navigation.navigate('AboutUser');
                  }}
                  bN={'Create Account'}
                  bS={{
                    fontSize: 120,
                    backgroundColor: COLORS.white,
                    height: 56,
                    width: CONSTANTS.width - 100,
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
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Signup;
