import React from "react";

export const StatsItem = (props) => {
  return (
    <div className="text-center" data-sb-object-id={props.id}>
      <div data-sb-field-path="value" className="text-5xl font-bold">
        {props.value}
      </div>
      <p data-sb-field-path="label" className="mt-4 text-lg">
        {props.label}
      </p>
    </div>
  );
};
