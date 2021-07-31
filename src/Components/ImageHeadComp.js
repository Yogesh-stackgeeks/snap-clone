import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native';
import { moderateScale } from '../styles/responsiveSize';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';

export default function ImageHeadComp({ onPressBack , headerStyle , imageLink , logoImage , logoCss , rightIcon , text ,textstyle ,bgcolor,onpressRight }) {
    return (
        <View style ={bgcolor}>
        <View style={{ ...styles.headerStyle, ...headerStyle }}>
        <TouchableOpacity onPress ={onPressBack} style = {{justifyContent : 'center'}}>
            <Image source = {imageLink} style = {{height : 25 , width : 25}}  />
            </TouchableOpacity>
            <View style ={{flex : 1 , marginLeft : 20 , justifyContent : 'center'}}>
                <Image source={logoImage} style = {logoCss} />
        </View>
        <TouchableOpacity onPress = {onpressRight} style ={{justifyContent : 'center'}}>
            <Image source = {rightIcon} />
        </TouchableOpacity>
        </View>
<View>
    <Text style = {textstyle}>{text}</Text>
</View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerStyle: {
        minHeight: moderateScale(48),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textStyle: {
        ...commonStyles.fontSize18,
        fontFamily: fontFamily.medium,
        color: colors.themeColor,
        textTransform: 'uppercase'
    }
})