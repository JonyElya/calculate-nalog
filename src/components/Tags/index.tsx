import React from 'react'
import block from 'bem-clsx'

import './styles.scss'

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  active?: boolean
}

const b = block('tags')

const Tags: React.FC<ButtonProps> = ({ children, active, className, ...props }) => {
  return (
    <button className={b({ active }, className)} {...props}>
      { children }
    </button>
  )
}

export default Tags