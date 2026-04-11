import React, {useState, useRef} from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CommonActions} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import Toast from 'react-native-toast-message';
import {useDispatch} from 'react-redux';
import InputText from '../../components/UI/InputText';
import {CustomTextInputRef} from '../../components/UI/InputText';
import CustomButton from '../../components/UI/CustomButton';
import {Strings, Assets} from '../../utils';
import {LoginFormValues} from '../../utils/Types';
import {setUser, setToken} from '../../redux-toolkit/rootSlice';
import {api} from '../../services/api';
import Routes from '../../navigation/Routes';
import {RootNavigatorType} from '../../navigation/Navigate';
import styles from './style';

interface Props {
  navigation: NativeStackNavigationProp<RootNavigatorType>;
}

const loginSchema = z.object({
  email: z
    .string({error: Strings.emailRequired})
    .min(1, Strings.emailRequired)
    .email(Strings.invalidEmail),
  password: z
    .string({error: Strings.passwordRequired})
    .min(4, Strings.invalidPassword),
});

const Login = ({navigation}: Props) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  // Refs for focus management
  const emailRef = useRef<CustomTextInputRef>(null);
  const passwordRef = useRef<CustomTextInputRef>(null);

  const onSubmit = async (data: LoginFormValues) => {
    setLoading(true);
    try {
      const result = await api.login(data.email, data.password);

      if (result.kind === 'ok') {
        const payload = result.response;
        if (payload.success && payload.data) {
          dispatch(setUser(payload.data.user));
          dispatch(setToken(payload.data.token));
          reset();

          Toast.show({
            type: 'success',
            text1: Strings.loginSuccess,
          });

          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: Routes.Authenticated}],
            }),
          );
        } else {
          Toast.show({
            type: 'error',
            text1: Strings.loginError,
            text2: payload.message ?? 'Unknown API error',
          });
        }
      } else {
        Toast.show({
          type: 'error',
          text1: Strings.loginError,
          text2: `Network error: ${result.kind}`,
        });
      }
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: Strings.loginError,
        text2: error.message ?? '',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}>
      <ScrollView
        bounces={false}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        
        <View style={styles.headerArea}>
          <Text style={styles.logoText}>{Strings.appName}</Text>
          <View style={styles.imagePlaceholder}>
            <Image
              source={Assets.placeholder}
              style={styles.placeholderImage}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={styles.formArea}>
          <Controller
            control={control}
            name="email"
            render={({field: {onChange, onBlur, value}}) => (
              <InputText
                ref={emailRef}
                label={Strings.emailLabel}
                placeholder={Strings.emailPlaceholder}
                keyboardType="email-address"
                autoCapitalize="none"
                returnKeyType="next"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                error={errors.email?.message}
                onSubmitEditing={() => passwordRef.current?.focus()}
                containerStyle={styles.inputGap}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({field: {onChange, onBlur, value}}) => (
              <InputText
                ref={passwordRef}
                label={Strings.passwordLabel}
                placeholder={Strings.passwordPlaceholder}
                secureTextEntry={true}
                showPasswordToggle={true}
                returnKeyType="done"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                error={errors.password?.message}
                onSubmitEditing={handleSubmit(onSubmit)}
                containerStyle={styles.inputGap}
              />
            )}
          />

          <TouchableOpacity style={styles.forgotContainer}>
            <Text style={styles.forgotText}>{Strings.forgotPassword}</Text>
          </TouchableOpacity>

          <View style={styles.signInRow}>
            <CustomButton
              title={Strings.signIn}
              onPress={handleSubmit(onSubmit)}
              loading={loading}
              style={styles.signInButton}
            />
          </View>

          <View style={styles.signUpContainer}>
            <Text style={styles.notMemberText}>{Strings.notMember} </Text>
            <TouchableOpacity>
              <Text style={styles.signUpText}>{Strings.signUpHere}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>{Strings.orSignInWith}</Text>
            <View style={styles.dividerLine} />
          </View>

          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={Assets.google} style={styles.socialIcon} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>
              <Image source={Assets.apple} style={styles.socialIcon} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>
              <Image source={Assets.facebook} style={styles.socialIcon} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.guestContainer}>
            <Text style={styles.guestText}>{Strings.enterAsGuest}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
