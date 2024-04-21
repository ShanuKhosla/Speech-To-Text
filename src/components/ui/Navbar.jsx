import React from 'react';
import { SignInButton, SignUpButton } from '@clerk/clerk-react';

const Navbar = () => {
  return (
    <div className='z-[10] w-full absolute top-1 flex flex-row items-center justify-between px-5 py-2'>
      <h1 className='text-2xl font-bold font-space-grotesk'>SpeakEasy</h1>
      <div className='flex items-center justify-center gap-5 absolute right-5 top-2 font-space-grotesk'>
      <SignInButton className="px-5 py-1   top-2  border-[3px] border-[#BFFD44] rounded-full bg-[#BFFD44] text-[#161A30] hover:translate-y-1 shadow-glow transition-all  duration-300 text-lg font-semibold" />
      <SignUpButton className="px-5 py-1   top-2  border-[3px] border-[#BFFD44] rounded-full bg-transparent text-[#f2f2f2] hover:translate-y-1 shadow-glow transition-all  duration-300 text-lg font-semibold" />
      </div>
    </div>
  );
}

export default Navbar;
