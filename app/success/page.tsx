"use client";
import { Success } from "@/public";
import "./success.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Page() {
  const router = useRouter();
  return (
    <div className="success_checkout">
      <div className="success_checkout_content flex flex-col justify-center items-center">
        <div className="img-contaier-success h-[200px] w-[200px]">
          <Image src={Success} alt="" />
        </div>
        <h4>Merci pour votre commande</h4>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem est sed
          itaque rerum aperiam vitae et, tenetur natus blanditiis
        </span>
        <div className="btnn">
          <button
            className="btn"
            type="button"
            onClick={() => router.replace("/categories")}
          >
            CONTINUER
          </button>
        </div>
      </div>
    </div>
  );
}
