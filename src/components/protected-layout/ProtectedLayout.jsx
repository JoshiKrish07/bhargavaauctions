
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Loader from '../loader/Loader';

const ProtectedLayout = ({ children }) => {
  const router = useRouter();
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  useEffect(() => {
    if (!token) {
      router.push('/login');
    }
  }, [token, router]);

//   if (!token) {
//     return <Loader />;
//   }

  return <>{children}</>; 
};

export default ProtectedLayout;
