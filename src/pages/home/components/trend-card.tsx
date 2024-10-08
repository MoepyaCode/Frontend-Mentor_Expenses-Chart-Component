import { Wrapper } from '@app-components'
import { useTrendLineAnalyse } from '@app-hooks'
import React from 'react'

export function TrendCard() {
    const { analyse, data, setHover, setHoverOut } = useTrendLineAnalyse()

    const renderDaySpendings = (data: AnalysedDaySpendingsI, key: number) => (
        <Wrapper
            key={key}
            className="relative flex flex-col gap-[11px] justify-end items-center max-h-fit"
        >
            {data.isHover && (
                <div className="text-[12px] font-bold sm:body-bold text-white-card bg-brown-dark p-2 absolute top-[-2.75rem] sm:top-[-3.5rem] rounded-[5px]">
                    ${data.amount}
                </div>
            )}
            <div
                onMouseEnter={() => setHover(data)}
                onMouseLeave={() => setHoverOut(data)}
                style={{ height: `${data.percentage}%`, minHeight: `calc(150px * (${data.percentage}/100))` }}
                className={`${data.isMaxAmount ? 'bg-cyan hover:bg-[#B4E0E5]' : 'bg-red hover:bg-[#FF9B86]'} hover:scale-105 min-w-[33px] sm:min-w-[50.36px] max-h-[150px] rounded-[3px] transition duration-300 ease-in-out cursor-pointer`}
            />
            <p className="text-brown-medium text-[12px] sm:mini-caption">{data.day}</p>
        </Wrapper>
    );

    const renderTrendLines = () => (
        <Wrapper className="w-full min-h-[177px] h-full flex justify-between items-end gap-3">
            {data?.map(renderDaySpendings)}
        </Wrapper>
    );

    const renderDivider = () => <div className='w-full h-[1px] bg-[#F8E9DD]' />

    const renderTotalSpent = () => (
        <Wrapper className='flex flex-col gap-[3px]'>
            <p className='text-brown-medium mini-caption sm:body'>Total this month</p>

            <Wrapper className='flex justify-between items-center'>
                <span className='text-brown-dark font-bold text-[30px] sm:heading-xl'>$478.33</span>

                <Wrapper className='flex flex-col items-end'>
                    <span className='text-brown-dark font-bold text-[15px]'>+2.4% </span>
                    <span className='text-brown-medium mini-caption sm:body'>from last month</span>
                </Wrapper>
            </Wrapper>
        </Wrapper>
    )

    React.useEffect(() => {

        const fetchData = async (url: string) => {
            const response = await fetch(url)
            return await response.json()
        }

        if (data.length <= 0) {
            fetchData('/data/data.json')
                .then((response: TrendLineData) => {
                    analyse(response)
                })
        }


    }, [data, analyse])

    return (
        <Wrapper className='bg-white-card w-full px-[20px] py-6 sm:p-10 rounded-[10px] sm:rounded-[20px] flex flex-col gap-[52px]'>
            <h1 className='text-brown-dark font-bold text-[24px] sm:heading-l'>Spending - Last 7 days</h1>

            <Wrapper className='flex flex-col gap-6'>
                {renderTrendLines()}
                {renderDivider()}
                {renderTotalSpent()}
            </Wrapper>
        </Wrapper>
    )
}
