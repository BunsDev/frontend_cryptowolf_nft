import * as React from 'react';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

import CenteredFooter from '../footer/CenteredFooter';
import MainMenu from '../navigation/MainMenu';

function Home() {
  const { t } = useTranslation('hunting');
  return (
    <div className="Home">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <title>Hunting | CryptoWolf</title>
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
              <div className="grid-3">
                <div>
                  <div className="item-box">Please select a Wolf Pack</div>
                </div>
                <div>
                  <div className="item-box">
                    Current attack power
                    <div>0 AP</div>
                    <p>Based on your attack power available right now.</p>
                  </div>
                </div>
                <div>
                  <div className="item-box">
                    Max animal level
                    <div>Animal 0</div>
                    <p>Based on wolves that can enter the hunting right now.</p>
                  </div>
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
    ...(await serverSideTranslations(locale, ['hunting', 'common', 'footer'])),
  },
});

export default Home;
