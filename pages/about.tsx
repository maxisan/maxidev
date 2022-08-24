import React from 'react';
import type { NextPage } from 'next';
import NavBar from 'components/NavBar';
import menuMock from 'components/NavBar/mocks/menuMock';
import Landing from '../components/Landing';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Home: NextPage = () => {
  const { t } = useTranslation()
  return (
  <>
  <div style={{marginTop:'150px'}}>Home</div>
  <p>{t('example')}</p>
  <div> About </div>
</>
)};

export default Home;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      // Will be passed to the page component as props
    },
  };
}