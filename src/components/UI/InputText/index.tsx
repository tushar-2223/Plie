import React, {useState, useCallback} from 'react';
import {View, Text, TextInput, TouchableOpacity, TextInputProps} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';
import {Colors} from '../../../utils';

interface Props extends Omit<TextInputProps, 'onChangeText' | 'onBlur'> {
  label: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  onBlur: () => void;
  value: string;
  error?: string;
  secureTextEntry?: boolean;
}

const InputText = ({
  label,
  placeholder,
  onChangeText,
  onBlur,
  value,
  error,
  secureTextEntry = false,
  ...rest
}: Props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = useCallback(() => {
    setIsPasswordVisible(prev => !prev);
  }, []);

  return (
    <View style={styles.inputField}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: error ? Colors.ERROR : 'transparent',
            borderWidth: error ? 1 : 0,
          },
        ]}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          placeholderTextColor={Colors.LIGHT_TEXT}
          autoCapitalize="none"
          {...rest}
        />
        {secureTextEntry && (
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.eyeIcon}
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
            <Icon
              name={isPasswordVisible ? 'eye' : 'eye-off'}
              size={20}
              color={Colors.LIGHT_TEXT}
            />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default InputText;
