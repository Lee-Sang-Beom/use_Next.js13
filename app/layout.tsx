"use client";

import "./css/reset.css";
import NavBar from "../component/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./css/Main.module.css";
import React, { FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

type MyComponetProps = {
  children: React.ReactChild;
};

export default function RootLayout({ children }: MyComponetProps) {
  const queryClient = new QueryClient();
  return (
    <>
      <html>
        <head>
          <title> 타이틀 </title>
        </head>
        {/* devtools */}
        <body className={styles.body}>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={true} />
            <NavBar />
            <div className={styles.wrap}>{children}</div>
          </QueryClientProvider>
        </body>
      </html>
    </>
  );
}
