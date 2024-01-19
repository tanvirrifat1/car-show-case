"use client";
import React from "react";

import { NextUIProvider } from "@nextui-org/react";
import { IChildrenProps } from "@/Type/Common";

const Providers = ({ children }: { children: IChildrenProps }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default Providers;
