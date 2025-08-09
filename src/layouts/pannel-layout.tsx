import React, { createContext, useContext, useState } from 'react';
import PannelSidebar from './pannel-components/pannel-sidebar';
import PannelHeader from './pannel-components/pannel-header';
import { useMediaQuery } from 'usehooks-ts';
import { useAppStyles } from '@src/stores/styles-store';

interface IPannelContext {
  isMobileScreen: boolean;
  isSidebarExpanded: boolean;
  setIsSidebarExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  isMobilePannelOpen: boolean;
  setIsMobilePannelOpen: React.Dispatch<React.SetStateAction<boolean>>;
  expandedSidebarWidth: string;
  collapsedSidebarWidth: string;
  collapsedScrollableSidebarWidth: string;
}

const PannelContext = createContext<IPannelContext | null>(null);

export const usePannelContext = () => {
  const context = useContext(PannelContext);

  if (!context) {
    throw new Error(
      'usePannelContext must be used within PannelContextProvider'
    );
  }

  return context;
};

export default function PannelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState<boolean>(true);
  const { styles } = useAppStyles();
  const isMobileScreen = useMediaQuery(
    `(max-width: ${styles.getPropertyValue('--breakpoint-md')})`
  );

  const [isMobilePannelOpen, setIsMobilePannelOpen] = useState<boolean>(false);

  const expandedSidebarWidth = '20rem';
  const collapsedSidebarWidth = '5.5rem';
  const collapsedScrollableSidebarWidth = '7.5rem';

  return (
    <PannelContext.Provider
      value={{
        isSidebarExpanded,
        setIsSidebarExpanded,
        isMobileScreen,
        isMobilePannelOpen,
        setIsMobilePannelOpen,
        expandedSidebarWidth,
        collapsedSidebarWidth,
        collapsedScrollableSidebarWidth,
      }}
    >
      <div className="flex h-screen">
        <div>
          <PannelSidebar>
            <></>
          </PannelSidebar>
        </div>

        <div className="space-y-4 p-3 w-full overflow-y-auto">
          <PannelHeader />

          <div>{children}</div>
        </div>
      </div>
    </PannelContext.Provider>
  );
}
