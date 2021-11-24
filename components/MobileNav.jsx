import { useSession } from 'next-auth/react';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';

import {
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  HomeIcon,
} from '../src/shared/iconImports';

const MobileNav = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);

  const nav = (
    <>
      {session && (
        <div className="py-3 border-gray-200 border bg-white fixed w-full bottom-0 z-50 md:hidden">
          <div className="flex justify-between items-center max-w-md mx-auto">
            <HomeIcon className="mobileBtn" />
            <>
              <div className=" relative mobileBtn">
                <PaperAirplaneIcon className="mobileBtn rotate-45" />
                <div
                  className="absolute -top-2 -right-0 text-xs w-5 h-5 bg-red-500 
            rounded-full flex justify-center items-center animate-pulse text-white"
                >
                  3
                </div>
              </div>
              <PlusCircleIcon onClick={() => setOpen(true)} className="mobileBtn" />
              <UserGroupIcon className="mobileBtn" />
              <HeartIcon className="mobileBtn" />
            </>
          </div>
        </div>
      )}
    </>
  );

  return nav;
};

export default MobileNav;
