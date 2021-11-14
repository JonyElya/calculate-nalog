import React, { useCallback, useState } from 'react'
import block from 'bem-clsx'
import ButtonStroke from '../../components/ButtonStroke'
import Dialog from '../../components/Dialog'
import './styles.scss'

const b = block('app')

const App: React.FC = () => {

  const [ visible, setVisible ] = useState<boolean>(false)

  const onShow = useCallback(() => { setVisible(!visible) }, [visible])
  return (
    <div className={b()}>
      <ButtonStroke onClick={onShow} className={b('button')}>
        Налоговый вычет
      </ButtonStroke>
      <Dialog onClose={onShow} visible={visible}>
        dsakljhdlaskj
      </Dialog>
    </div>
  )
}

export default App
