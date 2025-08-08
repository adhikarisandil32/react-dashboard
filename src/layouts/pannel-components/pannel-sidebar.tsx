import { ChevronsUpDown } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { usePannelContext } from '../pannel-layout';
import { ScrollArea, ScrollBar } from '@src/components/ui/scroll-area';

/* Sidebar for desktop */
function PannelSidebarDesktop({ children }: { children: React.ReactNode }) {
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
    <div>
      <div
        className="h-screen bg-gray-900 space-y-4 p-4 text-gray-200 transition-[width] duration-300"
        style={{
          width: isSidebarFullLength ? '20rem' : '5.5rem',
        }}
        data-expanded={isSidebarFullLength}
      >
        <div className="min-h-12 flex items-center justify-between cursor-pointer rounded-md p-1 px-2 hover:bg-gray-800">
          <div className="flex items-center gap-2">
            <div className="size-10 rounded-full border border-gray-200 grid place-items-center">
              AU
            </div>

            <AnimatePresence>
              {isSidebarFullLength && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-bold">Admin User</p>
                  <p className="text-sm">dummy@email.com</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {isSidebarFullLength && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronsUpDown className="size-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="space-y-1.5">
          <div className="h-5">
            <AnimatePresence>
              {isSidebarFullLength && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-sm font-semibold whitespace-nowrap">
                    My Pannel
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="h-[calc(100vh-124px)] overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

/* Sidebar for mobile */
function PannelSidebarMobile({ children }: { children: React.ReactNode }) {
  const { isMobilePannelOpen, setIsMobilePannelOpen } = usePannelContext();

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    setIsMobilePannelOpen(false);
  };

  return (
    <AnimatePresence>
      {isMobilePannelOpen && (
        <>
          <div
            className="fixed z-50 top-0 left-0 h-screen w-screen bg-gray-800/25"
            onClick={handleClick}
          />

          <motion.div
            className="h-screen fixed z-[100]  top-0 left-0 bg-gray-900 text-gray-200 transition-[width] duration-300"
            style={{
              width: '20rem',
            }}
            initial={{ x: '-100%' }}
            animate={{ x: '0' }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative z-[75] space-y-4 p-4">
              <div className="min-h-12 flex items-center justify-between cursor-pointer rounded-md p-1 px-2 hover:bg-gray-800">
                <div className="flex items-center gap-2">
                  <div className="size-10 rounded-full border border-gray-200 grid place-items-center">
                    AU
                  </div>

                  <div>
                    <p className="font-bold">Admin User</p>
                    <p className="text-sm">dummy@email.com</p>
                  </div>
                </div>

                <div>
                  <ChevronsUpDown className="size-5" />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="h-5">
                  <span className="text-sm font-semibold whitespace-nowrap">
                    My Pannel
                  </span>
                </div>

                <div className="h-[calc(100vh-124px)] overflow-y-auto">
                  {/* {children} */}

                  <ScrollArea className="h-48 border-2 border-red-200">
                    <div className="min-h-screen"></div>

                    <ScrollBar />
                  </ScrollArea>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function PannelSidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isMobileScreen } = usePannelContext();

  return isMobileScreen ? (
    <PannelSidebarMobile>{children}</PannelSidebarMobile>
  ) : (
    <PannelSidebarDesktop>{children}</PannelSidebarDesktop>
  );
}
