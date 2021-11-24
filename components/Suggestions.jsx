import { useEffect, useState } from 'react';
import { suggestionsData } from '../src/shared/userprofile';
import faker from 'faker';
import { v4 as uuidv4 } from 'uuid';

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      ...suggestionsData,
      id: uuidv4(),
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-blod text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold cursor-pointer">See All</button>
      </div>
      {/* {suggestions.map((profile, i) => (
        <div key={profile.id} className="flex items-center justify-between mt-3">
          <img src={profile.avatar} alt="prof" className="w-10 h-10 rounded-full border p-[2px]" />
          <div className="flex-1 ml-2">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <h3 className="text-xs text-gray-400 truncate">Works At {profile.company.name}</h3>
          </div>
          <button className="text-xs text-blue-400 font-bold cursor-pointer">Follow</button>
        </div>
      ))} */}
      {suggestionsData.map((profile, i) => (
        <div key={profile.id} className="flex items-center justify-between mt-3">
          <img
            src={profile.userImage}
            alt="prof"
            className="w-10 h-10 rounded-full border p-[2px]"
          />
          <div className="flex-1 ml-2">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <h3 className="text-xs text-gray-400 truncate">Works At {profile.worksAt}</h3>
          </div>
          <button className="text-xs text-blue-400 font-bold cursor-pointer">Follow</button>
        </div>
      ))} 
    </div>
  );
};

export default Suggestions;
