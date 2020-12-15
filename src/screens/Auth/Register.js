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
} from 'react-native';
import {COLORS, FONT_SIZE} from 'common/StyleCommon';
import STextInput from 'components/STextInput';
import SCREENS from 'navigator';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {S_ACTIONS} from 'store/sagas/sagaActions';
const {width, height} = Dimensions.get('window');

const HEIGHT_TOP_BOT = height / 5;

const Register = ({navigation}) => {
  const dispatch = useDispatch();
  const {register, handleSubmit, errors, watch, setValue} = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: undefined,
    context: undefined,
    criteriaMode: 'firstError',
    shouldFocusError: true,
    shouldUnregister: true,
    defaultValues: {
      full_name: '',
      phone_number: '',
      password: '',
    },
  });

  useEffect(() => {
    register({name: 'full_name'}, {required: true});
    register({name: 'phone_number'}, {required: true});
    register({name: 'password'}, {required: true});
  }, [register]);

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

  const goToLogin = () => {
    navigation.navigate(SCREENS.AUTH.LOGIN);
  };

  const onLayout = (e) => {
    // console.log(
    //   '🚀 ~ file: Login.js ~ line 61 ~ onLayout ~ e',
    //   e,
    //   e.nativeEvent.layout.height,
    // );
  };
  const onSubmit = (data) => {
    dispatch(S_ACTIONS.registerPending(data));
  };

  const values = watch();
  console.log(
    '🚀 ~ file: SignIn.js ~ line 106 ~ SignIn ~ values',
    values,
    errors,
  );

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
          <SText style={styles.title}> ĐĂNG KÝ </SText>
          <STextInput
            title={'Họ & tên'}
            onChangeText={(txt) =>
              setValue('full_name', txt, {shouldValidate: true})
            }
            error={errors.full_name}
            value={values.full_name}
          />
          <STextInput
            title="Số điện thoại"
            onChangeText={(txt) =>
              setValue('phone_number', txt, {shouldValidate: true})
            }
            error={errors.phone_number}
            value={values.phone_number}
          />
          <STextInput
            title="Mật khẩu"
            rightIconName={
              orientation === 'PORTRAIT' ? 'eye-outline' : 'eye-off-outline'
            }
            onChangeText={(txt) =>
              setValue('password', txt, {shouldValidate: true})
            }
            error={errors.password}
            value={values.password}
          />
          <View style={styles.bottom}>
            <TouchableOpacity
              style={styles.btnLogin}
              onPress={handleSubmit(onSubmit)}>
              <SText style={styles.titleBtnLogin}>Đăng ký</SText>
            </TouchableOpacity>
            <TouchableOpacity>
              <SText style={styles.register} onPress={goToLogin}>
                Đã có tài khoản? Đăng nhập
              </SText>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;

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
