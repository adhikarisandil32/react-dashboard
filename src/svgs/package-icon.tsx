import { twMerge } from 'tailwind-merge';

export const PackageIcon = ({ className }: { className?: string }) => (
  <svg
    className={twMerge('w-5 h-5', className)}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm1 3v6a1 1 0 001 1h10a1 1 0 001-1V7H4z"
      clipRule="evenodd"
    />
  </svg>
);
