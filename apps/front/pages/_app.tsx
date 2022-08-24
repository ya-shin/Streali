import { NavVertical } from '@streali/shared/ui';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppProps } from 'next/app';
import './styles.scss';
import { SessionProvider } from 'next-auth/react';

function CustomApp({ Component, pageProps }: AppProps) {
  const navigation = [
    {
      icon: 'chat-1-line',
      link: '/chatbox/create',
    },
  ];

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <main className="app">
          <NavVertical navigation={navigation} />
          <div className="w-[calc(100%_-_72px)] ml-[72px] min-h-screen">
            <Component {...pageProps} />
          </div>
        </main>
      </SessionProvider>
    </QueryClientProvider>
  );
}

export default CustomApp;
