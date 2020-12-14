import {COLORS, FONT_SIZE} from 'common/StyleCommon';
import {SText} from 'components';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';

const InfoUser = ({onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={styles.viewInfo}>
      <FastImage
        style={styles.image}
        source={{
          uri: 'https://kenh14cdn.com/2019/3/24/g1-15534090814741528578945.jpg',
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.infoRight}>
        <SText style={styles.name}>Park Ji-hyo</SText>
        <SText style={styles.phone}>+8496 866 6666</SText>
      </View>
    </TouchableOpacity>
  );
};

export default InfoUser;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  viewInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 170,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  infoRight: {
    marginLeft: 20,
  },
  name: {
    fontWeight: 'bold',
    fontSize: FONT_SIZE.HEADER,
    marginBottom: 10,
  },
  phone: {
    color: COLORS.GRAY,
  },
});
