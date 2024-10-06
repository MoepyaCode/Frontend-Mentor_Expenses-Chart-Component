import { Wrapper } from '@app-components'

export function TrendCard() {

    const renderTrendLines = () => (
        <Wrapper className='min-h-[177px] grid place-items-center'>
            Trend Lines
        </Wrapper>
    )

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
