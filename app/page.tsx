import { Hero, Needs, Categories, PopularServices, ProofSection, CounterSection, Testinmonials, TrendingService, Blogs, NewsLetter } from "@/components"

export default function Home() {
  return (
    <main className=" overflow-hidden">
      <Hero />
      <Needs />
      <Categories />
      <PopularServices />
      <ProofSection />
      <CounterSection />
      <Testinmonials />
      <TrendingService />
      <Blogs />
      <NewsLetter />
    </main>
  )
}