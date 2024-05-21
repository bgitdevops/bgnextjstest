import { Divider } from "@mui/material";
import Image from "next/image";
import React from "react";

const colors = {
  0: "#d3bdf2",
  1: "#00b097",
  2: "#ffb000",
};

const ThreeImagesAndCards = (props) => {
  return (
    <div className="px-28">
      <div data-sb-object-id={props.id} className="grid grid-cols-3 gap-4 ">
        <div className="grid grid-cols-3 gap-6 col-span-2 ">
          {props.imageAndCard.map((item, index) => (
            <div key={item.id}>
              <div className="h-96 relative">
                <Image
                  data-sb-object-id={item?.image.id}
                  src={item?.image.src}
                  alt={item?.image.alt}
                  fill
                  sizes="auto"
                  className="rounded-3xl object-cover"
                />
              </div>
              <div
                className="rounded-3xl p-6 mt-6"
                style={{
                  backgroundColor: colors[index],
                  height: `calc(100% - 400px)`,
                }}
                data-sb-object-id={item?.titleAndBulletPoints?.id}
              >
                <p
                  data-sb-field-path="title"
                  className="text-2xl mb-4 font-semibold"
                >
                  {item.titleAndBulletPoints.title}
                </p>
                <ul className="list-disc list-inside text-base">
                  {item.titleAndBulletPoints.bulletPoint.map((point) => (
                    <li key={point.id} data-sb-field-path={`${point.id}:text`}>
                      {point.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 flex items-center">
          <div>
            <p data-sb-field-path="title" className="text-4xl mb-4 font-bold">
              {props.title}
            </p>
            <p data-sb-field-path="description" className="text-lg ">
              {props.description}
            </p>
          </div>
        </div>
      </div>
      <div className="my-14">
        <Divider />
      </div>
    </div>
  );
};

export default ThreeImagesAndCards;
