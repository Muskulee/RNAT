import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../styles/colors';
import TabHeader from './smalls/header';
import {CONSTANTS} from '../styles/constants';
import AntDesign from '../styles/icons/antdesign';
import styles from '../styles';
import TextInputDesigned from './smalls/textInputDesigned';
import Ionicons from '../styles/icons/ionicons';
import Feather from '../styles/icons/feather';
import ContinueButton from './smalls/ContinueButton';
import Entypo from '../styles/icons/Entypo';
import {useDispatch} from 'react-redux';
import {setLogin} from '../redux/actions/onBoardingAction';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [firstTimeUser, setFirstTimeUser] = useState('false');
  const loadSomething = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key');

      console.log('firstTimeUser', value);
      setFirstTimeUser(value);
    } catch (error) {
      console.log('thiserror', error);
    }
  };
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
        <View
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
          <View style={{flex: 3, margin: 2}}>
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
              {'Login'}
            </Text>
            <Text
              style={[
                styles.intro_text_font_2,
                {marginTop: 5, textAlign: 'left', marginLeft: 35, fontSize: 14},
              ]}>
              {'Securely login to your account'}
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
                }}>
                <ContinueButton
                  onPress={() => {
                    loadSomething();
                    if (firstTimeUser === 'false') {
                      return navigation.navigate('Welcome');
                    }
                    dispatch(setLogin());
                  }}
                  bN={'Login'}
                  bS={{
                    fontSize: 120,
                    backgroundColor: COLORS.white,
                    height: 56,
                    width: 291,
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
                <View>
                  <Text
                    style={[
                      styles.intro_text_font_2,
                      {
                        marginTop: 0,
                        fontSize: 12,
                        lineHeight: 16,
                        fontWeight: 500,
                      },
                    ]}>
                    I forgot my password
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              margin: 15,
              flex: 1,
              justifyContent: 'flex-end',
              flexDirection: 'column',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Signup');
              }}>
              <Text
                style={[
                  styles.intro_text_font_2,
                  {
                    fontSize: 12,
                    lineHeight: 16.3,
                    textAlign: 'center',
                    verticalAlign: 'top',
                    margin: 15,
                    marginBottom: 1,
                    fontFamily: CONSTANTS.fontName,
                  },
                ]}>
                Don’t have an account?{' '}
                <Text style={{color: COLORS.white}}>Register</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Login;
