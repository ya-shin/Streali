import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../src/lib/styles/main.scss'

export const parameters = {
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#090b11',
      },
    ],
  },
};

const queryClient = new QueryClient()

export const decorators = [
  (Story) => (
    <QueryClientProvider client={queryClient}>
      <Story />
    </QueryClientProvider>
  ),
];
