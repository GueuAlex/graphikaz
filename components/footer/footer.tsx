import Link from "next/link"
import "./footer.css"



const Footer = () => {
  return (
    <div className="my-footer w-full bg-primary flex justify-center">
      <div className="max-w-[97rem] py-[2rem] w-full">
        <div className="header  flex flex-row justify-between items-center pb-5 border-b-2 border-teal-800">
          <div className="flex flex-row gap-5">
            <Link href="/" className="text-slate-100 text-[1.2rem]">Terms of Service</Link>
            <Link href="/" className="text-slate-100 text-[1.2rem]">Privacy Policy</Link>
            <Link href="/" className="text-slate-100 text-[1.2rem]">Site Map</Link>
          </div>
          <div className="flex flex-row gap-5">
            <Link href="/" className="text-slate-100 text-[1.2rem] mt-2">Follow Us</Link>
            <div className="w-[2.3rem] h-[2.3rem] rounded-full bg-transparent hover:bg-teal-800 hover:cursor-pointer flex justify-center items-center">
               <i className="ri-facebook-fill text-white"></i>
            </div>
            <div className="w-[2.3rem] h-[2.3rem] rounded-full bg-transparent hover:bg-teal-800 hover:cursor-pointer flex justify-center items-center">
               <i className="ri-instagram-line text-white"></i>
            </div>
            <div className="w-[2.3rem] h-[2.3rem] rounded-full bg-transparent hover:bg-teal-800 hover:cursor-pointer flex justify-center items-center">
               <i className="ri-twitter-fill text-white"></i>
            </div>
            <div className="w-[2.3rem] h-[2.3rem] rounded-full bg-transparent hover:bg-teal-800 hover:cursor-pointer flex justify-center items-center">
               <i className="ri-linkedin-fill text-white"></i>
            </div>
          </div>
        </div>
        <div className="footer-links flex justify-between items-start px-[5rem] py-[5rem]">
          <div className="flex flex-col justify-start gap-3">
            <p className="text-white font-semibold">About</p>
            <Link href="/" className="text-slate-300 hover:text-white">About Us</Link>
            <Link href="/" className="text-slate-300 hover:text-white">Become Seller</Link>
            <Link href="/" className="text-slate-300 hover:text-white">Jobs on Graphikaz</Link>
            <Link href="/" className="text-slate-300 hover:text-white">Pricing</Link>
            <Link href="/" className="text-slate-300 hover:text-white">Services Graphikaz</Link>
            <Link href="/" className="text-slate-300 hover:text-white">Terms of Services</Link>
          </div>

          <div className="flex flex-col justify-start gap-3">
            <p className="text-white font-semibold">Categories</p>
            <Link href="/" className="text-slate-300 hover:text-white">Design & Creative</Link>
            <Link href="/" className="text-slate-300 hover:text-white">Development & IT</Link>
            <Link href="/" className="text-slate-300 hover:text-white">Music & Audio</Link>
            <Link href="/" className="text-slate-300 hover:text-white">Programming & Tech</Link>
            <Link href="/" className="text-slate-300 hover:text-white">Digital Marketing</Link>
            <Link href="/" className="text-slate-300 hover:text-white">Finance & Accounting</Link>
            <Link href="/" className="text-slate-300 hover:text-white">Writing & Translation</Link>
            <Link href="/" className="text-slate-300 hover:text-white">Trending</Link>
            <Link href="/" className="text-slate-300 hover:text-white">Lifestyle</Link>
          </div>

          <div className="flex flex-col justify-start gap-3">
            <p className="text-white font-semibold">Support</p>
            <Link href="/" className="text-slate-300 hover:text-white">Help & Support</Link>
            <Link href="/" className="text-slate-300 hover:text-white">FAQ Graphikaz</Link>
            <Link href="/" className="text-slate-300 hover:text-white">Services</Link>
            <Link href="/" className="text-slate-300 hover:text-white">Programming & Tech</Link>
            <Link href="/" className="text-slate-300 hover:text-white">Terms of Service</Link>
          </div>

          <div className="flex flex-col justify-start gap-3">
            <p className="text-white font-semibold">Subscribe</p>
            <div className="w-[100%] h-[4rem] bg-teal-800 rounded-[8px] opacity-60 px-[15px] flex justify-between items-center">
              <input type="text" placeholder="Your email address" className=" bg-transparent w-[60%]" />
              <button type="button" className="text-slate-50 hover:text-secondary">Send</button>
            </div>
            <p className="text-white font-semibold">Apps</p>
            <Link href="/" className="text-slate-300 hover:text-white"><i className="ri-android-fill"> </i> &nbsp; Adroind App</Link>
            <Link href="/" className="text-slate-300 hover:text-white"><i className="ri-apple-fill"> </i> &nbsp; iOS App</Link>
            
          </div>


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
  )
}

export default Footer