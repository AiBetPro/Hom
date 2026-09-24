import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export const IconGrid = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
  </svg>
);

export const IconBolt = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
  </svg>
);

export const IconBot = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="4" y="8" width="16" height="11" rx="3" />
    <path d="M12 8V4M9 4h6" />
    <circle cx="9" cy="13.5" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="15" cy="13.5" r="1.2" fill="currentColor" stroke="none" />
    <path d="M9 16.5c1 .8 5 .8 6 0" />
  </svg>
);

export const IconTicket = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a1.6 1.6 0 0 0 0 4v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a1.6 1.6 0 0 0 0-4V8Z" />
    <path d="M10 6v12" strokeDasharray="2.5 3" />
  </svg>
);

export const IconUser = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="8" r="3.4" />
    <path d="M5 20c1.3-3.6 4-5.4 7-5.4S18.7 16.4 20 20" />
  </svg>
);

export const IconHome = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 11.5 12 4l8 7.5" />
    <path d="M6 10v9a1 1 0 0 0 1 1h3v-6h4v6h3a1 1 0 0 0 1-1v-9" />
  </svg>
);

export const IconArrowRight = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconFootball = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7.2 15.6 10l-1.3 4.1H9.7L8.4 10 12 7.2Z" />
    <path d="M12 3v4.2M4.4 8.6 8.4 10M15.6 10l4-1.4M9.7 14.1 7.4 18M14.3 14.1l2.3 3.9" />
  </svg>
);

export const IconBasketball = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.6 2.4 4 5.5 4 9s-1.4 6.6-4 9M12 3C9.4 5.4 8 8.5 8 12s1.4 6.6 4 9" />
  </svg>
);

export const IconTennis = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M4 7c3 2 3 8 0 10M20 7c-3 2-3 8 0 10" />
  </svg>
);

export const IconRacing = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 4v16" />
    <path d="M5 5h6l2 2h6v6h-6l-2-2H5" />
  </svg>
);

export const IconChevronRight = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m9 6 6 6-6 6" />
  </svg>
);

export const IconUp = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M6 15 12 9l6 6" />
  </svg>
);

export const IconDown = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);
export default Icons;