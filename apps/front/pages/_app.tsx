import { NavVertical } from '@streali/shared/ui';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppProps } from 'next/app';
import './styles.scss';
import { useRouter } from 'next/router';

function CustomApp({ Component, pageProps }: AppProps) {
  const navigation = [
    {
      icon: 'chat-1-line',
      link: '/chatbox/create',
    },
  ];

  const noLayout = ['/login'];

  const router = useRouter();
  const location = router.pathname;

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <main className="app">
        {!noLayout.includes(location) && (
          <NavVertical navigation={navigation} />
        )}
        <div
          className={`min-h-screen ${
            noLayout.includes(location)
              ? 'w-screen ml-0'
              : 'w-[calc(100%_-_72px)] ml-[72px]'
          }`}
        >
          <Component {...pageProps} />
        </div>
      </main>
    </QueryClientProvider>
  );
}

export default CustomApp;
