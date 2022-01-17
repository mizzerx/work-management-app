/**
 * @format
 */

import React from 'react';
import { StyleProp, Text, TextProps, View, ViewStyle } from 'react-native';

interface AppTextProps extends TextProps {
  fontSize?: number;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  fontStyle?: 'normal' | 'italic';
  textContainetStyle?: StyleProp<ViewStyle>;
  fontFamilyWeight?:
    | 'regular'
    | 'bold'
    | 'medium'
    | 'semibold'
    | 'light'
    | 'heavy'
    | 'black'
    | 'thin'
    | 'ultralight';
}

const DEFAULT_FONT_FAMILY = 'SFPro';

const AppText: React.FC<AppTextProps> = props => {
  const {
    children,
    style,
    fontSize,
    fontWeight,
    textContainetStyle,
    fontStyle,
    fontFamilyWeight,
    ...rest
  } = props;

  const getFontFamilyWeight = () => {
    switch (fontFamilyWeight) {
      case 'regular':
        return '-Regular';
      case 'bold':
        return '-Bold';
      case 'medium':
        return '-Medium';
      case 'semibold':
        return '-Semibold';
      case 'light':
        return '-Light';
      case 'heavy':
        return '-Heavy';
      case 'black':
        return '-Black';
      case 'thin':
        return '-Thin';
      case 'ultralight':
        return '-UltraLight';
      default:
        return '-Medium';
    }
  };

  const fontFamily =
    fontStyle === 'italic'
      ? `${DEFAULT_FONT_FAMILY}${getFontFamilyWeight()}Italic`
      : DEFAULT_FONT_FAMILY + getFontFamilyWeight();

  return (
    <View style={textContainetStyle}>
      <Text style={{ fontFamily }} {...rest}>
        <Text style={[{ fontSize, fontWeight }, style]}>{children}</Text>
      </Text>
    </View>
  );
};

export default AppText;
