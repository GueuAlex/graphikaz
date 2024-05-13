import { ApiCategoryProps, ImpressCategoryProps } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface CategoryContainerProps {
  category: ApiCategoryProps | ImpressCategoryProps;
}

const CategoryContainer: React.FC<CategoryContainerProps> = ({ category }) => {
  function getUrl(): string {
    if (category.type === "CREATION GRAPHIQUE") {
      return `creationgraphique/${category.libelle}`;
    } else {
      return `impression/${category.libelle}`;
    }
  }
  return (
    <Link href={getUrl()}>
      <div className="category_link_container">
        <div className="icon_container relative">
          <i className="ri-megaphone-line"></i>
          <div className="icon-dot absolute"></div>
        </div>
        <div className="category-text">
          <small>{5} Services</small>
          <p>{category.libelle}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryContainer;
