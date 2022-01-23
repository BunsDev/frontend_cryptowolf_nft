import * as React from 'react';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

import CenteredFooter from '../footer/CenteredFooter';
import MainMenu from '../navigation/MainMenu';

function Home() {
  const { t } = useTranslation('common');
  return (
    <div className="Home">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <title>Marketplace | CryptoWolf</title>
        <meta name="description" content="CryptoWolf" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="feast-wrapper">
        <header className="header">
          <MainMenu />
        </header>
        <main>
          <div>
            <div className="main-feast-section-wrapper">
              <div className="main-feast-section feast-section halloween-2021">
                <div className="main-feast-section__left-block">
                  <p className="main-feast-section__festival-name-text halloween-2021">
                    {t('coming-soon')}
                  </p>
                </div>
                <div className="main-feast-section__right-block">
                  <img src="/images/lobohielo2.gif" alt="wolf" />
                </div>
              </div>
            </div>
          </div>
        </main>
        <CenteredFooter />
      </div>
    </div>
  );
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'footer'])),
  },
});

export default Home;
