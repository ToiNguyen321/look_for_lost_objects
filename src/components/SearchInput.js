import React, {useState, forwardRef} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import SActivityIndicator from './SActivityIndicator';
import {COLORS} from 'common/StyleCommon';

const SearchInput = forwardRef(
  (
    {
      loading,
      style,
      inputStyle,
      marginHorizontal,
      onFocus,
      onBlur,
      onClear,
      ...props
    },
    ref,
  ) => {
    const [focus, setFocus] = useState(false);
    let borderStyle = {
      borderColor: focus ? COLORS.BLUE : COLORS.BLACK,
    };

    const onFocus_ = (e) => {
      setFocus(true);
      onFocus && onFocus(e);
    };
    const onBlur_ = (e) => {
      setFocus(false);
      onBlur && onBlur(e);
    };

    let isClear =
      onClear && props?.value !== '' && typeof props?.value !== 'undefined';

    return (
      <View style={[styles.container, {marginHorizontal}, borderStyle, style]}>
        <Icon name="search1" color="#C3C4CA" size={18} />
        <TextInput
          style={[styles.textInput, inputStyle]}
          placeholder="Tìm kiếm..."
          placeholderTextColor="#C3C4CA"
          onFocus={onFocus_}
          onBlur={onBlur_}
          ref={ref}
          {...props}
        />
        {isClear && (
          <TouchableOpacity
            onPress={onClear}
            hitSlop={{top: 5, right: 5, left: 5, bottom: 5}}>
            <Icon name="closecircleo" color={'#000'} size={18} />
          </TouchableOpacity>
        )}
        {loading && <SActivityIndicator size={28} color="#101A28" />}
      </View>
    );
  },
);

SearchInput.defaultProps = {
  loading: false,
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#E7E8EB',
  },
  textInput: {
    fontSize: 15,
    color: '#101A28',
    backgroundColor: '#fff',
    flex: 1,
    height: 40,
    paddingVertical: 0,
    marginVertical: 0,
    marginHorizontal: 10,
    paddingHorizontal: 0,
    // fontFamily: 'SFProText-Regular'
  },
});
