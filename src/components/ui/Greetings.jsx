import React, { useEffect, useState } from 'react';
import { useClerk } from '@clerk/clerk-react';

const Greetings = () => {
  const { user } = useClerk();
  const [greeting, setGreeting] = useState("");
  const [sweetMessage, setSweetMessage] = useState("");

  const getGreeting = () => {
    const currentHour = new Date().getHours();
    let greetingText = "";

    if (currentHour >= 5 && currentHour < 12) {
      greetingText = "Good morning";
    } else if (currentHour >= 12 && currentHour < 18) {
      greetingText = "Good afternoon";
    } else {
      greetingText = "Good evening";
    }

    return greetingText;
  };

  const getSweetMessage = () => {
    const sweetMessages = [
      "How's your day going?",
      "What would you like to work on today?",
      "Hope you're having a great day!",
      "Wishing you a wonderful day!",
      "Remember to take breaks and stay hydrated!",
      "You're doing great!",
      "Sending positive vibes your way!",
      "Believe in yourself, you've got this!",
      "Keep shining bright!",
      "Every day is a new opportunity to make progress!",
      "Don't forget to smile today!",
      "You are capable of amazing things!"
    ];

    const randomIndex = Math.floor(Math.random() * sweetMessages.length);
    return sweetMessages[randomIndex];
  };

  useEffect(() => {
    const userName = user && user.firstName; // Assuming Clerk provides firstName
    const greetingText = getGreeting();
    const sweetMessageText = getSweetMessage();

    if (userName) {
      setGreeting(greetingText);
      setSweetMessage(sweetMessageText);
    } else {
      setGreeting(`${greetingText}!`);
      setSweetMessage(sweetMessageText);
    }
  }, [user]);

  return (
    <div className='mb-10 font-space-grotesk'>
<h1 className=" max-md:text-4xl max-md:text-center text-5xl font-bold pb-2 mt-5 w-fit max-md:w-full" style={{background: 'linear-gradient(to right, #bffd44, #FF1493)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}> {greeting}, {user && user.firstName}</h1>
      <p className="max-md:text-lg max-md:text-center text-2xl text-[#f2f2f2]">{sweetMessage}</p>
    </div>
  );
}

export default Greetings;
