import {SText} from 'components';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MenuItem = ({iconName, iconSize, onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.rowMenu}>
      <Ionicons name={iconName} color="#3375f5" size={iconSize || 35} />
      <SText style={styles.titleMenu}>{title}</SText>
    </TouchableOpacity>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  rowMenu: {
    paddingHorizontal: 10,
    backgroundColor: '#fff',
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
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 15,
  },
});
