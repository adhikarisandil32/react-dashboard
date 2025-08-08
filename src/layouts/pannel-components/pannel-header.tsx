import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { usePannelContext } from '../pannel-layout';

export default function PannelHeader() {
  const {
    isMobileScreen,
    isMenuExpanded,
    isMobilePannelOpen,
    setIsMobilePannelOpen,
    setIsMenuExpanded,
  } = usePannelContext();

  return (
    <div className="flex gap-2">
      {!isMobileScreen && (
        <div>
          {!isMenuExpanded && (
            <button
              className="cursor-pointer"
              onClick={() => setIsMenuExpanded(true)}
            >
              <PanelLeftOpen />
            </button>
          )}

          {isMenuExpanded && (
            <button
              className="cursor-pointer"
              onClick={() => setIsMenuExpanded(false)}
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

      <div>This is pannel header</div>
    </div>
  );
}
