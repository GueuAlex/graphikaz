import * as React from "react";
import Image from "next/image";
import { Bcard1 } from "@/public/b_card_img";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1 className=" text-orange-600">Welcome, {firstName}!</h1>
    <div className="flex justify-center items-center p-4 bg-slate-900">
      <img
        className=" w-6 h-6 rounded-sm"
        src={
          "https://www.solopress.com/thumbnails/0/204047/12/branded-pens-looe-product-690x610-0222.jpeg"
        }
        alt=""
      />
    </div>
  </div>
);
