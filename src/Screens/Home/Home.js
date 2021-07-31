import React from 'react';
import {Text , View  , StyleSheet , Image} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import imagePath from '../../constants/imagePath';
import WrapperContainer from '../../Components/WrapperContainer';
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize';
// import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view' ;
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view-forked'
import Chat from '../Chat/Chat';
import AddFriends from '../AddFriends/AddFriends';
import { TouchableOpacity } from 'react-native-gesture-handler';
import navigationStrings from '../../constants/navigationStrings';
import Friends from '../Friends/Friends';


const Home =({navigation})=>{
return(
    <WrapperContainer statusBarColor = {colors.red}>
<View style = {styles.topView}>
<TouchableOpacity onPress = {()=>navigation.navigate(navigationStrings.PROFILE)} style ={{flexDirection : 'row', alignItems : 'center' }}>
<Image source = {imagePath.insta} style = {{height : 40 , width : 40 }}  />
    <Text style ={styles.nameText} >Name of Person</Text>
    
    </TouchableOpacity>
    <TouchableOpacity onPress = {()=>navigation.navigate(navigationStrings.NOTIFICATION)}>
    <Image source = {imagePath.Notification} />
    </TouchableOpacity>
    </View>
    <View style ={{flex : 1 , backgroundColor : colors.white , marginTop : 8}}>
    <ScrollableTabView 
        initialPage={0}
        tabBarTextStyle={styles.tabBarTextStyle}
        tabBarUnderlineStyle={styles.underlineStyle} >
        <Chat  tabLabel={'Chats'}  />
        <Friends tabLabel={'Friends'}/>
        <AddFriends tabLabel={'Add Friends'}/>
      </ScrollableTabView>
      </View>
</WrapperContainer>
)


}
export default Home;

const styles = StyleSheet.create({
topView : {
    backgroundColor : colors.red,
    height : moderateScale(100),
    flexDirection : 'row',
    justifyContent : 'space-between',
    padding : 15,
    alignItems : 'center',
    borderBottomEndRadius : 20,
    borderBottomStartRadius : 20

},
nameText : {
    ...commonStyles.fontBold14 ,
    color : colors.white,
    marginLeft : moderateScaleVertical(8)
},
scrollStyle: {
    backgroundColor: colors.white,
  },

  tabBarTextStyle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.black,
    fontFamily: 'Roboto',
    marginBottom : moderateScaleVertical(10)
  },
  underlineStyle: {
    height: moderateScale(5),
    backgroundColor: colors.red,
    width: 120,
  },

})