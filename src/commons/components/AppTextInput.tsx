/**
 * @format
 */

import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import AppText from './AppText';

interface AppTextInputProps extends TextInputProps {
  label?: string;
  isRequired?: boolean;
  textInputContainerStyle?: StyleProp<ViewStyle>;
}

const AppTextInput: React.FC<AppTextInputProps> = props => {
  const { style, label, isRequired, textInputContainerStyle, ...rest } = props;

  const renderLabel = () => {
    if (label) {
      return (
        <View style={styles.labelContainer}>
          <AppText fontSize={16} style={styles.label}>
            {label}
          </AppText>
          {isRequired && (
            <AppText fontSize={16} style={styles.required}>
              *
            </AppText>
          )}
        </View>
      );
    }
  };

  return (
    <View style={textInputContainerStyle}>
      {renderLabel()}
      <TextInput style={[style, styles.textInput]} {...rest} />
    </View>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  required: {
    fontWeight: 'bold',
    color: 'red',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
});

export default AppTextInput;
