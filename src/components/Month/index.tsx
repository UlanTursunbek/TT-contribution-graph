import clsx from 'clsx'
import dayjs from 'dayjs'

import styles from './index.module.css'

interface IMonthProps {
  startDate: dayjs.Dayjs
  index: number
}

export const Month = ({ startDate, index }: IMonthProps) => {
  const date = dayjs(startDate).add(index * 7, 'day')
  const monthName = dayjs(date).format('MMM')

  return <div className={clsx(styles.month, styles[monthName])}>{monthName}</div>
}
