import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';

export default function PhoneCountryPicker({
  onCountrySelected,
  countryCode,
  onChangeMobile,
  label,
}) {
  const [state, setState] = useState({
    isVisibleCntryModal: false,
  });

  const updateState = data => setState(state => ({...state, ...data}));

  const _onSelectCountry = cntry => {
    updateState({isVisibleCntryModal: false,
      cntryData: {
        countryCode: cntry.cca2,
        callingCode: cntry.callingCode[0],
        countryName: cntry.name,
        countryFlag : cntry.flag
      },      
    });
    onCountrySelected(cntry);
  };
  const _onClose = () => {
    updateState({isVisibleCntryModal: false});
  };
  return (
    <View>
      {/* <Text style={styles.label}>{label}</Text> */}
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: colors.inputColor,
          height:moderateScaleVertical(48),
          borderRadius: 8,
          marginTop : 16,
        }}>
        <TouchableOpacity
          onPress={() => updateState({isVisibleCntryModal: true})}
          style={{flexDirection: 'row'}}>
          <CountryPicker
            onSelect={_onSelectCountry}
            onClose={_onClose}
            visible={state.isVisibleCntryModal}
            withCallingCodeButton
            theme={{
              ...commonStyles.fontSize14,
            
            }}
            withFlagButton
            withFilter
            countryCode= {countryCode}
            containerButtonStyle={styles.containerBtnStyle}
          />
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{marginRight: 15}} source={imagePath.down} />
          </View>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            marginTop: 10,
            marginBottom: 10,
            borderLeftWidth: 1,
            borderColor: colors.textGray,
            // height: moderateScaleVertical(48),
          }}>
          <TextInput
            onChangeText={onChangeMobile}
            style={{flex: 1, ...commonStyles.fontSize14, paddingLeft:10, paddingHorizontal: 5,paddingTop:0,paddingBottom:0}}
            placeholder="Mobile Number"
            keyboardType="numeric"
            returnKeyType="done"
          />
        </View>
      </View>
    </View>
  );
}
const cntryTheme = {
  theme: {
    // flagSizeButton: 14,
    backgroundColor: 'green',

    // ...commonStyles.fontSize16,
    // fontFamily:fontFamily.monBold
  },
};
const styles = StyleSheet.create({
  containerBtnStyle: {
    width: moderateScale(100),
    height: moderateScaleVertical(49),
    marginTop: 5,
    paddingLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'red',
    paddingHorizontal:0,
    paddingLeft:0,
    paddingRight:0,
    marginTop:0,
    paddingTop:0,
    paddingBottom:0,
  },

  label: {
    ...commonStyles.fontSize16,
    textTransform: 'capitalize',
    fontFamily: fontFamily.medium,
    marginBottom: 4,
    color: colors.black,
  },
  cntryContainer: {
    borderBottomWidth: 0.6,
    borderBottomColor: colors.textGrey,
    marginRight: 16,
    // backgroundColor:'green'
  },
});
