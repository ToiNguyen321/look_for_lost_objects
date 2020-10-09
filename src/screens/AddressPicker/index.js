import React, { useLayoutEffect, useState, useEffect } from 'react'
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  View,
  TouchableOpacity,
  FlatList,
  Keyboard,
  Text
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SInput, SButtonShadow } from 'components';

import address_code from './address_code.json';
import address_data from './address_data_full.json';
import address_data_alias from './address_data_alias.json';
import address_data_full_alias from './address_data_full_alias.json';
import validate from './Validate';
import { COLORS } from 'common/StyleCommon';

function* filter(array, condition, maxSize) {
  if (!maxSize || maxSize > array.length) {
    maxSize = array.length;
  }
  let count = 0;
  let i = 0;
  while (count < maxSize && i < array.length) {
    if (condition(array[i])) {
      yield i;
      count++;
    }
    i++;
  }
}

/**
 * Search address, edit address, please push require params below
 * @param address full address include district and city
 * @param cityId ID of city (nullable), use "city" from API
 * @param districtId ID of district (nullable), use "district" from API
 */
export default AddressPicker = ({ navigation, route, ...props }) => {

  const callback = route?.params?.callback ?? ((address, district, city) => console.log('AddressPicker --> put your address callback on params when use AddressPicker'));
  const [address, setAddress] = useState(route?.params?.address ?? '');
  const [cityId, setCityId] = useState(null);
  const [districtId, setDistrictId] = useState(null);

  const [address2, setAddress2] = useState('');
  const [errors, setErrors] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    // find district and city name
    const cityId = route?.params?.cityId
    const districtId = route?.params?.districtId
    const index = address_code.indexOf(`${cityId},${districtId}`);

    if (index >= 0) {
      setAddress2(`${address_data[index]}`);
    }
  }, []);

  useEffect(() => {
    // find district and city id
    const index = address_data.indexOf(address2);
    if (index >= 0) {
      const ids = address_code[index].split(',');
      setCityId(ids[0]);
      setDistrictId(ids[1]);
    } else {
      setCityId(null);
      setDistrictId(null);
    }
  }, [address2])

  useEffect(() => {
    const array1 = Array.from(filter(address_data_full_alias, (x) => x.includes(change_alias(address2)), 25));
    const array2 = Array.from(filter(address_data_alias, (x) => x.includes(change_alias(address2)), 25));

    setData(array1 ?? array2);
  }, [address2]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Chọn địa chỉ',
      headerLeft: null,
      headerRight: () => (<TouchableOpacity
        style={{ marginRight: 10 }}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="close" color={COLORS.BLUE} size={22.5} />
      </TouchableOpacity>),
    })
  }, [])

  const confirmAddress = () => {
    let errors = {};
    if (!validate.length(address)) {
      errors.address = 'Vui lòng nhập đúng địa chỉ';
    } else {
      errors.address = null;
    }
    if (!cityId || !districtId) {
      errors.address2 = 'Vui lòng nhập đúng Quận/Huyện và Tỉnh/Thành Phố';
    } else {
      errors.address2 = null;
    }
    setErrors(errors);
    // console.log("confirmAddress -> errors", errors)

    if (errors.address || errors.address2) return;

    const ss = address2.split(', ');
    callback({
      address,
      district: ss[0],
      city: ss[1],
      cityId,
      districtId,
    });
    Keyboard.dismiss();
    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView
      style={styles.modal}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === 'android' ? -335 : 100}
    >
      <View style={styles.container}>
        <SInput
          title={"Địa chỉ cụ thể"}
          value={address}
          placeholder='Số nhà, tòa nhà, tên đường, xã/phường...'
          autoCorrect={false}
          onChangeText={text => {
            setErrors({ ...errors, address: text ? null : 'Vui lòng nhập đúng địa chỉ' })
            setAddress(text)
          }}
          error={errors.address}
        />

        <SInput
          title={"Quận/Huyện, Tỉnh/Thành Phố"}
          multiline={true}
          numberOfLines={2}
          autoCorrect={false}
          value={address2}
          onChangeText={text => {
            setErrors({ ...errors, address2: validate.length(text) ? null : 'Vui lòng nhập đúng Quận/Huyện và Tỉnh/Thành Phố' });
            setAddress2(text)
          }}
          error={errors.address2}
          // borderStyle={{ minHeight: undefined }}
          icon={(address2 === '') ? null : (
            <TouchableOpacity style={{
              alignSelf: 'center',
              paddingLeft: 8
            }}
              hitSlop={{ left: 10, right: 10, bottom: 10, top: 10 }}
              onPress={() => setAddress2('')}>
              <AntDesign name="closecircle" color='#8e8e8e' size={18} />
            </TouchableOpacity>
          )}
        />
        <FlatList
          data={data}
          style={{ flex: 1 }}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() => {
                setErrors({ ...errors, address2: null });
                setAddress2(address_data[item]);
              }}>
              <Text style={styles.itemText}>{address_data[item]}</Text>
              {districtId ? (<MaterialCommunityIcons name="checkbox-marked-circle-outline" color={COLORS.GREEN} size={18} />) : null}
            </TouchableOpacity>
          )}
          keyExtractor={(_, index) => `${index}`}
          ListFooterComponent={() => (
            <View>
              <Text style={styles.footerText}>......{'\n\n'}Để tìm chính xác địa chỉ, vui lòng nhập địa chỉ của bạn vào ô tìm kiếm xã, quận, tỉnh,...</Text>
            </View>
          )}
        />
      </View>
      {/* <SButtonShadow
        title={'Lưu'}
        animation={false}
        noPosition={true}
        hideWhenKeyboardAppears={false}
        onPress={() => confirmAddress()}
      /> */}

    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: '#fff'
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    paddingHorizontal: 10,
  },
  header: {
    marginHorizontal: 10,
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  titleHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  btn: {
    height: 45,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: COLORS.BLUE
  },
  textBtn: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 15,
  },
  itemText: {
    paddingBottom: 10,
    paddingTop: 15,
    flex: 1,
  },
  itemContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  footerText: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    paddingTop: 15,
    color: '#5e5e5e'
  }
})

export function change_alias(alias, toLowerCase = true) {
  var str = alias;
  if (toLowerCase) {
    str = str.toLowerCase();
  } else {
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
  }
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.trim();
  return str;
}

export function fullAddress(address, cityId = '', districtId = '') {
  const index = address_code.indexOf(`${cityId},${districtId}`);
  if (index >= 0) {
    return `${address}, ${address_data[index]}`;
  } else {
    return `${address ?? ''}`;
  }
}