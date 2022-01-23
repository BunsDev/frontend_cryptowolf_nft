import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import ReactModal from 'react-modal';

import ToastProvider from '../components/toast/ToastProvider';
import { PlayPauseProvider } from '../context/PlayPauseAnimation';
import { Web3ProviderContext } from '../context/Web3modal';

import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  ReactModal.defaultStyles = {};
  return (
    <Web3ProviderContext>
      <PlayPauseProvider>
        <ToastProvider variant="top_right">
          <Component {...pageProps} />
        </ToastProvider>
      </PlayPauseProvider>
    </Web3ProviderContext>
  );
};

export default appWithTranslation(MyApp);
