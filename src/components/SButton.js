/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useCallback} from 'react';
import {
  StyleSheet,
  Animated,
  TouchableOpacity,
  Keyboard,
  View,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import SActivityIndicator from './SActivityIndicator';
import SText from 'components/SText';

export default function SButtonShadow({
  children,
  title,
  animation,
  noPosition,
  hideWhenKeyboardAppears,
  loading,
  type,
  titleLeft,
  loadingLeft,
  styleLeft,
  onPressLeft,
  disabledLeft,
  disabledStyleLeft,
  titleRight,
  loadingRight,
  styleRight,
  onPressRight,
  disabledRight,
  disabledStyleRight,
  ...props
}) {
  const translateY = useRef(new Animated.Value(animation ? 70 : 0));

  useFocusEffect(
    useCallback(() => {
      const showAdd = () => {
        Animated.timing(translateY.current, {
          duration: 300,
          toValue: 0,
          delay: 200,
          useNativeDriver: true,
        }).start();
      };

      const hideAdd = () => {
        Animated.timing(translateY.current, {
          duration: 300,
          toValue: 70,
          delay: 200,
          useNativeDriver: true,
        }).start();
      };

      animation && showAdd();
      hideWhenKeyboardAppears &&
        Keyboard.addListener('keyboardDidShow', hideAdd);
      hideWhenKeyboardAppears &&
        Keyboard.addListener('keyboardDidHide', showAdd);

      // cleanup function
      return () => {
        animation && hideAdd();
        hideWhenKeyboardAppears &&
          Keyboard.removeListener('keyboardDidShow', hideAdd);
        hideWhenKeyboardAppears &&
          Keyboard.removeListener('keyboardDidHide', showAdd);
      };
    }, [animation, hideWhenKeyboardAppears]),
  );

  const stylez = {
    transform: [
      {
        translateY: translateY.current,
      },
    ],
  };

  const styleViewButton =
    animation && !noPosition ? styles.viewBtnSave : styles.noAnimation;

  return (
    <Animated.View style={[styleViewButton, stylez]}>
      <View style={{height: 45, flexDirection: 'row'}}>
        {onPressLeft && (
          <TouchableOpacity
            style={[
              styles.btnSave,
              onPressRight && onPressLeft && {marginRight: 7.5},
              styleLeft,
              (disabledLeft || disabledStyleLeft) && styles.btnDisabled,
            ]}
            activeOpacity={0.6}
            disabled={disabledLeft}
            onPress={onPressLeft}>
            {loadingLeft ? (
              <SActivityIndicator size={26} />
            ) : children ? (
              children
            ) : (
              <SText style={styles.textSave}>{titleLeft || ''}</SText>
            )}
          </TouchableOpacity>
        )}
        {onPressRight && (
          <TouchableOpacity
            onPress={onPressRight}
            disabled={disabledRight}
            style={[
              styles.btnSave,
              onPressRight && onPressLeft && {marginLeft: 7.5},
              styleRight,
              (disabledRight || disabledStyleRight) && styles.btnDisabled,
            ]}
            activeOpacity={0.6}>
            {loading ? (
              <SActivityIndicator size={26} />
            ) : children ? (
              children
            ) : (
              <SText style={styles.textSave}>{titleRight || ''}</SText>
            )}
          </TouchableOpacity>
        )}
      </View>
    </Animated.View>
  );
}

SButtonShadow.defaultProps = {
  animation: true,
  hideWhenKeyboardAppears: true,
  noPosition: false,
  loading: false,
};

const styles = StyleSheet.create({
  viewBtnSave: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    paddingTop: 14,
    paddingBottom: 15,
    // backgroundColor: '#fff',
    justifyContent: 'center',
  },
  noAnimation: {
    borderTopColor: '#E7E8EB',
    borderTopWidth: 1,
    paddingTop: 14,
    paddingBottom: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  btnSave: {
    marginHorizontal: 15,
    backgroundColor: '#101928',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    flex: 1,
  },
  btnDelete: {
    backgroundColor: '#C2185B',
  },
  btnDisabled: {
    backgroundColor: '#a4adba',
  },
  textSave: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
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
});
