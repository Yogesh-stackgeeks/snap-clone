import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ImageBackground,
  Image,
  FlatList,
} from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import {
  moderateScale,
} from '../../styles/responsiveSize';
import ButtonWithLoader from '../../Components/ButtonWithLoader';
import ImageList from '../../Components/ImageList';
import navigationStrings from '../../constants/navigationStrings';

const AddProfile = ({navigation}) => {
  const [avatar, setImage] = useState('');

  const onSelectImage = index => {
    setModal(false);
    const imageLink = arrImages[index].image;
    setImage(imageLink);
  };
  const arrImages = [
    {image: imagePath.insta},
    {image: imagePath.profile},
    {image: imagePath.insta},
    {image: imagePath.profile},
    {image: imagePath.insta},
  ];

  const itemSeperate = () => (
    <View
      style={{
        borderTopWidth: 3,
        borderColor: colors.border,
      }}
    />
  );
  const [modal, setModal] = useState(false);
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <View style={{height: 150, alignItems: 'center'}}>
          <Image source={imagePath.insta} style={{height: 100, width: 100}} />
        </View>
        <View style={styles.textView}>
          <Text style={styles.mainText}>Select Avatar</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <ImageBackground
            source={avatar === '' ? imagePath.profile : avatar}
            style={styles.backdrop}
            borderRadius={183 / 2}>
            <TouchableOpacity
              onPress={() => setModal(true)}
              style={styles.overlay}>
              <Image style={styles.logo} source={imagePath.AddPicture} />
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 30}}>
          <ButtonWithLoader
            btnStyle={styles.button}
            btnText={'Save'}
            btnTextStyle={styles.buttonText}
            onPress = {()=>navigation.navigate(navigationStrings.HOME)}
          />
        </View>
      </View>
      <Modal visible={modal} animationType="fade" transparent={true}>
        <View activeOpacity={1.9} style={styles.centeredView}>
          <View style={styles.modalView}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={arrImages}
              ItemSeparatorComponent={itemSeperate}
              renderItem={(item, index) => (
                <ImageList item={item} onSelectImage={onSelectImage} />
              )}
            />
          </View>
        </View>
      </Modal>
    </WrapperContainer>
  );
};

export default AddProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 24,
  },
  textProfile: {
    fontSize: 24,
    fontWeight: '700',
    fontStyle: 'normal',
  },
  button: {
    backgroundColor: colors.red,
    borderWidth: 0,
    borderRadius: 8,
  },
  buttonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  backdrop: {
    flexDirection: 'row',
    height: moderateScale(183),
    width: moderateScale(183),
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  logo: {
    height: 55,
    width: 55,
  },
  mainText: {
    ...commonStyles.fontBold16,
    fontStyle: 'italic',
    textAlign: 'center',
    color: colors.white,
  },
  textView: {
    height: 50,
    alignItems: 'center',
    backgroundColor: colors.red,
    justifyContent: 'center',
    marginBottom: 30,
    borderRadius: 30,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.blackOpacity70,
  },
  modalView: {
    marginHorizontal: 80,
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 20,
    height: 300,
  },
});
