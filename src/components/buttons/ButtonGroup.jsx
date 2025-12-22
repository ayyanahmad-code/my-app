// components/buttons/ButtonGroup.jsx
import React from 'react';

const ButtonGroup = ({ 
  children, 
  orientation = 'horizontal',
  spacing = 'md',
  className = '',
}) => {
  const orientations = {
    horizontal: 'flex flex-row',
    vertical: 'flex flex-col',
  };
  
  const spacings = {
    none: 'gap-0',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
  };
  
  const classes = `${orientations[orientation]} ${spacings[spacing]} ${className}`;
  
  return (
    <div className={classes}>
      {React.Children.map(children, (child, index) => (
        React.cloneElement(child, {
          className: `${child.props.className || ''} ${
            orientation === 'horizontal' 
              ? 'first:rounded-r-none last:rounded-l-none not-first:border-l-0' 
              : 'first:rounded-b-none last:rounded-t-none not-first:border-t-0'
          }`,
        })
      ))}
    </div>
  );
};

export default ButtonGroup;