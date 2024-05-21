import { Divider } from "@mui/material";
import React from "react";
import { StatsItem } from "./StatsItem";

export const StatsHome = (props) => {
  return (
    <div className="px-28" data-sb-object-id={props.id}>
      <div className="my-14">
        <Divider />
      </div>
      <div className="grid grid-cols-3 gap-8">
        {props?.statItems?.map((stat) => (
          <StatsItem {...stat} key={stat.id} />
        ))}
      </div>
      <div className="my-14">
        <Divider />
      </div>
    </div>
  );
};
