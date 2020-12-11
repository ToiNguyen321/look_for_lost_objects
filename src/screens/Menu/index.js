/* eslint-disable react-native/no-inline-styles */
import {COLORS, FONT_SIZE} from 'common/StyleCommon';
import {SButton, SText} from 'components';
import React, {useLayoutEffect} from 'react';
import {View, StyleSheet, Dimensions, StatusBar} from 'react-native';
import FastImage from 'react-native-fast-image';
import Ionicons from 'react-native-vector-icons/Ionicons';
const {width} = Dimensions.get('window');

export default function Menu({navigation, route}) {
  return (
    <View style={styles.container}>
      <View
        style={{
          width,
          height: 150,
          backgroundColor: '#3375f5',
        }}
      />
      <View style={styles.viewInfo}>
        <FastImage
          style={{width: 100, height: 100, borderRadius: 50}}
          source={{
            uri:
              'https://kenh14cdn.com/2019/3/24/g1-15534090814741528578945.jpg',
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.infoRight}>
          <SText style={styles.name}>Park Ji-hyo</SText>
          <SText style={styles.phone}>+84968666666</SText>
        </View>
      </View>
      <View style={{paddingTop: 80, flex: 1, paddingHorizontal: 15}}>
        <View style={styles.rowMenu}>
          <Ionicons name="list-circle" color="#3375f5" size={50} />
          <SText style={styles.titleMenu}>Menu</SText>
        </View>
        <View style={styles.rowMenu}>
          <Ionicons name="list-circle" color="#3375f5" size={50} />
          <SText style={styles.titleMenu}>Menu</SText>
        </View>
        <View style={styles.rowMenu}>
          <Ionicons name="list-circle" color="#3375f5" size={50} />
          <SText style={styles.titleMenu}>Menu</SText>
        </View>
        <View style={styles.rowMenu}>
          <Ionicons name="list-circle" color="#3375f5" size={50} />
          <SText style={styles.titleMenu}>Menu</SText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  viewInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    position: 'absolute',
    height: 170,
    top: 25,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 15,
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
  rowMenu: {
    // backgroundColor: '#fff',
    paddingVertical: 10,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  titleMenu: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 15,
  },
});
