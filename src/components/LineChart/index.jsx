import ReactECharts from 'echarts-for-react'
import React, { useMemo } from 'react'
import styles from './LineChart.module.scss'

function LineChart({ title: text, data = [] }) {
    const legend = useMemo(() => data.map(item => item.name), [data])
    const option = useMemo(() => ({
        title: {
            text,
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['Email', 'Union Ads', ...legend]
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'Email',
                type: 'line',
                stack: 'Total',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'Union Ads',
                type: 'line',
                stack: 'Total',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            ...data
        ]
    }), [data, legend, text])
    return (
        <div className={styles.LineChart}>
            <ReactECharts option={option} />
        </div>
    )
}

export default LineChart