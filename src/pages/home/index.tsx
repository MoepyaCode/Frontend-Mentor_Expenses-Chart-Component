import { Container, Main } from "@app-components"
import { BalanceBar, TrendCard } from "./components"

export default function Home() {

  return (
    <Main className="bg-cream-bg font-dm-sams grid place-items-center px-4 py-[67px]">

      <Container className="max-w-[540px] w-full flex flex-col gap-4 sm:gap-6">
        <BalanceBar />
        <TrendCard />
      </Container>

    </Main>
  )
}