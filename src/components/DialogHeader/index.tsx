import React from 'react';
import block from 'bem-clsx';

import { ReactComponent as CrossIcon } from './icon/cross.svg';
import './styles.scss'

interface IProps {
  onClose: () => void
}

const b = block('dialog')

const DialogHeader: React.FC<IProps> = ({ onClose, children }) => (
  <div className={b('header')}>
    { children }
    <div className={b('cross')} onClick={onClose}>
      <CrossIcon />
    </div>
  </div>
)

export default DialogHeader

