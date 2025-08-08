import React, { createContext, useContext, useState } from 'react';
import PannelSidebar from './pannel-components/pannel-sidebar';
import PannelHeader from './pannel-components/pannel-header';
import { useMediaQuery } from 'usehooks-ts';
import { useAppStyles } from '@src/stores/styles-store';

interface IPannelContext {
  isMobileScreen: boolean;
  isMenuExpanded: boolean;
  setIsMenuExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  isMobilePannelOpen: boolean;
  setIsMobilePannelOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
  const [isMenuExpanded, setIsMenuExpanded] = useState<boolean>(true);
  const { styles } = useAppStyles();
  const isMobileScreen = useMediaQuery(
    `(max-width: ${styles.getPropertyValue('--breakpoint-md')})`
  );

  const [isMobilePannelOpen, setIsMobilePannelOpen] = useState<boolean>(false);

  return (
    <PannelContext.Provider
      value={{
        isMenuExpanded,
        setIsMenuExpanded,
        isMobileScreen,
        isMobilePannelOpen,
        setIsMobilePannelOpen,
      }}
    >
      <div className="flex">
        <PannelSidebar>
          <></>
        </PannelSidebar>

        <div className="space-y-4 p-3 w-full">
          <div className="border border-black">
            <PannelHeader />
          </div>

          <div>{children}</div>
        </div>
      </div>
    </PannelContext.Provider>
  );
}
