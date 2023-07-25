import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

import { Timeline } from 'components/Timeline'

const CUSTOM_URL = 'https://dpg.gg/test/calendar.json'

interface ApiData {
  [key: string]: number
}

const fetchData = async (): Promise<ApiData | null> => {
  try {
    const response = await fetch(CUSTOM_URL)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data = await response.json()

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    return null
  }
}

function App() {
  const startDate = dayjs().subtract(365, 'days')
  const dateRange = [startDate, dayjs()]

  const [dataFromApi, setDataDataFromApi] = useState<ApiData | null>(null)

  useEffect(() => {
    const fetchDataAsync = async () => {
      const result = await fetchData()
      setDataDataFromApi(result)
    }

    void fetchDataAsync()
  }, [])

  const dataArray =
    dataFromApi &&
    Object.entries(dataFromApi).map(([date, value]) => ({
      date,
      value,
    }))

  return <>{dataArray ? <Timeline range={dateRange} data={dataArray} /> : <div>loading...</div>}</>
}

export default App
