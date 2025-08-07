import { ChevronsUpDown } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { usePannelContext } from '../pannel-layout';

export default function PannelSidebar() {
  const pannelSidebarRef = useRef<HTMLDivElement | null>(null);
  const { isMenuExpanded, isMobileScreen } = usePannelContext();

  const [isSidebarFullLength, setIsSidebarFullLength] =
    useState<boolean>(false);

  useEffect(() => {
    if (isMobileScreen) {
      setIsSidebarFullLength(true);
      return;
    }

    if (!isMobileScreen && isMenuExpanded) {
      setIsSidebarFullLength(true);
      return;
    }

    setIsSidebarFullLength(false);
    return;
  }, [isMenuExpanded, isMobileScreen]);

  return (
    <AnimatePresence>
      <motion.div
        className="h-screen bg-gray-900 space-y-4 p-4 text-gray-200"
        style={{
          width: isSidebarFullLength ? '20rem' : '5.5rem',
        }}
        data-expanded={isSidebarFullLength}
        ref={pannelSidebarRef}
      >
        <div className="min-h-12 flex items-center justify-between cursor-pointer rounded-md p-1 px-2 hover:bg-gray-800">
          <div className="flex items-center gap-2">
            <div className="size-10 rounded-full border border-gray-200 grid place-items-center">
              AU
            </div>

            {isSidebarFullLength && (
              <motion.div exit={{ opacity: 0 }}>
                <p className="font-bold">Admin User</p>
                <p className="text-sm">dummy@email.com</p>
              </motion.div>
            )}
          </div>

          {isSidebarFullLength && (
            <motion.div exit={{ opacity: 0 }}>
              <ChevronsUpDown className="size-5" />
            </motion.div>
          )}
        </div>

        <div className="space-y-1.5">
          {isSidebarFullLength && (
            <motion.div exit={{ opacity: 0 }}>
              <span className="text-sm font-semibold">My Pannel</span>
            </motion.div>
          )}

          <div className="h-[calc(100vh-124px)] overflow-y-auto">
            <div className="min-h-screen"></div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
