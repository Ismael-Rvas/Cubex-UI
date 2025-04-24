import React from 'react';

export default function Button({ children, className = '', variant = 'default', ...props }) {
  const baseStyles = 'px-4 py-2 rounded font-semibold shadow-sm transition-all duration-200';
  const variants = {
    default: 'bg-white text-black hover:bg-gray-100',
    primary: 'bg-yellow-400 text-white hover:bg-yellow-500',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
