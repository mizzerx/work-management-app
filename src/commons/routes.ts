import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

// Navigation configs
export const rootStackScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

// RootStack
export type RootStackParamList = {
  SignInScreen: undefined;
  SignUpScreen: undefined;
  HomeScreen: undefined;
};

export const RootStack = createNativeStackNavigator<RootStackParamList>();
