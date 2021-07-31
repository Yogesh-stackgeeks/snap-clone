import React, { useState } from 'react';
import {Text , View , TouchableOpacity , StyleSheet , Image, Keyboard} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import imagePath from '../../constants/imagePath';
import WrapperContainer from '../../Components/WrapperContainer';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import en from '../../constants/lang/en';
import { moderateScale, moderateScaleVertical, width } from '../../styles/responsiveSize';
import ButtonComp from '../../Components/ButtonComp';
import navigationStrings from '../../constants/navigationStrings';
import ImageHeadComp from '../../Components/ImageHeadComp';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';
import fontFamily from '../../styles/fontFamily';


const Otp =({navigation})=>{

    const [otp, setOtp] = useState('');

    const ref = useBlurOnFulfill({otp, cellCount: 4});
  const [propsOtp = props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: otp,
    setValue: setOtp,
  });



return(
    <WrapperContainer>
        <View style = {{flex : 1}}>
        <View style={styles.container}>
              <ImageHeadComp imageLink={imagePath.back} onPressBack = {()=>navigation.navigate(navigationStrings.SIGNUP)} logoImage={imagePath.insta} logoCss={{ height: 80, width: 80 }}/>
            <Text style={styles.textVerify}>Verification</Text>
            <Text style={[commonStyles.fontSize13, { marginTop: 8 , color : colors.lightGray } ]}>Enter the 4-digit code sent to you at {'\n'}
                <Text style={[commonStyles.fontBold12 , {color : colors.lightGray}]}> your Email Address</Text></Text>
                </View>
<View style ={{flex : 1}}>
                <CodeField
    ref={ref}
    {...propsOtp}
    value={otp}
    onChangeText={setOtp}
    cellCount={4}
    rootStyle= {styles.root}
    onSubmitEditing={Keyboard.dismiss}
    keyboardType="number-pad"
    textContentType="oneTimeCode"
    selectionColor={colors.themeMain}
    textInputStyle={{backgroundColor: 'blue'}}
    renderCell={({index, symbol, isFocused}) => (
      <Text
        key={index}
        style={[
          styles.cell,
          isFocused && styles.focusCell,
          index == 3 && {marginRight: 0},
        ]}
        onLayout={getCellOnLayoutHandler(index)}>
        {symbol || (isFocused ? <Cursor /> : null)}
      </Text>
    )}
  />
  </View>
  <View style = {styles.container}  >

<Text style={styles.textOtp}>Dont Receive Otp?<Text style={{...commonStyles.fontBold16, color: colors.red }}> Request Again</Text></Text>
</View>
<View style = {{marginHorizontal : 24 , justifyContent : 'flex-end' , flex : 1}}>
<ButtonComp btnStyle={styles.button} btnText={'Verify'} btnTextStyle={styles.buttonText} 
onPress = {()=>navigation.navigate(navigationStrings.ADD_PICTURE)} />
</View>
</View>
</WrapperContainer>
)



}
export default Otp;

const styles = StyleSheet.create({
    container: {
        flex : 1,
        margin: 24,
        justifyContent : 'flex-start'
    },
    textVerify: {
        fontSize: 24,
        fontWeight: '700',
        fontStyle: 'normal',
        fontFamily : 'Roboto'
    },
    textOtp: {
        textAlign: 'center',
       ...commonStyles.fontSize16
    },
    button: {
        backgroundColor: colors.red,
        borderWidth: 0,
        borderRadius: 8,
        height : moderateScale(45),
        marginBottom : moderateScale(30)
    },
    buttonText: {
        color: colors.white,
        fontSize: 14,
        fontWeight: '700',
        textTransform: 'capitalize',
        fontFamily : 'Roboto'
    },
    root: {
        width: '100%',
        backgroundColor: colors.white,
        justifyContent: 'flex-start',
        paddingHorizontal: moderateScale(24),
      },
      cell: {
        width:  width * 0.16,
        height: width * 0.18,
        fontFamily: fontFamily.regular,
        lineHeight: width * 0.18,
        fontSize: 24,
        borderRadius: 8,
        borderBottomColor: colors.blackOpacity15,
        textAlign: 'center',
        marginRight: 24,
        backgroundColor: colors.inputColor,
        borderWidth : 0.1,
        borderColor : colors.lightGray
      },
});



