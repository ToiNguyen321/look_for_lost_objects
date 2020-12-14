import {SText} from 'components';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  ImageBackground,
  UIManager,
} from 'react-native';
import {COLORS, FONT_SIZE} from 'common/StyleCommon';
import STextInput from 'components/STextInput';
import SCREENS from 'navigator';
const {width, height} = Dimensions.get('window');

const HEIGHT_TOP_BOT = height / 4.5;

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const Login = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerStyle: {
        backgroundColor: COLORS.MAIN,
        borderWidth: 0,
        shadowColor: 'transparent',
        shadowRadius: 0,
        shadowOffset: {
          height: 0,
        },
        elevation: 0,
      },
    });
  }, [navigation]);

  const [orientation, setOrientation] = useState('PORTRAIT');

  useEffect(() => {
    Dimensions.addEventListener(
      'change',
      ({window: {width: WIDTH, height: HEIGHT}}) => {
        if (WIDTH < HEIGHT) {
          setOrientation('PORTRAIT');
        } else {
          setOrientation('LANDSCAPE');
        }
      },
    );
  }, []);

  const goToRegister = () => {
    navigation.navigate(SCREENS.AUTH.SIGN_IN);
  };

  const onLayout = (e) => {
    console.log(
      '🚀 ~ file: Login.js ~ line 61 ~ onLayout ~ e',
      e,
      e.nativeEvent.layout.height,
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView
        onPress={Keyboard.dismiss}
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={orientation === 'LANDSCAPE'}
        scrollEnabled={orientation === 'LANDSCAPE'}>
        <View style={styles.backgroundTop}>
          <ImageBackground
            style={styles.imageBackground}
            source={{
              uri:
                'https://images.pexels.com/photos/1000653/pexels-photo-1000653.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            }}>
            <SText style={styles.header}> TÊN APP VIẾT HOA </SText>
          </ImageBackground>
        </View>

        <View style={styles.content} onLayout={onLayout}>
          <SText style={styles.title}> ĐĂNG NHẬP </SText>
          <STextInput title="Phone" />
          <STextInput
            title="Password"
            rightIconName={
              orientation === 'PORTRAIT' ? 'eye-outline' : 'eye-off-outline'
            }
            styleContainer={styles.passwordInput}
          />
          <SText
            onPress={() => console.log('Forgot password')}
            style={styles.forgotPassword}>
            {' '}
            Quên mật khẩu?{' '}
          </SText>
          <View style={styles.bottom}>
            <TouchableOpacity style={styles.btnLogin} onPress={() => {}}>
              <SText style={styles.titleBtnLogin}>Đăng nhập</SText>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToRegister}>
              <SText style={styles.register}>Chưa có tài khoản? Đăng ký</SText>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  scrollView: {
    flexGrow: 1,
  },
  backgroundTop: {
    overflow: 'hidden',
    minHeight: HEIGHT_TOP_BOT,
    maxHeight: HEIGHT_TOP_BOT,
    backgroundColor: COLORS.PRIMARY,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    color: COLORS.TEXT_WHITE,
    fontSize: FONT_SIZE.BIG_HEADER,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: width / 3,
  },
  content: {
    marginBottom: 170,
    marginTop: -15,
    backgroundColor: COLORS.WHITE,
    marginHorizontal: 10,
    paddingHorizontal: 15,
    paddingVertical: 50,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  title: {
    fontSize: FONT_SIZE.BIG_HEADER,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.TEXT_PRIMARY,
    marginBottom: 50,
  },
  bottom: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnLogin: {
    width: 180,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 25,
    marginTop: 25,
  },
  titleBtnLogin: {
    fontWeight: 'bold',
    fontSize: FONT_SIZE.HEADER,
    color: COLORS.TEXT_WHITE,
  },
  register: {
    fontSize: FONT_SIZE.DESCRIPTION,
    color: COLORS.TEXT_PRIMARY,
    marginTop: 25,
  },
  forgotPassword: {
    marginBottom: 20,
    fontSize: FONT_SIZE.DESCRIPTION,
    color: COLORS.TEXT_PRIMARY,
    textAlign: 'right',
  },
  passwordInput: {
    marginBottom: 10,
  },
});
