import "./css/reset.css";
import NavBar from "../component/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./css/Main.module.css";
import React, { FC } from "react";

type MyComponetProps = {
  children: React.ReactChild;
};

export default function RootLayout({ children }: MyComponetProps) {
  return (
    <>
      <html>
        <head>
          <title> 타이틀 </title>
        </head>
        <body className={styles.body}>
          <NavBar />
          <div className={styles.wrap}>{children}</div>
        </body>
      </html>
    </>
  );
}
