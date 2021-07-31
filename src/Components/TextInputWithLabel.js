import React from 'react';
import { View, Text, TextInput, StyleSheet, } from 'react-native';
import { moderateScale, moderateScaleVertical } from '../styles/responsiveSize';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import commonStyles from '../styles/commonStyles';

const TextInputWithLabel
    = ({
        value,
        onChangeText,
        placeholder,
        inputStyle,
        label,
        labelText,
        placeholderTextColor,
        ...props
    }) => {
        return (
            <View style={{}}>
                <Text style={{ ...styles.labelText ,...labelText}}>{label}</Text>
                <TextInput
               
                    style={{ ...styles.inputStyle , ...inputStyle }}
                    placeholder = {placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    placeholderTextColor = {placeholderTextColor}
                    {...props}
                />
            </View>
        )
    }
const styles = StyleSheet.create({
    inputStyle: {
        ...commonStyles.fontSize14,
        backgroundColor: colors.whiteColor,
        borderRadius: moderateScale(5),
        height: moderateScale(40),
        paddingHorizontal: moderateScale(8),
        marginBottom: moderateScaleVertical(24),
        borderColor: colors.grayColor,
        alignItems: 'center',
    },
    labelText: {
        ...commonStyles.fontSize16,
        fontFamily: fontFamily.medium,
        marginBottom: moderateScaleVertical(8),
        color : colors.dark
    }
});


export default TextInputWithLabel;

