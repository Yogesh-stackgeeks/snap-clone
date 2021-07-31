import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import commonStyles from '../styles/commonStyles';
import {moderateScaleVertical, moderateScale} from '../styles/responsiveSize';
import colors from '../styles/colors';

const TextOverLine = ({text,marginTop=16,textContainerStyle={},textStyle={}})=> {
  
  return (
    <View style={{marginTop: moderateScale(marginTop)}}>
      <View
        style={{
          height: .5,
          backgroundColor: colors.textGrey,
          position: 'absolute',
          top: moderateScaleVertical(18),
          left: 0,
          right: 0,
        }}
      />
      <View
        style={{
          alignSelf: 'center',
          height: moderateScaleVertical(33),
          width: moderateScaleVertical(33),
          justifyContent: 'center',
          zIndex: 99,
          backgroundColor: colors.white,
          ...textContainerStyle
        }}>
        <Text
          style={{
            ...commonStyles.fontSize14,
            textAlignVertical: 'center',
            textAlign: 'center',
            color: colors.textGrey,
            ...textStyle
          }}>
          {text}
        </Text>
      </View>
    </View>
  );
};

export default TextOverLine;


