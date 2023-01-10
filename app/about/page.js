"use client";
import { useState } from "react";
import styles from "./css/About.module.css";


const About = () => {

  const [tagName, setTagName] = useState("");
  const onMouseOverPopular = (e) => {
    e.target.style.borderRadius = "5rem";
    e.target.style.fontSize = "1rem";
    e.target.textContent = "현재 인기 있는 영화의 목록을 출력합니다.";
    
    // const currentTag = document.querySelector(".About_about_section_left_box__aj_Gj");
    // let new_pTag = document.createElement('p');
    
    // new_pTag.textContent = "hello";
    // new_pTag.style.color = "white";
    // new_pTag.setAttribute('className', 'pTag');

    // console.log(new_pTag);
    // currentTag.appendChild(new_pTag);
  }
  
  const onMouseLeavePopular = (e) => {
    e.target.style.borderRadius = "0rem";
    e.target.textContent = "Popular";
    e.target.style.fontSize = "1.5rem";
  }

  return (
    <div className={styles.about_mainpage}>
      {/* title */}
      <h2 className={styles.about_section_title}>ABOUT</h2>
      <p>현재 해당 사이트는 Next.js v13의 테스트를 위해 작성되었습니다.</p>
      
      {/* guide section */}
      <div className={styles.about_section_wrap}>
        <div className={styles.about_section_left_box} onMouseOver={onMouseOverPopular} onMouseLeave={onMouseLeavePopular}>
          Popular
        </div>
        <div className={styles.about_section_right_box}>
          개발 예정
        </div>
      </div>
    </div>
  );
};

export default About;
