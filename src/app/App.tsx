/**
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { LayoutAnimation, Platform, StatusBar, UIManager } from 'react-native';
import { useAppSelector } from '../commons/hooks';
import { RootStack, rootStackScreenOptions } from '../commons/routes';
import SigninScreen from '../features/Authentication/SigninScreen';
import HomeScreen from '../features/Home/HomeScreen';
import SplashScreen from '../features/Splash/SplashScreen';

const App = () => {
  const auth = useAppSelector(state => state.auth);
  const [isShowSplash, setIsShowSplash] = React.useState(true);

  useEffect(() => {
    // Enable LayoutAnimation on Android
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    // Show splash screen only for first time
    setTimeout(() => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setIsShowSplash(false);
    }, 2000);
  }, []);

  if (isShowSplash) {
    return <SplashScreen />;
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <RootStack.Navigator screenOptions={rootStackScreenOptions}>
          {!auth.isAuthenticated ? (
            <RootStack.Group>
              <RootStack.Screen
                name={'SignInScreen'}
                component={SigninScreen}
              />
              <RootStack.Screen
                name={'SignUpScreen'}
                component={SigninScreen}
              />
            </RootStack.Group>
          ) : (
            <RootStack.Group>
              <RootStack.Screen name={'HomeScreen'} component={HomeScreen} />
            </RootStack.Group>
          )}
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
