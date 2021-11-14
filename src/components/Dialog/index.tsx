import React from 'react'
import block from 'bem-clsx'

import './styles.scss'

const b = block('dialog')

interface IProps {
  visible: boolean
  onClose?: () => void
}

const Dialog: React.FC<IProps> = ({ visible, onClose, children }) => {
  return (
    <>
      <div className={b('', { visible })}>
        { children }
      </div>
      <div onClick={onClose} className={b('backdrop', { visible })}/>
    </>
  )
}

export default Dialog
