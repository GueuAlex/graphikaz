import "@/styles/text_separated_style.scss";

export const TextSeparated = ({ text }: { text: string }) => {
  return (
    <div className="or-container">
      <div className="left"></div>
      <span>{text}</span>
      <div className="right"></div>
    </div>
  );
};
