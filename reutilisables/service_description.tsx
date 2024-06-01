import "@/styles/service_description_style.scss";

interface ServiceDescriptionProps {
  description: string;
}

export const ServiceDescription: React.FC<ServiceDescriptionProps> = ({
  description,
}) => {
  return (
    <div className="service-description">
      <div className="description-head">
        <h2>À propos de ce service</h2>
      </div>
      <div
        className="description"
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
    </div>
  );
};
