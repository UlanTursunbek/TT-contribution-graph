import styles from './index.module.css'

interface IWeekdayProps {
  index: number
}

interface IDayNames {
  [key: number]: string
}

const DAY_NAMES: IDayNames = {
  1: 'Mon',
  3: 'Wed',
  5: 'Fri',
}

export const Weekday = ({ index }: IWeekdayProps) => {
  return <div className={styles.weekday}> {DAY_NAMES[index]}</div>
}
