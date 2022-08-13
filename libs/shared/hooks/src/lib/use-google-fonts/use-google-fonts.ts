import { useQuery } from '@tanstack/react-query';

export interface GoogleFontsFamily {
  category?: string | undefined;
  kind: string;
  family: string;
  subsets: string[];
  variants: string[];
  version: string;
  lastModified: string;
  files: { [variant: string]: string };
}

export interface UseGoogleFonts {
  data: GoogleFontsFamily[];
  loading: boolean;
  error: unknown;
}

export function useGoogleFonts(): UseGoogleFonts {
  const { data, isLoading, error } = useQuery(['fonts'], async () => {
    const res = await fetch(
      `https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=${process.env['NX_GOOGLE_FONTS_API_KEY']}`
    );
    return res.json();
  });

  return { data: data?.items || [], loading: isLoading, error };
}

export default useGoogleFonts;
