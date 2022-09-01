import React, { forwardRef } from 'react';

type Variant = 'default' | 'contained' | 'outlined';

const variantValue: { [key in Variant]: string } = {
  default: 'bg-gray-200',
  contained: 'bg-gray-900 text-white',
  outlined: 'border border-gray-600 dark:text-white',
};

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, forwardedRef) => {
    const { variant = 'default', children, className, ...restProps } = props;

    const baseClassName = 'py-2 px-6 font-semibold';
    const variantClassName = variantValue[variant];

    return (
      <button
        ref={forwardedRef}
        type="button"
        className={`${baseClassName} ${variantClassName} ${className}`}
        {...restProps}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
