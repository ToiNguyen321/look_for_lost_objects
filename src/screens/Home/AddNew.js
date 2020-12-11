import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SButton, SInput} from 'components';
import {BORDER_RADIUS, DIMENTSIONS} from 'common/StyleCommon';
import SCREENS from 'navigator';
import ImagePicker from 'react-native-image-crop-picker';

const configPickerMultiImage = {
  compressImageMaxWidth: 1376,
  compressImageMaxHeight: 768,
  multiple: true,
  mediaType: 'photo',
  maxFiles: 10,
};

const AddNew = ({navigation, route}) => {
  const pickerImage = () => {
    ImagePicker.openPicker(configPickerMultiImage)
      .then((images) => {
        if (images.length === 0) {
          return;
        }
        console.log('🚀 ~ file: AddNew.js ~ line 19 ~ .then ~ images', images);
      })
      .catch((e) => console.log(e));
  };

  const openCamera = () => {
    ImagePicker.openCamera(configPickerMultiImage)
      .then((images) => {
        if (!images) {
          return;
        }
        console.log(
          '🚀 ~ file: AddNew.js ~ line 31 ~ openCamera ~ images',
          images,
        );
      })
      .catch((e) => console.log(e));
  };
  return (
    <View style={styles.flex}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <SInput title="Tiêu đề" />
        <SInput title="Mô tả ngắn" multiline inputHeight={60} />
        <SInput title="Thể loại" onPress={() => {}} />
        <SInput
          title="Thêm ảnh (tối đa 5 ảnh)"
          onPress={pickerImage}
          switchScreen
          iconRight
        />
        <View style={styles.images}>
          <View style={styles.image} />
          <View style={styles.image} />
          <View style={styles.image} />
          <View style={styles.image} />
          <View style={styles.image} />
        </View>
        <SInput
          title="Địa chỉ"
          onPress={() =>
            navigation.navigate(SCREENS.COMMON.CHOOSE_ADDRESS, {
              cityId: 0,
              districtId: 0,
            })
          }
          switchScreen
          iconRight
        />
        <SInput title="Nội dung" multiline inputHeight={150} />
      </ScrollView>
      <SButton titleLeft="Đăng bài" onPressLeft={() => {}} />
    </View>
  );
};

export default AddNew;

const styles = StyleSheet.create({
  flex: {
    backgroundColor: '#fff',
    flex: 1,
  },
  scrollView: {
    paddingHorizontal: 15,
    paddingBottom: 70,
    flexGrow: 1,
  },
  images: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    width: (DIMENTSIONS.WIDTH - 30) / 4 - 10,
    height: (DIMENTSIONS.WIDTH - 30) / 4 - 10,
    backgroundColor: 'gray',
    marginRight: 10,
    marginTop: 10,
    borderRadius: BORDER_RADIUS.VERY_SMALL,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
