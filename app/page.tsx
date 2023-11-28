import { Footer, MyHome, NavBar } from "@/components";
import { NextPage } from "next";

const Home: NextPage = (props): JSX.Element => {
  return (
    <main className=" overflow-hidden">
      <div className=" absolute w-[29vw] right-0 bg-black h-[100vh] mask" />
      {/*  <NavBar /> */}
      <MyHome />
      {/* <Footer /> */}
    </main>
  );
};

export default Home;
