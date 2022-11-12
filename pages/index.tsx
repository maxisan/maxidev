import React from 'react';
import type { NextPage } from 'next';
import Landing from '../components/Landing';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ProjectsGallery from 'components/ProjectsGallery';

const Home: NextPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <Landing />
    </>
)
};

export default Home;

export async function getStaticProps({ locale }:any) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}