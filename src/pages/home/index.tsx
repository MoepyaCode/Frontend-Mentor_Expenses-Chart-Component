import { Container, Main } from "@app-components"
import { BalanceBar, TrendCard } from "./components"

export default function Home() {

  return (
    <Main className="bg-cream-bg font-dm-sams grid place-items-center ">
      <Container>
        <BalanceBar />
        <TrendCard />
      </Container>
    </Main>
  )
}