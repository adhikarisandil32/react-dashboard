import { ChevronsUpDown } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { usePannelContext } from '../pannel-layout';
import { useEffect, useRef, useState } from 'react';

/* Sidebar for desktop */
function PannelSidebarDesktop({ children }: { children: React.ReactNode }) {
  const {
    isSidebarExpanded,
    expandedSidebarWidth,
    collapsedSidebarWidth,
    collapsedScrollableSidebarWidth,
  } = usePannelContext();

  const menuRef = useRef<HTMLDivElement | null>(null);

  const [isSidebarMenuOverflowing, setIsSidebarMenuOverflowing] =
    useState<boolean>(false);

  useEffect(() => {
    if (!menuRef.current) return;

    if (menuRef.current?.scrollHeight > menuRef.current?.clientHeight) {
      setIsSidebarMenuOverflowing(true);
    }
  }, []);

  return (
    <div
      className="h-screen bg-gray-900 space-y-4 p-4 text-gray-200 transition-[width] duration-300"
      style={{
        width: isSidebarExpanded
          ? expandedSidebarWidth
          : isSidebarMenuOverflowing
          ? collapsedScrollableSidebarWidth
          : collapsedSidebarWidth,
      }}
      data-expanded={isSidebarExpanded}
    >
      <div className="min-h-12 flex items-center justify-between cursor-pointer rounded-md p-1 px-2 hover:bg-gray-800">
        <div className="flex items-center gap-2">
          <div className="size-10 rounded-full border border-gray-200 grid place-items-center">
            AU
          </div>

          <AnimatePresence>
            {isSidebarExpanded && (
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
          {isSidebarExpanded && (
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
            {isSidebarExpanded && (
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

        <div
          className="h-[calc(100vh-124px)] overflow-y-auto"
          ref={menuRef}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

/* Sidebar for mobile */
function PannelSidebarMobile({ children }: { children: React.ReactNode }) {
  const { isMobilePannelOpen, setIsMobilePannelOpen, expandedSidebarWidth } =
    usePannelContext();

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
              width: expandedSidebarWidth,
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
                  {children}
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
