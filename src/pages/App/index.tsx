import React, { useCallback, useState } from 'react'
import block from 'bem-clsx'

import {
  Button,
  ButtonStroke,
  Dialog,
  DialogContent,
  DialogHeader,
  Input,
  Tags,
  Text,
  TextButton
} from '../../components';

import './styles.scss'

type TTags = 'payment' | 'time'

const b = block('app')

const App: React.FC = () => {

  const [ visible, setVisible ] = useState<boolean>(false)
  const [ value, setValue ] = useState<number>()
  const [ mode, setMode ] = useState<TTags>('payment')

  const onToggle = useCallback(() => { setVisible(!visible) }, [visible])
  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(+event.target.value)
  }, [])

  const calculate = useCallback(() => {
    if (!value) { return }
    return (value*12)*0.13
  }, [value])

  return (
    <div className={b()}>
      <ButtonStroke onClick={onToggle} className={b('button')}>
        Налоговый вычет
      </ButtonStroke>
      <Dialog onClose={onToggle} visible={visible}>
        <DialogHeader onClose={onToggle}>
          <Text weight='500' size='big'>
            Налоговый вычет
          </Text>
        </DialogHeader>
        <DialogContent>
          <Text color='secondary'>
            Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более 13% от своего официального годового дохода.
          </Text>
          <div className={b('content')}>
            <Text weight='500'>
              Ваша зарплата в месяц
            </Text>
            <Input className={b('input')} value={value} onChange={onChange} placeholder='Введите данные' fullWidth />
            <TextButton onClick={calculate} weight='500'>
              Рассчитать
            </TextButton>
          </div>
          <div className={b('select-block')}>
            <Text weight='500'>
              Что уменьшаем?
            </Text>
            <div className={b('buttons-wrapper')}>
              <Tags onClick={() => setMode('payment')} active={mode === 'payment'}>
                Платёж
              </Tags>
              <Tags onClick={() => setMode('time')} active={mode === 'time'}>
                Срок
              </Tags>
            </div>
          </div>
        </DialogContent>
        <Button className={b('add-button')} weight='500' fullWidth size='big'>
          Добавить
        </Button>
      </Dialog>
    </div>
  )
}

export default App
