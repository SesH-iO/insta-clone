import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { instaLogo, instaLogo2 } from '../src/shared/imageImports';
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  HomeIcon,
} from '../src/shared/iconImports';
import { modalState } from '../atoms/modalAtom';

const Header = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();

  return (
    <div className="py-2 shadow-md bg-white sticky top-0 z-50">
      <div className="flex justify-between bg-white max-w-6xl mx-5 xl:mx-auto">
        {/* Left */}
        <div
          onClick={() => router.push('/')}
          className="relative hidden md:inline-grid w-24 cursor-pointer "
        >
          <Image src="https://links.papareact.com/ocw" layout="fill" objectFit="contain" />
          {/* <Image src={instaLogo} layout="fill" objectFit="contain" /> */}
        </div>
        <div
          onClick={() => router.push('/')}
          className="relative w-10 md:hidden flex-shrink-0 cursor-pointer"
        >
          <Image src="https://links.papareact.com/jjm" layout="fill" objectFit="contain" />
          {/* <Image src={instaLogo2} layout="fill" objectFit="contain" /> */}
        </div>
        {/* Middle - Custom Search Field */}
        <div className="max-w-xs">
          <div className="hidden md:inline-flex relative mt-1 p-3 rounded-md ">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500 " />
            </div>
            <input
              className="bg-gray-100 block w-full pl-10 sm:text-sm border-gray-300 
              focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Right */}

        <div className="flex items-center justify-end space-x-4">
          <HomeIcon onClick={() => router.push('/')} className="navBtn" />
          {/* <MenuIcon className="h-6 md:hidden cursor-pointer" /> */}
          {session ? (
            <>
              <div className=" relative navBtn">
                <PaperAirplaneIcon className="navBtn rotate-45" />
                <div
                  className="absolute -top-2 -right-2 text-xs w-5 h-5 bg-red-500 
            rounded-full flex justify-center items-center animate-pulse text-white"
                >
                  3
                </div>
              </div>
              <PlusCircleIcon onClick={() => setOpen(true)} className="navBtn" />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />

              <img
                onClick={signOut}
                src={session?.user?.image}
                alt="prof"
                className="h-10 rounded-full cursor-pointer"
              />
            </>
          ) : (
            <button
              className="border-2 rounded-md px-5 py-2 hover:bg-[#b63a63] hover:text-white transition-all duration-150 ease-out"
              onClick={signIn}
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
