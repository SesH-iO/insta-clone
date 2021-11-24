import faker from 'faker';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSession } from 'next-auth/react';

import { data as userData } from '../src/shared/userprofile';
import Story from './Story';

const Stories = () => {
  const [suggestions, setSuggestions] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: uuidv4(),
    }));
    // console.log(suggestions);
    setSuggestions(suggestions);
  }, []);

  return (
    <div
      className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 
      border ronuded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black rounded-sm"
    >
      {session && <Story image={session.user.image} username={session.user.username} />}
      {/* {suggestions.map((profile) => (
        <Story key={profile.id} image={profile.avatar} username={profile.username} />
      ))} */}
      {userData.map((profile) => (
        <Story key={profile.id} image={profile.img} username={profile.username} />
      ))}
    </div>
  );
};

export default Stories;
