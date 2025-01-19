import { useThemeStyles } from "../../hooks/useThemeStyles";
import { CiLinkedin } from "react-icons/ci";
import { LiaGithub } from "react-icons/lia";

import utilStyles from "../../css/utils.module.css";
import lightStyles from "./lightStyles.module.css";
import darkStyles from "./darkStyles.module.css";

const About = () => {
  const styles = useThemeStyles(lightStyles, darkStyles);

  // NOTE:Text to object
  return (
    <section className={`${styles.section} ${utilStyles.noSelect}`}>
      <div className={styles.left}>
        <h1 className={styles.name}>Artur Abel</h1>
        <div className={styles.leftContainer}>
          <div className={styles.about}>
            Hello, I’m Artur Abel—a front-end developer driven by a passion for crafting engaging and visually stunning
            user experiences. With a keen eye for design and a love for interactive projects, I strive to build
            applications that bring ideas to life and make digital interactions seamless and enjoyable.
          </div>
          <div className={styles.icons}>
            <a href="">
              <LiaGithub className={styles.icon} />
            </a>
            <a href="">
              <CiLinkedin className={styles.icon} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.about}>
          PollPal is a fun and simple way to create, share, and participate in polls. It started as a reimagining of my
          earlier boot-camp project, the{" "}
          <span className={styles.span}>
            LHC Voting App, which was designed specifically for college candidate voting.
          </span>
          While that project focused on a single use case, PollPal expands on the idea by allowing users to create polls
          for any topic, big or small. Whether it’s deciding what movie to watch, picking a team name, or just sparking
          interesting conversations, PollPal makes group decisions interactive and enjoyable. With PollPal, I wanted to
          build something more flexible, inclusive, and fun—a tool where every choice becomes a chance to connect!
        </div>
      </div>
    </section>
  );
};

export default About;
