/**
 * @format
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import { logoBlack } from '../../commons/assets/images';
import AppImage from '../../commons/components/AppImage';
import Container from '../../commons/components/Container';

const SplashScreen = () => {
  return (
    <Container
      style={styles.container}
      alignItems={'center'}
      justifyContent={'center'}>
      <AppImage source={logoBlack} imageSize={360} />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default SplashScreen;
