import React from 'react';
import {Text , View , TouchableOpacity,FlatList, StyleSheet , Image} from 'react-native';
import imagePath from '../../constants/imagePath';
import ImageHeadComp from '../../Components/ImageHeadComp';
import commonStyles from '../../styles/commonStyles';
import colors from '../../styles/colors';
import WrapperContainer from '../../Components/WrapperContainer';
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize';

const Notification = ({navigation})=>{

const itemSeperator = ()=>(
    <View style = {styles.seperator}  />
)


    return(
        <WrapperContainer statusBarColor = {colors.red}>
        <View style ={{backgroundColor : colors.red , paddingHorizontal : 15}}>
<ImageHeadComp imageLink = {imagePath.whiteBack} 
onPressBack = {()=>navigation.goBack()}
text = {'Notifications'} 
textstyle = {styles.mainText}/>
</View>
<View style = {{flex : 1 , marginHorizontal : 24}}>
    <FlatList
    data = {["","",""]}
    ItemSeparatorComponent = {itemSeperator}
    renderItem = {(item , index)=>(
<View style ={styles.listView}>
<Image source = {imagePath.profile} style ={{height : 60 , width : 60 , borderRadius : 60/2}} />
<View style = {{justifyContent : 'space-between'}}>
<Text style ={styles.nameText}>Name of the Person</Text>
<View style = {{flexDirection : 'row' , justifyContent : 'space-around'}}>
<TouchableOpacity style ={styles.acceptView}>
    <Image source ={imagePath.check} style ={{height : 15 , width : 15}}  />
<Text style ={styles.acceptText}>Accept</Text>
    </TouchableOpacity>

    <TouchableOpacity style ={{...styles.acceptView, backgroundColor : colors.red}}>
    <Image source ={imagePath.check} style ={{height : 15 , width : 15}}  />
<Text style ={{...styles.acceptText, color : colors.white}}>Reject</Text>
    </TouchableOpacity>

</View>
</View>
</View>

    )

    }  />
</View>

</WrapperContainer>
    )
}
export default Notification;

const styles = StyleSheet.create({
mainText : {
    ...commonStyles.fontBold21,
    color : colors.white,
    marginBottom : 10
},
listView : {
flexDirection : 'row',
marginVertical : moderateScaleVertical(25),
},
seperator : {
    borderTopWidth: 1,
        borderColor: colors.border,
  },
  nameText : {
      ...commonStyles.fontBold14,
      marginLeft : moderateScaleVertical(24)

  },
  acceptView : {
      height : moderateScale(30),
      paddingHorizontal : 10 ,
      flexDirection : 'row',
      backgroundColor : colors.green,
      alignItems : 'center',
      justifyContent : 'space-between',
      borderRadius : 10,
      marginLeft : moderateScale(20)
  },
  acceptText : {
      ...commonStyles.fontBold14,
      marginLeft : 10
  }


})