"use client";
import Image from "next/image";
import React from "react";
import errorLogo from "../../public/assets/error.png";

const error = () => {
  return (
    <div>
      <div className="flex justify-center my-14">
        <Image src={errorLogo} height={500} width={800} alt="" />
      </div>
    </div>
  );
};

export default error;
