import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { usePannelContext } from '../pannel-layout';

export default function PannelHeader() {
  const {
    isMobileScreen,
    isMobilePannelOpen,
    setIsMobilePannelOpen,
    isSidebarExpanded,
    setIsSidebarExpanded,
  } = usePannelContext();

  return (
    <div className="flex gap-2">
      {!isMobileScreen && (
        <div>
          {!isSidebarExpanded && (
            <button
              className="cursor-pointer"
              onClick={() => setIsSidebarExpanded(true)}
            >
              <PanelLeftOpen />
            </button>
          )}

          {isSidebarExpanded && (
            <button
              className="cursor-pointer"
              onClick={() => setIsSidebarExpanded(false)}
            >
              <PanelLeftClose />
            </button>
          )}
        </div>
      )}

      {isMobileScreen && (
        <div>
          {!isMobilePannelOpen && (
            <button
              className="cursor-pointer"
              onClick={() => setIsMobilePannelOpen(true)}
            >
              <PanelLeftOpen />
            </button>
          )}

          {isMobilePannelOpen && (
            <button
              className="cursor-pointer"
              onClick={() => setIsMobilePannelOpen(false)}
            >
              <PanelLeftClose />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
