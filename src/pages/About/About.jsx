import { motion, useAnimationControls } from "framer-motion";
import { useThemeStyles } from "../../hooks/useThemeStyles";
import { useTheme } from "../../context/ThemeContext";
import { POPUP_CONFIG, SPAN_CONFIG } from "./config";
import { CiLinkedin } from "react-icons/ci";
import { LiaGithub } from "react-icons/lia";
import content from "./content.json";

import lightStyles from "./lightStyles.module.css";
import darkStyles from "./darkStyles.module.css";

const About = () => {
  const styles = useThemeStyles(lightStyles, darkStyles);
  const animationControls = useAnimationControls();
  const { theme } = useTheme();

  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <div className={styles.about}>
          {content.aboutStart}
          <span className={styles.span}>{content.name}</span>
          {content.aboutEnd}
        </div>
        <div className={styles.icons}>
          <a href={content.github}>
            <LiaGithub className={styles.icon} />
          </a>
          <a href={content.linkedin}>
            <CiLinkedin className={styles.icon} />
          </a>
        </div>
      </div>
      <div className={styles.right}>
        <motion.div
          initial={POPUP_CONFIG.rest}
          animate={animationControls}
          className={styles.popup}
          variants={POPUP_CONFIG}
        >
          <img className={styles.image} src={content.src} alt={content.alt} />
        </motion.div>
        <div className={styles.about}>
          {content.pollPalStart}
          <motion.span
            variants={theme === "light" ? SPAN_CONFIG.LIGHT : SPAN_CONFIG.DARK}
            onHoverStart={() => animationControls.start("active")}
            onHoverEnd={() => animationControls.start("rest")}
            initial={SPAN_CONFIG.LIGHT.rest}
            className={styles.span}
            whileHover={"active"}
          >
            {content.marked}
          </motion.span>
          {content.pollPalEnd}
        </div>
      </div>
    </section>
  );
};

export default About;
