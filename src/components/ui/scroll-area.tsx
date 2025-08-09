/* Still work on this, may be this pen (https://codepen.io/sandiladhikari/pen/gOQzVLo?editors=1111) from codepen can be helpful */

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type HTMLAttributes,
} from 'react';
import { twMerge as tw } from 'tailwind-merge';

interface IScrollAreaContext {
  heightsOfScrollArea: IHeightsOfScrollArea;
}

interface IHeightsOfScrollArea {
  scrollHeight: number;
  clientHeight: number;
}

// interface ScrollPosition {
//   x: number;
//   y: number;
// }

const ScrollAreaContext = createContext<IScrollAreaContext | null>(null);

const useScrollAreaContext = () => {
  const context = useContext(ScrollAreaContext);

  if (!context) {
    throw new Error(
      'useScrollArea must be used within the context of ScrollArea'
    );
  }

  return context;
};

export function ScrollArea({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);

  const [heightsOfScrollArea, setHeightsOfScrollArea] =
    useState<IHeightsOfScrollArea>({
      clientHeight: 0,
      scrollHeight: 0,
    });

  // const [currentScrollPosition, setScrollPosition] = useState<ScrollPosition>({
  //   x: 0,
  //   y: 0,
  // });

  useEffect(() => {
    let scrollAreaScrollHeight = 0;
    let scrollAreaClientHeight = 0;

    if (scrollAreaRef.current) {
      scrollAreaScrollHeight = scrollAreaRef.current.scrollHeight;
      scrollAreaClientHeight = scrollAreaRef.current.clientHeight;
    }

    setHeightsOfScrollArea({
      clientHeight: scrollAreaClientHeight,
      scrollHeight: scrollAreaScrollHeight,
    });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => [];

  const handleWheel = (/* e: React.WheelEvent */) => {
    console.log('scrolled');
    console.log(heightsOfScrollArea);
    scrollAreaRef.current?.scrollTo({ top: heightsOfScrollArea.clientHeight });
  };

  return (
    <ScrollAreaContext.Provider value={{ heightsOfScrollArea }}>
      <div
        className={tw('relative overflow-hidden', className)}
        {...props}
        data-scroll-area
        ref={scrollAreaRef}
        onWheel={handleWheel}
      >
        {children}
      </div>
    </ScrollAreaContext.Provider>
  );
}

export function ScrollBar() {
  const { heightsOfScrollArea } = useScrollAreaContext();

  const scrollableHeightPercentage =
    (heightsOfScrollArea.clientHeight / heightsOfScrollArea.scrollHeight) * 100;

  return (
    <div
      className="w-2 absolute top-0 right-0 h-full rounded-t-full rounded-b-full border border-white"
      style={{}}
      data-scrollable-container
    >
      <div
        className="absolute w-1.5 rounded-t-full rounded-b-full bg-gray-400"
        style={{
          height: `${
            isNaN(scrollableHeightPercentage) ? 0 : scrollableHeightPercentage
          }%`,
        }}
        data-scrollable
      />
    </div>
  );
}
