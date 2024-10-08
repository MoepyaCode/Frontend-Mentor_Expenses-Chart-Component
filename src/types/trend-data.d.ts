declare type DayType = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'

declare interface DaySpendingsI {
    day: DayType,
    amount: number
}

declare type TrendLineData = DaySpendingsI[]

declare type MaxAmountType = number

declare interface AnalysedDaySpendingsI extends DaySpendingsI {
    id: number
    isMaxAmount: boolean
    percentage: number
    isHover: boolean
}

declare type AnalysedTrendLineData = AnalysedDaySpendingsI[]

declare interface TrendLineHookI {
    data: AnalysedTrendLineData,
    analyse: (data: TrendLineData) => void
    setHover: (data: AnalysedDaySpendingsI) => void
    setHoverOut: (data: AnalysedDaySpendingsI) => void
}