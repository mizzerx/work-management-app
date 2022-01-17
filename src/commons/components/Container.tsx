/**
 * @format
 */

import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';

interface ContainerProps extends ViewProps {
  safeArea?: boolean;
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  keyboardAvoiding?: boolean;
}

const Container: React.FC<ContainerProps> = props => {
  const {
    children,
    safeArea,
    style,
    alignItems,
    justifyContent,
    keyboardAvoiding,
    ...rest
  } = props;

  const viewStyle: ViewStyle = {
    alignItems,
    justifyContent,
  };

  const renderView = () => {
    if (safeArea) {
      return (
        <SafeAreaView style={[styles.container, viewStyle, style]} {...rest}>
          {children}
        </SafeAreaView>
      );
    }

    return (
      <View style={[styles.container, viewStyle, style]} {...rest}>
        {children}
      </View>
    );
  };

  return keyboardAvoiding ? (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      {renderView()}
    </KeyboardAvoidingView>
  ) : (
    renderView()
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
});

export default Container;
