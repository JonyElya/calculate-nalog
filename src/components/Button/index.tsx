import React from 'react'
import block from 'bem-clsx'

import './styles.scss'

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type ButtonSize = 'small' | 'big'

interface IProps extends ButtonProps {
  fullWidth?: boolean
  size?: ButtonSize
  weight?: '500'
}

const b = block('button')

const Button: React.FC<IProps> = ({
  children,
  disabled,
  className,
  size = 'big',
  fullWidth = false,
  weight,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      className={b({ disabled, fullWidth, size, weight }, className)}
      {...props}
    >
      { children }
    </button>
  )
}

export default Button