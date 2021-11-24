import { signOut, useSession } from 'next-auth/react';

const MiniProfile = () => {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src={session?.user?.image}
        alt=" profile"
        className="rounded-full border p-[2px] w-16 h-16"
      />
      <div className="flex-1 mx-2">
        <h2 className="font-bold">{session?.user?.username}</h2>
        <h3 className="text-sm text-gray-400">Welcom to Instagram</h3>
      </div>
      <button onClick={signOut} className="text-blue-400 text-sm font-semibold ml-5 cursor-pointer">
        Sign out
      </button>
    </div>
  );
};

export default MiniProfile;
