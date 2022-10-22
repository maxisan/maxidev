import React from 'react';
import type { NextPage } from 'next';
import Landing from '../components/Landing';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ProjectElement from 'components/ProjectsGallery/ProjectElement';

const Home: NextPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <Landing />
      <div>
        <ProjectElement />
      </div>
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