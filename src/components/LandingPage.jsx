import { SignInButton, SignUpButton } from '@clerk/clerk-react';
import React from 'react';
import Navbar from './ui/Navbar';

const LandingPage = () => {
  return (
    <div className='bg-[#050505]  h-screen w-full text-[#f2f2f2] relative'>
      {/* Blurred gradients positioned absolutely */}
      <div className='max-md:top-0 max-md:blur-[100px] absolute h-[220px] w-1/3 top-20 left-10 bg-gradient-to-tr from-[#050505] to-[#BFFD44] rounded-full blur-[200px] z-0'></div>
      <div className='max-md:bottom-0 max-md:blur-[100px] absolute h-[220px] w-1/3 bottom-20 right-10 bg-gradient-to-tr from-[#68c2e3] to-[#050505] rounded-full blur-[200px] z-0'></div>

      {/* Rest of the content with higher z-index */}
      <Navbar className="" />
      <div className='flex z-[1] justify-center pt-52 items-center mx-auto max-md:pt-28 max-md:px-4 p-20 flex-col gap-5'>
        <h1 className='text-5xl font-space-grotesk mb-5 font-black tracking-wide text-center'><span className='text-[#bffd44]'>Transcribe</span> Your Thoughts <span className='text-[#bffd44]'>Effortlessly</span></h1>
        <p className='w-[70%] max-md:w-[95%] font-space-grotesk text-center text-lg'><i>Speak Easy</i> is your go-to platform for effortlessly transcribing your thoughts into text. Whether it's notes, ideas, or reminders, let <i>Speak Easy</i> do the typing for you. <span className='font-bold text-[#bffd44] italic'>Simply speak, and we'll handle the rest.</span>  Start transcribing now and make your life easier!</p>
        <div className='flex flex-col justify-center items-center text-center mx-auto my-6 gap-3'>
          <div className='flex items-center justify-center font-space-grotesk gap-3'><p>Returning Customer?</p><SignInButton className="font-semibold underline hover:scale:105 hover:text-[#bffd44] hover:-translate-y-1 transition-all ease duration-500" /></div>
          <div className='flex items-center justify-center font-space-grotesk gap-3'><p>New Here?</p><SignUpButton className="font-semibold underline hover:scale:105 hover:text-[#bffd44] hover:-translate-y-1 transition-all ease duration-500" /></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
