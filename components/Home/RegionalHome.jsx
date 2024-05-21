import React from "react";
import TabHome from "./TabHome";

export const RegionalHome = (props) => {
  return (
    <div data-sb-object-id={props.id} className="mt-14 px-28">
      <div data-sb-field-path="title" className="text-4xl font-bold">
        {props.title}
      </div>
      <p data-sb-field-path="description" className="mt-4 text-lg">
        {props.description}
      </p>

      <div className="mt-10" />

      <TabHome regionalItems={props.regionalItems} />
    </div>
  );
};
