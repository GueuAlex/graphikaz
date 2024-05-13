import Link from "next/link";
import "./footer.css";
import { useContext } from "react";
import { MyAppContext } from "@/reutilisables/app_context";

const Footer = () => {
  const context = useContext(MyAppContext);
  if (!context) {
    throw new Error("ComponentY must be used within a MyProvider");
  } else {
    console.log("context ok in footer component");
  }
  const { categories } = context;
  return (
    <div className="my-footer w-full bg-primary flex justify-center">
      <div className="max-w-[97rem] py-[2rem] w-full">
        <div className="header  flex flex-row justify-between items-center pb-5 border-b-2 border-teal-800">
          <div className="flex flex-row gap-5">
            <p className="text-slate-100 text-[1.2rem] mt-2">Nous suivre</p>
            <div className="w-[2.3rem] h-[2.3rem] rounded-full bg-transparent hover:bg-teal-800 hover:cursor-pointer flex justify-center items-center">
              <a href="https://www.facebook.com/graphikaz/">
                <i className="ri-facebook-fill text-white"></i>
              </a>
            </div>
            <div className="w-[2.3rem] h-[2.3rem] rounded-full bg-transparent hover:bg-teal-800 hover:cursor-pointer flex justify-center items-center">
              <a href="https://www.instagram.com/graphikaz/">
                {" "}
                <i className="ri-instagram-line text-white"></i>
              </a>
            </div>
            {/* <Link href="/" className="text-slate-100 text-[1.2rem]">
              Terms of Service
            </Link>
            <Link href="/" className="text-slate-100 text-[1.2rem]">
              Privacy Policy
            </Link>
            <Link href="/" className="text-slate-100 text-[1.2rem]">
              Site Map
            </Link> */}
          </div>
          <div className="flex flex-row gap-5">
            {/* <div className="w-[2.3rem] h-[2.3rem] rounded-full bg-transparent hover:bg-teal-800 hover:cursor-pointer flex justify-center items-center">
              <i className="ri-twitter-fill text-white"></i>
            </div>
            <div className="w-[2.3rem] h-[2.3rem] rounded-full bg-transparent hover:bg-teal-800 hover:cursor-pointer flex justify-center items-center">
              <i className="ri-linkedin-fill text-white"></i>
            </div> */}
          </div>
        </div>
        <div className="footer-links flex justify-between items-start px-[5rem] py-[5rem]">
          <div className="flex flex-col justify-start gap-3">
            <p className="text-white font-semibold">Création graphique</p>
            {/* maping categories list */}
            {categories.map((cat, index) => (
              <Link
                href={`/categories?category=${cat.libelle}`}
                key={cat.id}
                className="text-slate-300 hover:text-white"
              >
                {cat.libelle}
              </Link>
            ))}
          </div>
          <div className="flex flex-col justify-start gap-3">
            <p className="text-white font-semibold">Service d'impression</p>
            <Link
              href="/impression?category=Flyers & Leaflets"
              className="text-slate-300 hover:text-white"
            >
              Flyers & Leaflets
            </Link>
            <Link
              href="/impression?category=Business Cards"
              className="text-slate-300 hover:text-white"
            >
              Business Cards
            </Link>
            {/*  <Link href="/" className="text-slate-300 hover:text-white">
              Jobs on Graphikaz
            </Link>
            <Link href="/" className="text-slate-300 hover:text-white">
              Pricing
            </Link>
            <Link href="/" className="text-slate-300 hover:text-white">
              Services Graphikaz
            </Link>
            <Link href="/" className="text-slate-300 hover:text-white">
              Terms of Services
            </Link> */}
          </div>

          <div className="flex flex-col justify-start gap-3">
            <p className="text-white font-semibold">Information</p>
            <Link href="/" className="text-slate-300 hover:text-white">
              FAQ
            </Link>
            <Link href="/" className="text-slate-300 hover:text-white">
              CGV
            </Link>
            <Link href="/" className="text-slate-300 hover:text-white">
              Politique de confidentialité
            </Link>
            {/* <Link href="/" className="text-slate-300 hover:text-white">
              Programming & Tech
            </Link>
            <Link href="/" className="text-slate-300 hover:text-white">
              Terms of Service
            </Link> */}
          </div>

          <div className="flex flex-col justify-start gap-3">
            <p className="text-white font-semibold">Contacts</p>
            <div className="text-slate-300 hover:text-white flex gap-3 items-center">
              <i className="ri-phone-line"></i> <p>+225 07 77 77 71 04</p>
            </div>
            <div className="text-slate-300 hover:text-white flex gap-3 items-center">
              <i className="ri-mail-line"></i> <p>contact@digifaz.com</p>
            </div>
            <div className="text-slate-300 hover:text-white flex gap-3 items-center">
              <i className="ri-map-pin-2-line"></i>{" "}
              <p>Abidjan, Abatta, AB CENTER Immeuble Gervinho</p>
            </div>
            {/* <Link href="/" className="text-slate-300 hover:text-white">
              Programming & Tech
            </Link>
            <Link href="/" className="text-slate-300 hover:text-white">
              Terms of Service
            </Link> */}
          </div>

          {/*  <div className="flex flex-col justify-start gap-3">
            <p className="text-white font-semibold">Subscribe</p>
            <div className="w-[100%] h-[4rem] bg-teal-800 rounded-[8px] opacity-60 px-[15px] flex justify-between items-center">
              <input
                type="text"
                placeholder="Your email address"
                className=" bg-transparent w-[60%]"
              />
              <button
                type="button"
                className="text-slate-50 hover:text-secondary"
              >
                Send
              </button>
            </div>
            <p className="text-white font-semibold">Apps</p>
            <Link href="/" className="text-slate-300 hover:text-white">
              <i className="ri-android-fill"> </i> &nbsp; Adroind App
            </Link>
            <Link href="/" className="text-slate-300 hover:text-white">
              <i className="ri-apple-fill"> </i> &nbsp; iOS App
            </Link>
          </div> */}
        </div>
        <div className="footer-last-child flex flex-row justify-between items-center pt-5 px-5 border-t-2 border-teal-800">
          <p className="text-slate-200">
            © Graphikaz. 2023 CreativeLayers. All rights reserved.
          </p>
          <div className="w-[7.2rem] h-[2.8rem] flex justify-between items-center px-5 bg-teal-800 rounded-sm opacity-60">
            <p className="text-slate-100 text-[0.9rem]">English</p>
            <i className="ri-arrow-drop-up-fill text-slate-100 text-[1.7rem]"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
