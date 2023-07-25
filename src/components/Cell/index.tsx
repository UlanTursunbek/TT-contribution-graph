import clsx from 'clsx'
import { getCellColor } from 'libs/getCellColor'

import styles from './index.module.css'

interface ICellProps {
  contributionAmount?: number
}

export const Cell = ({ contributionAmount }: ICellProps) => {
  const color = getCellColor(contributionAmount)

  return <div className={clsx(styles.cell, styles[`blue${color}`])} />
}
