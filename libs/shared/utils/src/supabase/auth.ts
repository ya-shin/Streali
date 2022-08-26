import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from './client';

export function isAuth(): boolean {
  const user = supabase.auth.user();
  if (user) {
    return true;
  } else {
    return false;
  }
}

export async function auth(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    supabase.auth.api.setAuthCookie(req, res);
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({
      message: `Method ${req.method} Not Allowed`,
    });
  }
}
