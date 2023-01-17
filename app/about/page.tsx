"use client";
import Link from "next/link";
import React, { MouseEvent, useState } from "react";
import styles from "./css/About.module.css";

const About = () => {
  // style 관련 오류 해결 : https://velog.io/@nemo/typescript-type-assertion
  function onMouseOverPopular(e: React.MouseEvent) {
    let targetTag = e.target as HTMLDivElement;
    targetTag.style.borderRadius = "5rem";
    targetTag.style.fontSize = "1.03rem";
    targetTag.textContent = "현재 인기 있는 영화의 목록을 출력합니다.";

    // const currentTag = document.querySelector(
    //   ".About_about_section_left_box__aj_Gj"
    // );
    // const new_pTag = document.createElement("p");
    // new_pTag.textContent = "hello";
    // new_pTag.style.color = "white";
    // new_pTag.setAttribute("className", "pTag");

    // setTimeout(() => {
    //   currentTag.appendChild(new_pTag);
    // }, 1000);

    // console.log(new_pTag);
  }

  const onMouseLeavePopular = (e: React.MouseEvent) => {
    let targetTag = e.target as HTMLDivElement;

    targetTag.style.borderRadius = "0rem";
    targetTag.textContent = "Popular";
    targetTag.style.fontSize = "1.2rem";
  };

  return (
    <div className={styles.about_mainpage}>
      {/* title */}
      <h2 className={styles.about_section_title}>ABOUT</h2>
      <p>현재 해당 사이트는 Next.js v13의 테스트를 위해 작성되었습니다.</p>

      {/* guide section */}
      <div className={styles.about_section_wrap}>
        <Link href="/">
          <div
            className={styles.about_section_left_box}
            onMouseOver={onMouseOverPopular}
            onMouseLeave={onMouseLeavePopular}
          >
            Popular
          </div>
        </Link>
        <Link href="/about">
          <div className={styles.about_section_right_box}>개발 예정</div>
        </Link>
      </div>
    </div>
  );
};

export default About;
