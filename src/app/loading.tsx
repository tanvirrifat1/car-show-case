import React from "react";
import { Spinner } from "@nextui-org/react";

const loading = () => {
  return (
    <div className="flex justify-center my-16 ">
      <Spinner />
    </div>
  );
};

export default loading;
