import {
  ApiCategoryProps,
  apiServiceProps,
  GraphicServPackType,
  GraphicServProps,
} from "@/types";
import Image from "next/image";
import { Imgold } from "@/public";
import "@/styles/express_badge_styles.scss";
import { calculateItemsTotalPrice } from "@/functions/calcul_graphic_serv_item_total_price";

const TServiceCard = ({
  service,
  category,
}: {
  service: GraphicServProps;
  category: ApiCategoryProps | undefined; // Changer ici
}) => {
  return (
    <div className="service-carde  flex-item relative">
      <a
        key={service.id}
        href={`/creationgraphique/${category?.libelle}/${service.libelle}`}
        className="carde-link"
      >
        <div className="object-contain rounded-t-[8px] relative h-[50%] ">
          <div className="favorite-contaner w-[2.3rem] h-[2.3rem] flex items-center justify-center border border-secondary rounded-full bg-secondary absolute right-0 z-2 mt-2">
            <i className="ri-heart-line pt-1 text-white text-[1.2rem]"></i>
          </div>
          {service.covers.length > 0 ? (
            <img
              src={service.covers[0]}
              alt="sv1"
              className="service-img rounded-t-[8px] w-full h-full"
              width={576}
              height={768}
            />
          ) : (
            <Image
              src={Imgold}
              alt="sv1"
              className="service-img rounded-t-[8px]  w-full h-full"
              width={576}
              height={768}
            />
          )}
        </div>
        <div className=" bottom-part bg-slate-50 rounded-b-[8px] px-[5px]">
          <div className=" py-[5px]">
            <div className="flex justify-between items-center">
              <p className=" text-slate-400">
                {category !== undefined ? category.libelle : ""}
              </p>
              {service.optionalItems && (
                <div className="express-badge">
                  <i className="bi bi-truck"></i>
                  <span> EXPRESS</span>
                </div>
              )}
            </div>
            <p className="first-link text-stone-900 font-[300] text-[1.2rem] line-clamp-2">
              {service.libelle} Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quo possimus beatae enim quas unde. Quaerat
              delectus exercitationem placeat dolore
            </p>
            {service.libelle.length < 50 ? <br /> : ""}
            {/*  <p className="mt-3 text-stone-500">
              <i className="ri-star-fill text-yellow-500"></i>{" "}
              <span className="text-black font-semibold">{4.5}</span>{" "}
              {`(${2} Reviews)`}
            </p> */}
            <b>
              Á partir de:{" "}
              {calculateItemsTotalPrice(service, GraphicServPackType.BASIQUE)} F
              CFA
            </b>
            <div>
              {service.packs.length > 0 ? (
                <span>
                  <small className="font-light">Livrer sous </small>{" "}
                  <small>
                    {service.packs[0].normalExecutionDeadline.numberOfDay +
                      " jours"}
                  </small>
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default TServiceCard;
