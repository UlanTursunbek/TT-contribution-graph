import dayjs from 'dayjs'

import { Cell } from 'components/Cell'
import { Month } from 'components/Month'
import { Tooltip } from 'components/Tooltip'
import { Weekday } from 'components/Weekday'

import styles from './index.module.css'

interface ITimelineProps {
  range: dayjs.Dayjs[]
  data: { date: string; value: number }[]
}

export const Timeline = ({ range, data }: ITimelineProps) => {
  const startDate = dayjs(range[0])
  const endDate = dayjs(range[1])
  const days = Math.abs(startDate.diff(endDate, 'day'))
  const cells = Array.from(new Array(days))
  const weekDays = Array.from(new Array(7))
  const months = Array.from(new Array(Math.floor(days / 7)))

  return (
    <div className={styles.timeline}>
      <div className={styles.timelineMonths}>
        {months.map((_, index) => (
          <Month key={index} index={index} startDate={startDate} />
        ))}
      </div>

      <div className={styles.body}>
        <div className={styles.weekdays}>
          {weekDays.map((_, index) => (
            <Weekday key={index} index={index} />
          ))}
        </div>

        <div className={styles.cells}>
          {cells.map((_, index) => {
            const date = dayjs(startDate).add(index, 'day')
            const dataPoint = data.find((d) => dayjs(date).format('DDMMYYYY') === dayjs(d.date).format('DDMMYYYY'))

            const tooltipText = dataPoint ? `${dataPoint.value} contributions` : 'no contribution'
            const tooltipDate = dataPoint ? dayjs(dataPoint.date).format('DD, MMMM, YYYY') : undefined

            return (
              <Tooltip key={index} date={tooltipDate} text={tooltipText}>
                <Cell contributionAmount={dataPoint?.value} />
              </Tooltip>
            )
          })}
        </div>
      </div>
    </div>
  )
}
