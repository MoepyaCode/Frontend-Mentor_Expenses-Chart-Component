import _ from "lodash"
import { useState } from "react"

export function useTrendLineAnalyse(): TrendLineHookI {
    const [data, setData] = useState<AnalysedTrendLineData>([])

    const analyse = (data: TrendLineData) => {
        const getMaxAmount = data.reduce((max, data) => data.amount > max ? data.amount : max, 0)
        const currentData = data.map((data, index) => ({
            ...data,
            id: index,
            percentage: parseFloat(((data.amount / getMaxAmount) * 100).toFixed(2)),
            isMaxAmount: _.isEqual(data.amount, getMaxAmount),
            isHover: false
        }))
        setData(currentData)
    }

    const setHover = (data: AnalysedDaySpendingsI) => {
        setData(state => [...state].map(daySpending => daySpending.id !== data.id ? {
            ...daySpending,
            isHover: false
        } : {
            ...data,
            isHover: true
        }))
    }

    const setHoverOut = (data: AnalysedDaySpendingsI) => {
        setData(state => [...state].map(daySpending => daySpending.id === data.id ? {
            ...daySpending,
            isHover: false
        } : daySpending))
    }

    return {
        data,
        analyse,
        setHover,
        setHoverOut
    }
}