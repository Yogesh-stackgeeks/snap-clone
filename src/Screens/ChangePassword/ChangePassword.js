import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';
import navigationStrings from '../../constants/navigationStrings';
import ImageHeadComp from '../../Components/ImageHeadComp';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ButtonComp from '../../Components/ButtonComp';
import TextInputView from '../../Components/TextInputView';

const ChangePassword = ({navigation}) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [entryOld, setEntryOld] = useState(true);
  const [entryNew, setEntryNew] = useState(true);
  const [entryConfirm, setEntryConfirm] = useState(true);

  return (
    <WrapperContainer statusBarColor={colors.red}>
      <View style={{backgroundColor: colors.red}}>
        <ImageHeadComp
          imageLink={imagePath.whiteBack}
          headerStyle={{marginHorizontal: 24}}
          text={'Change Passowrd'}
          textstyle={styles.passwordText}
          onPressBack = {()=>navigation.goBack()}
        />
      </View>
      <KeyboardAwareScrollView>
        <View style={{marginTop: 32, marginHorizontal: 24}}>
          <View style={styles.inputViews}>
            <TextInputView
              placeholder="Current Password"
              secureTextEntry={entryOld}
            />
            <TouchableOpacity
              onPress={() => setEntryOld(entryOld ? false : true)}>
              <Text style={styles.showStyle}>Show</Text>
            </TouchableOpacity>
          </View>

          <View style={{marginTop: 24, height: 24}}>
            <Text
              style={[commonStyles.fontBold16, {color: colors.blackPassword}]}>
              New Password
            </Text>
          </View>
          <View style={{...styles.inputViews, marginTop: 8}}>
            <TextInputView
              placeholder="New Password"
              onChangeText={text => setOldPassword(text)}
              onChangeText={text => setNewPassword(text)}
              secureTextEntry={entryNew}
            />
            <TouchableOpacity
              onPress={() => setEntryNew(entryNew ? false : true)}>
              <Text style={styles.showStyle}>Show</Text>
            </TouchableOpacity>
          </View>

          <View style={{...styles.inputViews, marginTop: 16}}>
            <TextInputView
              placeholder="Confirm Password"
              onChangeText={text => setConfirmPassword(text)}
              secureTextEntry={entryConfirm}
            />
            <TouchableOpacity
              onPress={() => setEntryConfirm(entryConfirm ? false : true)}>
              <Text style={styles.showStyle}>Show</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>

      <View>
        <ButtonComp
          btnStyle={styles.button}
          btnText={'Submit'}
          btnTextStyle={styles.buttonText}
          onPress = {()=>navigation.goBack()}
        />
      </View>
    </WrapperContainer>
  );
};
export default ChangePassword;

const styles = StyleSheet.create({
  passwordText: {
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Roboto',
    color: colors.white,
    marginHorizontal: 24,
    marginVertical: 10,
  },
  showStyle: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Roboto',
    color: colors.textGray,
    marginRight: 10,
  },
  button: {
    marginHorizontal: moderateScaleVertical(24),
    position: 'relative',
    borderRadius: 8,
    backgroundColor: colors.red,
    borderWidth: 0,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Roboto',
    color: colors.white,
    textTransform: 'capitalize',
  },
  inputViews: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: moderateScale(48),
    backgroundColor: colors.inputColor,
    borderRadius: 8,
    padding: 5,
  },
});
