import { Button, ButtonProps } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

type Props = ButtonProps & { code: string }
const IButton: React.FC<Props> = (props) => {
  const userState = useSelector((state: RootState) => state.user)

  return <>{userState.buttons.includes(props.code) ? <Button {...props}>{props.children}</Button> : null}</>
}

export default IButton
