import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../styles/colors';
import styles from '../../styles';
import {CONSTANTS} from '../../styles/constants';
import Ionicons from '../../styles/icons/ionicons';

const TextInputDesigned = ({
  TextInputIcon,
  name,
  icon,
  onChangeText,
  value,
  pH,
  type,
  tStyle,
}) => {
  console.log('type', tStyle);
  return (
    <View
      style={[
        {
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 5,
          marginLeft: 25,
          marginRight: 25,
          borderWidth: 1,
          borderColor: '#dadae8',
          backgroundColor: '#F4F4F4',
          borderWidth: 2,
          borderRadius: 5,
        },
        tStyle,
      ]}>
      <TextInput
        style={[
          {
            flex: 1,
            color: COLORS.intro_text,
            paddingLeft: 17,
            paddingRight: 17,
            borderColor: COLORS.primary,
            borderRadius: 5,
            margin: 10,
            fontSize: 12,
            lineHeight: 16,
          },
        ]}
        //   onChangeText={UserName => setUserName(UserName)}
        underlineColorAndroid="black"
        placeholder={name}
        placeholderTextColor="black"
        autoCapitalize="sentences"
        returnKeyType="next"
        //   onSubmitEditing={() =>
        //     emailInputRef.current && emailInputRef.current.focus()
        //   }
        blurOnSubmit={false}
      />

      <TouchableOpacity
        style={{
          padding: 14,
        }}>
        {icon}
      </TouchableOpacity>
    </View>
  );
};

export default TextInputDesigned;
