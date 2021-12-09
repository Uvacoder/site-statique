import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticPropsType } from '../types/globals.type';
import Layout from 'components/Layout/Layout';
import { Title } from 'components/Typo/Title';
import Head from 'next/head';

const Homepage = (): JSX.Element => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <>
      <Layout>
        <Title>{t('home')}</Title>
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

export default Homepage;
