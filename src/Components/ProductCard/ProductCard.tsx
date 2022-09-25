import React from "react";
import Image from "next/image";

import IProductCardProps from "../../Core/PropInterface/IProductCardProps";
import Link from "next/link";

const ProductCard: React.FC<IProductCardProps> = ({
  image,
  description,
  className,
  href,
}): JSX.Element => {
  return (
    <>
      <div
        className={`w-[320px] h-[280px] rounded-[8px] shadow-[0px_10px_30px_#99999940] flex  items-center flex-col px-5 bg--300 ${className}`}
      >
        <img className="mt-[54px]" src={image} />
        <p className="text-sm text-center w-[245px] h-[75] mt-[35px] text-[#666]">
          {description}
        </p>
        <Link href={href}>
          <p className="text-[#49BE55] mt-[33px] hover:underline cursor-pointer">Learn More</p>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;