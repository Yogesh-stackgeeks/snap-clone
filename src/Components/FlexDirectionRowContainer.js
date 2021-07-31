import React from 'react';
import {View} from 'react-native';
const FlexDirectionRowContainer = ({
  onPress = () => {},
  extraStyle = {},
  children,
}) => {
  return (
    <View
      style={{flexDirection: 'row', alignItems: 'center', ...extraStyle}}
      onPress={onPress}>
      {children}
    </View>
  );
};

export default FlexDirectionRowContainer;
