import Image from "next/image";
import React from "react";
import not from "../../public/assets/not.png";

const NotFoundPage = () => {
  return (
    <div className="flex justify-center my-14">
      <Image src={not} height={500} width={800} alt="" />
    </div>
  );
};

export default NotFoundPage;
