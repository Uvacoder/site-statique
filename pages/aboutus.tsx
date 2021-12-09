import Link from 'next/link';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticPropsType } from '../types/globals.type';
import Layout from 'components/Layout/Layout';
import { Title } from 'components/Typo/Title';

const AboutUs = (): JSX.Element => {
  const { t } = useTranslation('common');

  return (
    <>
      <Layout>
        <Title>{t('about')}</Title>
      </Layout>
    </>
  );
};

export const getStaticProps = async ({
  locale,
}: Record<string, any>): Promise<GetStaticPropsType> => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default AboutUs;
