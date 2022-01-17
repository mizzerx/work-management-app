/**
 * @format
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { logoBlack } from '../../commons/assets/images';
import AppImage from '../../commons/components/AppImage';
import AppText from '../../commons/components/AppText';
import Container from '../../commons/components/Container';
import AppTextInput from '../../commons/components/AppTextInput';
import AppButton from '../../commons/components/AppButton';

const SigninScreen = () => {
  const { t } = useTranslation();

  const handleOnSigninPress = () => {
    console.log('Signin');
  };

  return (
    <Container alignItems={'center'} justifyContent={'center'} keyboardAvoiding>
      <AppImage source={logoBlack} imageSize={280} />
      <AppText
        fontSize={32}
        fontFamilyWeight={'bold'}
        style={styles.signinText}>
        {t('auth.sign_in')}
      </AppText>
      <View style={styles.inputContainer}>
        <AppTextInput label={t('auth.username')} isRequired />
        <AppTextInput label={t('auth.password')} isRequired />
      </View>
      <AppButton onPress={handleOnSigninPress}>{t('auth.sign_in')}</AppButton>
    </Container>
  );
};

const styles = StyleSheet.create({
  signinText: {
    textTransform: 'uppercase',
  },
  inputContainer: {
    width: '100%',
    marginTop: 16,
    marginBottom: 64,
  },
});

export default SigninScreen;
