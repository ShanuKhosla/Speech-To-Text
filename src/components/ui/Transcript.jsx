import React, { useEffect, useState } from 'react';
import useSpeechToText from 'react-hook-speech-to-text';

const Transcript = () => {
  const [transcript, setTranscript] = useState('');
  const [recordingStatus, setRecordingStatus] = useState('Press Start Recording');
  const [isClearing, setIsClearing] = useState(false);

  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;

  const handleStartStop = () => {
    if (isRecording) {
      stopSpeechToText();
      setRecordingStatus('Recording Stopped');
    } else {
      startSpeechToText();
      setRecordingStatus('Recording Started');
    }
  };

  const updateTranscript = () => {
    const newTranscript = results.reduce((acc, result) => {
      return acc + ' ' + result.transcript;
    }, '');
    setTranscript(newTranscript);
  };

  // Listen for changes in results and update transcript accordingly
  useEffect(() => {
    updateTranscript();
  }, [results]);

  const handleClearTranscript = () => {
    setIsClearing(true);
  };

  const confirmClearTranscript = () => {
    const clear = window.confirm('Are you sure you want to clear the transcript?');
    if (clear) {
      setTranscript('');
      setIsClearing(false);
    } else {
      setIsClearing(false);
    }
  };

  const handleCopyTranscript = () => {
    navigator.clipboard.writeText(transcript)
      .then(() => {
        alert('Transcript copied to clipboard!');
      })
      .catch((error) => {
        console.error('Error copying transcript to clipboard:', error);
      });
  };

  return (
    <div className='flex flex-col items-center justify-center mx-auto'>
      <div className='max-md:bottom-0 max-md:blur-[100px] absolute h-[150px] w-1/3 bottom-0 right-0 bg-gradient-to-tr from-[#68c2e3] to-[#050505] rounded-full blur-[200px] z-0'></div>

      <h1 className='text-2xl text-[#f2f2f2]'>Transcript</h1>
      <div className='mb-10 mt-3 bg-[#201f1f] px-4 border-2 border-[#f2f2f2]  text-[#f2f2f2] w-full py-4 rounded-md'>
        <p className='text-justify font-work-sans leading-relaxed'>{transcript}</p>
        {interimResult && <p>{interimResult}</p>}
        
      </div>
      <h1 className='text-[#f2f2f2] my-3 text-2xl font-bold font-space-grotesk'>{recordingStatus}</h1>
     <div className='flex items-center justify-between gap-3'>
     <button className='bg-[#f2f2f2] font-space-grotesk z-10 px-6 py-2 font-semibold text-lg rounded-full border-2 border-slate-600 hover:scale-110 cursor-pointer transition-all ease duration-300' onClick={handleStartStop}>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
      <button className='z-10 font-space-grotesk  bg-[#bffd44] font-bold  px-6 py-2 text-lg rounded-full border-2 border-gray-800 hover:scale-110 cursor-pointer transition-all ease duration-300' onClick={handleCopyTranscript}>
        Copy Transcript
      </button>
     </div>
      <button className='mt-4 z-10  bottom-2 right-2 fixed font-space-grotesk hover:bg-red-600 bg-red-500 font-bold  px-6 py-2 text-lg rounded-full border-2 border-red-800 hover:scale-110 cursor-pointer transition-all ease duration-300' onClick={handleClearTranscript}>
        Clear Transcript
      </button>
      
      {isClearing && confirmClearTranscript()}
    </div>
  );
};

export default Transcript;
