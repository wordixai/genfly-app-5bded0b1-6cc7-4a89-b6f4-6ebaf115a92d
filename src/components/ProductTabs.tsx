import { useState } from 'react';

const products = [
  {
    id: 'redis',
    name: 'Redis',
    color: 'text-red-600',
    bg: 'bg-white',
    border: 'border-white',
    active: true,
    icon: (
      <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 shrink-0 sm:block md:w-6 block">
        <rect width="32" height="32" rx="7" fill="#DC2626"></rect>
        <path d="M21.6979 4.48341C22.0283 3.83886 22.9495 3.83886 23.2799 4.48341L27.2476 12.2237C27.5508 12.8152 27.1212 13.5181 26.4566 13.5181H18.5212C17.8565 13.5181 17.4269 12.8152 17.7301 12.2237L21.6979 4.48341Z" fill="white"></path>
        <path d="M8.84444 13.6958C11.52 13.6958 13.6889 11.5269 13.6889 8.85139C13.6889 6.17587 11.52 4.00694 8.84444 4.00694C6.16893 4.00694 4 6.17587 4 8.85139C4 11.5269 6.16893 13.6958 8.84444 13.6958Z" fill="white"></path>
        <path d="M11.8222 17.9625H5.77778C4.99231 17.9625 4.35556 18.5992 4.35556 19.3847V25.518C4.35556 26.3035 4.99231 26.9403 5.77778 26.9403H11.8222C12.6077 26.9403 13.2444 26.3035 13.2444 25.518V19.3847C13.2444 18.5992 12.6077 17.9625 11.8222 17.9625Z" fill="white"></path>
        <path d="M21.7334 17.8285C22.1795 17.4877 22.7983 17.4877 23.2444 17.8285L26.7769 20.5271C27.1913 20.8437 27.3644 21.3852 27.2104 21.8834L25.8364 26.3299C25.6752 26.8514 25.1932 27.2069 24.6474 27.2069H20.3304C19.7846 27.2069 19.3026 26.8514 19.1414 26.3299L17.7674 21.8834C17.6134 21.3852 17.7865 20.8437 18.2009 20.5271L21.7334 17.8285Z" fill="white"></path>
      </svg>
    )
  },
  {
    id: 'vector',
    name: 'Vector',
    color: 'text-gray-600',
    bg: 'bg-gray-100',
    border: 'border-gray-200',
    active: false,
    icon: (
      <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden w-5 shrink-0 sm:block md:w-6">
        <rect width="32" height="32" rx="7" fill="#F97316"></rect>
        <circle cx="23" cy="23" r="4" fill="white"></circle>
        <circle cx="9" cy="23" r="4" fill="white"></circle>
        <circle cx="9" cy="9" r="4" fill="white"></circle>
        <circle cx="23" cy="9" r="4" fill="white"></circle>
        <path d="M9 23L23 9M9 23H23M9 23V9" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    )
  },
  {
    id: 'qstash',
    name: 'QStash',
    color: 'text-gray-600',
    bg: 'bg-gray-100',
    border: 'border-gray-200',
    active: false,
    icon: (
      <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden w-5 shrink-0 sm:block md:w-6">
        <rect width="32" height="32" rx="7" fill="#2563EB"></rect>
        <path d="M16 16H26M16 16V6M16 16H6M16 16V26M16 16L22.3636 9.63636M16 16L22.3636 22.3636M16 16L9.63636 9.63636M16 16L9.63636 22.3636" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    )
  },
  {
    id: 'workflow',
    name: 'Workflow',
    color: 'text-gray-600',
    bg: 'bg-gray-100',
    border: 'border-gray-200',
    active: false,
    icon: (
      <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden w-5 shrink-0 sm:block md:w-6">
        <rect width="32" height="32" rx="7" fill="#9333EA"></rect>
        <path d="M8 8H24L8 16H24L8 24H24" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    )
  },
  {
    id: 'search',
    name: 'Search',
    color: 'text-gray-600',
    bg: 'bg-gray-100',
    border: 'border-gray-200',
    active: false,
    icon: (
      <svg width="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden w-5 shrink-0 sm:block md:w-6">
        <rect width="32" height="32" rx="7" fill="#EAB308"></rect>
        <path fillRule="evenodd" clipRule="evenodd" d="M7.56066 5.43934C6.97487 4.85355 6.02513 4.85355 5.43934 5.43934C4.85355 6.02513 4.85355 6.97487 5.43934 7.56066L7.94826 10.0696C6.97242 11.3945 6.3338 12.9466 6.09976 14.591C5.79464 16.7349 6.1937 18.9199 7.23693 20.8175C8.28017 22.7152 9.91121 24.2229 11.8849 25.114C13.8585 26.0052 16.0681 26.2316 18.1814 25.7592C18.9899 25.5785 19.4988 24.7766 19.3181 23.9681C19.1374 23.1596 18.3355 22.6507 17.527 22.8314C16.0477 23.1621 14.501 23.0036 13.1194 22.3798C11.7378 21.756 10.5961 20.7006 9.86585 19.3723C9.13559 18.0439 8.85625 16.5144 9.06983 15.0137C9.27442 13.5762 9.92066 12.2396 10.9167 11.1875C10.9667 11.1488 11.0148 11.1065 11.0607 11.0607C11.6464 10.4749 11.6464 9.52513 11.0607 8.93934L11.0503 8.92893L7.56066 5.43934ZM14.473 9.16858C15.9523 8.83791 17.4991 8.99638 18.8806 9.62018C20.2622 10.244 21.4039 11.2994 22.1341 12.6277C22.8644 13.9561 23.1438 15.4856 22.9302 16.9863C22.7256 18.4238 22.0793 19.7604 21.0833 20.8125C21.0333 20.8512 20.9852 20.8935 20.9393 20.9393C20.3536 21.5251 20.3536 22.4749 20.9393 23.0607L20.9487 23.0701L20.9497 23.0711L20.9508 23.0721L24.4393 26.5607C25.0251 27.1464 25.9749 27.1464 26.5607 26.5607C27.1464 25.9749 27.1464 25.0251 26.5607 24.4393L24.0517 21.9304C25.0276 20.6055 25.6662 19.0534 25.9002 17.409C26.2054 15.2651 25.8063 13.0801 24.7631 11.1825C23.7198 9.28482 22.0888 7.7771 20.1151 6.88597C18.1415 5.99483 15.9319 5.76844 13.8186 6.24083C13.0101 6.42155 12.5012 7.22345 12.6819 8.03192C12.8626 8.8404 13.6645 9.3493 14.473 9.16858Z" fill="white"></path>
      </svg>
    )
  }
];

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState('redis');

  return (
    <section className="relative z-10 sm:mt-4">
      <div className="mx-auto max-w-screen-xl px-6 md:px-10">
        <div className="flex items-end justify-center md:gap-1 lg:gap-2">
          {products.map((product) => (
            <button
              key={product.id}
              type="button"
              onClick={() => setActiveTab(product.id)}
              className={`flex grow items-center justify-center text-center sm:grow-0 h-12 sm:px-4 lg:px-8 xs:text-[1.2em] font-display text-[1em] font-semibold leading-none lg:text-xl xl:text-2xl rounded-2xl rounded-b-none border-2 border-b-0 whitespace-nowrap ${
                activeTab === product.id 
                  ? `${product.color} ${product.bg} lg:h-20 border-white` 
                  : `text-gray-600 bg-gray-100 lg:h-16 border-gray-200`
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                {product.icon}
                <span>{product.name}</span>
                {product.name === 'Redis' && (
                  <span className="hidden text-[.9em] opacity-40 sm:inline-flex">®*</span>
                )}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}