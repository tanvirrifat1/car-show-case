"use client";
import React from "react";

import { NextUIProvider } from "@nextui-org/react";
import { IChildrenProps } from "@/Type/Common";
import { Provider } from "react-redux";
import { store } from "@/Redux/store";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <NextUIProvider>{children}</NextUIProvider>
    </Provider>
  );
};

export default Providers;
