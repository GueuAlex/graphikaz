import { Footer, MyHome, NavBar } from "@/components"

export default function Home() {
  return (
    <main className=" overflow-hidden">
      <div className=" absolute w-[29vw] right-0 bg-black h-[100vh] mask" />
     {/*  <NavBar /> */}
      <MyHome />
      {/* <Footer /> */}
    </main>
  )
}