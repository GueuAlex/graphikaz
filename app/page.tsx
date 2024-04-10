import { Footer, MyHome, NavBar } from "@/components";
import { NextPage } from "next";
// Exporter metadata directement depuis le fichier
export const metadata = {
  title: "Graphikaz",
  description: "Graphikaz 2023 | prestation provider app",
  icons: {
    icon: "https://oifoeivdflxzgtj0.public.blob.vercel-storage.com/image-rkLdmjWB26qN7cmlkwOGwvDoZiX0Xh.png",
  },
};
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
