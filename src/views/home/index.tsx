import React, { useState } from 'react'
import { getData } from '@/api'
import useAsync from '../../hooks/useAsync'
import { Line, LineConfig } from '@ant-design/plots'

const Home = () => {
  const [data, setData] = useState<{ year: string; gdp: string; name: string }[]>([])

  useAsync(async () => {
    const resp = await getData()
    console.log(resp)
    setData(resp.data)
  }, [])

  const config: LineConfig = {
    data,
    autoFit: true,
    xField: 'year',
    yField: 'gdp',
    seriesField: 'name',
    yAxis: {
      label: {
        formatter: (v) => `${(Number(v) / 10e8).toFixed(1)} B`
      }
    },
    legend: {
      position: 'top'
    },
    smooth: true,
    animation: {
      appear: {
        animation: 'path-in',
        duration: 5000
      }
    }
  }

  return (
    <div className="bg-white p-3 box-border" style={{ width: '70%' }}>
      <Line {...config} />
    </div>
  )
}

export default Home
