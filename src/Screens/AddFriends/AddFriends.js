import React, { useState } from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet , FlatList} from 'react-native';
import TextInputView from '../../Components/TextInputView';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import {moderateScale, moderateScaleVertical} from '../../styles/responsiveSize';


const AddFriends = ()=>{


    const itemSeperator = () => (
        <View
          style={styles.seperator}
        />
      );

const [click , setClicks] = useState([])

return(
    <View style = {{flex : 1 , backgroundColor : colors.white , padding : 24}}>
        <View style ={styles.inputStyle}>
<TextInputView  placeholder = {'Search Here...'} style ={{height : 50}}/>
<TouchableOpacity>
<Image source = {imagePath.search}   style = {{height : 20 , width : 20}}/>
</TouchableOpacity>
</View>

<FlatList
showsVerticalScrollIndicator ={false}
data = {["","","" ,"","","",""]}
ItemSeparatorComponent ={itemSeperator}
renderItem = {(item , index)=>(
  console.log(item , "hello"),
<View style ={{...styles.rowStyle , marginVertical : 25}}>

<View style = {styles.rowStyle}>
<Image source = {imagePath.profile} style ={{height : 50 , width : 50 , borderRadius : 25}}   />
<Text style = {styles.personName}>Name of Person</Text>
 </View>


{item.index !== click ?

  <TouchableOpacity onPress = {()=>setClicks(item.index)} style ={styles.addView} >
  <Image source = {imagePath.Add} style ={{height : 15 , width : 15}}  />
 <Text style ={[commonStyles.fontBold12 , {color : colors.black}]}>Add Friend</Text>
 </TouchableOpacity>  : 
 <View style={styles.addView}>
 <Image source = {imagePath.check} style ={{height : 15 , width : 15}}  />
 <Text style ={[commonStyles.fontBold12 , {color : colors.black}]}>Request Sent</Text>
   </View>   }


</View>
)}  />
</View>

)

}
 export default AddFriends;

 const styles = StyleSheet.create({
inputStyle : {
    height : 50 , 
    backgroundColor : colors.inputColor,
    borderRadius : 30,
    borderWidth : 0,
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    padding : 20,

},
personName: {
    ...commonStyles.fontBold16,
    color: colors.dark,
    marginLeft : moderateScaleVertical(15),
  },
  rowStyle : {
      flexDirection : 'row',
      justifyContent : 'space-between',
      alignItems : 'center'
  }
  ,
  addView : {
    flexDirection : 'row',
      justifyContent : 'space-evenly',
      alignItems : 'center',
      backgroundColor : colors.inputColor,
      height : moderateScale(40),
      width : moderateScale(100)  ,
      borderRadius : 8
  },
  seperator : {
    borderTopWidth: 1,
        borderColor: colors.border,
  }



 })