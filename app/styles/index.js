import {Dimensions, StyleSheet, StatusBar} from 'react-native';

import {COLORS} from './colors';
import {CONSTANTS} from './constants';
const IMAGE_WIDTH = 100;
const width = Dimensions.get('window').width - 20;

console.log('width', width);

const styles = StyleSheet.create({
  intro_text_font: {
    fontWeight: 700,
    color: COLORS.intro_text,
    fontFamily: CONSTANTS.fontNameIntro,
    fontSize: 28,
    textAlign: 'center',
  },

  intro_text_font_2: {
    fontWeight: 400,
    color: COLORS.intro_text,
    fontFamily: CONSTANTS.fontNameIntro2,
    fontSize: 12,
    lineHeight: 16.3,
    textAlign: 'center',
    verticalAlign: 'top',
    margin: 10,
    marginBottom: 32,
  },

  signUpButton: {
    margin: 1,
    width: 200,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  intro_button: {
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: 12,
    // paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: COLORS.swatch_6,
    fontFamily: CONSTANTS.fontName,
  },
  home_button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 2,
    paddingHorizontal: 3,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: COLORS.swatch_6,
  },
  nextButton: {
    position: 'absolute',
    backgroundColor: COLORS.white,
    borderRadius: 100,
    padding: 20,
  },

  general_text: {
    fontWeight: 'bold',
    color: 'white',
  },

  button_text: {
    fontSize: 20,
    lineHeight: 21,
    fontFamily: CONSTANTS.fontName,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: COLORS.primary_500,
  },
  home_button_text: {
    fontSize: 10,
    // lineHeight: 21,
    fontFamily: 'NotoSans-ExtraBold',
    fontWeight: 'bold',
    // letterSpacing: 0.25,
    padding: 0.5,
    color: COLORS.background_white,
  },

  button: {
    position: 'absolute',
    bottom: 0,
  },

  bottom: {
    // flex: 1,
    fontSize: 120,
    backgroundColor: COLORS.white,
    height: 56,
    width: CONSTANTS.width - 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 50,
    paddingTop: 16,
    paddingBottom: 16,
  },

  text_end: {
    fontWeight: 'bold',
    color: COLORS.color_purple,
    textAlign: 'center',
    paddingVertical: 15,
    fontFamily: 'NotoSans-Bold',
  },
  container: {
    paddingTop: StatusBar.currentHeight,
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  slideImage: {
    // flex: 0.7,
    justifyContent: 'center',
  },
  slideTitle: {
    fontWeight: '800',
    fontSize: 20,
    marginBottom: 10,
    // color: '#493d8a',
    fontFamily: CONSTANTS.fontName,
    textAlign: 'center',
  },
  slideDescription: {
    fontWeight: '800',
    fontSize: 20,
    marginBottom: 10,
    // color: '#493d8a',
    fontFamily: CONSTANTS.fontName,
    textAlign: 'center',
    paddingHorizontal: 64,
  },
  searchcontainer: {
    paddingTop: StatusBar.currentHeight,
    padding: 10,
    flex: 1,
    margin: 15,
    justifyContent: 'flex-start',

    // borderColor: COLORS.purple,
  },
  writeUsContainer: {
    paddingTop: StatusBar.currentHeight,
    padding: 10,
    flex: 1,
    margin: 15,
    // justifyContent: "flex-start",

    // borderColor: COLORS.purple,
  },
  searching: {
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderRadius: 5,
    padding: 5,
    fontSize: 16,
    width: '90%',
  },
  noresult: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'rgba(0,0,0,0.5)',
    textAlign: 'center',
    marginTop: 30,
    fontFamily: 'NotoSans-Bold',
  },
  searchresult: {marginTop: 10},
  postTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text_nointernet_color,
    fontFamily: 'NotoSans-Bold',
  },
  date: {
    fontSize: 14,
    color: COLORS.date,
    fontFamily: 'NotoSans-Bold',
  },
  postImage: {width: IMAGE_WIDTH, height: IMAGE_WIDTH / 1.7, borderRadius: 5},
  relatedcontainer: {
    marginTop: 10,
  },
  postListItem: {flex: 1, marginLeft: 5, fontFamily: 'NotoSans-Bold'},
  postTouchable: {flexDirection: 'row', alignItems: 'space-between'},

  slidercontainer: {
    alignSelf: 'center',
    width,
    // paddingTop: 50,
  },
  sliderHead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,

    paddingVertical: 5,
  },
  // title: { fontWeight: "700", color: COLORS.text_nointernet_color, fontSize: 22 },
  sliderTitle: {
    fontWeight: '700',
    color: COLORS.primary,
    fontSize: 22,
    fontFamily: 'NotoSans-Bold',
  },
  sliderBigHeading: {
    fontWeight: '700',
    color: 'white',
    fontSize: 22,
    borderRadius: 2,
    borderWidth: 2,
    padding: 2,
    textAlign: 'center',
    fontFamily: 'NotoSans-Bold',

    backgroundColor: COLORS.color_purple,
    borderColor: COLORS.color_purple,
  },

  listHeader: {
    fontWeight: '700',
    color: 'white',
    fontSize: 22,
    marginTop: 15,
    textAlign: 'center',
    backgroundColor: COLORS.color_purple,
    borderRadius: 4,
    padding: 2,
    // fontFamily: "NotoSans-Bold",
  },

  indicator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  slides: {
    width: 12,
    height: 14,
    borderRadius: 6,
    borderWidth: 2,
    marginLeft: 5,
    borderColor: COLORS.primary,

    // backgroundColor: activeSlideIndex === index ? COLORS.text_nointernet_color : "transparent",
  },
  sliderImage: {width, height: width / 1.7, borderRadius: 10},
  noInternetContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_nointernet: {
    fontSize: 18,
    color: COLORS.text_nointernet_color,
    paddingVertical: 5,
    fontFamily: 'NotoSans-Bold',
  },
  nointernet_pressable: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  no_internet_tryagain: {
    fontSize: 18,
    color: COLORS.text_nointernet_color,
    paddingVertical: 5,
  },
  renderItem: {marginTop: 15},

  markdown: {
    paragraph: {
      lineHeight: 22,
      color: COLORS.markdown_color,
      letterSpacing: 0.8,
      fontFamily: 'NotoSans-Bold',

      //   color: "#545050",
    },
    body: {
      fontSize: 14,
      fontFamily: 'NotoSans-Bold',
    },
    link: {
      // color: "#7784f8"
      color: COLORS.primary,
      fontFamily: 'NotoSans-Bold',
    },
    list_item: {
      color: COLORS.markdown_color,
      paddingVertical: 5,
    },
  },

  markdown_text: {
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 10,
    fontSize: 22,
    fontFamily: 'NotoSans-Bold',
  },
  related_post: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 22,
    borderRadius: 2,
    borderWidth: 2,
    padding: 2,
    textAlign: 'center',
    fontFamily: 'NotoSans-Bold',

    backgroundColor: COLORS.color_purple,
    borderColor: COLORS.color_purple,
  },
  fontFamily: 'NotoSans-Bold',
  markdown_view: {
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'NotoSans-Bold',
  },
  post_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 3,
    fontFamily: 'NotoSans-Bold',
  },
  post_text: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.text_nointernet_color,
    // marginTop: 15,
    //   marginVertical: 15,
    color: COLORS.primary,
    fontFamily: 'NotoSans-Bold',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },

  centeredView: {
    // flex: 1,
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    // margin: CONSTANTS.roundeWidth/3.9
    // marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: COLORS.card,
    borderRadius: 18,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'NotoSans-Bold',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   flexDirection: "column",
  //   padding: 50,
  // },
  title_text: {
    fontSize: 40,
    fontWeight: '900',
    marginBottom: 55,
  },
  counter_text: {
    fontSize: 35,
    fontWeight: '900',
    margin: 15,
  },
  btn: {
    backgroundColor: '#086972',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  btn_text: {
    fontSize: 23,
    color: '#fff',
    // fontFamily: 'NotoSans-Black',
    paddingHorizontal: 10,
    fontFamily: 'Montserrat-Black',
  },
});

export default styles;
