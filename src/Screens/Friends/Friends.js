import React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet , FlatList} from 'react-native';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import {moderateScale, moderateScaleVertical} from '../../styles/responsiveSize';

const Friends = ()=>{

    const itemSeperator = () => (
        <View
          style={styles.seperator}
        />);


return(
    <View style = {{flex : 1 , backgroundColor : colors.white , paddingHorizontal : 24}}>
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
 {item.index < 3 ?
  <TouchableOpacity  style ={styles.addView} >
<View  style = {styles.onlineDot}   />
 <Text style ={[commonStyles.fontBold14 , {color : colors.green}]}>Online</Text>
 </TouchableOpacity>   :

<TouchableOpacity  style ={styles.addView} >
<View  style = {styles.offlineDot}   />
 <Text style ={[commonStyles.fontBold14 , {color : colors.red}]}>Offline</Text>
 </TouchableOpacity>
}

</View>

)}  />

</View>  )
}
export default Friends;

const styles =StyleSheet.create({
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
          justifyContent : 'space-between',
          alignItems : 'center',
          backgroundColor : colors.inputColor,
          height : moderateScale(40)  ,
          paddingHorizontal : 20,
          borderRadius : 10
      },
      onlineDot : {
          height : moderateScale(8),
          width : moderateScale(8),
          backgroundColor : colors.green,
          borderRadius : 8/2,
          marginRight : 20

      },
      offlineDot : {
        height : moderateScale(8),
        width : moderateScale(8),
        backgroundColor : colors.red,
        borderRadius : 8/2,
        marginRight : 20

      },
      seperator : {
        borderTopWidth: 1,
            borderColor: colors.border,
      }

})