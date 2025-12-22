// components/buttons/IconButton.jsx
import React from 'react';

const IconButton = ({
  icon,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-full transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 active:bg-primary-800',
    secondary: 'bg-primary-100 text-primary-600 hover:bg-primary-200 focus:ring-primary-500 active:bg-primary-300',
    ghost: 'text-primary-600 hover:bg-primary-50 focus:ring-primary-500 active:bg-primary-100',
    accent: 'bg-accent-500 text-white hover:bg-accent-600 focus:ring-accent-500 active:bg-accent-700',
    dark: 'bg-secondary-800 text-white hover:bg-secondary-900 focus:ring-secondary-500 active:bg-secondary-950',
    white: 'bg-white text-secondary-800 shadow-sm hover:bg-gray-50 focus:ring-gray-500 active:bg-gray-100',
  };
  
  const sizes = {
    sm: 'p-2',
    md: 'p-3',
    lg: 'p-4',
  };
  
  const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...props}
    >
      {React.cloneElement(icon, { className: iconSizes[size] })}
    </button>
  );
};

export default IconButton;