'use client';
import React from 'react';
import { type Metadata } from 'next';
import NavBar from '@/components/common/nav-bar';
import Title from './components/title.component';
import OrderCard from './components/order-card.component';
import Services from './components/services.component';
import AnimatePics from './components/animate-pics.component';

export const metadata: Metadata = {
  title: 'crypto-landing',
  description: '...',
};

function Home() {
  return (
    <div className="flex h-full flex-col">
      <NavBar />
      <main className="main dark:bg-black-1100 relative h-full flex-col items-center justify-center overflow-y-auto px-4 py-10">
        <Title />
        <OrderCard />
        <Services />
        <AnimatePics />
      </main>
    </div>
  );
}

export default Home;
