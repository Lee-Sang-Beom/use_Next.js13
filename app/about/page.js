import styles from "./css/About.module.css";

const About = () => {
  return (
    <div className={styles.about_mainpage}>
      <h2 className={styles.about_section_title}>ABOUT</h2>
      <p>현재 해당 사이트는 Next.js v13의 테스트를 위해 작성되었습니다.</p>
      <div className={styles.about_section_wrap}>
        <div className={styles.about_section_left_box}>
          <div className={styles.about_section_guide_popular}>Popluar</div>
        </div>
        <div className={styles.about_section_right_box}>
          hello
        </div>
      </div>
    </div>
  );
};

export default About;
