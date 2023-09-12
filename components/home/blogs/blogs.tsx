import Link from "next/link"
import Image from "next/image"
import "./blogs.css"
import { Blog1,Blog2,Blog3,Blog4, } from "@/public"
import { blogs } from "@/constants"
import { BlogProps } from "@/types"

const Blogs = () => {
  return (
    <div className="blog w-full px-[2rem] py-[7rem] relative  flex justify-center items-center">
       <div className="max-w-[97rem] relative   w-full">
            <div className="blog-header mb-[3rem]  mt-[3rem] flex flex-row justify-between items-center" > 
                <div className="">
                    <h2 className="text-slate-900">
                        Our Blog
                    </h2>
                    <small className="subtitle mt-3 text-stone-600 font-semibold">
                        See how you can up your career status
                    </small>
                </div>
                <span className="hover:text-secondary text-slate-800 font-semibold">
                    <Link href="/">All Blogs <i className="ri-arrow-right-line"></i></Link>
                </span>
            </div>
            <div className="px-[5px] py-[5px] relative">
                <div className="blog-card-container flex flex-row flex-wrap justify-between items-center">


                    {blogs.slice(0, 4).map((blog) =>{

                        return <BlogCart blog={blog} />
                    })}

                </div>
            </div>
        </div>
       
    </div>
  )
}



const BlogCart = ({blog}: {blog: BlogProps}) => {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('fr-FR', options).format(blog.postAt);
  return (
    <Link href="/" className="po-link">
        <div className="flex-container flex-col max-w-[22rem] h-auto max-h-[32rem] rounded-[8px]">
            <div className=" h-[50%] object-contain rounded-t-[8px] relative">
                <Image src={blog.cover} alt="blog1" className="h-[100%] rounded-t-[8px]" />
            </div>
            <div className="acess h-[50%] bg-slate-50 rounded-b-[8px] shadow-slate-200 shadow">
                <div className="px-[30px] py-[30px]">
                <p className="mt-2 text-slate-400 mb-[8px]">{formattedDate}</p> 
                    <p className=" mb-3 p-link text-stone-900 font-[500] text-[1.2rem] ">
                        {blog.title}
                    </p>
                    <small className="text-[1rem] text-slate-600">
                        {blog.subtitle}
                    </small>
                </div>
            </div>
        </div>
    </Link>
  )
}



export default Blogs