import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { usePannelContext } from '../pannel-layout';

export default function PannelHeader() {
  const { setIsMenuExpanded } = usePannelContext();

  return (
    <div className="flex gap-2">
      <div>
        <button
          className="cursor-pointer"
          onClick={() => setIsMenuExpanded(true)}
        >
          <PanelLeftOpen />
        </button>

        <button
          className="cursor-pointer"
          onClick={() => setIsMenuExpanded(false)}
        >
          <PanelLeftClose />
        </button>
      </div>

      <div>This is pannel header</div>
    </div>
  );
}
