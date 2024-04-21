import React from 'react';
import Greetings from './ui/Greetings';
import { UserButton } from '@clerk/clerk-react';
import Transcript from './ui/Transcript';

const Home = () => {
  return (
    <section className="relative bg-[#100f0f] h-screen">
        <div className='flex items-center justify-between px-6 py-3'>
        <h1 className='text-2xl font-bold text-[#f2f2f2]'>SpeakEasy</h1>
      <UserButton className="" afterSignOutUrl="/" />
        </div>
      <div className=' max-md:p-6 py-16 px-24'>
        <Greetings />
        <Transcript />
      </div>
    </section>
  );
}

export default Home;
