import { NavVertical } from '@streali/shared/ui';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppProps } from 'next/app';
import './styles.scss';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { supabase } from '@streali/shared/utils';
import { Toaster } from 'react-hot-toast';

function CustomApp({ Component, pageProps }: AppProps) {
  const navigation = [
    {
      icon: 'chat-1-line',
      items: [
        {
          title: 'Create chat theme',
          icon: 'add-circle-fill',
          link: '/chatbox/create',
        },
        {
          title: 'My library',
          icon: 'folder-5-fill',
          link: '/chatbox/library',
        },
      ],
    },
  ];

  const noLayout = ['/login'];

  const router = useRouter();
  const location = router.pathname;

  const queryClient = new QueryClient();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT') {
        router.push('/login');
      }
    });
  }, [router]);

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-right" />
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
