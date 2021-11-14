import React from 'react'
import block from 'bem-clsx'

import './styles.scss'

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type ButtonSize = 'small' | 'big'
type ButtonType = 'text' | 'default'

interface IProps extends ButtonProps {
  fullWidth?: boolean
  size?: ButtonSize
  buttonType?: ButtonType
}

const b = block('button')

const Button: React.FC<IProps> = ({
  children,
  disabled,
  className,
  size = 'big',
  fullWidth = false,
  buttonType = 'default',
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      className={b({ disabled, fullWidth, size, buttonType }, className)}
      {...props}
    >
      { children }
    </button>
  )
}

export default Button