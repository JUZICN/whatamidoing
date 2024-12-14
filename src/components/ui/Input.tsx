import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
}

export const Input: React.FC<InputProps> = ({ 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  return (
    <input
      className={`px-4 py-2 rounded border focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none ${
        fullWidth ? 'w-full' : ''
      } ${className}`}
      {...props}
    />
  );
};