import { ApiCategoryProps, apiServiceProps } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { DeliCar, Digifaz, Imgold, Service2 } from "@/public";

const TServiceCard = ({
  service,
  category,
}: {
  service: apiServiceProps;
  category: ApiCategoryProps | undefined; // Changer ici
}) => {
  return (
    <div className="service-carde  flex-item">
      <Link
        key={service.id}
        href={`/categories/${service.libelle}`}
        className="carde-link"
      >
        <div className="object-contain rounded-t-[8px] relative h-[50%] ">
          <div className="favorite-contaner w-[2.3rem] h-[2.3rem] flex items-center justify-center border border-secondary rounded-full bg-secondary absolute right-0 z-2 mt-2">
            <i className="ri-heart-line pt-1 text-white text-[1.2rem]"></i>
          </div>
          {service.image_services.length > 0 ? (
            <Image
              src={
                "https://graphikaz.digifaz.com/api/photo_service/" +
                service.image_services[0].libelle
              }
              alt="sv1"
              className="rounded-t-[8px] w-full h-full"
              width={576}
              height={768}
            />
          ) : (
            <Image
              src={Imgold}
              alt="sv1"
              className="rounded-t-[8px] w-full h-full"
              width={576}
              height={768}
            />
          )}
        </div>
        <div className=" bg-slate-50 rounded-b-[8px] px-4 shadow h-[50%]">
          <div className="px-[20px] py-[5px]">
            <p className="mt-2 text-slate-400 mb-[8px]">
              {category !== undefined ? category.libelle : ""}
            </p>
            <p className="first-link text-stone-900 font-[500] text-[1.2rem] line-clamp-2">
              {service.libelle}
            </p>
            {service.libelle.length < 50 ? <br /> : ""}
            <p className="mt-3 text-stone-500">
              <i className="ri-star-fill text-yellow-500"></i>{" "}
              <span className="text-black font-semibold">{4.5}</span>{" "}
              {`(${2} Reviews)`}
            </p>

            <div className="mt-5 w-full border " />
            <div className="pt-[0.7rem] flex flex-row items-start justify-between">
              <div className="second-link flex flex-row gap-3 justify-start items-center">
                <div className="w-[2.2rem] h-[2.2rem]  rounded-full object-contain relative">
                  {/* prestator src */}
                  {/* prestators.find(
                      (prestator) => prestator.id === service.prestatorId
                    )?.profilPic ?? "" */}
                  <div className="t-overlay-dot absolute "></div>
                  <Image src={DeliCar} alt="f1" className="rounded-full" />
                </div>
                <p className="text-[0.9rem]">
                  {/* prestator name */}
                  {/* {prestators.find(
                  (prestator) => prestator.id === service.prestatorId
                )?.fullName ?? ""} */}

                  {service.pack_services.length > 0 ? (
                    <span>
                      <small>Livrer sous </small>{" "}
                      <small>
                        {service.pack_services[0].delais_livraison + " jours"}
                      </small>
                    </span>
                  ) : (
                    ""
                  )}
                </p>
                {/*  {service.pack_services.length > 0 ? (
                <span>
                  <small>Livrer sous </small>{" "}
                  <small>
                    {service.pack_services[0].delais_livraison + " jours"}
                  </small>
                </span>
              ) : (
                ""
              )} */}
              </div>
            </div>
            {/*  <button type="button" className="service-view-button">
              <p className="text-[0.8rem]">
                A PARTIR DE{" "}
                <span className="text-[16px]  font-normal">{montant} FCFA</span>
              </p>
            </button> */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TServiceCard;
