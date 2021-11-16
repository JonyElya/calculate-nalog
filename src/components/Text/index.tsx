import React from 'react';
import block from 'bem-clsx';
import './styles.scss'

const b = block('text')

type TSize = 'small' | 'big'
type TColor = 'primary' | 'secondary'

interface IProps {
  className?: string
  size?: TSize
  color?: TColor
  weight?: '500'
}

const Text: React.FC<IProps> = ({ size = 'small', color = 'primary', weight, className, children }) => (
  <p className={b({ size, color, weight }, className)}>{ children }</p>
)

export default Text
