import {FONT_SIZE, COLORS} from 'common/StyleCommon';
import {SButton, SText} from 'components';
import {routeParam} from 'navigator/NavigationService';
import React, {useEffect, useLayoutEffect} from 'react';
import {Dimensions, StyleSheet, View, ScrollView} from 'react-native';
import FastImage from 'react-native-fast-image';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const {width} = Dimensions.get('window');

const example = {
  id: 0,
  full_name: 'Nguyễn Văn Trỗi',
  created_at: '30/08/2020',
  address: 'Hoàng Mai, Hà Nội',
  images: [
    {
      id: '',
      url: 'https://file.hstatic.net/1000069970/file/mini-wallet_1024x1024.png',
    },
    {
      id: '',
      url: 'https://file.hstatic.net/1000069970/file/mini-wallet_1024x1024.png',
    },
    {
      id: '',
      url: 'https://file.hstatic.net/1000069970/file/mini-wallet_1024x1024.png',
    },
  ],
  title:
    'Culpa velit laboris ipsum do officia adipisicing proident laboris fugiat sit anim ipsum dolor eu.',
  descriptions:
    'Do duis irure nostrud anim duis ullamco reprehenderit sit nisi et sunt elit ipsum veniam. Minim occaecat consequat qui dolore aute Lorem. Laboris sunt fugiat commodo occaecat veniam adipisicing tempor consequat magna fugiat minim cillum nulla voluptate. Consectetur nostrud est enim reprehenderit. Et deserunt ut ut deserunt cupidatat. Occaecat occaecat sint reprehenderit deserunt cillum excepteur occaecat ut reprehenderit. Minim aliquip incididunt cillum eu id culpa excepteur incididunt Lorem aliqua irure labore.',
  content: `Exercitation ad nisi pariatur Lorem aliqua labore voluptate adipisicing Lorem. Nostrud sint Lorem eiusmod nostrud. Lorem aute mollit sunt deserunt minim sunt laborum adipisicing reprehenderit sunt.
      Nisi cupidatat eu aliquip nulla fugiat mollit dolore non id non deserunt cupidatat. Tempor nulla est eu veniam culpa laborum ipsum duis do nisi. Qui excepteur enim qui culpa id eiusmod ea. Irure sunt veniam aliqua duis. Veniam ut do fugiat laboris adipisicing irure eiusmod magna quis pariatur elit non.
      Occaecat excepteur anim in duis pariatur amet incididunt et esse exercitation minim. Sunt nostrud aute reprehenderit consectetur ut aute voluptate voluptate velit laboris consequat aliquip est. Consectetur cupidatat voluptate consectetur cillum labore Lorem Lorem labore aliqua laborum fugiat consectetur enim. Incididunt eiusmod enim esse exercitation irure proident mollit fugiat cupidatat nulla. Fugiat proident laborum aliquip sint id irure anim pariatur consectetur nostrud non ea culpa ad.
      Sunt adipisicing exercitation qui aliqua esse irure nisi. Commodo laboris nostrud eu ad nisi incididunt sint elit labore. Ipsum pariatur pariatur nostrud consectetur aliquip ullamco nulla do officia exercitation cupidatat. Dolor reprehenderit magna consequat est nisi laborum.
      Minim esse proident mollit cupidatat culpa. Sit veniam quis anim ea do et excepteur. Ullamco quis sit qui aute cupidatat occaecat tempor id sint duis. Sit ea est laborum nisi id qui occaecat nisi elit ipsum id. Lorem officia dolore cupidatat minim mollit. Enim eu dolore eu non sunt officia laborum.`,
};

const HomeDetail = ({navigation, route}) => {
  const ID = routeParam(route, 'id', null);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Chi tiết bài đăng',
    });
  }, [navigation]);

  useEffect(() => {}, [ID]);

  const renderImage = (item, index) => {
    return (
      <FastImage
        key={`${index}`}
        style={styles.image}
        source={{
          uri: item.url,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
    );
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <ScrollView
          horizontal
          contentContainerStyle={styles.images}
          showsHorizontalScrollIndicator={false}
          pagingEnabled>
          {example.images.map(renderImage)}
        </ScrollView>
        <View style={styles.content}>
          <SText style={styles.title}>{example.title}</SText>
          <View style={styles.info}>
            <View style={styles.viewMap}>
              <FontAwesome name="user" color={COLORS.GRAY} size={17} />
              <SText style={styles.name}>{example.full_name}</SText>
            </View>
            <View style={styles.viewBottom}>
              <View style={styles.viewUser}>
                <FontAwesome name="map-marker" color={COLORS.GRAY} size={18} />
                <SText numberOfLines={1} style={styles.address}>
                  {example.address}
                </SText>
              </View>

              <View style={styles.viewUser}>
                <FontAwesome name="clock-o" color={COLORS.GRAY} size={17} />
                <SText style={styles.name}>{example.created_at}</SText>
              </View>
            </View>
          </View>

          <SText style={styles.descriptions}>{example.content}</SText>
        </View>
      </ScrollView>
      <SButton
        onPressLeft={() => {}}
        titleLeft={'Nhắn tin'}
        onPressRight={() => {}}
        titleRight={'Gọi điện'}
      />
    </>
  );
};

export default HomeDetail;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 70,
  },
  images: {
    height: 250,
    marginBottom: 20,
  },
  image: {
    flex: 1,
    width,
    // height: null,
  },
  content: {
    flex: 1,
    marginHorizontal: 15,
  },
  title: {
    fontSize: FONT_SIZE.HEADER,
    fontWeight: 'bold',
    color: COLORS.BLACK,
    marginBottom: 20,
  },
  descriptions: {
    fontWeight: '400',
    fontSize: FONT_SIZE.CONTENT,
  },
  info: {
    borderRadius: 5,
    borderWidth: 0.7,
    padding: 10,
    marginBottom: 15,
  },
  viewBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewMap: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 5,
  },
  address: {
    fontSize: FONT_SIZE.DESCRIPTION,
    color: COLORS.gray,
    marginLeft: 10,
  },
  viewUser: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    marginLeft: 10,
    color: COLORS.gray,
    fontSize: FONT_SIZE.DESCRIPTION,
  },
});
