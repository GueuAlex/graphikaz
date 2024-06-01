import "@/styles/icon_box_text_style.scss";
import "@/styles/bg_color.scss";

interface IconBoxTextProps {
  label: string;
  details: string;
  icon_class: string;
  color: string;
}
export const IconBoxText: React.FC<IconBoxTextProps> = ({
  label,
  details,
  icon_class,
  color,
}) => {
  return (
    <div className="icon-box-text">
      <div className={`icon-box ${color}`}>
        <i className={icon_class}></i>
      </div>
      <div className="text-box">
        <p>{label}</p>
        <small>{details}</small>
      </div>
    </div>
  );
};
