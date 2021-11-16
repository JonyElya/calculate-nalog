import React from 'react';
import block from 'bem-clsx';

import './styles.scss'

type TWeight = '400' | '500' | '600'

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  weight?: TWeight
}

const b = block('text-button')

const TextButton: React.FC<ButtonProps> = ({ children, weight = '400', className, ...props }) => (
  <button className={b({ weight }, className)} {...props}>
    { children }
  </button>
)

export default TextButton