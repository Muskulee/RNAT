import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const nH = width / 5;
const nM = width / 20;
const nMM = width / 10;
const mH = height / 5;
const br =
  Math.round(Dimensions.get('window').width + Dimensions.get('window').height) /
  2;

export const CONSTANTS = {
  width,
  height,
  nH,
  nM,
  nMM,
  mH,
  roundeWidth: Math.round(width),
  roundeHeight: Math.round(height),
  br,

  mail: 'mailto: write@beamblog.xyz',
  faq_list_text: 'FAQ',
  transaction_list_text: '',
  appName: 'RNStarterTemplate',
  appWelcome: 'Congratulations!  Welcome To AppName',
  // appWelcome2:
  //   'We are happy to have you. Get ready to Send, Recieve, and checkout all payments transactions with Dova.',
  appWelcome2:
    "Lucky you. You have the best starter tool at your fingertip, use it wisely for many can't find this",
  appDescription:
    'RNStarterTemplate is a powerful tool that allows you to easily create, test, and present all your app ideas',
  appPolicyTerms: 'By clicking Continue, you agree to our ',
  appPolicyTerms2: 'Terms of Service and Privacy Policy',
  fontName: 'Montserrat-Black',
  fontNameIntro: 'OpenSans-Bold',
  fontNameIntro2: 'OpenSans-Regular',
};

export const SETSPLASH = 'SET_SPLASH';
export const SETWEB3 = 'SET_WEB3';
export const SETLOGIN = 'SET_LOGIN';

// console.log('CONSTANTS', CONSTANTS);
