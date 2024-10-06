import { Wrapper } from '@app-components'

export function BalanceBar() {
  return (
    <Wrapper className='bg-red w-full min-h-[97px] sm:min-h-[125px] flex justify-between items-center px-[20px] sm:px-8 rounded-[10px] sm:rounded-[20px]'>
      <Wrapper className='text-white-default flex flex-col gap-2'>
        <p className='mini-caption sm:body'>My balance</p>
        <p className='font-bold text-[24px] sm:heading-l'>$921.48</p>
      </Wrapper>

      <img src="/src/assets/logo.svg" alt="" />
    </Wrapper>
  )
}
