import { NavVertical } from '@streali/shared/ui';
import { supabase } from '@streali/shared/utils';
import { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import CreateChatbox from './pages/chatbox/create';
import EditChatbox from './pages/chatbox/edit';
import LibraryChatbox from './pages/chatbox/library';
import Login from './pages/login';

export function App() {
  const navigate = useNavigate();
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

  const noLayout = ['/login'];

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT') {
        navigate('/login');
      }
    });
  }, [navigate]);

  return (
    <>
      {!noLayout.includes(location.pathname) && (
        <NavVertical navigation={navigation} />
      )}
      <main
        className={`min-h-screen ${
          !noLayout.includes(location.pathname)
            ? 'w-[calc(100%_-_72px)] ml-[72px]'
            : 'w-screen ml-0'
        }`}
      >
        <Routes>
          <Route path="/" element={<div>ok</div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/chatbox/create" element={<CreateChatbox />} />
          <Route path="/chatbox/library" element={<LibraryChatbox />} />
          <Route path="/chatbox/edit/:themeId" element={<EditChatbox />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
