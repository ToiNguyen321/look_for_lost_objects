import React, {useEffect, useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SearchInput} from 'components';
import stylesGlobal from 'theme/stylesGlobal';

export default function Search() {
  const refInput = useRef(null);

  useEffect(() => {
    refInput.current && refInput.current.focus();
  }, []);

  return (
    <View style={[stylesGlobal.container]}>
      <SearchInput ref={refInput} style={styles.searchInput} />
      <Text>Search</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  searchInput: {marginHorizontal: 15, marginBottom: 15, marginTop: 10},
});
