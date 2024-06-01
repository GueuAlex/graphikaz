import { FaqProps } from "@/types";
import React from "react";

interface FaqComponentProps {
  faq: FaqProps[];
}

export const Faq: React.FC<FaqComponentProps> = ({ faq }) => {
  return (
    <>
      {faq.map((f, index) => (
        <div
          className="collapse collapse-arrow border-b rounded-none"
          key={index}
        >
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">{f.question}</div>
          <div className="collapse-content">
            <p>{f.answer}</p>
          </div>
        </div>
      ))}
    </>
  );
};
