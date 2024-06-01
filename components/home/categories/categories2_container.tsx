import { categories_placeholder } from "@/constants/data";
import { DevIt } from "@/public/categories";
import { ApiCategoryProps, ImpressCategoryProps } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface CategoryContainerProps {
  category: ApiCategoryProps | ImpressCategoryProps;
}

const Category2Container: React.FC<CategoryContainerProps> = ({ category }) => {
  function getUrl(): string {
    let base = "/creationgraphique/";
    if (category.type !== "CREATION GRAPHIQUE") {
      base = "/impression/";
    }
    return `${base}${category.libelle.toLowerCase()}`;
  }
  function getImg(): string {
    if (category.cover.trim().length <= 0) {
      return categories_placeholder;
    }
    return category.cover;
  }
  return (
    <Link href={getUrl()}>
      <div className="flex-flex-col relative">
        <motion.div
          className="absolute inset-0 rounded-md categoies-overlay"
          initial={{ opacity: 0 }} // L'overlay commence caché
          whileHover={{ opacity: 1 }} // L'overlay apparaît au survol
          transition={{ duration: 0.5 }} // Transition douce de 0.5 seconde
        >
          <small>{category.type}</small>
          <h1>{category.libelle}</h1>
          <small className="last-child">{"Services " + 5}</small>
        </motion.div>

        <Image
          src={getImg()}
          alt={category.libelle}
          width={270}
          height={200}
          style={{ height: "200px" }}
          className=" h-full rounded-t-md  img"
        />
        <div className="flex flex-col justify-start items-start gap-1 pt-2 categories-bottom rounded-b-md">
          <small>{category.type}</small>
          <h1>{category.libelle}</h1>
          <small className="last-child">{"Services " + 5}</small>
        </div>
      </div>
    </Link>
  );
};

export default Category2Container;
