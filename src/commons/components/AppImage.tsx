/**
 * @format
 */

import React from 'react';
import { Image, ImageProps, ImageStyle } from 'react-native';

interface AppImageProps extends ImageProps {
  imageSize?: number;
  imageWidth?: number;
  imageHeight?: number;
}

const AppImage: React.FC<AppImageProps> = props => {
  const { imageSize, imageHeight, imageWidth, style, ...rest } = props;

  const imageStyle: ImageStyle = {
    width: imageSize || imageWidth,
    height: imageSize || imageHeight,
  };

  return <Image style={[style, imageStyle]} {...rest} />;
};

export default AppImage;
