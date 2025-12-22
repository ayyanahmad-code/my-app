// components/buttons/Button.jsx
import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary',
  size = 'md',
  icon = null,
  iconPosition = 'left',
  onClick,
  disabled = false,
  className = '',
  fullWidth = false,
  type = 'button',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-red-600 text-white hover:bg-red-700 hover:shadow-lg hover:-translate-y-0.5 focus:ring-red-500 active:bg-red-800 active:scale-95',
    secondary: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 hover:border-primary-700 hover:text-primary-700 focus:ring-primary-500 active:bg-primary-100 active:scale-95',
    ghost: 'text-primary-600 hover:bg-primary-50 hover:text-primary-700 focus:ring-primary-500 active:bg-primary-100 active:scale-95',
    accent: 'bg-accent-500 text-white hover:bg-accent-600 hover:shadow-lg hover:-translate-y-0.5 focus:ring-accent-500 active:bg-accent-700 active:scale-95',
    success: 'bg-success-500 text-white hover:bg-success-600 hover:shadow-lg focus:ring-success-500 active:bg-success-700 active:scale-95',
    warning: 'bg-warning-500 text-white hover:bg-warning-600 hover:shadow-lg focus:ring-warning-500 active:bg-warning-700 active:scale-95',
    error: 'bg-error-500 text-white hover:bg-error-600 hover:shadow-lg focus:ring-error-500 active:bg-error-700 active:scale-95',
    dark: 'bg-secondary-800 text-white hover:bg-secondary-900 hover:shadow-lg focus:ring-secondary-500 active:bg-secondary-950 active:scale-95',
    white: 'bg-white text-secondary-800 shadow-sm hover:bg-gray-50 hover:shadow-lg hover:-translate-y-0.5 focus:ring-gray-500 active:bg-gray-100 active:scale-95',
    gradient: 'bg-gradient-to-r from-primary-600 to-accent-500 text-white hover:from-primary-700 hover:to-accent-600 hover:shadow-lg hover:-translate-y-0.5 focus:ring-primary-500 active:from-primary-800 active:to-accent-700 active:scale-95',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full justify-center' : ''} ${className}`;
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="mr-2">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
    </button>
  );
};

export default Button;