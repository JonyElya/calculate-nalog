import React from 'react';
import block from 'bem-clsx';

import Text from '../Text';
import './styles.scss'

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  fullWidth?: boolean
}

const b = block('input')

const Input: React.FC<InputProps> = ({
  className,
  fullWidth,
  required,
  value,
  disabled,
  ...props
}) => {
  return (
    <>
      <input
        value={value}
        required={required}
        disabled={disabled}
        className={b({ fullWidth, disabled }, className)}
        {...props}
      />
      { required && !value && <Text className={b('error-helper')}>Поле обязательно для заполнения</Text> }
    </>
  )
}

export default Input