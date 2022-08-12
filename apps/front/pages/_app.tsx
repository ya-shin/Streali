import { NavVertical } from '@streali/shared/ui';
import { AppProps } from 'next/app';
import './styles.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  const navigation = [
    {
      icon: 'chat-1-line',
      link: '/chatbox/create',
    },
  ];

  return (
    <>
      <main className="app">
        <NavVertical navigation={navigation} />
        <div className="w-[calc(100%_-_-72px)] ml-[72px] min-h-screen">
          <Component {...pageProps} />
        </div>
      </main>
    </>
  );
}

export default CustomApp;
