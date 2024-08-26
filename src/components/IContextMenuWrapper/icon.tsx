import React, { ReactNode } from 'react'
import {
  IconArrowBarBoth,
  IconArrowBarToLeft,
  IconArrowBarToRight,
  IconArrowsRightLeft,
  IconX
} from '@tabler/icons-react'

export const IconsMap: Record<string, ReactNode> = {
  x: <IconX size={18} />,
  arrowBarToLeft: <IconArrowBarToLeft size={18} />,
  arrowBarToRight: <IconArrowBarToRight size={18} />,
  arrowBarBoth: <IconArrowBarBoth size={18} />,
  arrowsRightLeft: <IconArrowsRightLeft size={18} />
}

export const getIcon = (key?: string) => {
  return key ? IconsMap[key] : null
}
