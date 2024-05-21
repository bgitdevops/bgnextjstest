import Image from "next/image";
import React from "react";
import ButtonHome from "../Home/ButtonHome";
import { Divider } from "@mui/material";

const DynamicImageAndCard = (props) => {
  let col1 = "";
  let col2 = "col-span-2";

  if (!props.imageAlignment) {
    col1 = col1 + " order-last";
    col2 = col2 + " order-first";
  }

  return (
    <div data-sb-object-id={props.id} className="px-28 ">
      <div className="grid grid-cols-3 gap-6">
        <div className={`h-full relative ${col1}`}>
          <Image
            data-sb-object-id={props?.image.id}
            src={props?.image.src}
            alt={props?.image.alt}
            fill
            sizes="auto"
            className="rounded-3xl object-cover"
          />
        </div>

        <div
          className={`rounded-3xl p-7 ${col2}`}
          style={{
            backgroundColor: props.backgroundColor,
          }}
        >
          <div data-sb-field-path="title" className="text-5xl font-bold">
            {props.title}
          </div>
          <p
            data-sb-field-path="description"
            dangerouslySetInnerHTML={{
              __html: props?.description?.replaceAll("\n", "<br/>"),
            }}
            className="my-7 text-lg"
          ></p>

          {props.button && <ButtonHome {...props.button} />}
        </div>
      </div>

      <div className="my-14">
        <Divider />
      </div>
    </div>
  );
};

export default DynamicImageAndCard;
