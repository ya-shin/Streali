import { NavVertical } from '@streali/shared/ui';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateChatbox from './pages/chatbox/create';
import EditChatbox from './pages/chatbox/edit';
import LibraryChatbox from './pages/chatbox/library';
import Login from './pages/login';

export function App() {
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

  return (
    <BrowserRouter>
      <NavVertical navigation={navigation} />
      <main className="min-h-screen w-[calc(100%_-_72px)] ml-[72px]">
        <Routes>
          <Route path="/" element={<div>ok</div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/chatbox/create" element={<CreateChatbox />} />
          <Route path="/chatbox/library" element={<LibraryChatbox />} />
          <Route path="/chatbox/edit/:themeId" element={<EditChatbox />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
