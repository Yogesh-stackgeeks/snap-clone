import React from 'react';
import {Text , View , TouchableOpacity , StyleSheet , Image} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import imagePath from '../../constants/imagePath';
import WrapperContainer from '../../Components/WrapperContainer';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import en from '../../constants/lang/en';
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize';
import ButtonComp from '../../Components/ButtonComp';
import navigationStrings from '../../constants/navigationStrings';
import fontFamily from '../../styles/fontFamily';
import TextInputView from '../../Components/TextInputView';

const SignUp =({navigation})=>{

return(
    <WrapperContainer>
        <KeyboardAwareScrollView showsVerticalScrollIndicator ={false}>
   <View style = {styles.container}>
<View style ={{alignItems : 'center'}}>
    <Image source = {imagePath.insta}  style ={{height : 250 , width : 250}}  />
</View>
<View style ={{justifyContent : 'space-evenly' , flex : 1}}>
    <TextInputWithLabel label = {en.USER_NAME} placeholder = {'Enter UserName'}  style ={styles.inputView} />
    <TextInputWithLabel label = {en.EMAIL_ADDRESS} placeholder = {'Enter Email'}  style ={styles.inputView} />
    <Text style ={{...commonStyles.fontSize16 , fontFamily : fontFamily.medium}}>Password</Text>
<View style ={styles.passwordView}>
    <TextInputView  placeholder = {'Enter Password'} placeholderColor = {colors.textGray} style ={{height : 45}} />
    <TouchableOpacity>
    <Image source = {imagePath.hide}  />
    </TouchableOpacity>
    </View>
    <Text style ={{...commonStyles.fontSize16 , fontFamily : fontFamily.medium}}>Confirm Password</Text>
<View style ={styles.passwordView}>
    <TextInputView  placeholder = {'Enter Password Again'} placeholderColor = {colors.textGray}  style ={{height : 45}}/>
    <TouchableOpacity>
    <Image source = {imagePath.hide}  />
    </TouchableOpacity>
</View>
</View>

<ButtonComp btnText = {'Sign Up'} btnStyle = {styles.button} btnTextStyle ={styles.buttonText} onPress ={()=>navigation.navigate(navigationStrings.OTP_VERIFICATION)}/>
</View> 
<View>
    <Text style = {styles.loginText}>Have an account? <Text onPress ={()=>navigation.navigate(navigationStrings.LOGIN)} style ={{...commonStyles.fontBold16,color : colors.red}}>Login</Text></Text>
</View>
   </KeyboardAwareScrollView>
   </WrapperContainer>
)



}
export default SignUp;

const styles =StyleSheet.create({
container : {
    flex : 1 , 
    justifyContent : 'center',
    margin : moderateScale(20),
},
inputView : {
    borderWidth : 0,
    borderRadius : 8 ,
    height : moderateScale(45),
    padding : 10,
    marginBottom : moderateScale(15),
    backgroundColor : colors.inputColor
},
button : {
    borderRadius : 8 ,
    borderWidth : 0 ,
    backgroundColor : colors.red,
    marginTop : 20,
    height : 45
},
buttonText : {
    ...commonStyles.fontBold16,
    color : colors.white,
    textTransform : 'capitalize'
},
loginText : {
    ...commonStyles.fontSize16,
    color : colors.dark,
    textAlign : 'center',
    marginBottom : moderateScale(20)
},
passwordView : {
    borderWidth : 0,
    height : moderateScale(45),
    borderRadius : 8,
    padding : 10,
    backgroundColor : colors.inputColor,
    marginTop : moderateScaleVertical(8),
    marginBottom : moderateScale(15),
    flexDirection : 'row',
     alignItems : 'center',
     justifyContent : 'space-between'

}


});