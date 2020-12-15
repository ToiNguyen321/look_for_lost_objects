import {COLORS, FONT_SIZE} from 'common/StyleCommon';
import {SText} from 'components';
import React, {forwardRef} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

const STextInput = forwardRef(
  (
    {title, rightIconName, rightOnPress, styleContainer, error, ...props},
    ref,
  ) => {
    console.log('🚀 ~ file: STextInput.js ~ line 13 ~ title', title);
    return (
      <View style={[styles.container, styleContainer]}>
        <SText style={styles.title}>{title || 'Title'}</SText>
        <View style={styles.viewInput}>
          <TextInput {...props} style={styles.input} />
          {rightIconName ? (
            <TouchableOpacity
              disabled={!rightOnPress}
              onPress={rightOnPress}
              style={styles.btnRight}>
              <Ionicons name={rightIconName} color={COLORS.GRAY} size={15} />
            </TouchableOpacity>
          ) : null}
        </View>
        {error ? <SText style={styles.error}>This is required.</SText> : null}
      </View>
    );
  },
);

function isEquals(prevProps, nextProps) {
  // console.log(
  //   '🚀 ~ file: STextInput.js ~ line 35 ~ isEquals ~ prevProps',
  //   prevProps,
  //   nextProps,
  // );
  let checked =
    prevProps.value === nextProps.value && prevProps.error === nextProps.error;
  if (prevProps.rightOnPress) {
    checked = checked && prevProps.rightOnPress === nextProps.rightOnPress;
  }

  return checked;
}
export default React.memo(STextInput, isEquals);

// export default STextInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 35,
  },
  title: {
    fontSize: FONT_SIZE.DESCRIPTION,
    color: COLORS.TEXT_PRIMARY,
  },
  viewInput: {
    flexDirection: 'row',
    borderBottomColor: COLORS.PRIMARY,
    borderBottomWidth: 1.5,
    alignItems: 'center',
  },
  input: {
    paddingVertical: 8.5,
    padding: 0,
    margin: 0,
    flex: 1,
    fontSize: FONT_SIZE.CONTENT,
  },
  btnRight: {
    marginLeft: 10,
    width: 20,
    height: 20,
  },
  error: {
    fontSize: FONT_SIZE.DESCRIPTION,
    color: 'red',
    marginTop: 5,
  },
});
