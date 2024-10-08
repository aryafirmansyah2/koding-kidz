'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const redirect = async () => {
      router.push('/home');
    };

    redirect();
  }, [router]);

  return null;
}
