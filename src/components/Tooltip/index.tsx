import { ReactNode } from 'react'
import * as RadixTooltip from '@radix-ui/react-tooltip'

import '../../index.css'
import styles from './index.module.css'
interface TooltipProps {
  children: ReactNode
  text?: string
  date?: string
}

export const Tooltip = ({ children, text, date }: TooltipProps) => {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>
          <div className={styles.container}>{children}</div>
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content className={styles.content}>
            {text && <div className={styles.contribution}>{text}</div>}
            {date && <div className={styles.date}>{date}</div>} <RadixTooltip.Arrow />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}
