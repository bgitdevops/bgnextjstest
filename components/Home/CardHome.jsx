import * as React from "react";
import Image from "next/image";

export default function CardHome(props) {
  return (
    <div data-sb-object-id={props.id} className="max-w-sm">
      <div className="relative h-56 w-full ">
        <Image
          data-sb-object-id={props.image.id}
          src={props.image.src}
          alt={props.image.alt}
          fill
          sizes="auto"
          className="rounded-3xl object-cover"
        />
      </div>

      <div
        data-sb-field-path="productTitle"
        className="text-lg mt-4 font-medium"
      >
        {props.productTitle}
      </div>

      <p data-sb-field-path="description" className="mt-2 text-md">
        {props.description}
      </p>
    </div>
  );
}
