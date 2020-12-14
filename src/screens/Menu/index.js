/* eslint-disable react-native/no-inline-styles */

import {SButton} from 'components';
import MenuItem from 'components/Menu/MenuItem';
import InfoUser from 'components/Profile/InfoUser';
import SCREENS from 'navigator';
import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

export default function Menu({navigation, route}) {
  const goToProfile = () => navigation.navigate(SCREENS.PROFILE.PROFILE);

  const logout = () => {
    // navigation.navigate(SCREENS.AUTH.LOGIN);
    navigation.reset({
      index: 0,
      routes: [{name: SCREENS.AUTH.LOGIN}],
    });
  };
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
        <InfoUser onPress={goToProfile} />
      </View>
      <View style={{paddingTop: 80, flex: 1, paddingHorizontal: 15}}>
        <MenuItem
          iconName="newspaper-outline"
          onPress={null}
          title="Bài đã đăng"
        />
        <MenuItem iconName="eye-outline" onPress={null} title="Bài đã xem" />
        <MenuItem iconName="pencil-outline" onPress={null} title="Đóng góp" />
      </View>

      <SButton
        titleLeft={'LOGOUT'}
        onPressLeft={logout}
        styleLeft={styles.logout}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  viewInfo: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginHorizontal: 15,
    position: 'absolute',
    top: 25,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  logout: {
    backgroundColor: '#3375f5',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});
