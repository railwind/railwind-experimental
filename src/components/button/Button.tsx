import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { buttonTheme } from '../../themes/components/button';

type Variant = 'default' | 'contained' | 'outlined';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, forwardedRef) => {
    const { variant = 'default', children, className, ...restProps } = props;

    const baseClassName = buttonTheme['base'];
    const variantClassName = buttonTheme[variant];

    const classNameCompose = twMerge(
      baseClassName,
      variantClassName,
      className
    );

    return (
      <button
        ref={forwardedRef}
        type="button"
        className={classNameCompose}
        {...restProps}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
