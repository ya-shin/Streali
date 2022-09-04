import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';

export enum CodeEditorLanguage {
  TYPESCRIPT = 'typescript',
  JAVASCRIPT = 'javascript',
  JSON = 'json',
  CSS = 'css',
  HTML = 'html',
}

export interface CodeEditorProps {
  language: CodeEditorLanguage;
  onChange?: (value?: string) => void;
  defaultValue?: string;
}

export function CodeEditor(props: CodeEditorProps) {
  const { language = CodeEditorLanguage.HTML, onChange, defaultValue } = props;

  const handleChange = (value?: string) => {
    onChange && onChange(value);
  };

  return (
    <Editor
      height="100%"
      defaultLanguage={language}
      defaultValue={defaultValue}
      onChange={(value) => handleChange(value)}
      theme="vs-dark"
    />
  );
}

export default CodeEditor;
