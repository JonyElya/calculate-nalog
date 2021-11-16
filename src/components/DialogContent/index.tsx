import React from 'react';
import block from 'bem-clsx';

import './styles.scss'

const b = block('dialog')

const DialogContent: React.FC = ({ children }) => (
  <div className={b('content')}>{ children }</div>
)

export default DialogContent
