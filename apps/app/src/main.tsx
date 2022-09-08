import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import App from './app/app';

import './main.scss';
import { toastr, ToastType } from '@streali/shared/utils';

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      // const err = error as ApiError;
      // @ts-expect-error YOLO
      toastr(ToastType.Error, 'Error', error.message || 'An error occured');
    },
  }),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster position="top-right" />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
