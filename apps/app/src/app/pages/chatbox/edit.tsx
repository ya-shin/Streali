import { updateChatTheme } from '@streali/shared/api';
import { useChatTheme } from '@streali/shared/hooks';
import {
  ChatDemo,
  ChatMessage,
  ChatSettings,
  CodeEditor,
  CodeEditorLanguage,
} from '@streali/shared/ui';
import { supabase } from '@streali/shared/utils';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import type { ChatTheme } from '@streali/shared/schema';

export function EditChatbox() {
  const { themeId } = useParams();
  const { data: theme, status, error } = useChatTheme(themeId);
  const [settings, setSettings] = useState<ChatTheme | null>(null);
  const navigate = useNavigate();

  const createTheme = useMutation(async (theme: FieldValues) => {
    const userId = supabase.auth.user()?.id;
    if (userId) {
      const { data } = await updateChatTheme(theme as ChatTheme, userId);
      if (data) {
        navigate('/chatbox/library');
      }
    }
  });

  useEffect(() => {
    if (theme) {
      setSettings(theme);
    }
  }, [theme]);

  const handleSubmit = (theme: FieldValues) => {
    createTheme.mutate(theme);
  };

  if (status === 'loading' || !settings) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR PUTAIN</div>;
  }

  return (
    <div className="flex w-full">
      <div className="w-[400px] shrink-0">
        {settings && (
          <ChatSettings
            onSettingsChange={(settings) => {
              setSettings(settings);
            }}
            defaultSettings={settings}
            onSave={handleSubmit}
          />
        )}
      </div>
      <div className="w-[400px] shrink-0 border-r border-dark-300 flex justify-center items-center px-3">
        {settings && (
          <ChatMessage
            settings={settings}
            name="viewer_1"
            message="This is message content"
          />
        )}
      </div>
      <div className="flex flex-col items-end justify-end h-screen p-10 overflow-hidden grow">
        {settings && <ChatDemo settings={settings} />}
      </div>
    </div>
  );
}

export default EditChatbox;
