import React from "react";
import CardHome from "./CardHome";
import ButtonHome from "./ButtonHome";

export const TitleCardImage = (props) => {
  return (
    <div data-sb-object-id={props.id} className="px-28">
      <div data-sb-field-path="title" className="text-4xl font-bold">
        {props.title}
      </div>
      <p data-sb-field-path="description" className="mt-4 text-lg">
        {props.description}
      </p>

      <div className="my-10 grid grid-cols-3 gap-8">
        {props.productReference?.map((product) => (
          <CardHome {...product} key={product.id} />
        ))}
      </div>
      {props.button && <ButtonHome {...props.button} theme="outline" />}
    </div>
  );
};
