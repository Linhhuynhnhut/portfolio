import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Information</h3>
              <p>
              My name is Huynh Nhut Linh, or you can call me Linh Huynh. I'm 22 years old. I'm a frontend developer with three months of experience using ReactJS.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <p>
              My major is Computer Networks and Data Communication in UIT - HCMU with GPA 8.15/10.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Objective</h3>
              <p>
              In the present, I’m looking for a Front-end job where I can improve my skills. In the future, my goal is to become a fullstack developer.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
