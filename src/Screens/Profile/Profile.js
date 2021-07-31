import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Switch,
} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import imagePath from '../../constants/imagePath';
import WrapperContainer from '../../Components/WrapperContainer';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';
import navigationStrings from '../../constants/navigationStrings';
import DeleteModal from '../../Components/DeleteModal';

const Profile = ({navigation}) => {
  const [modal, setModal] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const onPressLogOut = ()=>{
    setModal(false)
    navigation.navigate(navigationStrings.LOGIN)
  }

  return (
    <WrapperContainer statusBarColor={colors.red}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{flex: 1.3}}>
          <Image source={imagePath.whiteBack} />
        </TouchableOpacity>
        <View style={{flex: 2}}>
          <Text style={[commonStyles.fontBold24, {color: colors.white}]}>
            Profile
          </Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            margin: 24,
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}>
          <View>
            <Image
              source={imagePath.profile}
              style={{height: 60, width: 60, borderRadius: 60 / 2}}
            />
          </View>
          <View style={{marginLeft: 16, justifyContent: 'space-around'}}>
            <Text style={commonStyles.fontBold18}>Mark Ateer</Text>
            <Text style={[commonStyles.fontSize13, {color: colors.lightGray}]}>
              markateer123@gmail.com
            </Text>
          </View>
        </View>

        <View style={styles.lineHorizontal} />
        <TouchableOpacity style={styles.textViews}>
          <Text style={styles.textProfile}>Enable 2FA</Text>
          <View style={{marginRight: 20}}>
            <Switch
              trackColor={{true: 'green'}}
              ios_backgroundColor="lightgray"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.line} />

        <TouchableOpacity onPress = {()=>navigation.navigate(navigationStrings.ADD_PICTURE)} style={styles.textViews}>
          <Text style={styles.textProfile}>Change Avatar</Text>
          <Image source={imagePath.Next} style={styles.imageNext} />
        </TouchableOpacity>
        <View style={styles.line} />

        <TouchableOpacity onPress ={()=>navigation.navigate(navigationStrings.CHANGE_PASSWORD)} style={styles.textViews}>
          <Text style={styles.textProfile}>Change Password</Text>
          <Image source={imagePath.Next} style={styles.imageNext} />
        </TouchableOpacity>
        <View style={styles.line} />

        <View style={styles.textViews}>
          <Text style={styles.textProfile}>About</Text>
          <Image source={imagePath.Next} style={styles.imageNext} />
        </View>
        <View style={styles.line} />

        <View style={styles.textViews}>
          <Text style={styles.textProfile}>Privacy and Policy</Text>
          <Image source={imagePath.Next} style={styles.imageNext} />
        </View>
        <View style={styles.line} />

        <TouchableOpacity
          onPress={() => setModal(true)}
          style={styles.textViews}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>

        <View style={styles.bottomView}>
          <Text style={[commonStyles.fontSize13, {color: colors.lightGray}]}>
            App Version 5.34.004
          </Text>
          <Text style={[commonStyles.fontSize13, {color: colors.lightGray}]}>
            Privacy Policy
          </Text>
        </View>
      </ScrollView>
      <View>
        <DeleteModal
          message={'Do you want to Logout?'}
          onPressFirst={() => setModal(false)}
          onPressSecond={onPressLogOut}
          btnSecond={'Yes, Logout'}
          isVisible={modal}
        />
      </View>
    </WrapperContainer>
  );
};
export default Profile;

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: colors.red,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  editHead: {
    borderRadius: 6,
    height: 32,
    width: 72,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.viewColor,
    opacity: 100,
  },
  lineHorizontal: {
    backgroundColor: colors.seperatorLine,
    height: 5,
  },
  textProfile: {
    marginLeft: 24,
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Roboto',
    color: colors.lightGray,
  },
  imageNext: {
    height: 20,
    width: 20,
    marginRight: 30,
  },
  textViews: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 48,
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Roboto',
    marginLeft: 24,
    color: colors.red,
  },
  bottomView: {
    marginTop: moderateScale(60),
    flexDirection: 'row',
    marginHorizontal: 24,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  line: {
    height: 2,
    backgroundColor: colors.border,
    marginHorizontal: moderateScaleVertical(24),
    marginVertical: moderateScaleVertical(6),
  },
});
