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
import TextInputView from '../../Components/TextInputView';
import fontFamily from '../../styles/fontFamily';

const Login =({navigation})=>{
return(
    <WrapperContainer>
        <KeyboardAwareScrollView>
<View style ={styles.container}>
    <View style ={{alignItems : 'center'}}>
   <Image source = {imagePath.insta} style ={{height : 250 , width : 250}}  />
   </View>


   <View>
<TextInputWithLabel label = {en.USER_NAME} placeholder = {'Enter UserName'} style ={styles.inputView}/>
</View>
<Text style ={{...commonStyles.fontSize16 , fontFamily : fontFamily.medium}}>Password</Text>
<View style ={styles.passwordView}>
    <TextInputView  placeholder = {'Enter Password'} placeholderColor = {colors.textGray} style ={{height : 45}} />
    <TouchableOpacity>
    <Image source = {imagePath.hide}  />
    </TouchableOpacity>
</View>
<View style ={{alignItems : 'flex-end'}}>
    <Text style ={[commonStyles.fontSize15 , {color : colors.lightBlue}]}>Forgot Password?</Text>
</View>

<ButtonComp  btnStyle ={styles.button} btnText = {en.LOGIN} btnTextStyle ={styles.buttonText} 
onPress = {()=>navigation.navigate(navigationStrings.HOME)}/>

</View>
<View style = {{alignItems : 'center', marginTop : 30}}>
    <Text style = {commonStyles.fontSize16}>Dont have an account?<Text onPress = {()=>navigation.navigate(navigationStrings.SIGNUP)} style ={{...commonStyles.fontBold16,color : colors.red}}> Sign Up</Text></Text>
</View>
</KeyboardAwareScrollView>
</WrapperContainer>
)

}
export default Login;
const styles = StyleSheet.create({
container : {
    flex : 1 ,
    justifyContent : 'center',
    margin : moderateScale(24)
},
inputView : {
    borderWidth : 0,
    height : moderateScale(45),
    borderRadius : 8,
    padding : 10,
    backgroundColor : colors.inputColor,
    marginBottom : moderateScale(20)

},
inputStyle : {
    marginTop : moderateScaleVertical(20)
},
button : {
    borderRadius : 8,
    borderWidth : 0 ,
    backgroundColor : colors.red,
    marginTop : moderateScaleVertical(80),
    height : moderateScale(45)
},
buttonText : {
    ...commonStyles.fontBold16,
    color : colors.white,
    textTransform : 'capitalize'
},
passwordView : {
    borderWidth : 0,
    height : moderateScale(45),
    borderRadius : 8,
    padding : 10,
    backgroundColor : colors.inputColor,
    marginVertical : moderateScaleVertical(8),
    flexDirection : 'row',
     alignItems : 'center',
     justifyContent : 'space-between'

}


})