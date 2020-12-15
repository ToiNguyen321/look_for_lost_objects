import React, {useEffect} from 'react';
import {StyleSheet, View, FlatList, LogBox, SectionList} from 'react-native';
import HomeItem from 'components/Home/HomeItem';
import stylesGlobal from 'theme/stylesGlobal';
import {BORDER_RADIUS, COLORS, FONT_SIZE} from 'common/StyleCommon';
import {ActionButton, SText} from 'components';
import SCREENS from 'navigator';
import {useDispatch} from 'react-redux';
import {S_ACTIONS} from 'store/sagas/sagaActions';
const dataExample = [
  {
    id: 0,
    full_name: 'Nguyễn Văn Trỗi',
    created_at: '30/08/2020',
    address: 'Hoàng Mai, Hà Nội',
    title:
      'Culpa velit laboris ipsum do officia adipisicing proident laboris fugiat sit anim ipsum dolor eu.',
    descriptions:
      'Do duis irure nostrud anim duis ullamco reprehenderit sit nisi et sunt elit ipsum veniam. Minim occaecat consequat qui dolore aute Lorem. Laboris sunt fugiat commodo occaecat veniam adipisicing tempor consequat magna fugiat minim cillum nulla voluptate. Consectetur nostrud est enim reprehenderit. Et deserunt ut ut deserunt cupidatat. Occaecat occaecat sint reprehenderit deserunt cillum excepteur occaecat ut reprehenderit. Minim aliquip incididunt cillum eu id culpa excepteur incididunt Lorem aliqua irure labore.',
    content: `Exercitation ad nisi pariatur Lorem aliqua labore voluptate adipisicing Lorem. Nostrud sint Lorem eiusmod nostrud. Lorem aute mollit sunt deserunt minim sunt laborum adipisicing reprehenderit sunt.
        Nisi cupidatat eu aliquip nulla fugiat mollit dolore non id non deserunt cupidatat. Tempor nulla est eu veniam culpa laborum ipsum duis do nisi. Qui excepteur enim qui culpa id eiusmod ea. Irure sunt veniam aliqua duis. Veniam ut do fugiat laboris adipisicing irure eiusmod magna quis pariatur elit non.
        Occaecat excepteur anim in duis pariatur amet incididunt et esse exercitation minim. Sunt nostrud aute reprehenderit consectetur ut aute voluptate voluptate velit laboris consequat aliquip est. Consectetur cupidatat voluptate consectetur cillum labore Lorem Lorem labore aliqua laborum fugiat consectetur enim. Incididunt eiusmod enim esse exercitation irure proident mollit fugiat cupidatat nulla. Fugiat proident laborum aliquip sint id irure anim pariatur consectetur nostrud non ea culpa ad.
        Sunt adipisicing exercitation qui aliqua esse irure nisi. Commodo laboris nostrud eu ad nisi incididunt sint elit labore. Ipsum pariatur pariatur nostrud consectetur aliquip ullamco nulla do officia exercitation cupidatat. Dolor reprehenderit magna consequat est nisi laborum.
        Minim esse proident mollit cupidatat culpa. Sit veniam quis anim ea do et excepteur. Ullamco quis sit qui aute cupidatat occaecat tempor id sint duis. Sit ea est laborum nisi id qui occaecat nisi elit ipsum id. Lorem officia dolore cupidatat minim mollit. Enim eu dolore eu non sunt officia laborum.`,
  },
  {
    id: 1,
    full_name: 'Nguyễn Văn Trỗi',
    created_at: '30/08/2020',
    address: 'Hoàng Mai, Hà Nội',
    title:
      'Culpa velit laboris ipsum do officia adipisicing proident laboris fugiat sit anim ipsum dolor eu.',
    descriptions: `Do duis irure nostrud anim duis ullamco reprehenderit sit nisi et sunt elit ipsum veniam. Minim occaecat consequat qui dolore aute Lorem. Laboris sunt fugiat commodo occaecat veniam adipisicing tempor consequat magna fugiat minim cillum nulla voluptate. Consectetur nostrud est enim reprehenderit. Et deserunt ut ut deserunt cupidatat. Occaecat occaecat sint reprehenderit deserunt cillum excepteur occaecat ut reprehenderit. Minim aliquip incididunt cillum eu id culpa excepteur incididunt Lorem aliqua irure labore.
        Consequat et consectetur incididunt irure. Ad mollit esse occaecat duis do deserunt ullamco nulla culpa aliquip deserunt aliqua. Non excepteur Lorem ullamco culpa consectetur occaecat consectetur deserunt. Voluptate magna irure voluptate incididunt nulla amet irure. Enim ipsum exercitation velit nostrud enim est consequat aliqua laboris cillum. Ullamco officia labore adipisicing ipsum nostrud laborum minim tempor occaecat reprehenderit. Laborum dolore enim nulla cupidatat ullamco fugiat.`,
    content: `Exercitation ad nisi pariatur Lorem aliqua labore voluptate adipisicing Lorem. Nostrud sint Lorem eiusmod nostrud. Lorem aute mollit sunt deserunt minim sunt laborum adipisicing reprehenderit sunt.
        Nisi cupidatat eu aliquip nulla fugiat mollit dolore non id non deserunt cupidatat. Tempor nulla est eu veniam culpa laborum ipsum duis do nisi. Qui excepteur enim qui culpa id eiusmod ea. Irure sunt veniam aliqua duis. Veniam ut do fugiat laboris adipisicing irure eiusmod magna quis pariatur elit non.
        Occaecat excepteur anim in duis pariatur amet incididunt et esse exercitation minim. Sunt nostrud aute reprehenderit consectetur ut aute voluptate voluptate velit laboris consequat aliquip est. Consectetur cupidatat voluptate consectetur cillum labore Lorem Lorem labore aliqua laborum fugiat consectetur enim. Incididunt eiusmod enim esse exercitation irure proident mollit fugiat cupidatat nulla. Fugiat proident laborum aliquip sint id irure anim pariatur consectetur nostrud non ea culpa ad.
        Sunt adipisicing exercitation qui aliqua esse irure nisi. Commodo laboris nostrud eu ad nisi incididunt sint elit labore. Ipsum pariatur pariatur nostrud consectetur aliquip ullamco nulla do officia exercitation cupidatat. Dolor reprehenderit magna consequat est nisi laborum.
        Minim esse proident mollit cupidatat culpa. Sit veniam quis anim ea do et excepteur. Ullamco quis sit qui aute cupidatat occaecat tempor id sint duis. Sit ea est laborum nisi id qui occaecat nisi elit ipsum id. Lorem officia dolore cupidatat minim mollit. Enim eu dolore eu non sunt officia laborum.`,
  },
  {
    id: 2,
    full_name: 'Nguyễn Văn Trỗi',
    created_at: '30/08/2020',
    address: 'Hoàng Mai, Hà Nội',
    title: 'Incididunt nisi cupidatat fugiat consectetur elit cillum.',
    descriptions: `Do duis irure nostrud anim duis ullamco reprehenderit sit nisi et sunt elit ipsum veniam. Minim occaecat consequat qui dolore aute Lorem. Laboris sunt fugiat commodo occaecat veniam adipisicing tempor consequat magna fugiat minim cillum nulla voluptate. Consectetur nostrud est enim reprehenderit. Et deserunt ut ut deserunt cupidatat. Occaecat occaecat sint reprehenderit deserunt cillum excepteur occaecat ut reprehenderit. Minim aliquip incididunt cillum eu id culpa excepteur incididunt Lorem aliqua irure labore.
        Consequat et consectetur incididunt irure. Ad mollit esse occaecat duis do deserunt ullamco nulla culpa aliquip deserunt aliqua. Non excepteur Lorem ullamco culpa consectetur occaecat consectetur deserunt. Voluptate magna irure voluptate incididunt nulla amet irure. Enim ipsum exercitation velit nostrud enim est consequat aliqua laboris cillum. Ullamco officia labore adipisicing ipsum nostrud laborum minim tempor occaecat reprehenderit. Laborum dolore enim nulla cupidatat ullamco fugiat.`,
    content: `Exercitation ad nisi pariatur Lorem aliqua labore voluptate adipisicing Lorem. Nostrud sint Lorem eiusmod nostrud. Lorem aute mollit sunt deserunt minim sunt laborum adipisicing reprehenderit sunt.
        Nisi cupidatat eu aliquip nulla fugiat mollit dolore non id non deserunt cupidatat. Tempor nulla est eu veniam culpa laborum ipsum duis do nisi. Qui excepteur enim qui culpa id eiusmod ea. Irure sunt veniam aliqua duis. Veniam ut do fugiat laboris adipisicing irure eiusmod magna quis pariatur elit non.
        Occaecat excepteur anim in duis pariatur amet incididunt et esse exercitation minim. Sunt nostrud aute reprehenderit consectetur ut aute voluptate voluptate velit laboris consequat aliquip est. Consectetur cupidatat voluptate consectetur cillum labore Lorem Lorem labore aliqua laborum fugiat consectetur enim. Incididunt eiusmod enim esse exercitation irure proident mollit fugiat cupidatat nulla. Fugiat proident laborum aliquip sint id irure anim pariatur consectetur nostrud non ea culpa ad.
        Sunt adipisicing exercitation qui aliqua esse irure nisi. Commodo laboris nostrud eu ad nisi incididunt sint elit labore. Ipsum pariatur pariatur nostrud consectetur aliquip ullamco nulla do officia exercitation cupidatat. Dolor reprehenderit magna consequat est nisi laborum.
        Minim esse proident mollit cupidatat culpa. Sit veniam quis anim ea do et excepteur. Ullamco quis sit qui aute cupidatat occaecat tempor id sint duis. Sit ea est laborum nisi id qui occaecat nisi elit ipsum id. Lorem officia dolore cupidatat minim mollit. Enim eu dolore eu non sunt officia laborum.`,
  },
];

export default function Home({navigation, route}) {
  const dispatch = useDispatch();

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  useEffect(() => {
    console.log(
      '🚀 ~ file: index.js ~ line 123 ~ fetchList ~ S_ACTIONS',
      S_ACTIONS,
    );

    fetchList();
  });

  const fetchList = () => {
    dispatch(S_ACTIONS.newsPending({}));
  };

  const renderItem = ({item, index}) => {
    const onPress = () =>
      navigation.navigate(SCREENS.HOME.DETAIL, {id: item.id});
    return <HomeItem item={item} onPress={onPress} />;
  };

  const renderItem2 = ({item, index}) => {
    const onPress = () =>
      navigation.navigate(SCREENS.HOME.DETAIL, {id: item.id});
    return <HomeItem item={item} onPress={onPress} paddingBottom={15} />;
  };

  const headerComponent = () => (
    <View style={styles.viewNews}>
      <SText style={styles.title}>Tin nổi bật</SText>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        data={dataExample}
        renderItem={renderItem}
        keyExtractor={(i) => `${i.id}`}
      />
    </View>
  );

  const sectionHeader = ({section: {title}}) => (
    <SText style={styles.title}>{title}</SText>
  );

  const sections = [
    {title: 'Danh Mục A', data: dataExample},
    {title: 'Danh Mục B', data: dataExample},
  ];

  return (
    <View style={[stylesGlobal.container]}>
      <SectionList
        refreshing={false}
        onRefresh={fetchList}
        ListHeaderComponent={headerComponent}
        sections={sections}
        renderItem={renderItem2}
        keyExtractor={(i) => `${i.id}`}
        renderSectionHeader={sectionHeader}
        stickySectionHeadersEnabled={false}
        contentContainerStyle={styles.contentContainerStyle}
      />
      <ActionButton
        buttonsDefault={[
          {
            backgroundColor: COLORS.BLACK,
            onPress: () => navigation.navigate(SCREENS.HOME.ADD),
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 70,
  },
  viewNews: {
    marginBottom: 20,
  },
  title: {
    marginHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 5,
    fontSize: FONT_SIZE.BIG_HEADER,
    fontWeight: 'bold',
    color: COLORS.BLACK,
    borderRadius: BORDER_RADIUS.VERY_SMALL,
    overflow: 'hidden',
  },
  flatListContent: {
    backgroundColor: '#fff',
  },
});
