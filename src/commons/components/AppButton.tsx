/**
 * @format
 */

import React, { isValidElement } from 'react';
import { Pressable, PressableProps, StyleSheet } from 'react-native';
import AppText from './AppText';

interface AppButtonProps extends PressableProps {}

const AppButton: React.FC<AppButtonProps> = props => {
  const { children, style, ...rest } = props;

  const renderChildren = () => {
    if (isValidElement(children)) {
      return children;
    }

    if (typeof children === 'string') {
      return (
        <AppText fontSize={16} style={styles.text}>
          {children}
        </AppText>
      );
    }
  };

  const pressableStyle = StyleSheet.flatten([styles.button, style]);

  return (
    <Pressable style={pressableStyle} {...rest}>
      {renderChildren()}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1e88e5',
    padding: 16,
    borderRadius: 8,
    width: '100%',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pressed: {
    backgroundColor: '#ccc',
  },
});

export default AppButton;
