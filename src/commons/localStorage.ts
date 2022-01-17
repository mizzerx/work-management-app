/**
 * @format
 */

import AsyncStorage from '@react-native-async-storage/async-storage';

interface Storage {
  accessToken: string;
  refreshToken: string;
}

const localStorage = {
  storeData: async (
    key: keyof Storage,
    value: string | Record<string, any>,
  ) => {
    try {
      if (typeof value === 'string') {
        await AsyncStorage.setItem(key, value);
      } else {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
      }
    } catch (e) {
      // saving error
    }
  },
  getData: async (
    key: keyof Storage,
    json?: boolean,
  ): Promise<string | Record<string, any> | null> => {
    try {
      if (json) {
        const value = await AsyncStorage.getItem(key);
        return value ? JSON.parse(value) : null;
      }

      const value = await AsyncStorage.getItem(key);
      return value ? value : null;
    } catch (e) {
      // error reading value
      return null;
    }
  },
};

export default localStorage;
