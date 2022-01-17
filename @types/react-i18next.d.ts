import { defaultNS, resources } from '../src/commons/i18n';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof resources['en'];
  }
}
