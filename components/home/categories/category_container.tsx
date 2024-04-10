interface CategoryContainerProps {
  libelle: string;
  service_count: number;
  icon: string;
}

const CategoryContainer: React.FC<CategoryContainerProps> = ({
  libelle,
  service_count,
  icon,
}) => {
  return (
    <div className="category_link_container">
      <div className="icon_container relative">
        <i className={`ri-icon ${icon}`}></i>
        <div className="icon-dot absolute"></div>
      </div>
      <div className="category-text">
        <small>{service_count} Services</small>
        <p>{libelle}</p>
      </div>
    </div>
  );
};

export default CategoryContainer;
