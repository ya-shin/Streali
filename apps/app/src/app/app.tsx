import { Routes, Route, useLocation, Outlet, Navigate } from 'react-router-dom';
import { NavVertical } from '@streali/shared/ui';
import { useAuthCheck } from '@streali/shared/hooks';
import CreateChatbox from './pages/chatbox/create';
import EditChatbox from './pages/chatbox/edit';
import EmbedChatbox from './pages/chatbox/embed';
import LibraryChatbox from './pages/chatbox/library';
import Login from './pages/login';

const ProtectedRoute = ({ redirectPath = '/login' }) => {
  const { data, status } = useAuthCheck();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (data?.authenticated) {
    return <Outlet />;
  }

  return <Navigate to={redirectPath} replace />;
};

export function App() {
  const { status } = useAuthCheck();
  const location = useLocation();

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

  const noLayout = ['/login', '/embed'];

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <>
      {!noLayout.some((path) => location.pathname.includes(path)) && (
        <NavVertical navigation={navigation} />
      )}
      <main
        className={`min-h-screen ${
          !noLayout.some((path) => location.pathname.includes(path))
            ? 'w-[calc(100%_-_72px)] ml-[72px]'
            : 'w-screen ml-0'
        }`}
      >
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route
              path="/"
              element={<Navigate replace to="/chatbox/library" />}
            />
            <Route path="/chatbox/create" element={<CreateChatbox />} />
            <Route path="/chatbox/library" element={<LibraryChatbox />} />
            <Route path="/chatbox/:themeId/edit" element={<EditChatbox />} />
            <Route path="/chatbox/:themeId/embed" element={<EmbedChatbox />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
