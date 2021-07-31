import React from 'react';
import {Text , View , Image , TouchableOpacity , StyleSheet , Modal}  from 'react-native';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import ButtonComp from './ButtonComp';




const DeleteModal = ({message ,
    btnSecond,
    onPressSecond,
    onPressFirst,
    isVisible
})=>{

return(
<Modal visible={isVisible} animationType = 'fade' transparent={true}>
          <View style={styles.centeredView}>
            <View style={styles.deleteModal}>
<View style ={{alignItems : 'center' , marginTop : 8}}>
  <Image source = {imagePath.Exclamation}   />
</View>
<Text style ={styles.sureText}>
  Are you sure?
</Text>
<Text style = {styles.deleteModalText}>{message}</Text>
<View style ={{flexDirection : 'row' , marginTop : 24 }}>
<View style ={{flex : 1}}>
  <ButtonComp btnText = {'Cancel'} btnStyle = {styles.cancelButton} btnTextStyle ={styles.cancelText} onPress ={onPressFirst}/>
</View>
<View style ={{flex : 1 , marginLeft : 24}}>
  <ButtonComp btnText = {btnSecond} btnTextStyle = {styles.deleteText} btnStyle ={styles.modalDeleteButton} onPress ={onPressSecond}/>
</View>



</View>

            </View>
          </View>
        </Modal>







)


}
export default DeleteModal;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor : colors.blackOpacity70
      },
      deleteModal: {
        marginHorizontal: 20,
        backgroundColor: colors.white,
        borderRadius: 16,
        padding : 24 ,
        height: 288,
      },
      deleteModalText : {
        fontSize : 12 ,
        fontWeight : '400',
        textAlign : 'center',
        color : colors.lightGray,
        marginTop : 16
      },
    cancelButton : {
    borderRadius : 8 ,
    borderColor : colors.red,
    height : 48
    },
    
    modalDeleteButton : {
      borderRadius : 8 ,
      height : 48,
      backgroundColor : colors.red,
      borderWidth : 0
    },
    cancelText : {
    fontSize : 14 ,
    fontWeight : '700',
    fontFamily : 'Roboto',
    textAlign : 'center',
    textTransform : 'capitalize',
    color : colors.red
    },
    deleteText : {
      fontSize : 14 ,
      fontWeight : '700',
      fontFamily : 'Roboto',
      textAlign : 'center',
      textTransform : 'capitalize',
      color : colors.white
    },
    sureText : {
      fontFamily : 'Roboto',
      fontSize : 22 ,
      fontWeight : '500',
      textAlign : 'center',
      marginTop : 24 
    }
    







})