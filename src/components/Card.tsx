import Image from "next/image";
import React, { ReactNode } from "react";

interface CardProps {
  image: string;
  index: number;
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ image, index, children }) => (
  <div
    className={`bg-blue overflow-hidden relative aspect-[9/16] rounded-xl w-full ${
      index % 2 === 1 ? "mt-4" : ""
    }`}
  >
    <Image
      src={image || "/placeholder.svg"}
      alt=""
      fill
      className="object-cover rounded-xl"
      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
      unoptimized={true}
    />
    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
      {children}
    </div>
  </div>
);

export default Card;
