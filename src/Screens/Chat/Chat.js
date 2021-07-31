import React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import {moderateScaleVertical} from '../../styles/responsiveSize';

const Chat = () => {
  const itemSeperator = () => (
    <View
      style={styles.seperator}
    />);

  return (
    <View style={styles.mainView}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={['', '', '', '', '' , "", '' , '']}
        ItemSeparatorComponent={itemSeperator}
        renderItem={(item, index) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                margin: 10,
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Image
                    source={imagePath.profile}
                    style={{height: 70, width: 70, borderRadius: 70 / 2}}
                  />
                </View>

                <View
                  style={{
                    marginLeft: moderateScaleVertical(20),
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                  }}>
                  <Text style={styles.personName}>Insta Share</Text>
                  <Text
                    style={[commonStyles.fontSize13, {color: colors.textGray}]}>
                    Last chats to be shown Here
                  </Text>
                </View>
              </View>

              <View>
                <Text style={styles.dateText}>30 March</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
export default Chat;

const styles = StyleSheet.create({
  dateText: {
    ...commonStyles.fontSize12,
    color: colors.textGray,
  },

  personName: {
    ...commonStyles.fontBold16,
    color: colors.dark,
  },
  mainView: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  seperator : {
    borderTopWidth: 1,
        borderColor: colors.border,
  }
});
