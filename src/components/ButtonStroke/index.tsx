import React from 'react'
import block from 'bem-clsx'

import './styles.scss'

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type ButtonSize = 'small' | 'big'

interface IProps extends ButtonProps {
  fullWidth?: boolean
  size?: ButtonSize
}

const b = block('button-stroke')

const ButtonStroke: React.FC<IProps> = ({
  children,
  disabled,
  className,
  size = 'big',
  fullWidth = false,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      className={b({ disabled, fullWidth, size }, className)}
      {...props}
    >
      { children }
    </button>
  )
}

export default ButtonStroke