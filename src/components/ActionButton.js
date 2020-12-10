/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useRef, useEffect, useState} from 'react';
import {
  StyleSheet,
  Animated,
  TouchableOpacity,
  Keyboard,
  View,
  SafeAreaView,
  Dimensions,
  Platform,
} from 'react-native';
import Modal from 'react-native-modal';
import {useFocusEffect} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('window');
const WIDTH_ITEM = 50;
const HEIGHT_ITEM = 65;
const BACKGROUND_COLOR = '#101A28';
const MARGIN_TOP_ITEM = 15;

ActionButton.defaultProps = {
  bottom: 15,
  right: 15,
  itemWidth: Platform.OS === 'android' ? 50 : 55,
  spaceBetweenButton: 15,
  buttonsChildren: [],
  backgroundColorText: '#69748B',
  colorText: '#fff',
};

export default function ActionButton({
  buttonsDefault,
  buttonsChildren,
  showChildren,
  itemWidth,
  spaceBetweenButton,
  right,
  backgroundColorText,
  colorText,
  bottom,
  ...props
}) {
  const CONFIG = useRef({
    ITEM_WIDTH: itemWidth,
    ITEM_HEIGHT: itemWidth + spaceBetweenButton,
    BACKGROUND_COLOR: '#101A28',
    MARGIN_TOP_ITEM: spaceBetweenButton,
    RIGHT: right,
    BOTTOM: bottom,
  });

  const {
    ITEM_WIDTH,
    ITEM_HEIGHT,
    BOTTOM,
    RIGHT,
    MARGIN_TOP_ITEM,
  } = CONFIG.current;

  const HeightViewDefault = buttonsDefault.length * ITEM_HEIGHT + BOTTOM;

  const positionX = useRef({
    x: 0,
    y: 0,
  });

  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const openModal = () => {
    setIsVisibleModal(true);
    buttonsChildren.length > 0 && showListBtn();
  };

  const close = () => {
    hideListBtn();
    setTimeout(() => {
      setIsVisibleModal(false);
    }, 100);
  };

  const translationY = useRef(new Animated.Value(HeightViewDefault));

  const showAdd = () => {
    Animated.timing(translationY.current, {
      duration: 300,
      toValue: 0,
      delay: 300,
      useNativeDriver: true,
    }).start();
  };

  const hideAdd = useCallback(() => {
    Animated.timing(translationY.current, {
      duration: 250,
      toValue: HeightViewDefault + 20,
      useNativeDriver: true,
    }).start();
  }, [HeightViewDefault]);

  useFocusEffect(
    useCallback(() => {
      showAdd();
      return () => hideAdd();
    }, [hideAdd]),
    [],
  );

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', hideAdd);
    Keyboard.addListener('keyboardDidHide', showAdd);

    // cleanup function
    return () => {
      Keyboard.removeListener('keyboardDidShow', hideAdd);
      Keyboard.removeListener('keyboardDidHide', showAdd);
    };
  }, [hideAdd]);

  const stylez = {
    transform: [
      {
        translateY: translationY.current,
      },
    ],
  };

  const animatedBtn = useRef(new Animated.Value(0));
  const animatedText = useRef(new Animated.Value(0));

  const showListBtn = () => {
    Animated.sequence([
      Animated.timing(animatedBtn.current, {
        duration: 200,
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.spring(animatedText.current, {
        duration: 100,
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const hideListBtn = () => {
    Animated.sequence([
      Animated.timing(animatedText.current, {
        duration: 50,
        toValue: 0,
        useNativeDriver: true,
      }),
      Animated.timing(animatedBtn.current, {
        duration: 100,
        toValue: 0,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const opacityButtonDefault = animatedBtn.current.interpolate({
    inputRange: [0, 0.1, 1],
    outputRange: [1, 0, 0],
  });

  const renderButtonDefault = ({icon, backgroundColor, ...propsBtn}, index) => {
    if (index === buttonsDefault.length - 1 && !propsBtn.onPress) {
      propsBtn.onPress = openModal;
    }
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        key={`d-${index}`}
        style={[
          styles.viewIconChildren,
          styles.btnDefault,
          styles.shadow,
          backgroundColor && {backgroundColor},
          {
            width: ITEM_WIDTH,
            height: ITEM_WIDTH,
            borderRadius: ITEM_WIDTH / 2,
            marginTop: MARGIN_TOP_ITEM,
            opacity: opacityButtonDefault,
          },
        ]}
        {...propsBtn}>
        {icon ?? <AntDesign color={'#fff'} size={20} name={'plus'} />}
      </TouchableOpacity>
    );
  };

  const iconRotate = animatedBtn.current.interpolate({
    inputRange: [0, 1],
    outputRange: ['90deg', '0deg'],
  });

  const styleViewIcon = {
    transform: [
      {
        scale: animatedBtn.current,
      },
    ],
  };

  const textTranslateX = animatedText.current.interpolate({
    inputRange: [0, 1],
    outputRange: [30, 0],
  });

  const styleText = {
    opacity: animatedText.current,
    transform: [
      {
        translateX: textTranslateX,
      },
      {
        scale: animatedText.current,
      },
    ],
  };

  return (
    <>
      <View style={[styles.container, {right: RIGHT}]}>
        <SafeAreaView style={[styles.flex, styles.safeAreaView]}>
          <Animated.View
            onLayout={(e) => {
              const {x, y} = e.nativeEvent.layout;
              let heightMinus = BOTTOM;
              if (buttonsDefault?.length > 2) {
                heightMinus =
                  (buttonsDefault?.length - 2) * ITEM_HEIGHT + BOTTOM;
              }
              positionX.current = {x, y: y};
            }}
            style={[
              styles.btnAddNew,
              stylez,
              {
                bottom: BOTTOM,
                right: 0,
                width: ITEM_WIDTH,
              },
            ]}>
            {buttonsDefault.map(renderButtonDefault)}
          </Animated.View>
        </SafeAreaView>
      </View>
      {buttonsChildren?.length > 0 && (
        <Modal
          isVisible={isVisibleModal}
          useNativeDriver={true}
          // onBackdropPress={close}
          style={{margin: 0, padding: 0}}
          animationInTiming={10}
          animationOutTiming={10}
          avoidKeyboard={false}
          hideModalContentWhileAnimating
          backdropColor="#647291"
          backdropOpacity={0.4}
          swipeDirection="up"
          onModalWillHide={hideListBtn}>
          <SafeAreaView style={styles.flex}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={close}
              style={styles.flex}>
              <View
                style={{
                  position: 'absolute',
                  minHeight: ITEM_HEIGHT,
                  right: RIGHT,
                  bottom: BOTTOM + (props.addBottom ? props.addBottom : 0),
                }}>
                {buttonsChildren.map(
                  (
                    {label, icon, backgroundColor, onPress, ...propsBtn},
                    index,
                  ) => {
                    const stylesViewIcon =
                      index !== buttonsChildren.length - 1
                        ? styleViewIcon
                        : {
                            transform: [
                              {
                                rotate: iconRotate,
                              },
                            ],
                          };
                    return (
                      <TouchableOpacity
                        key={`list-${index}`}
                        style={[
                          styles.btnChildren,
                          {
                            height: ITEM_WIDTH,
                            marginTop: MARGIN_TOP_ITEM,
                          },
                        ]}
                        onPress={() => {
                          close();
                          onPress && onPress();
                        }}
                        {...propsBtn}
                        activeOpacity={0.85}>
                        {label && (
                          <Animated.View style={[styles.viewText, styleText]}>
                            <Animated.Text
                              numberOfLines={2}
                              style={[
                                styles.textChildren,
                                {opacity: animatedText.current},
                                {
                                  backgroundColor: backgroundColorText,
                                  color: colorText,
                                },
                              ]}>
                              {label}
                            </Animated.Text>
                          </Animated.View>
                        )}
                        <Animated.View
                          style={[
                            styles.viewIconChildren,
                            stylesViewIcon,
                            styles.shadow,
                            backgroundColor && {backgroundColor},
                            {
                              width: ITEM_WIDTH,
                              height: ITEM_WIDTH,
                              borderRadius: ITEM_WIDTH / 2,
                            },
                          ]}>
                          {icon}
                        </Animated.View>
                      </TouchableOpacity>
                    );
                  },
                )}
              </View>
            </TouchableOpacity>
          </SafeAreaView>
        </Modal>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    // backgroundColor: '#00000044'
  },
  container: {
    position: 'absolute',
    bottom: 0,
    right: 15,
  },
  safeAreaView: {
    backgroundColor: 'transparent',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  btnAddNew: {
    width: WIDTH_ITEM,
    minHeight: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnDefault: {
    marginTop: MARGIN_TOP_ITEM,
    marginLeft: 0,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  btnChildren: {
    height: WIDTH_ITEM,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: MARGIN_TOP_ITEM,
  },
  viewIconChildren: {
    width: WIDTH_ITEM,
    height: WIDTH_ITEM,
    borderRadius: WIDTH_ITEM / 2,
    backgroundColor: BACKGROUND_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewText: {
    justifyContent: 'center',
    overflow: 'hidden',
    marginRight: 10,
    maxWidth: (width / 3) * 1.7,
  },
  textChildren: {
    fontSize: 13,
    fontFamily: 'SFProText-Medium',
    fontWeight: 'bold',
    paddingHorizontal: Platform.OS === 'android' ? 7.5 : 10,
    paddingVertical: Platform.OS === 'android' ? 2 : 4,
    backgroundColor: '#a4adba',
    borderRadius: 3,
    overflow: 'hidden',
    color: '#fff',
  },
});

// Excample
// const listBtnChildren = [
//     {
//         icon: <AntDesign color={'#fff'} size={20} name={"filetext1"} />,
//         onPress: () => console.log("Music"),
//         label: 'New Sale',
//         backgroundColor: '#fff'
//     }
// ]

// const listBtnDefault = [
//     {
//         icon: <AntDesign color={'#fff'} size={20} name={"calendar"} />,
//         onPress: () => console.log("Music"),
//     },
//     {
//         icon: <AntDesign color={'#fff'} size={20} name={"plus"} />,
//     }
// ]
