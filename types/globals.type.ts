import { UserConfig } from 'next-i18next';

export interface GetStaticPropsType {
  props: {
    _nextI18Next: {
      initialI18nStore: any
      initialLocale: string
      userConfig: UserConfig
    }
  }
}
