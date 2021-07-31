import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';

const TextInputView = ({
  value,
  onChangeText,
  placeholder,
  inputStyle,
  maxLength,
  keyboardType,
  placeholderColor = colors.lightGray,
  secureTextEntry,
  returnKeyType,
  ref,
  ...props
}) => {
  return (
    <View style={{flex: 1}}>
      <TextInput
        style={{...styles.inputStyle, ...inputStyle}}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        maxLength={maxLength}
        keyboardType={keyboardType}
        placeholderTextColor={placeholderColor}
        secureTextEntry={secureTextEntry}
        returnKeyType={returnKeyType}
        ref={ref}
        {...props}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputStyle: {
    ...commonStyles.fontSize14,
    backgroundColor: colors.whiteColor,
    borderRadius: moderateScale(5),
    height: moderateScale(40),
    paddingHorizontal: moderateScale(8),
    // borderWidth: 0,
    borderColor: colors.dark,
    alignItems: 'center',
    // height: 48,
    flex: 1,
  },
});

export default TextInputView;
